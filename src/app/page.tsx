"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navItems = [
  { label: "概要", href: "#about" },
  { label: "展示一覧", href: "#exhibitions" },
  { label: "スタンプ", href: "#stamp" },
  { label: "散歩道", href: "#magazine"},
  { label: "総選挙", href: "#mayfes-election" },
  { label: "アクセス", href: "#access" },
  { label: "関連リンク", href: "#related-links" },
];

const electionUrl = "https://visitor.gogatsusai.jp/project/054";
const magazineUrl = "https://apmayfes.booth.pm/items/8340650";

type Exhibition = {
  id: string;
  side: "left" | "right";
  title: string;
  copy: string;
  color: string;
  icon: string;
  iconAlt: string;
  detailImages?: {
    src: string;
    alt: string;
  }[];
  person: string;
  personAlt: string;
  personWidth?: number;
  personOffset?: string;
};

const exhibitions: Exhibition[] = [
  {
    id: "board-game",
    side: "left",
    title: "ボードゲーム班",
    copy: "AIとあなた、どっちが上？深い洞察が試されるコリドールでAIに挑戦！実機でもスマホでも楽しめる対戦体験です！",
    color: "#FF4B00",
    icon: "/expo-assets/boardgame.svg",
    iconAlt: "ボードゲーム班",
    detailImages: [
      {
        src: "/expo-details/boardgame/quoridor_web.webp",
        alt: "コリドール対戦展示の様子",
      },
    ],
    person: "/expo-assets/man-reading.gif",
    personAlt: "本を読んでいる男性",
    personWidth: 400,
  },
  {
    id: "security",
    side: "right",
    title: "セキュリティ班",
    copy: "現代社会を支える情報の守り手、暗号技術の仕組みと未来について解説します。",
    color: "#f6aa00",
    icon: "/expo-assets/security.svg",
    iconAlt: "セキュリティ班",
    detailImages: [
      {
        src: "/expo-details/security/security-rsa.webp",
        alt: "RSA暗号に関する展示",
      },
      {
        src: "/expo-details/security/security-pkc.webp",
        alt: "公開鍵暗号に関する展示",
      },
    ],
    person: "/expo-assets/woman-sitting.gif",
    personAlt: "座っている女性",
  },
  {
    id: "light",
    side: "left",
    title: "光班",
    copy: "光を知ろう。光で知ろう。",
    color: "#FFF100",
    icon: "/expo-assets/light.svg",
    iconAlt: "光班",
    detailImages: [
      {
        src: "/expo-details/light/light1.webp",
        alt: "光班の展示写真",
      },
    ],
    person: "/expo-assets/man-waving.gif",
    personAlt: "手を振っている男性",
    personWidth: 450,
    personOffset: "12px",
  },
  {
    id: "finance",
    side: "right",
    title: "金融班",
    // copy: "数理モデルで再現された金融市場の値動きを見ながら自動取引AIとどちらがより利益を出せるか勝負しよう！！",
    copy: "一見縁遠い金融と数学ですが、実は金融は高度な数学の応用分野なんです。この展示では不確実性の裏に潜む数理をお見せします。",
    color: "#804000",
    icon: "/expo-assets/finance.svg",
    iconAlt: "金融班",
    detailImages: [
      {
        src: "/expo-details/finance/finance.webp",
        alt: "金融班の展示写真",
      },
    ],
    person: "/expo-assets/woman-writing.gif",
    personAlt: "物を書いている女性",
    personWidth: 400,
    personOffset: "-25px",
  },
  {
    id: "materials",
    side: "left",
    title: "物性班",
    copy: "物性班では「物質の性質」に着目し、その面白さを紹介しています。恒例の超伝導に加え、新しい展示にも挑戦したのでぜひお越しください！",
    color: "#03AF7A",
    icon: "/expo-assets/materials.svg",
    iconAlt: "物性班",
    person: "/expo-assets/man-thinking.gif",
    personAlt: "考えている男性",
    personWidth: 400,
    personOffset: "70px",
  },
  {
    id: "control",
    side: "right",
    title: "制御班",
    copy: "立方体の箱を辺で立たせるなんて不可能！？制御班はその不可能に立ち向かいます。制御工学の驚きをぜひ体験してください。",
    color: "#005AFF",
    icon: "/expo-assets/control.svg",
    iconAlt: "制御班",
    detailImages: [
      {
        src: "/expo-details/control/control_reaction_wheel_jikki.webp",
        alt: "リアクションホイール実機の展示",
      },
      {
        src: "/expo-details/control/control_reaction_wheel_simulation.webp",
        alt: "リアクションホイールシミュレーションの展示",
      },
    ],
    person: "/expo-assets/woman-waving.gif",
    personAlt: "手を振っている女性",
    personWidth: 420,
    personOffset: "-45px",
  },
  {
    id: "statistics",
    side: "left",
    title: "確率統計班",
    copy: "統計学や確率論が「見えないもの」や「予測不能なもの」をどのように解き明かすかを紹介します！",
    color: "#4dc4ff",
    icon: "/expo-assets/statistics.svg",
    iconAlt: "確率統計班",
    detailImages: [
      {
        src: "/expo-details/statistics/statistics.webp",
        alt: "確率統計班の展示写真",
      },
      {
        src: "/expo-details/statistics/monty_hall_simulator.webp",
        alt: "モンティ・ホール問題シミュレーター",
      },
      {
        src: "/expo-details/statistics/submarine_search.webp",
        alt: "潜水艦探索ゲーム",
      },
      {
        src: "/expo-details/statistics/wisdom_of_crowds.webp",
        alt: "群衆の知恵",
      },
      {
        src: "/expo-details/statistics/wait_time.webp",
        alt: "待ち時間",
      },
    ],
    person: "/expo-assets/man-reading.gif",
    personAlt: "本を読んでいる男性",
    personWidth: 400,
  },
  {
    id: "quantum",
    side: "right",
    title: "量子班",
    copy: "量子の不思議な性質や量子物理を活用した未来のテクノロジーをお見せします！量子計算・スピン流を題材に展示中です！",
    color: "#c8c8cb",
    icon: "/expo-assets/quantum.svg",
    iconAlt: "量子班",
    detailImages: [
      {
        src: "/expo-details/quantum/quantum1.webp",
        alt: "量子班の展示写真1",
      },
      {
        src: "/expo-details/quantum/quantum2.webp",
        alt: "量子班の展示写真2",
      },
    ],
    person: "/expo-assets/woman-sitting.gif",
    personAlt: "座っている女性",
  },
  
  
];

