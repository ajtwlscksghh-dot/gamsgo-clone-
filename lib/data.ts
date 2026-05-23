export type Plan = {
  name: string;
  price: number;
  originalPrice: number;
  duration: string;
  features: string[];
  popular?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  icon: string;
  bgColor: string;
  textColor: string;
  rating: number;
  reviews: number;
  sold: number;
  plans: Plan[];
  features: string[];
  howToUse: string[];
  tags: string[];
};

export const products: Product[] = [
  {
    slug: "netflix",
    name: "Netflix",
    category: "스트리밍",
    description: "세계 최대 스트리밍 플랫폼, 4K 프리미엄 공유 계정",
    longDescription: "Netflix 프리미엄 4K 공유 계정으로 영화, 드라마, 다큐멘터리를 무제한 즐기세요. 개인 프로필 제공으로 시청 기록이 분리됩니다.",
    icon: "N",
    bgColor: "bg-red-600",
    textColor: "text-red-500",
    rating: 4.9,
    reviews: 12453,
    sold: 58320,
    plans: [
      { name: "1개월", price: 4900, originalPrice: 17000, duration: "30일", features: ["프리미엄 4K", "개인 프로필", "다운로드 지원"], popular: false },
      { name: "3개월", price: 13500, originalPrice: 51000, duration: "90일", features: ["프리미엄 4K", "개인 프로필", "다운로드 지원", "3개월 연속 이용"], popular: true },
      { name: "6개월", price: 25000, originalPrice: 102000, duration: "180일", features: ["프리미엄 4K", "개인 프로필", "다운로드 지원", "6개월 연속 이용", "추가 5% 할인"], popular: false },
    ],
    features: ["4K 초고화질", "HDR 지원", "개인 프로필", "다운로드 기능", "모든 기기 지원"],
    howToUse: ["결제 완료 후 계정 정보 즉시 발송", "제공된 이메일/비밀번호로 로그인", "개인 프로필 생성 후 이용", "비밀번호 변경 금지"],
    tags: ["영화", "드라마", "4K", "스트리밍"],
  },
  {
    slug: "chatgpt-plus",
    name: "ChatGPT Plus",
    category: "AI 도구",
    description: "GPT-4o 무제한 사용, AI 이미지 생성 포함",
    longDescription: "ChatGPT Plus로 GPT-4o를 무제한으로 사용하세요. DALL-E 이미지 생성, 코드 실행, 파일 분석 등 모든 고급 기능을 이용할 수 있습니다.",
    icon: "AI",
    bgColor: "bg-emerald-600",
    textColor: "text-emerald-500",
    rating: 4.8,
    reviews: 8932,
    sold: 41200,
    plans: [
      { name: "1개월", price: 9900, originalPrice: 27000, duration: "30일", features: ["GPT-4o 무제한", "DALL-E 3", "파일 분석", "코드 실행"], popular: false },
      { name: "3개월", price: 27000, originalPrice: 81000, duration: "90일", features: ["GPT-4o 무제한", "DALL-E 3", "파일 분석", "코드 실행", "3개월 연속"], popular: true },
      { name: "6개월", price: 50000, originalPrice: 162000, duration: "180일", features: ["GPT-4o 무제한", "DALL-E 3", "파일 분석", "코드 실행", "6개월 연속", "우선 지원"], popular: false },
    ],
    features: ["GPT-4o 무제한", "이미지 생성", "웹 검색", "파일 분석", "코드 인터프리터", "플러그인 지원"],
    howToUse: ["결제 후 초대 링크 발송", "링크로 그룹 구독 참여", "자신의 계정으로 로그인 후 사용", "개인 대화 내역 유지"],
    tags: ["AI", "GPT-4", "이미지생성", "생산성"],
  },
  {
    slug: "youtube-premium",
    name: "YouTube Premium",
    category: "스트리밍",
    description: "광고 없는 유튜브, 백그라운드 재생, YouTube Music 포함",
    longDescription: "YouTube Premium으로 광고 없이 영상을 즐기고, 백그라운드 재생, 오프라인 다운로드, YouTube Music까지 무제한으로 이용하세요.",
    icon: "YT",
    bgColor: "bg-red-500",
    textColor: "text-red-400",
    rating: 4.7,
    reviews: 6721,
    sold: 32100,
    plans: [
      { name: "1개월", price: 2900, originalPrice: 14900, duration: "30일", features: ["광고 제거", "백그라운드 재생", "오프라인 저장", "YouTube Music"], popular: false },
      { name: "3개월", price: 7900, originalPrice: 44700, duration: "90일", features: ["광고 제거", "백그라운드 재생", "오프라인 저장", "YouTube Music"], popular: true },
      { name: "12개월", price: 28000, originalPrice: 178800, duration: "365일", features: ["광고 제거", "백그라운드 재생", "오프라인 저장", "YouTube Music", "최대 할인"], popular: false },
    ],
    features: ["광고 완전 제거", "백그라운드 재생", "오프라인 다운로드", "YouTube Music 포함", "YouTube Originals"],
    howToUse: ["결제 후 가족 그룹 초대 링크 발송", "구글 계정으로 참여", "즉시 프리미엄 혜택 적용", "기존 계정 그대로 사용"],
    tags: ["유튜브", "광고제거", "음악", "스트리밍"],
  },
  {
    slug: "spotify",
    name: "Spotify Premium",
    category: "음악",
    description: "광고 없는 음악 스트리밍, 오프라인 재생 지원",
    longDescription: "Spotify Premium으로 8000만 곡을 광고 없이 즐기세요. 오프라인 다운로드, 최고 음질, 무제한 스킵 기능을 이용할 수 있습니다.",
    icon: "S",
    bgColor: "bg-green-500",
    textColor: "text-green-400",
    rating: 4.8,
    reviews: 9841,
    sold: 45600,
    plans: [
      { name: "1개월", price: 2500, originalPrice: 11000, duration: "30일", features: ["광고 제거", "오프라인 재생", "최고 음질", "무제한 스킵"], popular: false },
      { name: "3개월", price: 6900, originalPrice: 33000, duration: "90일", features: ["광고 제거", "오프라인 재생", "최고 음질", "무제한 스킵"], popular: true },
      { name: "12개월", price: 24000, originalPrice: 132000, duration: "365일", features: ["광고 제거", "오프라인 재생", "최고 음질", "무제한 스킵", "최대 절약"], popular: false },
    ],
    features: ["8000만+ 곡", "광고 없음", "오프라인 재생", "최고 음질 320kbps", "무제한 스킵", "팟캐스트"],
    howToUse: ["결제 후 패밀리 초대 발송", "기존 계정으로 참여", "즉시 프리미엄 전환", "무제한 이용"],
    tags: ["음악", "팟캐스트", "스트리밍", "오프라인"],
  },
  {
    slug: "disney-plus",
    name: "Disney+",
    category: "스트리밍",
    description: "디즈니, 마블, 스타워즈, 내셔널지오그래픽 모두 한곳에",
    longDescription: "Disney+로 디즈니 클래식부터 마블 시네마틱 유니버스, 스타워즈, 픽사 애니메이션까지 모든 콘텐츠를 즐기세요.",
    icon: "D+",
    bgColor: "bg-blue-700",
    textColor: "text-blue-400",
    rating: 4.6,
    reviews: 5234,
    sold: 23400,
    plans: [
      { name: "1개월", price: 3900, originalPrice: 13900, duration: "30일", features: ["4K UHD", "개인 프로필", "마블/디즈니/픽사", "다운로드"], popular: false },
      { name: "3개월", price: 10500, originalPrice: 41700, duration: "90일", features: ["4K UHD", "개인 프로필", "마블/디즈니/픽사", "다운로드"], popular: true },
      { name: "6개월", price: 19000, originalPrice: 83400, duration: "180일", features: ["4K UHD", "개인 프로필", "마블/디즈니/픽사", "다운로드", "추가 할인"], popular: false },
    ],
    features: ["4K UHD + HDR", "마블 유니버스", "스타워즈", "디즈니 클래식", "픽사 애니메이션", "내셔널지오그래픽"],
    howToUse: ["결제 후 초대 링크 발송", "이메일로 가입 후 참여", "개인 프로필 설정", "모든 기기에서 이용"],
    tags: ["마블", "디즈니", "애니메이션", "4K"],
  },
  {
    slug: "adobe-cc",
    name: "Adobe Creative Cloud",
    category: "크리에이티브",
    description: "Photoshop, Illustrator, Premiere Pro 등 20+ 앱 전체 이용",
    longDescription: "Adobe Creative Cloud 전체 앱을 이용해 포토샵, 일러스트레이터, 프리미어 프로, After Effects 등 모든 창작 도구를 마음껏 사용하세요.",
    icon: "Ai",
    bgColor: "bg-red-700",
    textColor: "text-red-400",
    rating: 4.7,
    reviews: 4120,
    sold: 15600,
    plans: [
      { name: "1개월", price: 19900, originalPrice: 77400, duration: "30일", features: ["전체 앱 20+", "100GB 클라우드", "Adobe Fonts", "베타 기능"], popular: false },
      { name: "3개월", price: 55000, originalPrice: 232200, duration: "90일", features: ["전체 앱 20+", "100GB 클라우드", "Adobe Fonts", "베타 기능"], popular: true },
      { name: "12개월", price: 199000, originalPrice: 928800, duration: "365일", features: ["전체 앱 20+", "100GB 클라우드", "Adobe Fonts", "베타 기능", "최대 절약"], popular: false },
    ],
    features: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "100GB 저장공간", "Adobe Fonts"],
    howToUse: ["결제 후 라이선스 키 발송", "Adobe 공식 사이트에서 활성화", "Creative Cloud 앱 다운로드", "모든 앱 설치 후 이용"],
    tags: ["포토샵", "영상편집", "디자인", "크리에이티브"],
  },
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    category: "생산성",
    description: "Word, Excel, PowerPoint, OneDrive 1TB 포함",
    longDescription: "Microsoft 365 Family로 Word, Excel, PowerPoint, Outlook, OneDrive 1TB까지 최대 6명이 함께 사용할 수 있습니다.",
    icon: "M",
    bgColor: "bg-blue-600",
    textColor: "text-blue-400",
    rating: 4.6,
    reviews: 7823,
    sold: 38900,
    plans: [
      { name: "1개월", price: 4500, originalPrice: 13900, duration: "30일", features: ["Word/Excel/PPT", "OneDrive 1TB", "Teams", "6기기"], popular: false },
      { name: "3개월", price: 12000, originalPrice: 41700, duration: "90일", features: ["Word/Excel/PPT", "OneDrive 1TB", "Teams", "6기기"], popular: true },
      { name: "12개월", price: 39000, originalPrice: 166800, duration: "365일", features: ["Word/Excel/PPT", "OneDrive 1TB", "Teams", "6기기", "최대 절약"], popular: false },
    ],
    features: ["Word / Excel / PowerPoint", "OneDrive 1TB", "Microsoft Teams", "Outlook", "6기기 동시 사용", "모바일 앱"],
    howToUse: ["결제 후 마이크로소프트 계정으로 초대", "초대 수락 후 즉시 활성화", "PC/Mac/모바일에서 앱 설치", "1TB 클라우드 바로 이용"],
    tags: ["오피스", "엑셀", "파워포인트", "클라우드"],
  },
  {
    slug: "canva-pro",
    name: "Canva Pro",
    category: "디자인",
    description: "프리미엄 템플릿, AI 디자인 도구, 무제한 저장공간",
    longDescription: "Canva Pro로 10만+ 프리미엄 템플릿, AI 이미지 생성, 배경 제거, 브랜드 키트 등 전문가 디자인 도구를 모두 이용하세요.",
    icon: "C",
    bgColor: "bg-purple-600",
    textColor: "text-purple-400",
    rating: 4.8,
    reviews: 6540,
    sold: 29700,
    plans: [
      { name: "1개월", price: 3500, originalPrice: 16000, duration: "30일", features: ["10만+ 템플릿", "AI 이미지 생성", "배경 제거", "브랜드 키트"], popular: false },
      { name: "3개월", price: 9500, originalPrice: 48000, duration: "90일", features: ["10만+ 템플릿", "AI 이미지 생성", "배경 제거", "브랜드 키트"], popular: true },
      { name: "12개월", price: 34000, originalPrice: 192000, duration: "365일", features: ["10만+ 템플릿", "AI 이미지 생성", "배경 제거", "브랜드 키트", "최대 절약"], popular: false },
    ],
    features: ["10만+ 프리미엄 템플릿", "AI 이미지 생성", "배경 자동 제거", "브랜드 키트", "무제한 저장", "팀 협업"],
    howToUse: ["결제 후 팀 초대 링크 발송", "기존 계정으로 팀 참여", "즉시 Pro 기능 활성화", "모든 프리미엄 에셋 이용"],
    tags: ["디자인", "템플릿", "AI", "마케팅"],
  },
  {
    slug: "nordvpn",
    name: "NordVPN",
    category: "보안",
    description: "초고속 VPN, 60국 서버, 완벽한 개인정보 보호",
    longDescription: "NordVPN으로 60개국 5500개 이상의 서버를 통해 안전하고 빠른 인터넷을 즐기세요. 6기기까지 동시 연결이 가능합니다.",
    icon: "VPN",
    bgColor: "bg-blue-800",
    textColor: "text-blue-400",
    rating: 4.7,
    reviews: 3892,
    sold: 18200,
    plans: [
      { name: "1개월", price: 5900, originalPrice: 15000, duration: "30일", features: ["60개국 서버", "6기기 동시", "킬스위치", "로그 없음"], popular: false },
      { name: "3개월", price: 15000, originalPrice: 45000, duration: "90일", features: ["60개국 서버", "6기기 동시", "킬스위치", "로그 없음"], popular: true },
      { name: "12개월", price: 49000, originalPrice: 180000, duration: "365일", features: ["60개국 서버", "6기기 동시", "킬스위치", "로그 없음", "최대 절약"], popular: false },
    ],
    features: ["60개국 5500+ 서버", "6기기 동시 연결", "킬스위치", "로그 없음 정책", "스플릿 터널링", "이중 VPN"],
    howToUse: ["결제 후 계정 정보 발송", "NordVPN 앱 다운로드", "이메일/비밀번호로 로그인", "원하는 서버 선택 후 연결"],
    tags: ["VPN", "보안", "프라이버시", "해외서버"],
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "AI 도구",
    description: "세계 최고 AI 이미지 생성 도구, 무제한 이미지 생성",
    longDescription: "Midjourney Standard 플랜으로 무제한 AI 이미지를 생성하세요. 텍스트로 놀라운 품질의 이미지를 만들 수 있습니다.",
    icon: "MJ",
    bgColor: "bg-indigo-700",
    textColor: "text-indigo-400",
    rating: 4.9,
    reviews: 5621,
    sold: 24300,
    plans: [
      { name: "1개월", price: 8900, originalPrice: 30000, duration: "30일", features: ["무제한 이미지", "최고 품질", "빠른 GPU", "상업적 사용"], popular: false },
      { name: "3개월", price: 24000, originalPrice: 90000, duration: "90일", features: ["무제한 이미지", "최고 품질", "빠른 GPU", "상업적 사용"], popular: true },
      { name: "6개월", price: 44000, originalPrice: 180000, duration: "180일", features: ["무제한 이미지", "최고 품질", "빠른 GPU", "상업적 사용", "추가 할인"], popular: false },
    ],
    features: ["무제한 이미지 생성", "최고 품질 출력", "빠른 GPU 우선", "상업적 사용 허가", "디스코드 연동", "다양한 스타일"],
    howToUse: ["결제 후 Discord 초대 링크 발송", "Midjourney 봇이 있는 서버 참여", "/imagine 명령어로 이미지 생성", "생성된 이미지 다운로드"],
    tags: ["AI", "이미지생성", "디자인", "창작"],
  },
  {
    slug: "linkedin-premium",
    name: "LinkedIn Premium",
    category: "커리어",
    description: "InMail, 지원자 현황, AI 면접 코치 포함",
    longDescription: "LinkedIn Premium Career로 구직 활동을 강화하세요. 채용 담당자에게 직접 메시지를 보내고, 지원자 현황을 확인하고, AI 면접 코치를 이용할 수 있습니다.",
    icon: "in",
    bgColor: "bg-blue-700",
    textColor: "text-blue-400",
    rating: 4.5,
    reviews: 2934,
    sold: 11200,
    plans: [
      { name: "1개월", price: 12900, originalPrice: 47000, duration: "30일", features: ["InMail 5개", "지원자 현황", "AI 면접 코치", "프리미엄 배지"], popular: false },
      { name: "3개월", price: 35000, originalPrice: 141000, duration: "90일", features: ["InMail 5개", "지원자 현황", "AI 면접 코치", "프리미엄 배지"], popular: true },
      { name: "12개월", price: 120000, originalPrice: 564000, duration: "365일", features: ["InMail 5개", "지원자 현황", "AI 면접 코치", "프리미엄 배지", "최대 절약"], popular: false },
    ],
    features: ["InMail 메시지", "지원자 현황 확인", "AI 면접 코치", "프리미엄 배지", "채용 현황 인사이트", "학습 과정"],
    howToUse: ["결제 후 계정 정보 발송", "LinkedIn 로그인 후 프리미엄 활성화", "모든 프리미엄 기능 즉시 이용", "30일 내 환불 보장"],
    tags: ["취업", "커리어", "네트워킹", "면접"],
  },
  {
    slug: "duolingo-plus",
    name: "Duolingo Plus",
    category: "교육",
    description: "광고 없는 언어 학습, 무제한 하트, 오프라인 학습",
    longDescription: "Duolingo Plus로 광고 없이 집중해서 언어를 배우세요. 무제한 하트로 실수해도 계속 학습할 수 있고, 오프라인에서도 학습이 가능합니다.",
    icon: "Duo",
    bgColor: "bg-green-600",
    textColor: "text-green-400",
    rating: 4.7,
    reviews: 4521,
    sold: 19800,
    plans: [
      { name: "1개월", price: 1900, originalPrice: 10500, duration: "30일", features: ["광고 제거", "무제한 하트", "오프라인 학습", "진행 통계"], popular: false },
      { name: "3개월", price: 5000, originalPrice: 31500, duration: "90일", features: ["광고 제거", "무제한 하트", "오프라인 학습", "진행 통계"], popular: true },
      { name: "12개월", price: 17000, originalPrice: 126000, duration: "365일", features: ["광고 제거", "무제한 하트", "오프라인 학습", "진행 통계", "최대 절약"], popular: false },
    ],
    features: ["광고 완전 제거", "무제한 하트", "오프라인 학습", "진행 통계 상세", "틀린 문제 복습", "다양한 언어"],
    howToUse: ["결제 후 패밀리 플랜 초대", "기존 Duolingo 계정으로 참여", "즉시 Plus 기능 활성화", "모든 기기에서 이용"],
    tags: ["언어학습", "영어", "교육", "앱"],
  },
];

