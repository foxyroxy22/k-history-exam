#!/bin/zsh
# 사용법: tools/tts.sh 01 [02 ...]  → scripts/XX.txt 를 audio/XX.m4a 로 변환 (현수 목소리, 1.5배속)
cd "${0:A:h}/.."
.cache/venv/bin/python tools/tts.py "$@"
