#!/usr/bin/env python3
# 사용법: python3 tools/bundle.py 01
# → dist/한능검-01강.html : 음성·사진·데이터를 전부 넣은 파일 하나 (폰으로 보내서 바로 열기)
import base64, mimetypes, os, re, sys

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
lid = sys.argv[1]
read = lambda p: open(os.path.join(root, p), encoding="utf-8").read()

def data_uri(rel):
    mime = "audio/mp4" if rel.endswith(".m4a") else mimetypes.guess_type(rel)[0]
    with open(os.path.join(root, rel), "rb") as f:
        return f"data:{mime};base64," + base64.b64encode(f.read()).decode()

data = read(f"data/{lid}.js")
data = re.sub(r'(src|audio): "((?:images|audio)/[^"]+)"', lambda m: f'{m[1]}: "{data_uri(m[2])}"', data)

html = read("index.html")
# 외부 파일을 불러오는 부분을 내용 자체로 교체
html = html.replace('<script src="data/list.js"></script>', f'<script>const LIST = [];\n{data}\n</script>')
html = re.sub(r"\(function load\(i\) \{.*?\}\)\(0\);", "", html, flags=re.S)
html = html.replace("</script>\n</body>", "render();\n</script>\n</body>")

os.makedirs(os.path.join(root, "dist"), exist_ok=True)
out = os.path.join(root, "dist", f"한능검-{lid}강.html")
open(out, "w", encoding="utf-8").write(html)
print(out, f"{os.path.getsize(out) / 1e6:.1f}MB")
