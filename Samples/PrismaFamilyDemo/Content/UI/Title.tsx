import {
  Button, Group, Image, Scene, Text,
  type UiStyle,
} from "@prismatix/authoring-sdk";

const look = (styleToken: string, backgroundColor: string, textColor: string,
  opacity = 1): UiStyle =>
  ({token: styleToken, background: backgroundColor, color: textColor, opacity});

export default (
  <Scene name="Prisma Family Title" width={1280} height={720}
    theme={[
      {id: "paper", name: "Paper", value: "#FFF4F2FF"},
      {id: "night", name: "Night", value: "#30284BFF"},
      {id: "ruby", name: "Ruby", value: "#D75F87FF"},
      {id: "ink", name: "Ink", value: "#30284BFF"},
      {id: "kicker", name: "Kicker", value: "#FFD5E1FF"},
      {id: "muted", name: "Muted", value: "#695D76FF"},
      {id: "portrait", name: "Portrait", value: "#FFFFFFFF"},
      {id: "quiet", name: "Quiet Button", value: "#E9DDE6FF"},
      {id: "caption", name: "Caption", value: "#8A7D91FF"},
    ]}>
    <Group name="TitleRoot" style={look("paper", "#FFF4F2FF", "#2B2440FF")}
      accessibilityLabel="星光、可可與三人份的晚安 標題畫面"
      accessibilityRole="window" accessibilityFocusOrder={0}>
      <Group name="NightBand" position={[0, 0]} size={[1280, 168]} align="fill"
        layout={{anchorRight: 1}} style={look("night", "#30284BFF", "#FFFFFFFF")} />
      <Image name="IllyaPortrait"
        assetId="20000000-0000-4000-8000-000000000001"
        position={[675, 72]} size={[280, 640]} align="center"
        style={look("portrait", "#00000000", "#FFFFFFFF", 0.95)}
        runtimeProperties={{scaleMode: "Fit", lockAspectRatio: true, verticalAlignment: "Bottom"}}
        accessibilityLabel="伊莉雅校服立繪" accessibilityRole="image"
        accessibilityFocusOrder={1} />
      <Image name="MiyuPortrait"
        assetId="30000000-0000-4000-8000-000000000001"
        position={[930, 72]} size={[320, 640]} align="center"
        style={look("portrait", "#00000000", "#FFFFFFFF", 0.95)}
        runtimeProperties={{scaleMode: "Fit", lockAspectRatio: true, verticalAlignment: "Bottom"}}
        accessibilityLabel="美遊校服立繪" accessibilityRole="image"
        accessibilityFocusOrder={2} />
      <Text name="Kicker" position={[72, 54]} size={[520, 38]}
        text="PRISMATIX SDK · SHORT DEMO" style={look("kicker", "#00000000", "#FFD5E1FF")}
        runtimeProperties={{fontSize: 20}} accessibilityLabel="PrismatiX SDK 短篇展示"
        accessibilityRole="text" accessibilityFocusOrder={3} />
      <Text name="Title" position={[68, 186]} size={[585, 186]}
        text={"星光、可可與\n三人份的晚安"} style={look("ink", "#00000000", "#30284BFF")}
        runtimeProperties={{fontSize: 54, wrap: true}}
        accessibilityLabel="星光、可可與三人份的晚安"
        accessibilityRole="heading" accessibilityFocusOrder={4} />
      <Text name="Subtitle" position={[74, 382]} size={[510, 64]}
        text="哥哥回家後，兩位少女準備了一場小小的晚安作戰。"
        style={look("muted", "#00000000", "#695D76FF")}
        runtimeProperties={{fontSize: 23, wrap: true}} accessibilityLabel="故事簡介"
        accessibilityRole="text" accessibilityFocusOrder={5} />
      <Button name="Start" position={[72, 488]} size={[330, 72]} align="center"
        style={{...look("ruby", "#D75F87FF", "#FFFFFFFF"),
          hoverBackground: "#EC7FA2FF", focus: "#30284BFF", disabledOpacity: 0.45}}
        action="game.start" runtimeProperties={{focusMode: "All"}}
        accessibilityLabel="開始遊戲" accessibilityRole="button"
        accessibilityFocusOrder={10}>開始今晚的故事  →</Button>
      <Button name="Gallery" position={[72, 576]} size={[230, 58]} align="center"
        style={{...look("quiet", "#E9DDE6FF", "#30284BFF"),
          hoverBackground: "#F6EAF1FF", focus: "#D75F87FF", disabledOpacity: 0.45}}
        action="gallery.open" runtimeProperties={{focusMode: "All"}}
        accessibilityLabel="打開回憶相簿" accessibilityRole="button"
        accessibilityFocusOrder={11}>回憶相簿</Button>
      <Text name="Hint" position={[72, 657]} size={[530, 30]}
        text="滑鼠／鍵盤／控制器皆可操作 · G 回憶 · B 對話紀錄"
        style={look("caption", "#00000000", "#8A7D91FF")}
        runtimeProperties={{fontSize: 17}} accessibilityLabel="操作提示"
        accessibilityRole="note" accessibilityFocusOrder={12} />
    </Group>
  </Scene>
);
