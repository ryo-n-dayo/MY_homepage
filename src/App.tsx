import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

type Language = 'ja' | 'en'

const copy = {
  ja: {
    nav: ['ホーム', '自己紹介', '制作物', '連絡'],
    hero: {
      eyebrow: 'Cyber Security Student / Product Builder',
      title: 'Ryoの\nPortfolio.',
      note: '安全性と使いやすさを両立し、アイデアを日常で使えるプロダクトへ変えていきます。',
      cta: '制作物を見る',
      myth: 'Code / Security / Creation',
      scroll: 'スクロール',
    },
    about: {
      label: '自己紹介',
      heading: '複雑な課題を、\n使いやすい形にする。',
      paragraphs: [
        'マレーシアでComputer Scienceを学ぶ大学生です。専攻はCyber Security。安全なシステムの考え方を軸に、WebとiOSのプロダクト開発にも取り組んでいます。',
        '機能を増やすことより、ユーザーがどこで迷うかを見つけることを大切にしています。課題の整理、UI設計、実装、検証まで、自分の手で一つずつ形にします。',
      ],
      focus: ['Cyber Security', 'Product Development', 'Human-centered UI'],
    },
    works: {
      label: '代表制作物',
      heading: 'Selected\nProjects.',
      intro: '自分自身が感じた不便から出発し、実際に使い続けられる体験を目指して作った2つのプロダクトです。',
      role: '担当',
      stack: '技術',
      repository: 'リポジトリを見る',
    },
    projects: [
      {
        name: 'Gymgrind',
        type: 'iOS / Personal Project',
        tagline: '記録の面倒を減らし、トレーニングだけに集中する。',
        description: 'ワークアウト内容、重量、回数、休憩時間を素早く記録できるiOSアプリです。履歴カレンダー、種目別の成長グラフ、Live Activityのレストタイマー、オンデバイスAI分析まで実装。アカウント不要で、記録は端末内に保存します。',
        role: '企画・UI設計・iOS実装・リリース準備',
        stack: 'Swift / SwiftUI / SwiftData / HealthKit / ActivityKit',
      },
      {
        name: 'Career Leader',
        type: 'Web / Personal Project',
        tagline: '情報を探す時間を減らし、次の行動を見えるようにする。',
        description: '企業サイト、SNS、メールなどに分散する就職活動の情報を、一つの画面で管理するWebアプリです。締切の可視化、企業比較、AI要約、Gmail・Google Calendar連携を実装し、「次に何をするべきか」を判断しやすくしました。',
        role: '課題設定・UI設計・フロントエンド・API・DB',
        stack: 'JavaScript / TypeScript / Next.js / React / Prisma',
      },
    ],
    skills: {
      label: '使える技術',
      heading: 'Core\nLanguages.',
      note: '授業・個人開発・チーム開発で使用している主要言語。',
      items: [
        ['Java', 'オブジェクト指向、JavaFX、API通信'],
        ['C++', 'データ構造、アルゴリズム、計算量'],
        ['Swift', 'SwiftUI、iOS、端末内データ管理'],
        ['JavaScript', 'React、Next.js、Web UI、API連携'],
      ],
      major: '専攻',
      majorValue: 'Cyber Security',
      foundations: '基礎領域',
      foundationsValue: 'Network / OS / Database / DSA',
    },
    contact: {
      label: '連絡先',
      heading: 'Contact.',
      note: 'プロジェクト、インターン、技術についてのご連絡はこちらから。',
      email: 'メール',
      github: 'GitHub',
      back: 'トップへ戻る',
    },
  },
  en: {
    nav: ['Home', 'About', 'Works', 'Contact'],
    hero: {
      eyebrow: 'Cyber Security Student / Product Builder',
      title: "Ryo's\nPortfolio.",
      note: 'I turn ideas into useful products where security and usability move forward together.',
      cta: 'Explore my work',
      myth: 'Code / Security / Creation',
      scroll: 'Scroll',
    },
    about: {
      label: 'About',
      heading: 'Making complex\nproblems usable.',
      paragraphs: [
        'I am a Computer Science student in Malaysia, majoring in Cyber Security. Alongside secure system design, I build web and iOS products.',
        'I care less about adding more features and more about finding where people get stuck. I work through problem framing, interface design, implementation, and validation to turn an idea into something usable.',
      ],
      focus: ['Cyber Security', 'Product Development', 'Human-centered UI'],
    },
    works: {
      label: 'Selected Works',
      heading: 'Selected\nProjects.',
      intro: 'Two products that began with problems I experienced firsthand and were shaped into tools designed for repeated, everyday use.',
      role: 'Role',
      stack: 'Stack',
      repository: 'View repository',
    },
    projects: [
      {
        name: 'Gymgrind',
        type: 'iOS / Personal Project',
        tagline: 'Spend less time logging and more time training.',
        description: 'An iOS app for quickly logging exercises, weights, reps, and rest time. It includes a workout calendar, progress charts, a Live Activity rest timer, and on-device AI analysis. No account is required and workout data stays on the device.',
        role: 'Concept, UI design, iOS development, release preparation',
        stack: 'Swift / SwiftUI / SwiftData / HealthKit / ActivityKit',
      },
      {
        name: 'Career Leader',
        type: 'Web / Personal Project',
        tagline: 'Spend less time searching and make the next action visible.',
        description: 'A web app that brings career information from company sites, social media, and email into one workspace. Deadline visualization, company comparison, AI summaries, Gmail, and Google Calendar integrations make the next action easier to identify.',
        role: 'Problem framing, UI, frontend, APIs, and database',
        stack: 'JavaScript / TypeScript / Next.js / React / Prisma',
      },
    ],
    skills: {
      label: 'Toolkit',
      heading: 'Core\nLanguages.',
      note: 'The main languages I use across coursework, personal products, and team development.',
      items: [
        ['Java', 'Object-oriented design, JavaFX, API communication'],
        ['C++', 'Data structures, algorithms, complexity'],
        ['Swift', 'SwiftUI, iOS, on-device data'],
        ['JavaScript', 'React, Next.js, web UI, API integration'],
      ],
      major: 'Major',
      majorValue: 'Cyber Security',
      foundations: 'Foundations',
      foundationsValue: 'Network / OS / Database / DSA',
    },
    contact: {
      label: 'Contact',
      heading: 'Contact.',
      note: 'For projects, internships, or conversations about technology.',
      email: 'Email',
      github: 'GitHub',
      back: 'Back to top',
    },
  },
} as const