const relatedLinkGroups = [
  {
    title: "【大学・学部・学科】",
    links: [
      { label: "東京大学公式HP", href: "https://www.u-tokyo.ac.jp/ja/index.html" },
      // { label: "東京大学工学部公式HP", href: "https://www.t.u-tokyo.ac.jp/" },
      { label: "物理工学科公式HP", href: "https://www.ap.t.u-tokyo.ac.jp" },
      { label: "計数工学科公式HP", href: "https://www.keisu.t.u-tokyo.ac.jp" },
    ],
  },
  {
    title: "【五月祭関連】",
    links: [
      { label: "五月祭公式HP", href: "https://gogatsusai.jp/" },
      { label: "工学博覧会 投票ページ", href: electionUrl },
    ],
  },
  // {
  //   title: "【各種SNS】",
  //   links: [
  //     { label: "X 工学博覧会", href: "https://x.com/apmayfes" },
  //     { label: "Instagram 工学博覧会", href: "https://www.instagram.com/apmayfest" },
  //   ],
  // },
  {
    title: "【ご協力者様（敬称略・五十音順）】",
    links: [
      { label: "東京大学工学部(仮)", href: "https://www.t.u-tokyo.ac.jp/" },
      // { label: "東京大学物理工学科", href: "https://www.ap.t.u-tokyo.ac.jp/" },
      // { label: "東京大学計数工学科", href: "https://www.keisu.t.u-tokyo.ac.jp/" },
      // { label: "東京大学数理情報工学", href: "https://www.mis.t.u-tokyo.ac.jp/" },
      // { label: "東京大学システム情報工学", href: "https://www.sis.t.u-tokyo.ac.jp/" },
    ]
  }
];

