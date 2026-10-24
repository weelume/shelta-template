# Shelta 房产模板

Next.js / React / TypeScript / Framer Motion。默认中文，/en 英文。包括 8 个房源、12 篇文章、服务、团队、联系、工具及政策页面。

Node 版本见 .nvmrc，pnpm 9.15.4。安装 `pnpm install --frozen-lockfile`；开发 `pnpm dev`，默认 http://127.0.0.1:43338；Ctrl+C 停止。检查 `pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build`。正式运行 `pnpm start`。

所有表单仅本地校验，不发送、不保存；无数据库、邮件或支付。素材权利尚未逐项核实，不声明允许再分发。

品牌见 config/brand.ts；内容见 content.ts 和 reference.json；主题见 theme.css；页面见 pages；公共交互见 components。详见 docs/ARCHITECTURE.md、docs/CUSTOMIZATION.md、docs/VERIFICATION.md 和 docs/LICENSE.md。
