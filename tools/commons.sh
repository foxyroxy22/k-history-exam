#!/bin/zsh
# 사용법: commons.sh "검색어" [개수]  → 위키미디어 공용 이미지 후보 (제목 | 600px 썸네일 | 라이선스 | 작성자)
q="$1"; n="${2:-3}"
curl -sG 'https://commons.wikimedia.org/w/api.php' \
  --data-urlencode "action=query" --data-urlencode "format=json" \
  --data-urlencode "generator=search" --data-urlencode "gsrnamespace=6" \
  --data-urlencode "gsrsearch=$q" --data-urlencode "gsrlimit=$n" \
  --data-urlencode "prop=imageinfo" --data-urlencode "iiprop=url|extmetadata" \
  --data-urlencode "iiurlwidth=600" -A 'hanneung-review/0.1' |
python3 -c '
import json,sys,re
d=json.load(sys.stdin).get("query",{}).get("pages",{})
for p in d.values():
  ii=p["imageinfo"][0]; m=ii.get("extmetadata",{})
  a=re.sub("<[^>]+>","",m.get("Artist",{}).get("value",""))[:40]
  print(p["title"][5:], "|", (ii.get("thumburl") or "").split("?")[0], "|", m.get("LicenseShortName",{}).get("value",""), "|", a)
'