const navHrefs = ['#home', '#about', '#works', '#contact']

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noreferrer">{children}</a>
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

function App() {
  const [language, setLanguage] = useState<Language>('ja')
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [language])

  return (
    <main className="w-full overflow-x-hidden bg-[#17131d] font-hn text-cream">
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:pt-5">
        <div className="top-dock flex max-w-full items-center gap-1 rounded-full border border-white/20 bg-[#111]/75 p-1.5 text-[10px] uppercase tracking-[0.08em] text-white shadow-2xl backdrop-blur-xl sm:gap-2 sm:text-xs">
          <a href="#home" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#111]">R</a>
          <nav className="flex items-center" aria-label="Main navigation">
            {t.nav.map((label, index) => (
              <a key={label} href={navHrefs[index]} className="dock-link rounded-full px-2.5 py-2 transition-colors duration-300 hover:bg-white hover:text-[#111] sm:px-4">{label}</a>
            ))}
          </nav>
          <div className="ml-1 flex items-center rounded-full border border-white/20 p-0.5" aria-label="Language selection">
            {(['ja', 'en'] as const).map((lang) => (
              <button key={lang} type="button" onClick={() => setLanguage(lang)} className={`rounded-full px-2 py-1.5 transition-all duration-300 ${language === lang ? 'bg-white text-[#111]' : 'text-white/55 hover:text-white'}`} aria-pressed={language === lang}>{lang.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </header>

      <section id="home" className="relative h-[100dvh] min-h-[680px] overflow-hidden bg-[#0d0d12] p-2 sm:p-3">
        <div className="myth-hero-frame relative h-full overflow-hidden rounded-[18px] sm:rounded-[24px]">
          <img src="/olympus-gate-hero.png" alt="雲海の上に立つオリンポスへの大理石の門" className="myth-hero-image absolute inset-0 h-full w-full object-cover" />
          <div className="myth-hero-shade absolute inset-0" aria-hidden="true" />
          <div className="myth-halo absolute left-1/2 top-1/2 h-[36vw] w-[36vw] min-h-72 min-w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden="true" />
          <div className="myth-mist myth-mist-back absolute inset-x-[-35%] bottom-[34%] h-[24%]" aria-hidden="true" />
          <div className="myth-mist myth-mist-one absolute inset-x-[-35%] bottom-[12%] h-[34%]" aria-hidden="true" />
          <div className="myth-mist myth-mist-two absolute inset-x-[-38%] bottom-[-12%] h-[45%]" aria-hidden="true" />
          <div className="myth-grain absolute inset-0" aria-hidden="true" />
          <div className="myth-motes absolute inset-0" aria-hidden="true">
            <i /><i /><i /><i /><i /><i />
          </div>

          <div className="absolute inset-0 z-20 flex flex-col px-5 pb-6 pt-24 text-white sm:px-10 sm:pb-9 sm:pt-28 lg:px-14">
            <div className="anim-fade-up flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/70 [animation-delay:300ms]">
              <span className="h-px w-8 bg-white/60" />
              <span>{t.hero.eyebrow}</span>
            </div>

            <div className="my-auto max-w-[44rem] pb-12 sm:pb-4">
              <p className="anim-fade-up mb-4 font-serif text-xs italic tracking-[0.16em] text-[#f1d9aa] [animation-delay:450ms]">{t.hero.myth}</p>
              <h1 className={`myth-title anim-fade-up whitespace-pre-line leading-[0.86] tracking-[-0.065em] [animation-delay:550ms] ${language === 'ja' ? 'text-[clamp(3.3rem,7vw,8rem)]' : 'text-[clamp(3.3rem,7.8vw,8.5rem)]'}`}>{t.hero.title}</h1>
              <p className="anim-fade-up mt-7 max-w-md text-sm leading-7 text-white/75 [animation-delay:700ms] sm:text-base">{t.hero.note}</p>
              <a href="#works" className="myth-cta anim-fade-up mt-8 inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-[10px] uppercase tracking-[0.18em] backdrop-blur-md [animation-delay:800ms]">
                {t.hero.cta}<ArrowDown size={14} strokeWidth={1.5} />
              </a>
            </div>

            <div className="flex items-end justify-between gap-8 text-[9px] uppercase tracking-[0.2em] text-white/55">
              <span>Ryo Nishikawa &nbsp; / &nbsp; 2026</span>
              <a href="#about" className="inline-flex items-center gap-2 text-white/85">{t.hero.scroll}<ArrowDown size={13} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="myth-section myth-section-light px-6 py-24 text-[#29232d] sm:px-10 sm:py-32">
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <SectionLabel number="01">{t.about.label}</SectionLabel>
          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10" data-reveal>
            <h2 className="editorial-heading whitespace-pre-line lg:col-span-8">{t.about.heading}</h2>
            <div className="space-y-7 text-base leading-[1.9] lg:col-span-4 lg:pt-2 lg:text-lg">{t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
          <div className="myth-glass-light mt-24 grid overflow-hidden rounded-[22px] border border-[#75677f]/25 md:grid-cols-3" data-reveal>
            {t.about.focus.map((item, index) => <div key={item} className={`py-7 px-6 text-lg ${index ? 'border-t border-[#75677f]/25 md:border-l md:border-t-0' : ''}`}>0{index + 1}&nbsp;&nbsp;{item}</div>)}
          </div>
        </div>
      </section>

      <section id="works" className="myth-section myth-section-dark px-6 py-24 sm:px-10 sm:py-32">
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <SectionLabel number="02">{t.works.label}</SectionLabel>
          <div className="mt-14 grid items-end gap-10 border-b border-white/25 pb-14 lg:grid-cols-12" data-reveal>
            <h2 className="editorial-heading whitespace-pre-line lg:col-span-8">{t.works.heading}</h2>
            <p className="max-w-md text-sm leading-7 text-white/60 lg:col-span-4">{t.works.intro}</p>
          </div>

          <article className="myth-project-card my-10 p-6 sm:p-10 lg:p-12" data-reveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="order-2 lg:order-1 lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.16em] text-white/45">01 / {t.projects[0].type}</p>
                <h3 className="myth-project-title mt-7 text-[clamp(3.8rem,7vw,7.5rem)] leading-none tracking-[-0.065em]">{t.projects[0].name}</h3>
                <p className="mt-6 text-xl leading-8">{t.projects[0].tagline}</p>
                <p className="mt-8 max-w-xl text-base leading-8 text-white/62">{t.projects[0].description}</p>
                <dl className="mt-10 space-y-4 border-t border-white/20 pt-6 text-sm"><div className="grid grid-cols-[5rem_1fr] gap-4"><dt className="text-white/40">{t.works.role}</dt><dd>{t.projects[0].role}</dd></div><div className="grid grid-cols-[5rem_1fr] gap-4"><dt className="text-white/40">{t.works.stack}</dt><dd>{t.projects[0].stack}</dd></div></dl>
                <ExternalLink href="https://github.com/404-Ryo/Gym_app_ios" className="mt-10 inline-flex items-center gap-2 border-b border-white pb-1 text-sm">{t.works.repository}<ArrowUpRight size={16} /></ExternalLink>
              </div>
              <div className="myth-media order-1 overflow-hidden rounded-[22px] lg:order-2 lg:col-span-7">
                <div className="flex h-[620px] items-start justify-center gap-2 overflow-hidden px-4 pt-10 sm:h-[760px] sm:gap-4 sm:px-8">
                  <img src="/gymgrind-1.png" alt="Gymgrind home screen" className="w-[55%] max-w-[390px] -rotate-3 shadow-2xl" />
                  <img src="/gymgrind-3.png" alt="Gymgrind progress screen" className="mt-24 w-[55%] max-w-[390px] rotate-3 shadow-2xl" />
                </div>
              </div>
            </div>
          </article>

          <article className="myth-project-card my-10 p-6 sm:p-10 lg:p-12" data-reveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="myth-media overflow-hidden rounded-[22px] lg:col-span-7"><img src="/career-radar.png" alt="Career Leader dashboard" className="h-full min-h-[420px] w-full object-cover object-left" /></div>
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.16em] text-white/45">02 / {t.projects[1].type}</p>
                <h3 className="myth-project-title mt-7 text-[clamp(3.4rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.065em]">{t.projects[1].name}</h3>
                <p className="mt-6 text-xl leading-8">{t.projects[1].tagline}</p>
                <p className="mt-8 max-w-xl text-base leading-8 text-white/62">{t.projects[1].description}</p>
                <dl className="mt-10 space-y-4 border-t border-white/20 pt-6 text-sm"><div className="grid grid-cols-[5rem_1fr] gap-4"><dt className="text-white/40">{t.works.role}</dt><dd>{t.projects[1].role}</dd></div><div className="grid grid-cols-[5rem_1fr] gap-4"><dt className="text-white/40">{t.works.stack}</dt><dd>{t.projects[1].stack}</dd></div></dl>
                <ExternalLink href="https://github.com/404-Ryo/Career_Radar" className="mt-10 inline-flex items-center gap-2 border-b border-white pb-1 text-sm">{t.works.repository}<ArrowUpRight size={16} /></ExternalLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="myth-section myth-section-light px-6 py-24 text-[#29232d] sm:px-10 sm:py-32">
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <SectionLabel number="03">{t.skills.label}</SectionLabel>
          <div className="mt-14 grid gap-14 lg:grid-cols-12" data-reveal>
            <div className="lg:col-span-6"><h2 className="editorial-heading whitespace-pre-line">{t.skills.heading}</h2><p className="mt-8 max-w-sm text-sm leading-7">{t.skills.note}</p></div>
            <div className="myth-glass-light overflow-hidden rounded-[22px] border border-[#75677f]/25 lg:col-span-6">
              {t.skills.items.map(([name, detail], index) => <div key={name} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#75677f]/25 px-6 py-6 last:border-0 sm:grid-cols-[3.5rem_10rem_1fr]"><span className="text-xs opacity-45">0{index + 1}</span><strong className="text-2xl font-normal sm:text-3xl">{name}</strong><span className="col-start-2 text-sm leading-6 opacity-60 sm:col-start-3">{detail}</span></div>)}
            </div>
          </div>
          <div className="myth-glass-light mt-20 grid overflow-hidden rounded-[22px] border border-[#75677f]/25 sm:grid-cols-2" data-reveal><div className="p-6 sm:p-8"><p className="text-[10px] uppercase tracking-[0.2em] opacity-45">{t.skills.major}</p><p className="mt-8 text-3xl">{t.skills.majorValue}</p></div><div className="border-t border-[#75677f]/25 p-6 sm:border-l sm:border-t-0 sm:p-8"><p className="text-[10px] uppercase tracking-[0.2em] opacity-45">{t.skills.foundations}</p><p className="mt-8 text-2xl sm:text-3xl">{t.skills.foundationsValue}</p></div></div>
        </div>
      </section>

      <section id="contact" className="myth-section myth-contact-footer px-6 py-20 text-white sm:px-10 sm:py-24">
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <SectionLabel number="04">{t.contact.label}</SectionLabel>
          <div className="mt-14 grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="editorial-heading">{t.contact.heading}</h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/60">{t.contact.note}</p>
            </div>
            <div className="grid gap-3 lg:col-span-5">
              <a href="mailto:ppajt5zzcf@gmail.com" className="contact-link group flex items-center justify-between rounded-2xl border border-white/20 px-5 py-5">
                <span><small className="block text-[9px] uppercase tracking-[0.2em] text-white/45">{t.contact.email}</small><strong className="mt-2 block font-normal">ppajt5zzcf@gmail.com</strong></span>
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} strokeWidth={1.4} />
              </a>
              <ExternalLink href="https://github.com/404-Ryo" className="contact-link group flex items-center justify-between rounded-2xl border border-white/20 px-5 py-5">
                <span><small className="block text-[9px] uppercase tracking-[0.2em] text-white/45">{t.contact.github}</small><strong className="mt-2 block font-normal">github.com/404-Ryo</strong></span>
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} strokeWidth={1.4} />
              </ExternalLink>
            </div>
          </div>
          <footer className="mt-20 flex flex-col gap-4 border-t border-white/20 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Ryo Nishikawa</span>
            <a href="#home" className="transition-colors hover:text-white">{t.contact.back} ↑</a>
          </footer>
        </div>
      </section>

    </main>
  )
}

export default App
