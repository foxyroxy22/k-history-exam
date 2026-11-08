// 표기: **굵게** = 강조, ★ = 노션 메모에서 '중요'로 표시한 항목, {{...}} = 메모에 없던 보충 설명, <<...>> = 기출 출현 표시
LECTURES.push({
  id: "07",
  title: "고대의 문화",
  subtitle: "교육·역사서·도교 · 불교 사상가 · 불상 · 탑 · 고분",
  audio: "audio/07.m4a",
  oneLine: "사진 문제가 제일 많아요. **불상 6개 · 탑 10개**는 사진만 보고 나라를 맞힐 수 있게.",
  exam: {
    range: "심화 57~80회 · 2022~2026년 · 24회분 (2~5강 판독 결과에서 문화 문항만 다시 셈, 다른 강의와 겹쳐 셈)",
    format: "**문화유산 사진 고르기**가 거의 매 회 1~2문제예요. 그다음이 **교육 기관·역사서**를 묻는 나라·왕 설명 문제, **원효·의상** 같은 인물 문제예요.",
    dist: [
      { era: "고분·벽화", n: 11 },
      { era: "탑·승탑", n: 10 },
      { era: "교육·역사서", n: 9 },
      { era: "불교 사상가", n: 6 },
      { era: "불상", n: 4 },
      { era: "도교", n: 4 }
    ],
    clues: [
      { era: "고구려", items: ["태학 · 경당 · 신집", "강서대묘 사신도 · 쌍영총 · 무용총", "연가 7년명 금동 여래 입상"] },
      { era: "백제", items: ["고흥 『서기』 · 오경박사", "금동대향로 · 산수무늬 벽돌 (능산리·외리)", "미륵사지·정림사지 석탑 · 서산 마애삼존불"] },
      { era: "신라 · 통일 신라", items: ["임신서기석 · 거칠부 『국사』", "국학 · 독서삼품과", "분황사 · 감은사지 · 불국사 · 진전사지 · 승탑"] },
      { era: "발해", items: ["주자감", "영광탑 · 이불병좌상", "정혜공주 묘(모줄임천장) · 정효공주 묘(벽돌)"] }
    ],
    answers: [
      { era: "교육·역사서", items: [["고구려: 태학·경당", 4], ["통일 신라: 국학 (신문왕)", 2], ["원성왕: 독서삼품과", 2], ["진흥왕: 거칠부 『국사』", 1]] },
      { era: "불교 사상가", items: [["의상: 화엄일승법계도 / 관음 신앙", 3], ["원효: 일심·화쟁 / 무애가", 2], ["원광: 세속 5계", 1]] },
      { era: "사진 문제", items: [["석가탑 (무구정광대다라니경)", 2], ["금동대향로", 2], ["천마총 · 무령왕릉 유물", 6], ["반가사유상 · 연가 7년명 불상 · 이불병좌상", 3]] },
      { era: "선종 흔적", items: [["쌍봉사 철감선사 승탑 · 진전사지 석탑", 2], ["보림사 · 가지산문 → 참선 강조", 2]] }
    ],
    traps: [
      ["혜초 『왕오천축국전』", "원효·의상 문제의 단골 오답", "매우 자주"],
      ["자장의 황룡사 9층 목탑 건의", "선덕여왕 때 자장. 원효·의상 문제 오답", "자주"],
      ["『해동고승전』 · 『화엄일승법계도』 ↔ 『대승기신론소』", "고려 각훈 / 의상 / 원효를 서로 바꿔서 냄", "자주"],
      ["미륵사지 석탑 ↔ 정림사지 5층 석탑", "둘 다 백제. 무왕 = 미륵사, 정림사지 = ‘평제탑’ 글씨", "자주"],
      ["태학 ↔ 국학 ↔ 주자감", "고구려 / 통일 신라 / 발해", "자주"]
    ],
    gaps: [
      "**고분**이 사진·자료로 11번 정도 나왔는데 메모에 없어서 보충 섹션을 만들었어요 (천마총, 무령왕릉, 쌍영총, 장군총, 정혜·정효공주 묘)",
      "**의상**이 원효보다 더 자주 나왔어요 (3회). 부석사·관음 신앙·『화엄일승법계도』 세트",
      "메모 수정: 이문‘집’ → **이문진** · 임신서기‘설’ → **임신서기석** · 분황ㅎ사 → **분황사**",
      "신라 도교: ‘낭가 사상’은 신채호가 붙인 이름이라 시험엔 잘 안 나와요. 시험 표현은 **화랑도(풍류도)에 유·불·도가 어우러짐 (최치원 『난랑비서』)**",
      "반가사유상(국보 78호)은 **삼국 시대** 불상이에요. 어느 나라 것인지는 학설이 갈려서 메모에 ‘???’로 적힌 게 맞아요"
    ],
    howto: [
      "1단계 · **나라별 교육·역사서 표** (아래) 한 줄씩",
      "2단계 · **불상 6 · 탑 10** 사진을 보고 나라를 말해보기",
      "3단계 · **원효 vs 의상** 구분: 원효 = 아미타·무애가·일심/화쟁 · 의상 = 화엄·관음·부석사",
      "4단계 · 고분은 나라별 **무덤 양식** 한 단어씩 (돌무지 / 벽돌 / 돌무지덧널 / 굴식 돌방)"
    ]
  },
  compare: {
    title: "나라별 교육 · 역사서 · 도교",
    cols: ["", "고구려", "백제", "신라", "통일 신라", "발해"],
    rows: [
      ["교육", "수도 **태학** (소수림왕) · 지방 **경당** (유학 + 무술) <<정답 4회>>", "**오경박사·역박사·의박사**", "★ **임신서기석** {{(두 청년이 유교 경전 공부를 맹세)}}", "★ **국학** (신문왕) <<정답 2회>> · ★ **독서삼품과** (원성왕) <<정답 2회>>", "**주자감** <<정답 7회>>"],
      ["역사서", "**이문진** 『신집』 5권 (영양왕)", "★ **고흥** 『서기』 (근초고왕, 4세기)", "**거칠부** 『국사』 (진흥왕, 6세기) <<정답 1회>>", "{{김대문 『화랑세기』 등}}", "—"],
      ["유학자·문장가", "—", "{{왕인·아직기 (일본에 전파)}}", "**원광** 세속 5계 (화랑도)", "**설총** 화왕계 · **강수** 청방인문표 · ★★ **최치원** 『계원필경』·토황소격문", "—"],
      ["도교", "**사신도** (강서대묘)", "**금동대향로** (부여 능산리) · **산수무늬 벽돌** {{· 사택지적비}}", "{{화랑도(풍류도)에 도교 영향 (최치원 『난랑비서』)}}", "{{12지신상, 묘지석}}", "{{정효공주 묘지 ‘불로장생’ 표현}}"]
    ]
  },
  eras: [
    {
      id: "buddhism", name: "불교", when: "4세기 ~ 9세기",
      lead: "삼국의 수용 → 통일 신라 전기의 대중화 → 후기의 선종",
      kings: [
        { name: "삼국의 수용", when: "4~6세기", items: ["**고구려**: 전진의 **순도** → **소수림왕** 수용 (372)", "**백제**: 동진의 **마라난타** → **침류왕** 수용 (384)", "**신라**: **이차돈 순교** → **법흥왕** 공인 (527)"] },
        { name: "원효", when: "통일 신라 전기", star: true, ex: "정답 2회", items: ["★ **아미타 신앙** (‘나무아미타불’만 외워도 극락) → **무애가**로 불교 **대중화**", "{{**일심·화쟁** 사상 · 『대승기신론소』·『금강삼매경론』 · 설총의 아버지}}"] },
        { name: "의상", when: "통일 신라 전기", star: true, ex: "정답 3회", items: ["★ **화엄 사상** · **관음 신앙**", "★ **부석사** 건립 {{· 『화엄일승법계도』 · 진골 출신, 당 유학}}"] },
        { name: "혜초", when: "통일 신라 전기", items: ["**『왕오천축국전』** → 인도와 중앙아시아 **기행문** {{(프랑스 국립도서관 소장)}}", "{{원효·의상 문제의 단골 오답}}"] },
        { name: "선종", when: "통일 신라 후기", items: ["**선종** 유행 → **호족**이 후원", "{{참선으로 스스로 깨달음 → **승탑·탑비** 유행, 9산 선문}} <<정답 2회>>"] }
      ],
      photos: [
        { name: "왕오천축국전", src: "images/07/11.jpg", credit: "Marie-Lan Taÿ Pamart · Public domain · 프랑스 국립도서관", page: "https://commons.wikimedia.org/wiki/File:Wang_ocheonchukguk_jeon_BnF_Pelliot_chinois_3532.jpg" },
        { name: "부석사 무량수전 (의상)", star: true, src: "images/07/12.jpg", credit: "Bernard Gagnon · CC0", page: "https://commons.wikimedia.org/wiki/File:Muryangsujeon_at_Buseoksa_01.jpg" },
        { name: "임신서기석 (신라)", star: true, src: "images/07/10.jpg", credit: "국립중앙박물관 · 공공누리 제1유형", page: "https://commons.wikimedia.org/wiki/File:%EC%9E%84%EC%8B%A0%EC%84%9C%EA%B8%B0%EC%84%9D_(cropped).jpg" },
        { name: "산수무늬 벽돌 (백제 도교)", src: "images/07/13.jpg", credit: "Gary Lee Todd · CC0", page: "https://commons.wikimedia.org/wiki/File:Baekje_Brick_with_Landscape_Pattern_(30116292511).jpg" },
        { name: "금동대향로 (백제 도교)", star: true, src: "images/04/11.jpg", credit: "국립중앙박물관 · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Burner_Baekje_cropped.jpg" }
      ]
    },
    {
      id: "statues", name: "불상", when: "사진만 보고 알아보기",
      lead: "나라 이름을 가리고 사진만 보고 맞혀보세요",
      photos: [
        { name: "금동 미륵보살 반가 사유상 (삼국)", star: true, src: "images/07/01.jpg", credit: "국립중앙박물관 · 공공누리 제1유형", page: "https://commons.wikimedia.org/wiki/File:Pensive_Bodhisattva_(National_Treasure_No._78)_01.jpg" },
        { name: "금동 연가 7년명 여래 입상 (고구려)", star: true, src: "images/07/02.jpg", credit: "국립중앙박물관 · 공공누리 제1유형", page: "https://commons.wikimedia.org/wiki/File:%E3%80%8C%EC%97%B0%EA%B0%80_%EC%B9%A0%EB%85%84%E3%80%8D%EC%9D%B4_%EC%83%88%EA%B2%A8%EC%A7%84_%EA%B8%88%EB%8F%99%EB%B6%88%EC%9E%85%EC%83%81_02.jpg" },
        { name: "서산 용현리 마애 여래 삼존상 (백제)", star: true, src: "images/07/03.jpg", credit: "Kwkhh · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:%EC%9A%A9%ED%98%84%EB%A6%AC_%EB%A7%88%EC%95%A0%EC%97%AC%EB%9E%98%EC%82%BC%EC%A1%B4%EC%83%81.jpg" },
        { name: "경주 배동 석조 여래 삼존 입상 (신라)", src: "images/07/04.jpg", credit: "Wolfetone · Public domain", page: "https://commons.wikimedia.org/wiki/File:Korea-Gyeongju-Namsan-Buddhist_statues-01.jpg" },
        { name: "석굴암 본존불 (통일 신라)", star: true, src: "images/05/07.jpg", credit: "한석홍 · 공공누리 제1유형", page: "https://commons.wikimedia.org/wiki/File:Front_view_of_Seokguram_from_front_chamber.jpg" },
        { name: "이불병좌상 (발해)", star: true, missing: true, note: "부처 두 분이 나란히 앉은 불상. 메모에 ‘사진 확인 필요’라고 적어두신 그것!" }
      ]
    },
    {
      id: "pagodas", name: "불탑", when: "사진만 보고 알아보기",
      lead: "백제 2 · 신라 2 · 통일 신라 전기 3 · 후기 2 · 발해 1",
      points: [
        "**백제** → ★ **익산 미륵사지 석탑** (무왕, **목탑 양식**) {{· 현존 가장 오래된 석탑}} <<1회>> · **부여 정림사지 5층 석탑** {{(당 장수가 새긴 ‘평제탑’ 글씨)}} <<1회>>",
        "**신라** → **경주 분황사 모전 석탑** {{(돌을 벽돌처럼 깎아 쌓음, 선덕여왕)}} <<1회>> · **황룡사 9층 목탑** {{(선덕여왕, 자장 건의 · 몽골 침입 때 불탐)}}",
        "**통일 신라 전기** → **감은사지 3층 석탑** {{(쌍탑)}} · ★ **불국사 3층 석탑(석가탑)** → **무구정광대다라니경** (현존 세계에서 가장 오래된 목판 인쇄물) <<정답 2회>> · **다보탑**",
        "**통일 신라 후기** → **양양 진전사지 3층 석탑** {{(기단에 부조)}} · **화순 쌍봉사 철감선사 승탑** → **선종** 유행의 증거 <<정답 2회>>",
        "**발해** → **영광탑** {{(벽돌탑)}} <<자료 3회>>"
      ],
      photos: [
        { name: "미륵사지 석탑 (백제)", star: true, src: "images/04/05.jpg", credit: "Public domain", page: "https://commons.wikimedia.org/wiki/File:%EC%9D%B5%EC%82%B0_%EB%AF%B8%EB%A5%B5%EC%82%AC%EC%A7%80_%EC%84%9D%ED%83%91.jpg" },
        { name: "정림사지 5층 석탑 (백제)", src: "images/04/12.jpg", credit: "Bernard Gagnon · CC0", page: "https://commons.wikimedia.org/wiki/File:Jeongnimsa_Temple_02.jpg" },
        { name: "분황사 모전석탑 (신라)", src: "images/04/10.jpg", credit: "Minquddyd · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:%EA%B2%BD%EC%A3%BC_%EB%B6%84%ED%99%A9%EC%82%AC_%EB%AA%A8%EC%A0%84%EC%84%9D%ED%83%91.jpg" },
        { name: "감은사지 3층 석탑 (통일 신라)", src: "images/05/04.jpg", credit: "Ronnie Dayo · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:%EA%B0%90%EC%9D%80%EC%82%AC%EC%A7%80_blue_sky.jpg" },
        { name: "불국사 3층 석탑 (석가탑)", star: true, src: "images/07/05.jpg", credit: "Bernard Gagnon · CC0", page: "https://commons.wikimedia.org/wiki/File:Seokgatap_Pagoda.jpg" },
        { name: "다보탑 (통일 신라)", src: "images/07/06.jpg", credit: "Bernard Gagnon · CC0", page: "https://commons.wikimedia.org/wiki/File:Dabotap_Pagoda_01.jpg" },
        { name: "진전사지 3층 석탑 (기단 부조)", src: "images/07/07.jpg", credit: "Eggmoon · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:%EC%96%91%EC%96%91_%EC%A7%84%EC%A0%84%EC%82%AC%EC%A7%80_%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91_02.JPG" },
        { name: "쌍봉사 철감선사 승탑 (선종)", star: true, src: "images/05/05.jpg", credit: "Public domain", page: "https://commons.wikimedia.org/wiki/File:%EC%8C%8D%EB%B4%89%EC%82%AC_%EC%B2%A0%EA%B0%90%EC%84%A0%EC%82%AC%ED%83%91.jpg" },
        { name: "영광탑 (발해)", star: true, src: "images/07/08.jpg", credit: "用心阁 · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Lingguangsita.JPG" }
      ]
    },
    {
      id: "tombs", name: "고분 (보충)", when: "메모엔 없지만 11번쯤 나왔어요",
      lead: "{{나라별 무덤 양식 한 단어씩 + 대표 무덤 하나씩}}",
      points: [
        "{{**고구려** → 초기 **돌무지무덤** (장군총) → 후기 **굴식 돌방무덤** + **벽화** (무용총·쌍영총·안악 3호분, 강서대묘 **사신도**) · 천장은 **모줄임천장**}}",
        "{{**백제** → 한성기 **계단식 돌무지무덤** (서울 석촌동 → 고구려와 같은 계통) → 웅진기 **벽돌무덤** (무령왕릉, 중국 남조식) → 사비기 굴식 돌방 (능산리 → 사신도)}}",
        "{{**신라** → **돌무지덧널무덤** (천마총, 황남대총) → 도굴이 어려워 **금관·천마도** 같은 유물이 많이 남음}} <<사진 3회>>",
        "{{**통일 신라** → 굴식 돌방무덤 + 둘레돌에 **12지신상** (김유신 묘) · 문무왕은 **수중릉**}}",
        "{{**발해** → **정혜공주 묘** (굴식 돌방 + 모줄임천장 → 고구려 계승) · **정효공주 묘** (벽돌무덤 → 당 영향)}}"
      ],
      photos: [
        { name: "강서대묘 천장 (고구려, 재현)", src: "images/07/09.jpg", credit: "Gary Lee Todd · CC0 · 국립중앙박물관", page: "https://commons.wikimedia.org/wiki/File:Goguryeo_Kingdom_Gangseo_Great_Tomb_(17988025922).jpg" },
        { name: "무령왕릉 (백제 벽돌무덤)", star: true, src: "images/04/04.jpg", credit: "Bernard Gagnon · CC0", page: "https://commons.wikimedia.org/wiki/File:King_Muryeong_Tomb_01.jpg" },
        { name: "천마총 천마도 (신라)", star: true, src: "images/04/13.jpg", credit: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Korea-Silla-Cheonmado-01.jpg" },
        { name: "정효공주 묘 벽화 (발해)", src: "images/05/08.jpg", credit: "Public domain", page: "https://commons.wikimedia.org/wiki/File:%EB%B0%9C%ED%95%B4%EC%9D%B8(%EC%A0%95%ED%9A%A8%EA%B3%B5%EC%A3%BC%EB%AC%98).jpg" }
      ]
    }
  ],
  quiz: [
    { q: "‘수도에는 태학, 지방에는 경당을 두었다.’ 이 나라의 역사서는?",
      opts: ["고흥의 『서기』", "이문진의 『신집』", "거칠부의 『국사』", "김대문의 『화랑세기』", "『삼국사기』"],
      a: 2, why: "태학·경당 = 고구려 → 영양왕 때 이문진 『신집』 5권" },
    { q: "‘부석사를 세우고 화엄 사상과 관음 신앙을 퍼뜨렸다.’ 이 인물의 저술은?",
      opts: ["『왕오천축국전』", "『대승기신론소』", "『화엄일승법계도』", "『해동고승전』", "『계원필경』"],
      a: 3, why: "의상 (정답 3회). ①혜초 ②원효 ④고려 각훈 ⑤최치원" },
    { q: "‘무애가를 지어 부르며 아미타 신앙을 퍼뜨렸다.’ 이 인물은?",
      a: "원효", why: "일심·화쟁 사상, 아들은 설총" },
    { q: "현존 세계에서 가장 오래된 목판 인쇄물이 발견된 탑은?",
      a: "불국사 3층 석탑 (석가탑) · 무구정광대다라니경", why: "사진 문제로 2회" },
    { q: "목탑 양식을 따른 백제 석탑은? 세운 왕은?",
      a: "익산 미륵사지 석탑 · 무왕", why: "정림사지 5층 석탑과 헷갈리지 않기" },
    { q: "신라 말 선종 유행을 보여 주는 문화유산은?",
      a: "승탑 (쌍봉사 철감선사 승탑) · 진전사지 3층 석탑", why: "호족 후원 + 참선 → 승탑·탑비" },
    { q: "부여 능산리에서 나온, 도교와 불교 사상이 함께 담긴 백제 유물은?",
      a: "백제 금동대향로", why: "산수무늬 벽돌도 백제 도교" },
    { q: "교육 기관 짝 맞추기: 태학 · 국학 · 주자감",
      a: "고구려 · 통일 신라(신문왕) · 발해", why: "독서삼품과는 원성왕" },
    { q: "‘두 청년이 3년 동안 유교 경전을 공부하겠다고 맹세하며 새긴 돌’은?",
      a: "임신서기석 (신라)", why: "메모의 ‘임신서기설’ → 서기석" }
  ]
});
