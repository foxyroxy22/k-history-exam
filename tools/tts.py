#!/usr/bin/env python3
# 사용법: .cache/venv/bin/python tools/tts.py 01 [02 ...]
# → scripts/XX.txt 를 audio/XX.m4a 로 변환 (Microsoft Edge 신경망 음성 '현수', 1.5배속)
# 원고의 [[slnc 1500]] 표시는 그 길이(ms)만큼 쉬는 구간이 돼요.
import asyncio, os, re, subprocess, sys, tempfile, wave

import edge_tts

VOICE = "ko-KR-HyunsuMultilingualNeural"
RATE = "+50%"          # 1.5배속
SR = 24000             # edge-tts 출력 샘플레이트
GAP_MS = 350           # 문단 사이 기본 쉼

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def parts(text):
    """원고를 (말할 문장 | 쉬는 시간) 조각으로 나눔"""
    for piece in re.split(r"(\[\[slnc \d+\]\])", text):
        m = re.fullmatch(r"\[\[slnc (\d+)\]\]", piece)
        if m:
            yield ("pause", int(m.group(1)))
            continue
        for para in re.split(r"\n\s*\n", piece):
            para = " ".join(para.split())
            if para:
                yield ("say", para)


async def speak(text, mp3_path, sem):
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, VOICE, rate=RATE).save(mp3_path)
                return
            except Exception:
                await asyncio.sleep(2 * (attempt + 1))
        raise RuntimeError(f"음성 생성 실패: {text[:30]}")


def mp3_to_pcm(mp3_path, tmp):
    wav = mp3_path + ".wav"
    subprocess.run(["afconvert", mp3_path, wav, "-f", "WAVE", "-d", f"LEI16@{SR}", "-c", "1"], check=True)
    with wave.open(wav) as w:
        return w.readframes(w.getnframes())


async def build(lid):
    text = open(os.path.join(root, "scripts", f"{lid}.txt"), encoding="utf-8").read()
    items = list(parts(text))
    with tempfile.TemporaryDirectory() as tmp:
        sem = asyncio.Semaphore(4)
        jobs = [speak(v, os.path.join(tmp, f"{i}.mp3"), sem) for i, (k, v) in enumerate(items) if k == "say"]
        await asyncio.gather(*jobs)
        silence = lambda ms: b"\x00\x00" * int(SR * ms / 1000)
        pcm = bytearray()
        for i, (k, v) in enumerate(items):
            if k == "pause":
                pcm += silence(v)
            else:
                pcm += mp3_to_pcm(os.path.join(tmp, f"{i}.mp3"), tmp) + silence(GAP_MS)
        wav = os.path.join(tmp, "all.wav")
        with wave.open(wav, "wb") as w:
            w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(bytes(pcm))
        os.makedirs(os.path.join(root, "audio"), exist_ok=True)
        out = os.path.join(root, "audio", f"{lid}.m4a")
        subprocess.run(["afconvert", wav, out, "-d", "aac", "-f", "m4af", "-b", "64000"], check=True)
    print(f"{out}  {len(pcm) / 2 / SR / 60:.1f}분")


for lid in sys.argv[1:]:
    asyncio.run(build(lid))
