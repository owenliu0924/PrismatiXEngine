import {Grid, Group, Scene, Text, type UiLayoutProps} from "@prismatix/authoring-sdk";
import {OverlayCloseButton} from "./Shared.tsx";

const at = (x: number, y: number, width: number, height: number,
  alignment: UiLayoutProps["alignment"] = "start"): UiLayoutProps =>
  ({x, y, width, height, alignment, sizeRule: "fixed"});

export default (
  <Scene name="Prisma Family Gallery" width={1280} height={720}
    theme={[
      {id: "night", name: "Night", value: "#30284BFF"},
      {id: "ruby", name: "Ruby", value: "#D75F87FF"},
      {id: "paperText", name: "Paper Text", value: "#FFF4F2FF"},
      {id: "muted", name: "Muted", value: "#D8CCE1FF"},
      {id: "galleryGrid", name: "Gallery Grid", value: "#00000000"},
    ]}>
    <Group name="GalleryRoot"
      appearance={{backgroundColor: "#30284BFF", textColor: "#FFFFFFFF", opacity: 1, styleToken: "night"}}
      accessibilityLabel="回憶相簿" accessibilityRole="dialog" accessibilityFocusOrder={0}>
      <Text name="GalleryTitle"
        layout={at(68, 48, 700, 62)} text="回憶相簿  /  MEMORY"
        appearance={{backgroundColor: "#00000000", textColor: "#FFF4F2FF", opacity: 1, styleToken: "paperText"}}
        runtimeProperties={{fontSize: 38}} accessibilityLabel="回憶相簿"
        accessibilityRole="heading" accessibilityFocusOrder={1} />
      <Text name="GalleryHint"
        layout={at(72, 112, 730, 36)} text="完成短篇後，三人份的晚安會被收藏在這裡。"
        appearance={{backgroundColor: "#00000000", textColor: "#D8CCE1FF", opacity: 1, styleToken: "muted"}}
        runtimeProperties={{fontSize: 20}} accessibilityLabel="回憶相簿說明"
        accessibilityRole="note" accessibilityFocusOrder={2} />
      <Grid name="Items"
        layout={at(70, 180, 1000, 450, "fill")}
        appearance={{backgroundColor: "#00000000", textColor: "#FFFFFFFF", opacity: 1, styleToken: "galleryGrid"}}
        runtimeProperties={{columns: 2, itemExtent: {type: "vec2", x: 450, y: 300},
          gap: {type: "vec2", x: 20, y: 20}, overscan: 1}}
        accessibilityLabel="已解鎖回憶" accessibilityRole="grid" accessibilityFocusOrder={10} />
      <OverlayCloseButton label="關閉回憶相簿" />
    </Group>
  </Scene>
);