export default function Home() {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [activeDetailImage, setActiveDetailImage] = useState<Record<string, number>>({});

  function togglePanel(id: string) {
    setActivePanel((current) => (current === id ? null : id));
  }

  function selectDetailImage(id: string, imageIndex: number) {
    setActiveDetailImage((current) => ({
      ...current,
      [id]: imageIndex,
    }));
  }

  function moveDetailImage(id: string, imageCount: number, step: number) {
    setActiveDetailImage((current) => {
      const currentIndex = current[id] ?? 0;
      return {
        ...current,
        [id]: (currentIndex + step + imageCount) % imageCount,
      };
    });
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/85 px-5 backdrop-blur-md sm:px-12">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-5">
          <a
            href="#hero"
            className="font-main text-2xl tracking-wide sm:text-3xl"
          >
            工学博覧会 2026
          </a>
          <nav className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-sm font-main sm:gap-x-5 sm:text-base">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:opacity-65">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="hero"
        className="grid min-h-screen items-center gap-8 px-6 pb-20 pt-28 sm:px-10 lg:grid-cols-2 lg:px-[10%]"
      >
        <motion.div
          className="flex justify-center lg:translate-x-[9vw] lg:justify-end"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[650px]">
            <Image
              src="/expo-assets/logo-black.svg"
              alt=""
              width={650}
              height={650}
              priority
              className="h-auto w-full rounded-[15px]"
            />
            <div className="absolute left-1/2 top-[68%] w-full -translate-x-1/2 -translate-y-1/2 px-[8%] text-center">
              <div>
                <h1 className="whitespace-nowrap text-[1.9rem] font-bold leading-none sm:text-[2.55rem] lg:text-[2.9rem]">
                  工学博覧会
                </h1>
                <p className="mt-5 whitespace-nowrap font-display text-[1.1rem] tracking-[0.16em] text-neutral-800 sm:text-[1.7rem] lg:text-[1.95rem]">
                  APPLIED PHYSICS
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="text-center lg:translate-x-[9vw] lg:text-left"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        >
          <div className="text-3xl font-main leading-[1.45] sm:text-5xl">
            <p>物 理 工 学 科</p>
            <p>計 数 工 学 科</p>
            <div className="hero-course-list mt-2 text-2xl leading-[1.55] sm:text-3xl">
              <p>
                <span aria-hidden="true" />
                <span>数 理 情 報 工 学</span>
              </p>
              <p>
                <span aria-hidden="true" />
                <span>シ ス テ ム 情 報 工 学</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section-container about-section" aria-labelledby="about-title">
        <SectionTitle id="about-title" title="About" label="概要" />
        <motion.p
          className="about-copy"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          工学博覧会は、東京大学工学部計数工学科と物理工学科の学生が合同で主催する五月祭の展示です。数学、物理、情報などの分野を楽しく学べます。ぜひお越しください！
        </motion.p>
      </section>

      <section id="exhibitions" aria-labelledby="exhibitions-title">
        <SectionTitle id="exhibitions-title" title="Exhibitions" label="展示一覧" />

      <div className="mt-14">
        {exhibitions.map((item) => {
          const pWidth = item.personWidth ?? 300;
          const pOffset = item.personOffset ?? "0px";
          const detailImages = item.detailImages ?? [];
          const detailImageIndex = activeDetailImage[item.id] ?? 0;
          const activeDetail = detailImages[detailImageIndex] ?? detailImages[0];
        
          return (
            <article
              key={item.id}
              className={`exhibition-block ${
                item.side === "left" ? "side-left" : "side-right"
              }`}
            >
              <button
                type="button"
                onClick={() => togglePanel(item.id)}
                className="icon-trigger-box"
                //style={{ zIndex: 30, position: 'relative' }} 
                style={{ zIndex: 30 }}
                aria-expanded={activePanel === item.id}
                aria-controls={`${item.id}-panel`}
              >
                <span className="tap-hint">Tap!</span>
                <span
                  className="icon-obj"
                  style={{ borderColor: item.color }}
                  aria-hidden="true"
                >
                  <Image src={item.icon} alt="" width={160} height={160} />
                </span>
                <span className="sr-only">{item.iconAlt}の詳細を表示</span>
              </button>
            
              {activePanel === item.id && (
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setActivePanel(null)}
                />
              )}

              <motion.div
                id={`${item.id}-panel`}
                className="details-panel"
                onClick={(e) => e.stopPropagation()} 
                style={{ 
                  borderTopColor: item.color,
                  zIndex: 40
                }}
                initial={false}
                animate={{
                  opacity: activePanel === item.id ? 1 : 0,
                  pointerEvents: activePanel === item.id ? "auto" : "none",
                }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-detail text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 font-detail leading-8">{item.copy}</p>
                {activePanel === item.id && activeDetail && (
                  <div
                    className="expo-detail-carousel"
                    aria-label={`${item.title}の展示写真`}
                  >
                    <div className="expo-detail-photo-frame">
                      {detailImages.length > 1 && (
                        <button
                          type="button"
                          className="expo-detail-arrow expo-detail-arrow-prev"
                          onClick={() =>
                            moveDetailImage(item.id, detailImages.length, -1)
                          }
                          aria-label="前の写真"
                        >
                          <span aria-hidden="true">‹</span>
                        </button>
                      )}
                      <div className="expo-detail-slide">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={activeDetail.src}
                            className="expo-detail-image-layer"
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -24 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                          >
                            <Image
                              src={activeDetail.src}
                              alt={activeDetail.alt}
                              fill
                              sizes="400px"
                              className="expo-detail-photo"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      {detailImages.length > 1 && (
                        <button
                          type="button"
                          className="expo-detail-arrow expo-detail-arrow-next"
                          onClick={() =>
                            moveDetailImage(item.id, detailImages.length, 1)
                          }
                          aria-label="次の写真"
                        >
                          <span aria-hidden="true">›</span>
                        </button>
                      )}
                    </div>
                    {detailImages.length > 1 && (
                      <div className="expo-detail-dots" aria-label="写真を選択">
                        {detailImages.map((image, index) => (
                          <button
                            type="button"
                            key={image.src}
                            className={`expo-detail-dot ${
                              index === detailImageIndex ? "is-active" : ""
                            }`}
                            onClick={() => selectDetailImage(item.id, index)}
                            aria-label={`${index + 1}枚目の写真を表示`}
                            aria-pressed={index === detailImageIndex}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
              
              <div className="floor-platform">
                <Image
                  src={item.person}
                  alt={item.personAlt}
                  width={pWidth}
                  height={300}
                  unoptimized
                  className={`person-gif ${
                    item.side === "left" ? "person-left" : "person-right"
                  }`}
                  style={{
                    transform: `translateY(${pOffset})`,
                    width: `${pWidth}px`,
                    height: "auto",
                  }}
                />
              </div>
            </article>
          );
        })}
      </div>
      </section>

      <section id="stamp" className="section-container stamp-section">
        <SectionTitle title="Stamp Rally" label="スタンプラリー" />
        <motion.div
          className="stamp-panel"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="stamp-prize-wrap">
            <Image
              src="/stamp-rally/stamp-rally-prize.webp"
              alt="スタンプラリーの景品として配布される3Dプリンター製の小物"
              width={4032}
              height={3024}
              className="stamp-prize-image"
            />
          </div>
          <div className="stamp-copy">
            <p className="stamp-lead">
              工学部6号館 2階・3階で展示中の複数の企画を巡って、台紙にスタンプを集めよう！
            </p>
            <div className="stamp-copy-column">
              <ul className="stamp-rules">
                <li>各班の課題クリアにつきスタンプ1つ</li>
                <li>スタンプ3つで景品1つと交換</li>
                <li>景品の交換は来場者1名につき1回まで</li>
              </ul>
            </div>
            <div className="stamp-copy-column">
              <div className="stamp-exchange">
                <p className="stamp-room">景品交換: <br /> 工学部6号館 2階 63号講義室 受付 </p>
                <p className="stamp-prize-line">
                  景品: <br /> 3Dプリンターで制作した、展示にまつわるものなど（画像参照）
                </p>
              </div>
              <p className="stamp-note">
                ※景品の個数には限りがあります。先着順でのお渡しとなります。
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="magazine" className="section-container stamp-section">
        <SectionTitle title="Pathway Into Applied Physics" label="応用物理の散歩道" />
        <motion.div
          className="magazine-panel"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="magazine-cover-wrap">
            <Image
              src="/magazine/magazine-cover.webp"
              alt="応用物理の散歩道の表紙"
              width={708}
              height={1000}
              className="magazine-cover"
            />
          </div>
          <div className="magazine-copy">
            <p className="magazine-lead">
              「応用物理の散歩道」は、物理工学科・計数工学科の学生が
              それぞれの専門や関心を記事にしたマガジンです。
            </p>
            <p>
              工学博覧会の展示にまつわる理論の解説、学生目線での学科生活、
              個人の学問的関心についての記事を収録しています。
            </p>
            <dl className="magazine-specs">
              <div>
                <dt>B5版</dt>
                <dd>218ページ</dd>
              </div>
              <div>
                <dt>会場販売</dt>
                <dd>書籍版 500円</dd>
              </div>
              <div>
                <dt>オンライン販売</dt>
                <dd>PDF版 450円</dd>
              </div>
            </dl>
            <a
              href={magazineUrl}
              target="_blank"
              rel="noreferrer"
              className="magazine-button"
            >
              詳細・購入ページへ
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </section>

      <section id="mayfes-election" className="section-container">
          <SectionTitle title="Mayfes Vote" label="五月祭総選挙" />
          <motion.div
            className="election-panel"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="election-copy">
              <h3 className="text-3xl font-main leading-tight sm:text-5xl">
                工学博覧会に投票する
              </h3>
              <p className="mt-5 max-w-2xl leading-8">
                展示をお楽しみいただけたら、五月祭総選挙で「工学博覧会」への投票をお願いします。
                皆さまの一票が、企画の応援になります。
              </p>
            </div>
            <a
              href={electionUrl}
              target="_blank"
              rel="noreferrer"
              className="election-button"
            >
              投票ページを開く
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
      </section>

      <section id="access" className="section-container">
        <SectionTitle title="Access" label="アクセス" />
        <div className="access-box mt-12">
          <iframe
            className="map-frame"
            title="東京大学 工学部6号館の地図"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4909203284556!2d139.75852007666546!3d35.71414327257669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c31b6a0c8eb%3A0xb76f6e1eaadfecf6!2z44CSMTEzLTAwMzMg5p2x5Lqs6YO95paH5Lqs5Yy65pys6YO377yX5LiB55uu77yTIOW3pTblj7fppKg!5e0!3m2!1sja!2sjp!4v1740764212343!5m2!1sja!2sjp"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="flex-1">
            <h3 className="text-2xl">東京大学 本郷キャンパス</h3>
            <p className="mt-5 leading-8">工学部 6号館 2階・3階</p>
            <hr className="my-6 border-neutral-200" />
            <p className="text-base leading-8">
            本郷三丁目駅（地下鉄丸の内線）より徒歩8分
            <br />
            湯島駅または根津駅（地下鉄千代田線）より徒歩10分
            <br />
            東大前駅（地下鉄南北線）より徒歩5分
            <br />
            春日駅（地下鉄三田線）より徒歩15分
            </p>
          </div>
        </div>
      </section>

      <section id="related-links" className="section-container related-links-section">
        <SectionTitle title="Links" label="関連リンク" />
        <div className="related-links-columns">
          {relatedLinkGroups.map((group) => (
            <section key={group.title} className="related-link-group">
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <footer className="px-5 py-16 text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base font-semibold">
          <a
            href="https://x.com/apmayfes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-65"
          >
            <span className="grid h-6 w-6 place-items-center rounded-[4px] bg-black p-1">
              <Image
                src="/social-media-logos/logo.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4"
              />
            </span>
            @apmayfes
          </a>
          <a
            href="https://www.instagram.com/apmayfest"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-65"
          >
            <Image
              src="/social-media-logos/Instagram_Glyph_Gradient.svg"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6"
            />
            @apmayfest
          </a>
        </div>
        <p className="mt-6 font-display text-xl">
          &copy; 工学博覧会 2026
        </p>
        <p className="mt-3 text-base">Designed by Freepik</p>
      </footer>
    </main>
  );
}

function SectionTitle({
  id,
  title,
  label,
}: {
  id?: string;
  title: string;
  label: string;
}) {
  return (
    <div className="section-title-container">
      <motion.h2
        id={id}
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="section-title-label">{label}</span>
        <motion.span
          aria-hidden="true"
          className="title-line"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <span className="section-title-text">{title}</span>
      </motion.h2>
    </div>
  );
}
