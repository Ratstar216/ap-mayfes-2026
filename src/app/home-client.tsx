"use client";

import Image from "next/image";
import { Gift, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  defaultLocale,
  electionUrl,
  getDictionary,
  type Locale,
  magazineUrl,
} from "@/lib/i18n";

const assetBasePath = process.env.NODE_ENV === "production" ? "/2026" : "";

function assetPath(path: string) {
  return `${assetBasePath}${path}`;
}

type Exhibition = {
  id: string;
  side: "left" | "right";
  color: string;
  icon: string;
  detailImages?: {
    src: string;
  }[];
  person: string;
  personWidth?: number;
  personOffset?: string;
};

const exhibitionAssets: Exhibition[] = [
  {
    id: "board-game",
    side: "left",
    color: "#FF4B00",
    icon: assetPath("/expo-assets/boardgame.svg"),
    detailImages: [
      {
        src: assetPath("/expo-details/boardgame/quoridor_web.webp"),
      },
    ],
    person: assetPath("/expo-assets/man-reading.gif"),
    personWidth: 400,
  },
  {
    id: "security",
    side: "right",
    color: "#f6aa00",
    icon: assetPath("/expo-assets/security.svg"),
    detailImages: [
      {
        src: assetPath("/expo-details/security/security-rsa.webp"),
      },
      {
        src: assetPath("/expo-details/security/security-pkc.webp"),
      },
    ],
    person: assetPath("/expo-assets/cat_right.gif"),
    personOffset: "-21px",
  },
  {
    id: "light",
    side: "left",
    color: "#FFF100",
    icon: assetPath("/expo-assets/light.svg"),
    detailImages: [
      {
        src: assetPath("/expo-details/light/light1.webp"),
      },
    ],
    person: assetPath("/expo-assets/man-waving.gif"),
    personWidth: 450,
    personOffset: "12px",
  },
  {
    id: "finance",
    side: "right",
    color: "#804000",
    icon: assetPath("/expo-assets/finance.svg"),
    detailImages: [
      {
        src: assetPath("/expo-details/finance/finance.webp"),
      },
    ],
    person: assetPath("/expo-assets/woman-sitting.gif"),
    personWidth: 400,
    personOffset: "12px",
  },
  {
    id: "materials",
    side: "left",
    color: "#03AF7A",
    icon: assetPath("/expo-assets/materials.svg"),
    person: assetPath("/expo-assets/cat_left.gif"),
    personWidth: 400,
    personOffset: "32px",
  },
  {
    id: "control",
    side: "right",
    color: "#005AFF",
    icon: assetPath("/expo-assets/control.svg"),
    detailImages: [
      {
        src: assetPath("/expo-details/control/control_reaction_wheel_jikki.webp"),
      },
      {
        src: assetPath("/expo-details/control/control_reaction_wheel_simulation.webp"),
      },
    ],
    person: assetPath("/expo-assets/woman-writing.gif"),
    personWidth: 420,
    personOffset: "-25px",
  },
  {
    id: "statistics",
    side: "left",
    color: "#4dc4ff",
    icon: assetPath("/expo-assets/statistics.svg"),
    detailImages: [
      {
        src: assetPath("/expo-details/statistics/statistics.webp"),
      },
      {
        src: assetPath("/expo-details/statistics/monty_hall_simulator.webp"),
      },
      {
        src: assetPath("/expo-details/statistics/submarine_search.webp"),
      },
      {
        src: assetPath("/expo-details/statistics/wisdom_of_crowds.webp"),
      },
      {
        src: assetPath("/expo-details/statistics/wait_time.webp"),
      },
    ],
    person: assetPath("/expo-assets/man-thinking.gif"),
    personWidth: 400,
    personOffset: "70px",
  },
  {
    id: "quantum",
    side: "right",
    color: "#c8c8cb",
    icon: assetPath("/expo-assets/quantum.svg"),
    detailImages: [
      {
        src: assetPath("/expo-details/quantum/quantum1.webp"),
      },
      {
        src: assetPath("/expo-details/quantum/quantum2.webp"),
      },
    ],
    person: assetPath("/expo-assets/woman-waving.gif"),
    personOffset: "-45px",
  },
];

