import { useEffect, useState } from 'react'
import { ArrowUpRight, Briefcase, Calendar, FolderGit2, Languages, Mail, Moon, Sun, Trophy } from 'lucide-react'

type Language = 'ja' | 'en'

type Entry = {
  badge: string
  name: string
  sub: string
  period: string
  text?: string
  stack?: string
  href?: string
}

const links = {
  email: 'mailto:ppajt5zzcf@gmail.com',
  github: 'https://github.com/ryo-n-dayo',
}

const copy = {
  ja: {
    role: 'Computer Science 学生 / プロダクト開発',
    works: 'Works',
    awards: 'Awards',
    career: 'Career',
    languages: 'Languages',
    repo: 'リポジトリ',
    theme: 'テーマ切り替え',
    // 制作物：新しいものを上に追加していく
    items: [
      {
        badge: 'GG',
        name: 'Gymgrind',
        sub: 'iOS アプリ · 個人開発',
        period: '2025 — 現在',
        text: '重量・回数・休憩を素早く記録できるトレーニングアプリ。履歴カレンダー、成長グラフ、Live Activity のレストタイマーを実装。記録は端末内に保存。',
        stack: 'Swift · SwiftUI · SwiftData · HealthKit',
        href: 'https://github.com/ryo-n-dayo/Gym_app_ios',
      },
      {
        badge: 'CL',
        name: 'Career Radar',
        sub: 'Web アプリ · 個人開発',
        period: '2025 — 現在',
        text: '就職活動の情報を 1 画面にまとめる Web アプリ。締切の可視化、企業比較、AI 要約、カレンダー連携で「次にやること」を分かりやすくしました。',
        stack: 'TypeScript · Next.js · React · Prisma',
        href: 'https://github.com/ryo-n-dayo/Career_Radar',
      },
    ] as Entry[],
    // 受賞：新しいものを上に追加していく
    awardItems: [
      {
        badge: '',
        name: 'サイボウズ特別賞',
        sub: 'try! Swift Tokyo 2026 ハッカソン for Students',
        period: '2026年4月',
        text: '5人チームで高齢者向け iOS コミュニケーションアプリ「れんらくさき」を 1 日で開発。機能を「電話」と「トーク」に絞った UI 設計と、端末を近づけるだけで連絡先を交換できるオンボーディングを担当しました。',
        stack: 'Swift · SwiftUI · MultipeerConnectivity',
        href: 'https://github.com/ryo-n-dayo/IOSapp',
      },
      {
        badge: '',
        name: 'サポーターズ賞',
        sub: '技育CAMPハッカソン 2026年度 Vol.2 · 株式会社サポーターズ',
        period: '2026年4月',
        text: '就活情報を一元管理する Web アプリ「Career Radar」を個人開発し、50 チームが参加したオンラインハッカソンで受賞しました。',
        stack: 'TypeScript · Next.js · React · Prisma',
        href: 'https://github.com/ryo-n-dayo/Career_Radar',
      },
    ] as Entry[],
    // 経歴：インターンや就業経験が増えたらここに追加
    careerItems: [
      {
        badge: 'CS',
        name: 'Computer Science 専攻',
        sub: '大学 · Cyber Security',
        period: '在学中',
      },
    ] as Entry[],
    languageItems: [
      ['日本語', 'ネイティブ'],
      ['英語', 'ビジネスレベル'],
    ],
  },
  en: {
    role: 'Computer Science Student / Product Builder',
    works: 'Works',
    awards: 'Awards',
    career: 'Career',
    languages: 'Languages',
    repo: 'Repository',
    theme: 'Toggle theme',
    items: [
      {
        badge: 'GG',
        name: 'Gymgrind',
        sub: 'iOS app · Personal project',
        period: '2025 — Present',
        text: 'A training app for quickly logging weights, reps, and rest. Includes a history calendar, progress charts, and a Live Activity rest timer. Data stays on the device.',
        stack: 'Swift · SwiftUI · SwiftData · HealthKit',
        href: 'https://github.com/ryo-n-dayo/Gym_app_ios',
      },
      {
        badge: 'CL',
        name: 'Career Radar',
        sub: 'Web app · Personal project',
        period: '2025 — Present',
        text: 'A web app that brings job-hunting information into one screen: deadline visibility, company comparison, AI summaries, and calendar sync to clarify the next action.',
        stack: 'TypeScript · Next.js · React · Prisma',
        href: 'https://github.com/ryo-n-dayo/Career_Radar',
      },
    ] as Entry[],
    awardItems: [
      {
        badge: '',
        name: 'Cybozu Special Award',
        sub: 'try! Swift Tokyo 2026 Hackathon for Students',
        period: 'Apr 2026',
        text: 'Built "Renrakusaki", an iOS communication app for older users, with a team of five in one day. I designed the pared-down UI and an onboarding flow that exchanges contacts by simply holding two devices close together.',
        stack: 'Swift · SwiftUI · MultipeerConnectivity',
        href: 'https://github.com/ryo-n-dayo/IOSapp',
      },
      {
        badge: '',
        name: 'Supporterz Award',
        sub: 'Giiku CAMP Hackathon 2026 Vol.2 · Supporterz, Inc.',
        period: 'Apr 2026',
        text: 'Won for Career Radar, a web app that keeps job-hunting information in one place, at an online hackathon with 50 participating teams.',
        stack: 'TypeScript · Next.js · React · Prisma',
        href: 'https://github.com/ryo-n-dayo/Career_Radar',
      },
    ] as Entry[],
    careerItems: [
      {
        badge: 'CS',
        name: 'BSc Computer Science',
        sub: 'University · Cyber Security',
        period: 'Current',
      },
    ] as Entry[],
    languageItems: [
      ['Japanese', 'Native'],
      ['English', 'Business level'],
    ],
  },
} as const

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="section-label">{icon}{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function EntryList({ items, repoLabel, badgeIcon }: { items: readonly Entry[]; repoLabel: string; badgeIcon?: React.ReactNode }) {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <article key={item.name} className="flex gap-4">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-[11px] font-semibold tracking-wide dark:border-white/15">
            {badgeIcon ?? item.badge}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="mt-0.5 text-sm opacity-70">{item.sub}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs opacity-40">
              <Calendar size={12} />{item.period}
            </p>
            {item.text && <p className="mt-2 text-sm leading-7 opacity-80">{item.text}</p>}
            {item.stack && <p className="mt-2 text-xs opacity-40">{item.stack}</p>}
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs opacity-55 transition-opacity hover:opacity-100"
              >
                {repoLabel}<ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>('ja')
  const [dark, setDark] = useState(false)
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
      <header className="anim">
        <div className="flex h-28 items-center justify-center rounded-2xl border border-black/[0.06] bg-[#fafafa] sm:h-32 dark:border-white/10 dark:bg-white/[0.04]">
          <span className="font-serif text-2xl tracking-tight opacity-25">Ryo</span>
        </div>

        <div className="-mt-10 flex items-end justify-between pl-1">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#18181a] font-serif text-3xl text-white dark:border-[#121213] dark:bg-[#ededea] dark:text-[#121213]">
            R
          </div>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => setDark((v) => !v)} className="icon-link" aria-label={t.theme}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href={links.email} className="icon-link" aria-label="Email"><Mail size={16} /></a>
            <a href={links.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub"><GithubIcon /></a>
            <div className="ml-1 flex items-center gap-1 text-[11px] font-medium">
              {(['ja', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  aria-pressed={language === lang}
                  className={`rounded-full px-2 py-1 transition-opacity ${language === lang ? 'opacity-100 underline underline-offset-4' : 'opacity-40 hover:opacity-70'}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <h1 className="mt-4 font-serif text-3xl tracking-tight">Ryo</h1>
        <p className="mt-1.5 text-sm opacity-55">{t.role}</p>
      </header>

      <Section icon={<FolderGit2 size={13} />} title={t.works}>
        <EntryList items={t.items} repoLabel={t.repo} />
      </Section>

      <Section icon={<Trophy size={13} />} title={t.awards}>
        <EntryList items={t.awardItems} repoLabel={t.repo} badgeIcon={<Trophy size={14} />} />
      </Section>

      <Section icon={<Briefcase size={13} />} title={t.career}>
        <EntryList items={t.careerItems} repoLabel={t.repo} />
      </Section>

      <Section icon={<Languages size={13} />} title={t.languages}>
        <dl className="space-y-3 text-sm">
          {t.languageItems.map(([label, level]) => (
            <div key={label} className="flex gap-4">
              <dt className="w-24 shrink-0 opacity-45">{label}</dt>
              <dd className="opacity-85">{level}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <footer className="mt-14 border-t border-black/[0.08] pt-5 text-xs opacity-35 dark:border-white/10">
        © 2026 Ryo
      </footer>
    </main>
  )
}

export default App
