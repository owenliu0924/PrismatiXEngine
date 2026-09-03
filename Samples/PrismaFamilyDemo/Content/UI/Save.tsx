import {Grid, Group, Scene, Text, type UiLayoutProps} from "@prismatix/authoring-sdk";
import {OverlayCloseButton} from "./Shared.tsx";

const at = (x: number, y: number, width: number, height: number,
  alignment: UiLayoutProps["alignment"] = "start"): UiLayoutProps =>
  ({x, y, width, height, alignment, sizeRule: "fixed"});

export default (
  <Scene name="Prisma Family Save" width={1280} height={720}
    theme={[
      {id: "night", name: "Night", value: "#30284BFA"},
      {id: "paperText", name: "Paper Text", value: "#FFF4F2FF"},
      {id: "gridSurface", name: "Grid Surface", value: "#211B38B8"},
      {id: "ruby", name: "Ruby", value: "#D75F87FF"},
    ]}>
    <Group name="SaveRoot"
      appearance={{backgroundColor: "#30284BFA", textColor: "#FFFFFFFF", opacity: 1, styleToken: "night"}}
      accessibilityLabel="存檔畫面" accessibilityRole="dialog" accessibilityFocusOrder={0}>
      <Text name="SaveTitle"
        layout={at(68, 46, 700, 58)} text="把今晚留在這裡  /  SAVE"
        appearance={{backgroundColor: "#00000000", textColor: "#FFF4F2FF", opacity: 1, styleToken: "paperText"}}
        runtimeProperties={{fontSize: 36}} accessibilityLabel="存檔"
        accessibilityRole="heading" accessibilityFocusOrder={1} />
      <Grid name="Slots"
        layout={at(70, 142, 1140, 470, "fill")}
        appearance={{backgroundColor: "#211B38B8", textColor: "#FFFFFFFF", opacity: 1, styleToken: "gridSurface"}}
        runtimeProperties={{columns: 3, itemExtent: {type: "vec2", x: 350, y: 196},
          gap: {type: "vec2", x: 24, y: 22}, overscan: 1}}
        accessibilityLabel="存檔欄位" accessibilityRole="grid" accessibilityFocusOrder={10} />
      <OverlayCloseButton label="關閉存檔畫面" />
    </Group>
  </Scene>
);
