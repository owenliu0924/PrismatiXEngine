import {Control, Group, Scene, Text, type UiLayoutProps} from "@prismatix/authoring-sdk";
import {OverlayCloseButton} from "./Shared.tsx";

const at = (x: number, y: number, width: number, height: number,
  alignment: UiLayoutProps["alignment"] = "start"): UiLayoutProps =>
  ({x, y, width, height, alignment, sizeRule: "fixed"});

export default (
  <Scene name="Prisma Family Backlog" width={1280} height={720}
    theme={[
      {id: "night", name: "Night", value: "#30284BFA"},
      {id: "paperText", name: "Paper Text", value: "#FFF4F2FF"},
      {id: "muted", name: "Muted", value: "#D8CCE1FF"},
      {id: "listSurface", name: "List Surface", value: "#211B38B8"},
      {id: "ruby", name: "Ruby", value: "#D75F87FF"},
    ]}>
    <Group name="BacklogRoot"
      appearance={{backgroundColor: "#30284BFA", textColor: "#FFFFFFFF", opacity: 1, styleToken: "night"}}
      accessibilityLabel="對話紀錄" accessibilityRole="dialog" accessibilityFocusOrder={0}>
      <Text name="BacklogTitle"
        layout={at(68, 46, 700, 58)} text="對話紀錄  /  BACKLOG"
        appearance={{backgroundColor: "#00000000", textColor: "#FFF4F2FF", opacity: 1, styleToken: "paperText"}}
        runtimeProperties={{fontSize: 36}} accessibilityLabel="對話紀錄"
        accessibilityRole="heading" accessibilityFocusOrder={1} />
      <Text name="BacklogHint"
        layout={at(72, 108, 760, 34)} text="已讀過的話，會按時間留在這裡。"
        appearance={{backgroundColor: "#00000000", textColor: "#D8CCE1FF", opacity: 1, styleToken: "muted"}}
        runtimeProperties={{fontSize: 19}} accessibilityLabel="對話紀錄說明"
        accessibilityRole="note" accessibilityFocusOrder={2} />
      <Control runtimeType="ListView" name="Entries"
        layout={at(70, 164, 1140, 450, "fill")}
        appearance={{backgroundColor: "#211B38B8", textColor: "#FFFFFFFF", opacity: 1, styleToken: "listSurface"}}
        runtimeProperties={{columns: 1, itemExtent: {type: "vec2", x: 1100, y: 64},
          gap: {type: "vec2", x: 0, y: 10}, overscan: 2}}
        accessibilityLabel="已讀對話列表" accessibilityRole="log" accessibilityFocusOrder={10} />
      <OverlayCloseButton label="關閉對話紀錄" />
    </Group>
  </Scene>
);