export const categories = ["전체", "스트리밍", "AI 도구", "음악", "크리에이티브", "생산성", "디자인", "보안", "커리어", "교육"];

export const reviews = [
  { name: "김민준", avatar: "김", rating: 5, date: "2024.01.15", content: "정말 저렴하게 넷플릭스를 이용할 수 있어서 너무 좋아요! 계정도 즉시 받았고 끊김 없이 잘 됩니다.", service: "Netflix" },
  { name: "이서연", avatar: "이", rating: 5, date: "2024.01.20", content: "ChatGPT Plus를 이렇게 저렴하게 쓸 수 있다니 믿을 수가 없어요. 업무 효율이 3배는 올라간 것 같아요.", service: "ChatGPT Plus" },
  { name: "박지호", avatar: "박", rating: 5, date: "2024.01.22", content: "어도비 전체 앱을 이 가격에? 처음엔 반신반의했는데 진짜 잘 됩니다. 고객센터도 빠르게 응답해줘요.", service: "Adobe CC" },
  { name: "최수아", avatar: "최", rating: 4, date: "2024.01.25", content: "스포티파이 3개월 구매했는데 아주 만족스러워요. 다음에도 또 구매할 예정입니다.", service: "Spotify" },
  { name: "정하늘", avatar: "정", rating: 5, date: "2024.01.28", content: "Midjourney를 저렴하게 쓸 수 있어서 AI 그림 작업이 훨씬 수월해졌어요. 강력 추천!", service: "Midjourney" },
  { name: "강도현", avatar: "강", rating: 5, date: "2024.02.01", content: "유튜브 프리미엄 가격이 너무 올라서 여기서 구매했는데 완벽해요. 가족들도 같이 씁니다.", service: "YouTube Premium" },
];
