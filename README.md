# Ryo — Portfolio & Blog

Ryo の個人ポートフォリオ兼ブログです。Next.js で構築しており、日英切り替えとライト・ダークテーマに対応しています。

## 見る

Vercel にデプロイ後、Vercel が発行する URL または設定した独自ドメインから閲覧できます。

## 使用技術

- Next.js
- React + TypeScript
- Lucide React

## 開発

```bash
npm install
npm run dev
```

本番ビルドは `npm run build`、ローカルでの本番起動は `npm run start` です。

## 記事の追加

`src/lib/posts.ts` の `posts` 配列に、`slug`、`title`、`date`、`description`、`content` を追加すると、トップページと `/blog/<slug>` に記事が生成されます。

## Vercel への公開

Vercel で GitHub リポジトリ `ryo-n-dayo/ryo-n-dayo.github.io` を Import してください。Framework Preset は **Next.js**、Build Command は `npm run build` のままで公開できます。以後は `main` への push ごとに Vercel が自動デプロイします。
