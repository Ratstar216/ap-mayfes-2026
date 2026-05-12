"use client";

import Image from "next/image";
import { motion } from "motion/react";
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

type Exhibition = {
  id: string;
  side: "left" | "right";
  title: string;
  copy: string;
  color: string;
  icon: string;
  iconAlt: string;
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
    copy: "ボードゲームを作り、それをプレイすることで、ゲームの楽しさや工学の面白さを感じてみましょう！（仮）",
    color: "#FF4B00",
    icon: "/expo-assets/boardgame.svg",
    iconAlt: "ボードゲーム班",
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
    person: "/expo-assets/woman-sitting.gif",
    personAlt: "座っている女性",
  },
  {
    id: "light",
    side: "left",
    title: "光班",
    copy: "光の不思議な性質を体験型展示で解き明かします。（仮）",
    color: "#FFF100",
    icon: "/expo-assets/light.svg",
    iconAlt: "光班",
    person: "/expo-assets/man-waving.gif",
    personAlt: "手を振っている男性",
    personWidth: 450,
    personOffset: "12px",
  },
  {
    id: "finance",
    side: "right",
    title: "金融班",
    copy: "数理モデルで再現された金融市場の値動きを見ながら自動取引AIとどちらがより利益を出せるか勝負しよう！！",
    color: "#804000",
    icon: "/expo-assets/finance.svg",
    iconAlt: "金融班",
    person: "/expo-assets/woman-writing.gif",
    personAlt: "物を書いている女性",
    personWidth: 400,
    personOffset: "-25px",
  },
  {
    id: "materials",
    side: "left",
    title: "物性班",
    copy: "物性の不思議な性質を体験型展示で解き明かします。（仮）",
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
    copy: "制御の不思議な性質を体験型展示で解き明かします。（仮）",
    color: "#005AFF",
    icon: "/expo-assets/control.svg",
    iconAlt: "制御班",
    person: "/expo-assets/woman-waving.gif",
    personAlt: "手を振っている女性",
    personWidth: 420,
    personOffset: "-45px",
  },
  {
    id: "statistics",
    side: "left",
    title: "確率統計班",
    copy: "確率統計の不思議な性質を体験型展示で解き明かします。（仮）",
    color: "#4dc4ff",
    icon: "/expo-assets/statistics.svg",
    iconAlt: "確率統計班",
    person: "/expo-assets/man-reading.gif",
    personAlt: "本を読んでいる男性",
    personWidth: 400,
  },
  {
    id: "quantum",
    side: "right",
    title: "量子班：ミクロの探検",
    copy: "目には見えないミクロな世界の不思議な振る舞いを、体験型展示を通して解き明かします。",
    color: "#c8c8cb",
    icon: "/expo-assets/quantum.svg",
    iconAlt: "量子班",
    person: "/expo-assets/woman-sitting.gif",
    personAlt: "座っている女性",
  },
  
  
];

const stamps = ["量子", "光", "物性"];

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

  function togglePanel(id: string) {
    setActivePanel((current) => (current === id ? null : id));
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/85 px-5 backdrop-blur-md sm:px-12">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-5">
          <a
            href="#about"
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
        id="about"
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

      <section id="exhibitions" aria-labelledby="exhibitions-title">
        <SectionTitle id="exhibitions-title" title="Exhibitions" label="展示一覧" />

      <div className="mt-14">
        {exhibitions.map((item) => {
          const pWidth = item.personWidth ?? 300;
          const pOffset = item.personOffset ?? "0px";
        
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
                  y: activePanel === item.id ? 0 : 12,
                  pointerEvents: activePanel === item.id ? "auto" : "none",
                }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-detail text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 font-detail leading-8">{item.copy}</p>
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
        <p className="mx-auto mt-10 max-w-3xl text-center leading-8">
          3つ以上の班をまわって各班でゲームやクイズにクリアすると、限定特典をプレゼント！
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {stamps.map((stamp) => (
            <div
              key={stamp}
              className="grid h-20 w-20 place-items-center rounded-full border-[3px] border-dashed border-neutral-500 text-sm"
            >
              {stamp}
            </div>
          ))}
        </div>
      </section>

      <section id="magazine" className="section-container stamp-section">
        <SectionTitle title="Pathway Into Applied Physics" label="応用物理の散歩道" />
        <p className="mx-auto mt-10 max-w-3xl text-center leading-8">
          工学博覧会の展示に関する記事を掲載しています。（仮）
        </p>
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
