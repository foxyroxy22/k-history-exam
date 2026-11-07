// 표기: **굵게** = 강조, ★ = 노션 메모에서 '중요'로 표시한 항목, {{...}} = 메모에 없던 보충 설명
LECTURES.push({
  id: "01",
  title: "선사 시대",
  subtitle: "구석기 · 신석기 · 청동기 · 철기",
  audio: "audio/01.m4a",
  oneLine: "신석기까지 **평등**, 청동기부터 **계급**. 고인돌이 그 증거.",
  timeline: [
    { era: "구석기", when: "약 70만 년 전", key: "뗀석기 · 이동 생활" },
    { era: "신석기", when: "기원전 8000년경", key: "간석기 · 농경 · 정착" },
    { era: "청동기", when: "기원전 2000~1500년경", key: "벼농사 · 계급 · 고인돌" },
    { era: "철기", when: "기원전 5세기경", key: "철제 농기구 · 중국 교류" }
  ],
  compare: {
    cols: ["", "구석기", "신석기", "청동기", "철기"],
    rows: [
      ["도구", "뗀석기 (주먹도끼 → 슴베찌르개)", "{{간석기}}, 가락바퀴, 뼈바늘", "반달 돌칼, 비파형 동검, 거친무늬 거울", "철제 농기구, 세형 동검, 잔무늬 거울, 거푸집"],
      ["토기", "—", "이른 민무늬, 빗살무늬", "**민무늬 토기**, 미송리식 (양쪽 손잡이), {{붉은 간 토기}}", "{{검은 간 토기, 덧띠 토기}}"],
      ["주거", "동굴, 막집", "움집 (강가·해안가)", "{{움집 지상화, 배산임수}}", "—"],
      ["경제", "사냥·채집", "밭농사 시작", "벼농사 시작", "철제 농기구로 농업 발달"],
      ["사회", "평등", "평등", "**계급**", "**계급**"],
      ["무덤", "(두루봉 흥수아이)", "—", "고인돌, {{돌널무덤}}", "{{널무덤}}, 덧널무덤, 독무덤"]
    ]
  },
  pairs: [
    { label: "칼", from: "비파형 동검", to: "세형 동검" },
    { label: "거울", from: "거친무늬 거울", to: "잔무늬 거울" },
    { label: "석기", from: "주먹도끼 (전기)", to: "슴베찌르개 (후기)" }
  ],
  eras: [
    {
      id: "paleo", name: "구석기", when: "약 70만 년 전~",
      lead: "사냥하며 이동, 돌을 깨뜨린 뗀석기",
      points: [
        "사냥·채집하며 **이동 생활** → 동굴, 막집에서 거주",
        "★ **연천 전곡리**: 아슐리안형 주먹도끼 출토 {{→ '동아시아엔 주먹도끼가 없다'는 모비우스 학설을 뒤집음}}",
        "청원 두루봉 동굴: **흥수아이** → 장례 문화 {{(꽃을 뿌린 흔적). 메모의 '홍수아이'는 '흥수아이'가 맞아요}}",
        "★ 뗀석기 사용. 전기 **주먹도끼** / 후기 **슴베찌르개** → 차이점 알기 {{(전기엔 찍개, 중기엔 긁개·밀개도 있어요)}}",
        "{{슴베찌르개는 자루에 꽂아 창처럼 쓰는 찌르개 (메모엔 '작살'이라 적혀 있는데, 시험에선 '창'으로 나와요)}}",
        "**평등 사회**",
        "불 사용 → 난방, 음식 조리"
      ],
      photos: [
        { name: "주먹도끼 (연천 전곡리)", star: true, src: "images/01/01.jpg", credit: "Ismoon · CC BY-SA 4.0 · 국립중앙박물관", page: "https://commons.wikimedia.org/wiki/File:Handaxe._Jeongok_ri._Gyeonggi_do._National_Museum_of_Korea.jpg" },
        { name: "슴베찌르개", star: true, missing: true, note: "공개 사진을 못 찾았어요. 자루에 꽂는 뾰족한 꼬리(슴베)가 핵심이에요." }
      ]
    },
    {
      id: "neo", name: "신석기", when: "기원전 8000년경~",
      lead: "농사를 짓고 한곳에 정착",
      points: [
        "**밭농사** 시작 → ‘신석기 혁명’ {{(조, 피, 수수)}}",
        "★ **가락바퀴**(실 뽑기), **뼈바늘**(옷·그물 깁기) → 사진 확인 필수",
        "정착 생활 → **움집** {{(땅을 파고 지은 반지하 집, 가운데 화덕)}}",
        "서울 암사동 / 부산 동삼동 / 제주 고산리 → **강가·해안가** 거주 {{(동삼동: 조개껍데기 가면)}}",
        "**이른 민무늬 토기**, **빗살무늬 토기** {{(밑이 뾰족해 모래에 꽂아 사용)}}",
        "평등 사회 + 원시 신앙: 애니미즘{{(자연에 영혼)}}, 토테미즘{{(동물 숭배)}}, 샤머니즘{{(무당)}}"
      ],
      photos: [
        { name: "빗살무늬 토기", src: "images/01/02.jpg", credit: "국립중앙박물관 · 공공누리 제1유형", page: "https://commons.wikimedia.org/wiki/File:%EB%B9%97%EC%82%B4%EB%AC%B4%EB%8A%AC%ED%86%A0%EA%B8%B0.jpg" },
        { name: "가락바퀴", star: true, src: "images/01/03.jpg", credit: "CC BY 4.0 · 관양동 출토 청동기 것 복제품 (신석기와 모양 같음)", page: "https://commons.wikimedia.org/wiki/File:Spindle_Whorl.jpg" },
        { name: "덧무늬 토기", src: "images/01/04.jpg", credit: "국립중앙박물관 · 공공누리 제1유형 · {{이른 민무늬 토기와 함께 신석기 초기 토기}}", page: "https://commons.wikimedia.org/wiki/File:%EB%8D%A7%EB%AC%B4%EB%8A%AC%ED%86%A0%EA%B8%B0.jpg" },
        { name: "뼈바늘", star: true, missing: true, note: "공개 사진을 못 찾았어요." }
      ]
    },
    {
      id: "bronze", name: "청동기", when: "기원전 2000~1500년경~",
      lead: "남는 곡식이 생기고, 계급이 생김",
      points: [
        "**벼농사** 시작 → 생산력 ↑ → 잉여 생산물 → **사유 재산**",
        "**반달 돌칼** → 추수 도구. ⚠️ 돌로 만들었어도 **청동기** 시대!",
        "{{대표 토기는 **민무늬 토기** (메모에 없지만 꼭 나와요)}}",
        "★ **미송리식 토기** → **양쪽 손잡이**가 포인트",
        "★★ **고인돌** {{→ 많은 사람을 동원할 수 있는 지배자 = 계급의 증거. 고창·화순·강화 고인돌은 유네스코 세계유산}}",
        "**비파형 동검**, **거친무늬 거울**",
        "{{비파형 동검 + 미송리식 토기 + 탁자식 고인돌 → 고조선의 문화 범위를 보여주는 유물}}",
        "**계급 사회** {{(군장 등장)}}"
      ],
      photos: [
        { name: "고인돌 (강화)", star: true, src: "images/01/05.jpg", credit: "CC BY-SA 3.0 · Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Dolmen_Ganghwa_Island.JPG" },
        { name: "반달 돌칼 (부여 송국리)", src: "images/01/06.jpg", credit: "국립중앙박물관 · 공공누리 제1유형", page: "https://commons.wikimedia.org/wiki/File:%EB%B6%80%EC%97%AC_%EC%86%A1%EA%B5%AD%EB%A6%AC_%EC%9C%A0%EC%A0%81_%EC%B6%9C%ED%86%A0_%EB%B0%98%EB%8B%AC%EB%8F%8C%EC%B9%BC.jpg" },
        { name: "비파형 동검", src: "images/01/07.jpg", credit: "Gary Lee Todd · CC BY-SA 4.0 · 국립중앙박물관", page: "https://commons.wikimedia.org/wiki/File:Liaoning-type_bronze_dagger.National_Museum_of_Korea.jpg" },
        { name: "거친무늬 거울", src: "images/01/08.jpg", credit: "국립중앙박물관 · 공공누리 제1유형", page: "https://commons.wikimedia.org/wiki/File:%EA%B1%B0%EC%B9%9C%EB%AC%B4%EB%8A%AC%EA%B1%B0%EC%9A%B8.jpg" },
        { name: "미송리식 토기", star: true, missing: true, note: "공개 사진을 못 찾았어요. 몸통 양쪽의 손잡이 한 쌍을 확인하세요." }
      ]
    },
    {
      id: "iron", name: "철기", when: "기원전 5세기경~",
      lead: "철제 농기구, 그리고 중국과의 교류",
      points: [
        "벼농사 + **철제 농기구** {{→ 철제 무기로 정복 활동도 활발. 청동기는 의식용으로}}",
        "**덧널무덤**(나무로 만듦), **독무덤**{{(항아리 두 개를 이어 붙임)}}",
        "{{시험에는 ‘**널무덤** · 독무덤’ 짝으로 더 자주 나와요. 널무덤 = 나무 관을 바로 묻음, 덧널무덤 = 나무 관 바깥에 나무 덧방(덧널)을 짠 것}}",
        "★ **세형 동검** (사진 확인), **잔무늬 거울**, **거푸집** {{→ 거푸집 = 우리 땅에서 청동기를 직접 만든 증거}}",
        "**명도전**, **반량전**, **오수전**, **붓** {{(창원 다호리 → 한자 사용)}} → 중국과의 교류 짐작 {{(명도전 = 연, 반량전 = 진, 오수전 = 한)}}"
      ],
      photos: [
        { name: "세형 동검", star: true, src: "images/01/09.jpg", credit: "AsPJT · CC0 · 복제품", page: "https://commons.wikimedia.org/wiki/File:Replica_slender_bronze_dagger_in_Korea.jpg" },
        { name: "잔무늬 거울 (국보)", src: "images/01/10.jpg", credit: "문화재청 · 공공누리 제1유형", page: "https://commons.wikimedia.org/wiki/File:%EC%A0%95%EB%AC%B8%EA%B2%BD.jpg" },
        { name: "명도전 (연나라 화폐)", src: "images/01/11.jpg", credit: "Gary Lee Todd · CC0", page: "https://commons.wikimedia.org/wiki/File:011_Ming_Dao_Knife_Coin,_Yan_State,_Warring_States.jpg" },
        { name: "거푸집", missing: true, note: "공개 사진을 못 찾았어요. 청동기를 부어 만드는 돌 틀이에요." }
      ]
    }
  ],
  quiz: [
    { q: "아슐리안형 주먹도끼가 나온 구석기 유적은?", a: "연천 전곡리" },
    { q: "돌로 만들었지만 청동기 시대 추수 도구인 것은?", a: "반달 돌칼" },
    { q: "양쪽에 손잡이가 달린 청동기 시대 토기는?", a: "미송리식 토기" },
    { q: "실을 뽑는 데 쓴 신석기 시대 도구는?", a: "가락바퀴" },
    { q: "우리 땅에서 청동기를 직접 만들었다는 증거가 되는 철기 시대 유물은?", a: "거푸집" },
    { q: "구석기 후기에 자루에 꽂아 창처럼 쓴 도구는?", a: "슴베찌르개" }
  ]
});
