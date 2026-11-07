#!/bin/zsh
# 사용법: tools/tts.sh 01  → scripts/01.txt 를 audio/01.m4a 로 변환 (맥 기본 음성 Yuna, 1.5배속 = -r 263)
set -e
cd "${0:A:h}/.."
mkdir -p audio
say -v Yuna -r 263 -f "scripts/$1.txt" -o "audio/$1.aiff"
afconvert "audio/$1.aiff" "audio/$1.m4a" -d aac -f m4af
rm "audio/$1.aiff"
afinfo "audio/$1.m4a" | grep duration
