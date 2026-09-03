<!-- Hallmark · macrostructure: Split Stage · tone: playful, gentle · anchor hue: ruby pink
     theme: Hum · pre-emit critique: P5 H5 E5 S5 R5 V4 · slop: 58/58 pass -->

# 星光、可可與三人份的晚安

一個可執行的 PrismatiX 0.2 SDK 短篇 Demo。以哥哥第一人稱，和伊莉雅、美遊度過一段可分支的睡前時光。

展示內容：以 React-free TSX 撰寫並在 build-time lowering 成 canonical JSON 的 Title／HUD／Backlog／Save／Load／Gallery UI；所有 scene/node UUID 均由 compiler 依語意名稱穩定產生，overlay 共用元件則由 `Shared.tsx` 跨檔匯入。Title → HUD 使用 JavaScript 宣告、native compositor 執行的逐格 tile flip；HUD 與 Gallery／Backlog／Save／Load 等 screen 之間則示範 slide、crossfade 等 route transition。另包含右下角 hover 展開且具 EaseOut 動畫的快速工具列、透明角色立繪與角色資源、背景／音效／CJK 字型資源、ADV 對話、三選一分支、型別化 session/profile 變數、JavaScript 沙箱擴充指令、CG 解鎖、鍵盤／控制器焦點與無障礙標籤、Runtime IR 與 source map 建置。Player/package 中只包含 `.pxui`，不包含 TSX authoring source。

## 驗證與執行

從 repository root：

```powershell
npm run build
node packages/cli/dist/src/cli.js validate Samples/PrismaFamilyDemo/project.pxproject
node packages/cli/dist/src/cli.js build Samples/PrismaFamilyDemo/project.pxproject --output .prismatix/prisma-family-demo
node packages/cli/dist/src/cli.js run Samples/PrismaFamilyDemo/project.pxproject --packager out/build/x64-debug/PrismatiXEngine/PrismatiXPackager.exe --player out/build/x64-debug/PrismatiXEngine/PrismatiXPlayer.exe --output .prismatix/prisma-family-playable
```

操作：Enter／滑鼠確認，方向鍵選項，`G` 開啟回憶相簿，`B` 開啟對話紀錄，`Esc` 返回。滑鼠移到畫面右下角可展開「記／存／讀／自／速／憶」快速工具列。

## 立繪來源與使用提醒

伊莉雅與美遊的透明 PNG 立繪由本 Demo 使用者提供。角色及相關作品權利屬原權利人；此素材僅供本機、非商業 SDK 展示。公開散布或商業使用前，請確認素材授權或改用已取得授權的素材。

背景與提示音為本 Demo 專用原創素材。UI 採「星空剪貼簿 × 魔法少女手帳」視覺，色彩以 Ruby 粉、Sapphire 藍與夜空紫建立辨識度。
