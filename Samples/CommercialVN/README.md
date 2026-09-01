# PrismatiX 0.2 Commercial VN sample

This sample is a release-gated project, not documentation-only pseudo code. CI runs `prismatix validate` and `prismatix build` against it and verifies both locale RuntimeIR/source-map pairs and every declared packaged resource.

It covers aligned runtime-switchable Traditional Chinese/Japanese Story sources, ADV/NVL commands, typed session/profile variables, choices, gallery/unlockables, keyboard/controller-friendly focus semantics, accessible custom UI, ruby and vertical writing, an isolated JavaScript extension with recursive JSON events, a package-time GPU effect, and an explicit save migration.

From the repository root:

```powershell
npm run build
node packages/cli/dist/src/cli.js validate Samples/CommercialVN/project.pxproject
node packages/cli/dist/src/cli.js build Samples/CommercialVN/project.pxproject --output .prismatix/commercial-sample
```
