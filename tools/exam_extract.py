#!/usr/bin/env python3
# 사용법: .cache/venv/bin/python tools/exam_extract.py 1 2
# → .cache/exams/ 의 심화 기출에서 지정한 문항 번호 주변 텍스트와 정답만 뽑아 출력 (분석용, 토큰 절약)
import re, sys, os
from pypdf import PdfReader

d = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), ".cache", "exams")
nums = [int(x) for x in sys.argv[1:]] or [1]
last = max(nums)

def clean(t):
    return re.sub(r"[ \t]+", " ", t).strip()

for n in range(57, 81):
    q = os.path.join(d, f"{n}.pdf")
    if not os.path.exists(q):
        continue
    text = clean(PdfReader(q).pages[0].extract_text())
    # 다음 문항 번호(last+1.) 이후는 잘라냄. 단, 자료가 뒤에 붙는 경우가 있어 그다음 번호까지 허용
    cut = re.search(rf"(?m)^{last + 2}\. ", text)
    body = text[: cut.start()] if cut else text[:2500]
    body = re.sub(r"(?m)^(\d+ \d+|\d{4}년도|제\d+회.*|\d)$\n?", "", body)
    ans = ""
    a = os.path.join(d, f"{n}_ans.pdf")
    if os.path.exists(a):
        at = clean(PdfReader(a).pages[0].extract_text())
        ans = " ".join(f"{k}번={m.group(1)}" for k in nums
                       for m in [re.search(rf"(?m)^\s*{k}\s+([①②③④⑤1-5])", at)] if m)
    print(f"===== {n}회 | 정답: {ans or '?'}\n{body}\n")
