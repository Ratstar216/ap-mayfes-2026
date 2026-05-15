export const locales = ["ja", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const defaultLocale: Locale = "ja";

export const electionUrl = "https://visitor.gogatsusai.jp/project/054";
export const electionUrlEn = "https://visitor.gogatsusai.jp/en/project/054";
export const magazineUrl = "https://apmayfes.booth.pm/items/8340650";
export const quoridorUrl =
  "https://app-mf2026quoridor.happyrock-55b718f1.japaneast.azurecontainerapps.io/";
export const martingaleGameUrl =
  "https://ap-mayfest.com/2026/martingale-game/?v=mayfest";

const dictionaries = {
  ja: {
    localeName: "日本語",
    htmlLang: "ja",
    alternateLocale: "en",
    alternateLabel: "English",
    siteName: "工学博覧会 2026",
    metadata: {
      title: "工学博覧会 2026 | 東京大学五月祭 応用物理系学科展示",
      description:
        "工学博覧会 2026 は、東京大学五月祭で物理工学科・計数工学科の学生が主催する展示です。ボードゲーム、セキュリティ、暗号、量子、光、物性、制御、確率統計、金融工学などを学べます。",
      twitterDescription:
        "東京大学五月祭で物理工学科・計数工学科の学生が主催する展示です。",
      keywords: [
        "工学博覧会",
        "工学博覧会 2026",
        "東京大学",
        "五月祭",
        "応用物理",
        "物理工学科",
        "計数工学科",
        "東京大学工学部",
        "本郷キャンパス",
        "量子",
        "光",
        "制御工学",
        "確率統計",
        "暗号",
        "金融工学",
        "ボードゲーム",
        "物性",
        "セキュリティ",
      ],
    },
    navItems: [
      { label: "概要", href: "#about" },
      { label: "展示一覧", href: "#exhibitions" },
      { label: "スタンプ", href: "#stamp" },
      { label: "散歩道", href: "#magazine" },
      { label: "総選挙", href: "#mayfes-election" },
      { label: "アクセス", href: "#access" },
      { label: "関連リンク", href: "#related-links" },
    ],
    hero: {
      title: "工学博覧会",
      appliedPhysics: "APPLIED PHYSICS",
      departments: ["物 理 工 学 科", "計 数 工 学 科"],
      courses: ["数 理 情 報 工 学", "シ ス テ ム 情 報 工 学"],
    },
    sectionLabels: {
      about: "概要",
      exhibitions: "展示一覧",
      stamp: "スタンプラリー",
      magazine: "応用物理の散歩道",
      election: "五月祭総選挙",
      access: "アクセス",
      links: "関連リンク",
    },
    about:
      "工学博覧会は、東京大学工学部計数工学科と物理工学科の学生が合同で主催する五月祭の展示です。2026年は 5/16, 17 に開催されます。数学、物理、情報などの分野を楽しく学べます。ぜひお越しください！",
    exhibitions: [
      {
        id: "board-game",
        title: "ボードゲーム班",
        copy: "AIとあなた、どっちが上？深い洞察が試されるコリドールでAIに挑戦！実機でもスマホでも楽しめる対戦体験です！",
        links: [{ label: "コリドールを遊ぶ", href: quoridorUrl }],
        iconAlt: "ボードゲーム班",
        detailAlts: ["コリドール対戦展示の様子"],
        personAlt: "本を読んでいる男性",
      },
      {
        id: "security",
        title: "セキュリティ班",
        copy: "現代社会を支える情報の守り手、暗号技術の仕組みと未来について解説します。",
        iconAlt: "セキュリティ班",
        detailAlts: ["RSA暗号に関する展示", "公開鍵暗号に関する展示"],
        personAlt: "猫",
      },
      {
        id: "light",
        title: "光班",
        copy: "光を知ろう。光で知ろう。",
        iconAlt: "光班",
        detailAlts: ["光班の展示写真"],
        personAlt: "手を振っている男性",
      },
      {
        id: "finance",
        title: "金融班",
        copy: "一見縁遠い金融と数学ですが、実は金融は高度な数学の応用分野なんです。この展示では不確実性の裏に潜む数理をお見せします。",
        links: [{ label: "ギャンブル体験ゲーム", href: martingaleGameUrl }],
        iconAlt: "金融班",
        detailAlts: ["金融班の展示写真"],
        personAlt: "座っている女性",
      },
      {
        id: "materials",
        title: "物性班",
        copy: "物性班では「物質の性質」に着目し、その面白さを紹介しています。恒例の超伝導に加え、新しい展示にも挑戦したのでぜひお越しください！",
        iconAlt: "物性班",
        detailAlts: [],
        personAlt: "猫",
      },
      {
        id: "control",
        title: "制御班",
        copy: "立方体の箱を辺で立たせるなんて不可能！？制御班はその不可能に立ち向かいます。制御工学の驚きをぜひ体験してください。",
        iconAlt: "制御班",
        detailAlts: ["リアクションホイール実機の展示", "リアクションホイールシミュレーションの展示"],
        personAlt: "物を書いている女性",
      },
      {
        id: "statistics",
        title: "確率統計班",
        copy: "統計学や確率論が「見えないもの」や「予測不能なもの」をどのように解き明かすかを紹介します！",
        iconAlt: "確率統計班",
        detailAlts: [
          "確率統計班の展示写真",
          "モンティ・ホール問題シミュレーター",
          "潜水艦探索ゲーム",
          "群衆の知恵",
          "待ち時間",
        ],
        personAlt: "考えている男性",
      },
      {
        id: "quantum",
        title: "量子班",
        copy:
          "量子班では、目に見えない小さな小さな世界の不思議な物理を体感できる展示をご用意しています！量子から芽生えた未来のテクノロジーを体験しましょう！\n[展示一覧]\n・未来の発電！スピンゼーベック効果を体験しよう\n・量子コンピューターの心臓を見てみよう！\n・量子ゼノン効果「観測すると状態が止まる！」\n・「もつれ」ってなんだろう\n・量子への招待　シュテルンゲルラッハの実験を疑似体験しよう",
        iconAlt: "量子班",
        detailAlts: [
          "量子班の展示写真1",
          "量子班の展示写真2",
          "量子班の展示写真3",
          "量子班の展示写真4",
          "量子班の展示写真5",
          "量子班の展示写真6",
        ],
        personAlt: "手を振っている女性",
      },
    ],
    ui: {
      tap: "Tap!",
      detailButton: (title: string) => `${title}の詳細を表示`,
      photoRegion: (title: string) => `${title}の展示写真`,
      prevPhoto: "前の写真",
      nextPhoto: "次の写真",
      photoPicker: "写真を選択",
      photoAt: (index: number) => `${index}枚目の写真を表示`,
    },
    stamp: {
      prizeAlt: "スタンプラリーの景品として配布される3Dプリンター製の小物",
      lead:
        "工学部6号館 2階・3階で展示中の複数の企画を巡って、台紙にスタンプを集めよう！",
      rules: [
        "各班の課題クリアにつきスタンプ1つ",
        "スタンプ3つで景品1つと交換",
        "景品の交換は来場者1名につき1回まで",
      ],
      exchange: "景品交換:",
      exchangePlace: "工学部6号館 2階 63号講義室 受付",
      prize: "景品:",
      prizeText: "3Dプリンターで制作した、展示にまつわるものなど（画像参照）",
      note: "※景品の個数には限りがあります。先着順でのお渡しとなります。",
    },
    magazine: {
      coverAlt: "応用物理の散歩道の表紙",
      lead:
        "「応用物理の散歩道」は、物理工学科・計数工学科の学生がそれぞれの専門や関心を記事にしたマガジンです。",
      copy:
        "工学博覧会の展示にまつわる理論の解説、学生目線での学科生活、個人の学問的関心についての記事を収録しています。",
      specs: [
        { term: "B5版", description: "218ページ" },
        { term: "会場販売", description: "書籍版 500円" },
        { term: "オンライン販売", description: "PDF版 450円" },
      ],
      button: "詳細・購入ページへ",
    },
    election: {
      title: "工学博覧会に投票する",
      copy:
        "展示をお楽しみいただけたら、五月祭総選挙で「工学博覧会」への投票をお願いします。皆さまの一票が、企画の応援になります。",
      button: "投票ページを開く",
    },
    access: {
      mapTitle: "東京大学 工学部6号館の地図",
      campus: "東京大学 本郷キャンパス",
      place: "工学部 6号館 2階・3階",
      routes: [
        "本郷三丁目駅（地下鉄丸の内線）より徒歩8分",
        "湯島駅または根津駅（地下鉄千代田線）より徒歩10分",
        "東大前駅（地下鉄南北線）より徒歩5分",
        "春日駅（地下鉄三田線）より徒歩15分",
      ],
    },
    relatedLinkGroups: [
      {
        title: "【大学・学部・学科】",
        links: [
          { label: "東京大学公式HP", href: "https://www.u-tokyo.ac.jp/ja/index.html" },
          { label: "物理工学科公式HP", href: "https://www.ap.t.u-tokyo.ac.jp" },
          { label: "計数工学科公式HP", href: "https://www.keisu.t.u-tokyo.ac.jp" },
        ],
      },
      {
        title: "【五月祭関連】",
        links: [
          { label: "五月祭公式HP", href: "https://gogatsusai.jp/" },
          { label: "工学博覧会 投票ページ", href: electionUrl },
          { label: "Daily Lazer Puzzle", href: "https://ap-mayfest.com/2026/laser-puzzle/daily.html"}
        ],
      },
      {
        title: "【ご協力者様（敬称略・順不同）】",
        noWrapLinks: true,
        links: [
          { label: "齊藤研究室（工学系研究科物理工学専攻）", href: "https://saitoh.t.u-tokyo.ac.jp" },
          { label: "中村研究室（工学系研究科物理工学専攻）", href: "https://www.qipe.t.u-tokyo.ac.jp" },
          { label: "理化学研究所", href: "https://rqc.riken.jp" },
          { label: "山本研究室（工学系研究科附属量子相エレクトロニクス研究センター）", href: "https://www.qpec.t.u-tokyo.ac.jp/yamamoto_lab/" },
          { label: "島﨑研究室（物性研究所）", href: "https://shimazaki.issp.u-tokyo.ac.jp" },
          { label: "中村・高瀬研究室（情報理工学系研究科システム情報学専攻）", href: "https://hal.ipc.i.u-tokyo.ac.jp/ja/" },
          { label: "奈良・宮廻研究室（情報理工学系研究科システム情報学専攻）", href: "https://www.inv.ipc.i.u-tokyo.ac.jp" },
        ],
      },
    ],
    footer: {
      copyright: "工学博覧会 2026",
      credit: "Designed by Freepik",
    },
  },
  en: {
    localeName: "English",
    htmlLang: "en",
    alternateLocale: "ja",
    alternateLabel: "日本語",
    siteName: "Tech Expo 2026",
    metadata: {
      title: "Tech Expo 2026 | Applied Physics Exhibition at UTokyo May Festival",
      description:
        "Tech Expo 2026 is an exhibition by students in Applied Physics, Mathematical Engineering, and Information Physics at the University of Tokyo May Festival.",
      twitterDescription:
        "An exhibition by Applied Physics, Mathematical Engineering, and Information Physics students at the University of Tokyo May Festival.",
      keywords: [
        "Tech Expo",
        "Tech Expo 2026",
        "University of Tokyo",
        "May Festival",
        "Applied Physics",
        "Mathematical Engineering",
        "Information Physics",
        "Hongo Campus",
        "Quantum",
        "Optics",
        "Control Engineering",
        "Statistics",
        "Cryptography",
        "Financial Engineering",
        "Board Games",
        "Condensed Matter",
        "Security",
      ],
    },
    navItems: [
      { label: "About", href: "#about" },
      { label: "Exhibits", href: "#exhibitions" },
      { label: "Stamps", href: "#stamp" },
      { label: "Magazine", href: "#magazine" },
      { label: "Vote", href: "#mayfes-election" },
      { label: "Access", href: "#access" },
      { label: "Links", href: "#related-links" },
    ],
    hero: {
      title: "Tech Expo",
      appliedPhysics: "APPLIED PHYSICS",
      departments: ["Department of Applied Physics", "Department of Mathematical Engineering and Information Physics"],
      courses: ["Mathematical Informatics", "Systems Informatics"],
    },
    sectionLabels: {
      about: "About",
      exhibitions: "Exhibitions",
      stamp: "Stamp Rally",
      magazine: "Pathways Into Applied Physics",
      election: "May Festival Vote",
      access: "Access",
      links: "Links",
    },
    about:
      "Engineering Expo is a joint May Festival exhibition organized by students from the University of Tokyo's Department of Mathematical Engineering and Information Physics and Department of Applied Physics. In 2026, it will be held on May 16 and 17. Visit us to enjoy approachable exhibits on mathematics, physics, information science, and more.",
    exhibitions: [
      {
        id: "board-game",
        title: "Board Game Team",
        copy: "Who has the sharper strategy: you or AI? Challenge an AI opponent in Quoridor, a board game that rewards deep insight. Play on the physical setup or on your phone.",
        links: [{ label: "Play Quoridor", href: quoridorUrl }],
        iconAlt: "Board Game Team",
        detailAlts: ["Quoridor match exhibit"],
        personAlt: "Man reading a book",
      },
      {
        id: "security",
        title: "Security Team",
        copy: "Learn how cryptography protects information in modern society, and where the technology may go next.",
        iconAlt: "Security Team",
        detailAlts: ["RSA cryptography exhibit", "Public-key cryptography exhibit"],
        personAlt: "Cat",
      },
      {
        id: "light",
        title: "Optics Team",
        copy: "Know light. Learn through light.",
        iconAlt: "Optics Team",
        detailAlts: ["Optics team exhibit photo"],
        personAlt: "Man waving",
      },
      {
        id: "finance",
        title: "Finance Team",
        copy: "Finance may feel distant from mathematics, but it is one of mathematics' most advanced applications. This exhibit reveals the mathematical structure hidden behind uncertainty.",
        links: [{ label: "Gambling Experience Game", href: martingaleGameUrl }],
        iconAlt: "Finance Team",
        detailAlts: ["Finance team exhibit photo"],
        personAlt: "Woman sitting",
      },
      {
        id: "materials",
        title: "Condensed Matter Team",
        copy: "The Condensed Matter Team introduces the fascinating properties of materials. Alongside our annual superconductivity exhibit, we have prepared new demonstrations as well.",
        iconAlt: "Condensed Matter Team",
        detailAlts: [],
        personAlt: "Cat",
      },
      {
        id: "control",
        title: "Control Team",
        copy: "Can a cube stand on one of its edges? The Control Team takes on the impossible and lets you experience the surprise of control engineering.",
        iconAlt: "Control Team",
        detailAlts: ["Reaction wheel hardware exhibit", "Reaction wheel simulation exhibit"],
        personAlt: "Woman writing",
      },
      {
        id: "statistics",
        title: "Probability and Statistics Team",
        copy: "Discover how probability and statistics reveal the unseen and make sense of the unpredictable.",
        iconAlt: "Probability and Statistics Team",
        detailAlts: [
          "Probability and statistics exhibit photo",
          "Monty Hall problem simulator",
          "Submarine search game",
          "Wisdom of crowds",
          "Waiting time exhibit",
        ],
        personAlt: "Man thinking",
      },
      {
        id: "quantum",
        title: "Quantum Team",
        copy:
          "The Quantum Team has prepared exhibits where you can experience the strange physics of the tiny, invisible world. Come explore future technologies that have grown out of quantum science!\n[Exhibit List]\n- Experience the spin Seebeck effect: future power generation\n- Take a look at the heart of a quantum computer\n- Quantum Zeno effect: observing a state can freeze it\n- What is entanglement?\n- Invitation to quantum physics: try a simulated Stern-Gerlach experiment",
        iconAlt: "Quantum Team",
        detailAlts: [
          "Quantum team exhibit photo 1",
          "Quantum team exhibit photo 2",
          "Quantum team exhibit photo 3",
          "Quantum team exhibit photo 4",
          "Quantum team exhibit photo 5",
          "Quantum team exhibit photo 6",
        ],
        personAlt: "Woman waving",
      },
    ],
    ui: {
      tap: "Tap!",
      detailButton: (title: string) => `Show details for ${title}`,
      photoRegion: (title: string) => `${title} exhibit photos`,
      prevPhoto: "Previous photo",
      nextPhoto: "Next photo",
      photoPicker: "Choose a photo",
      photoAt: (index: number) => `Show photo ${index}`,
    },
    stamp: {
      prizeAlt: "3D-printed items given as stamp rally prizes",
      lead:
        "Visit multiple exhibits on the 2nd and 3rd floors of Engineering Building 6 and collect stamps on your sheet.",
      rules: [
        "Earn one stamp for completing each team's challenge",
        "Exchange three stamps for one prize",
        "Prize exchange is limited to once per visitor",
      ],
      exchange: "Prize exchange:",
      exchangePlace: "Engineering Building 6, 2F, Room 63 reception",
      prize: "Prize:",
      prizeText: "3D-printed items related to the exhibits and more (see image)",
      note: "Prize quantities are limited and will be distributed first come, first served.",
    },
    magazine: {
      coverAlt: "Cover of Pathways Into Applied Physics",
      lead:
        "Pathways Into Applied Physics is a magazine written by Applied Physics and Mathematical Engineering students about their fields and interests.",
      copy:
        "It includes theory behind the Tech Expo exhibits, student perspectives on department life, and articles on individual academic interests. Please note that all content in this magazine is written in Japanese.",
      specs: [
        { term: "B5 format", description: "218 pages" },
        { term: "Venue sale", description: "Print edition 500 yen" },
        { term: "Online sale", description: "PDF edition 450 yen" },
      ],
      button: "Details and purchase",
    },
    election: {
      title: "Vote for Tech Expo",
      copy:
        "If you enjoyed the exhibits, please vote for Tech Expo in the May Festival vote. Your vote helps support the project.",
      button: "Open voting page",
    },
    access: {
      mapTitle: "Map of UTokyo Engineering Building 6",
      campus: "The University of Tokyo, Hongo Campus",
      place: "Engineering Building 6, 2F and 3F",
      routes: [
        "8 min. walk from Hongo-sanchome Station (Marunouchi Line)",
        "10 min. walk from Yushima or Nezu Station (Chiyoda Line)",
        "5 min. walk from Todaimae Station (Namboku Line)",
        "15 min. walk from Kasuga Station (Mita Line)",
      ],
    },
    relatedLinkGroups: [
      {
        title: "University and Departments",
        links: [
          { label: "The University of Tokyo", href: "https://www.u-tokyo.ac.jp/en/" },
          { label: "Department of Applied Physics", href: "https://www.ap.t.u-tokyo.ac.jp/en/" },
          { label: "Department of Mathematical Engineering and Information Physics", href: "https://www.keisu.t.u-tokyo.ac.jp/en/" },
        ],
      },
      {
        title: "May Festival",
        links: [
          { label: "May Festival official website", href: "https://visitor.gogatsusai.jp/en" },
          { label: "Tech Expo voting page", href: electionUrlEn },
          { label: "Daily Lazer Puzzle", href: "https://ap-mayfest.com/2026/laser-puzzle/daily.html"},
        ],
      },
      {
        title: "Collaborators",
        noWrapLinks: true,
        links: [
          { label: "Saitoh Laboratory", href: "https://saitoh.t.u-tokyo.ac.jp" },
          { label: "Nakamura Laboratory", href: "https://www.qipe.t.u-tokyo.ac.jp/en/" },
          { label: "RIKEN", href: "https://rqc.riken.jp/en/" },
          { label: "Yamamoto Laboratory", href: "https://www.qpec.t.u-tokyo.ac.jp/yamamoto_lab/english/index.html" },
          { label: "Shimazaki Laboratory", href: "https://shimazaki.issp.u-tokyo.ac.jp" },
          { label: "Nakamura-Takase Laboratory", href: "https://hal.ipc.i.u-tokyo.ac.jp/en/" },
          { label: "Nara & Miyazako Laboratory", href: "https://www.inv.ipc.i.u-tokyo.ac.jp/index_e.html" },
        ],
      },
    ],
    footer: {
      copyright: "Tech Expo 2026",
      credit: "Designed by Freepik",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