export default function Home({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const alternatePath = `${assetBasePath}/${t.alternateLocale}`;
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/85 px-4 backdrop-blur-md sm:px-12">
        <div className="header-inner mx-auto max-w-7xl">
          <div className="header-main-row">
          <a
            href="#hero"
            className="site-brand font-main tracking-wide"
          >
            {t.siteName}
          </a>
            <a
              href={alternatePath}
              hrefLang={t.alternateLocale}
              className="language-switch hover:opacity-65"
              onClick={(event) => {
                event.currentTarget.href = `${alternatePath}${window.location.hash}`;
              }}
            >
              {t.alternateLabel}
            </a>
          </div>
          <nav className="site-nav font-main" aria-label="Primary">
            {t.navItems.map((item) => (
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
              src={assetPath("/expo-assets/logo-black.svg")}
              alt=""
              width={650}
              height={650}
              priority
              className="h-auto w-full rounded-[15px]"
            />
            <div className="absolute left-1/2 top-[68%] w-full -translate-x-1/2 -translate-y-1/2 px-[8%] text-center">
              <div>
                <h1 className="whitespace-nowrap text-[1.9rem] font-bold leading-none sm:text-[2.55rem] lg:text-[2.9rem]">
                  {t.hero.title}
                </h1>
                <p className="mt-5 whitespace-nowrap font-display text-[1.1rem] tracking-[0.16em] text-neutral-800 sm:text-[1.7rem] lg:text-[1.95rem]">
                  {t.hero.appliedPhysics}
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
            {t.hero.departments.map((department) => (
              <p key={department}>{department}</p>
            ))}
            <div className="hero-course-list mt-2 text-2xl leading-[1.55] sm:text-3xl">
              {t.hero.courses.map((course) => (
                <p key={course}>
                  <span aria-hidden="true" />
                  <span>{course}</span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section-container about-section" aria-labelledby="about-title">
        <SectionTitle id="about-title" title="About" label={t.sectionLabels.about} />
        <motion.p
          className="about-copy"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {t.about}
        </motion.p>
      </section>

      <section id="exhibitions" aria-labelledby="exhibitions-title">
        <SectionTitle id="exhibitions-title" title="Exhibitions" label={t.sectionLabels.exhibitions} />

      <div className="mt-14">
        {exhibitionAssets.map((asset) => {
          const item = t.exhibitions.find((exhibition) => exhibition.id === asset.id);
          if (!item) {
            return null;
          }
          const pWidth = asset.personWidth ?? 300;
          const pOffset = asset.personOffset ?? "0px";
          const detailImages = asset.detailImages ?? [];
          const detailImageIndex = activeDetailImage[item.id] ?? 0;
          const activeDetail = detailImages[detailImageIndex] ?? detailImages[0];
        
          return (
            <article
              key={item.id}
              className={`exhibition-block ${
                asset.side === "left" ? "side-left" : "side-right"
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
                <span className="tap-hint">{t.ui.tap}</span>
                <span
                  className="icon-obj"
                  style={{ borderColor: asset.color }}
                  aria-hidden="true"
                >
                  <Image src={asset.icon} alt="" width={160} height={160} />
                </span>
                <span className="sr-only">{t.ui.detailButton(item.title)}</span>
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
                  borderTopColor: asset.color,
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
                    aria-label={t.ui.photoRegion(item.title)}
                  >
                    <div className="expo-detail-photo-frame">
                      {detailImages.length > 1 && (
                        <button
                          type="button"
                          className="expo-detail-arrow expo-detail-arrow-prev"
                          onClick={() =>
                            moveDetailImage(item.id, detailImages.length, -1)
                          }
                          aria-label={t.ui.prevPhoto}
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
                              alt={item.detailAlts[detailImageIndex] ?? ""}
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
                          aria-label={t.ui.nextPhoto}
                        >
                          <span aria-hidden="true">›</span>
                        </button>
                      )}
                    </div>
                    {detailImages.length > 1 && (
                      <div className="expo-detail-dots" aria-label={t.ui.photoPicker}>
                        {detailImages.map((image, index) => (
                          <button
                            type="button"
                            key={image.src}
                            className={`expo-detail-dot ${
                              index === detailImageIndex ? "is-active" : ""
                            }`}
                            onClick={() => selectDetailImage(item.id, index)}
                            aria-label={t.ui.photoAt(index + 1)}
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
                  src={asset.person}
                  alt={item.personAlt}
                  width={pWidth}
                  height={300}
                  unoptimized
                  className={`person-gif ${
                    asset.side === "left" ? "person-left" : "person-right"
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
        <SectionTitle title="Stamp Rally" label={t.sectionLabels.stamp} />
        <motion.div
          className="stamp-panel"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="stamp-prize-wrap">
            <Image
              src={assetPath("/stamp-rally/stamp-rally-prize.webp")}
              alt={t.stamp.prizeAlt}
              width={4032}
              height={3024}
              className="stamp-prize-image"
            />
          </div>
          <div className="stamp-copy">
            <p className="stamp-lead">{t.stamp.lead}</p>
            <div className="stamp-copy-column">
              <ul className="stamp-rules">
                {t.stamp.rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
            <div className="stamp-copy-column">
              <div className="stamp-exchange">
                <p className="stamp-room">
                  <MapPin className="stamp-row-icon" aria-hidden="true" strokeWidth={2.4} />
                  <span>{t.stamp.exchange} <br /> {t.stamp.exchangePlace}</span>
                </p>
                <p className="stamp-prize-line">
                  <Gift className="stamp-row-icon" aria-hidden="true" strokeWidth={2.4} />
                  <span><strong>{t.stamp.prize}</strong> <br /> {t.stamp.prizeText}</span>
                </p>
              </div>
              <p className="stamp-note">{t.stamp.note}</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="magazine" className="section-container stamp-section">
        <SectionTitle title="Pathways Into Applied Physics" label={t.sectionLabels.magazine} />
        <motion.div
          className="magazine-panel"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="magazine-cover-wrap">
            <Image
              src={assetPath("/magazine/magazine-cover.webp")}
              alt={t.magazine.coverAlt}
              width={708}
              height={1000}
              className="magazine-cover"
            />
          </div>
          <div className="magazine-copy">
            <p className="magazine-lead">{t.magazine.lead}</p>
            <p>{t.magazine.copy}</p>
            <dl className="magazine-specs">
              {t.magazine.specs.map((spec) => (
                <div key={spec.term}>
                  <dt>{spec.term}</dt>
                  <dd>{spec.description}</dd>
                </div>
              ))}
            </dl>
            <a
              href={magazineUrl}
              target="_blank"
              rel="noreferrer"
              className="magazine-button"
            >
              {t.magazine.button}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </section>

      <section id="mayfes-election" className="section-container">
          <SectionTitle title="Mayfes Vote" label={t.sectionLabels.election} />
          <motion.div
            className="election-panel"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="election-copy">
              <h3 className="text-3xl font-main leading-tight sm:text-5xl">
                {t.election.title}
              </h3>
              <p className="mt-5 max-w-2xl leading-8">{t.election.copy}</p>
            </div>
            <a
              href={electionUrl}
              target="_blank"
              rel="noreferrer"
              className="election-button"
            >
              {t.election.button}
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
      </section>

      <section id="access" className="section-container">
        <SectionTitle title="Access" label={t.sectionLabels.access} />
        <div className="access-box mt-12">
          <iframe
            className="map-frame"
            title={t.access.mapTitle}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4909203284556!2d139.75852007666546!3d35.71414327257669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c31b6a0c8eb%3A0xb76f6e1eaadfecf6!2z44CSMTEzLTAwMzMg5p2x5Lqs6YO95paH5Lqs5Yy65pys6YO377yX5LiB55uu77yTIOW3pTblj7fppKg!5e0!3m2!1sja!2sjp!4v1740764212343!5m2!1sja!2sjp"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="flex-1">
            <h3 className="text-2xl">{t.access.campus}</h3>
            <p className="mt-5 leading-8">{t.access.place}</p>
            <hr className="my-6 border-neutral-200" />
            <p className="text-base leading-8">
            {t.access.routes.map((route) => (
              <span key={route}>
                {route}
                <br />
              </span>
            ))}
            </p>
          </div>
        </div>
      </section>

      <section id="related-links" className="section-container related-links-section">
        <SectionTitle title="Links" label={t.sectionLabels.links} />
        <div className="related-links-columns">
          {t.relatedLinkGroups.map((group) => (
            <section
              key={group.title}
              className={`related-link-group ${
                "noWrapLinks" in group && group.noWrapLinks
                  ? "related-link-group-nowrap"
                  : ""
              }`}
            >
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
                src={assetPath("/social-media-logos/logo.svg")}
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
              src={assetPath("/social-media-logos/Instagram_Glyph_Gradient.svg")}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6"
            />
            @apmayfest
          </a>
        </div>
        <p className="mt-6 font-display text-xl">
          &copy; {t.footer.copyright}
        </p>
        <p className="mt-3 text-base">{t.footer.credit}</p>
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
