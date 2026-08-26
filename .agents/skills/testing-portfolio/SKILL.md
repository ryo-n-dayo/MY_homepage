# Testing: ryo-n-dayo Portfolio Site

## Overview
Vite + React + TypeScript + Tailwind CSS の1ページ構成のポートフォリオ。
すべての表示内容は `src/App.tsx` 内の `copy` オブジェクト（`ja` / `en`）にデータとして持たせており、
セクションは Works / Awards / Career / Languages の4つ。画像アセットはなし（`public/` は空）。

## Local Testing
- `npm install` の後 `npm run dev` → http://localhost:5173
- 本番同等の確認は `npm run build` → `npm run preview`
- `npm run build` は `tsc -b` を含むので、型エラーがあればここで落ちる

## What to Test

### 言語切り替え（JA / EN）
- ヘッダー右上の `JA` / `EN` ボタン。React の state 切り替えで、`document.documentElement.lang` も追従する
- 両言語で Works / Awards / Career / Languages の全項目が表示されること
- `copy.ja` と `copy.en` で配列の要素数が揃っていること（片方だけ項目を足すと表示が食い違う）

### テーマ切り替え（ライト / ダーク）
- 月／太陽アイコンのボタンが `<html>` に `dark` クラスを付け外しする（Tailwind の `darkMode: 'class'`）
- 既定は白ベース。ダーク時に文字・枠線・アバターの前景背景が反転すること
- 状態は保存していない（リロードで白に戻るのが仕様）

### レイアウト
- 本文は `max-w-2xl` の1カラム。375px 幅でも横スクロールが出ないこと
- Languages セクションはラベル幅固定の2カラム。日本語・英語どちらでも折り返さないこと

### リンク
- メール（`mailto:`）、GitHub、各エントリのリンクが 200 で開けること
  - Gymgrind は非公開リポジトリではなく紹介ページ https://ryo-n-dayo.github.io/Gymgrind/ を指す
- 外部リンクはすべて `target="_blank"` + `rel="noreferrer"`

### アクセシビリティ
- アイコンのみのボタン・リンクに `aria-label` があること
- 言語ボタンに `aria-pressed` が入っていること
- `prefers-reduced-motion: reduce` でフェードインが無効になること（`src/index.css`）

## 内容を編集する場所
`src/App.tsx` の配列に追記するだけで項目が増える（`ja` と `en` の両方に同じ形で入れる）。
- 制作物 → `items`
- 受賞 → `awardItems`
- 経歴 → `careerItems`
- 言語 → `languageItems`

`text` / `stack` / `href` / `linkLabel` は任意。書かなければその行は描画されない。

## CI / デプロイ
`.github/workflows/deploy.yml` が `main` への push で `npm ci && npm run build` を実行し、
`dist` を GitHub Pages（https://ryo-n-dayo.github.io/）へ公開する。
デプロイ後の確認は、配信中の `assets/index-*.js` のハッシュがローカルの `dist/assets/` と一致するかを見るのが確実。

## Devin Secrets Needed
None — 認証もAPIキーも使っていない静的サイト。
