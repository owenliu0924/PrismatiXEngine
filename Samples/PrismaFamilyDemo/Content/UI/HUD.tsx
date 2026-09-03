import {
  Button, Control, Group, Scene, Text, VBox,
  type ButtonProps, type UiAppearance, type UiLayoutProps,
} from "@prismatix/authoring-sdk";

const at = (x: number, y: number, width: number, height: number,
  alignment: UiLayoutProps["alignment"] = "start"): UiLayoutProps =>
  ({x, y, width, height, alignment, sizeRule: "fixed"});
const transparent = (styleToken: string, textColor = "#FFFFFFFF"): UiAppearance =>
  ({backgroundColor: "#00000000", textColor, opacity: 1, styleToken});

interface QuickButtonProps {
  readonly name: string;
  readonly x: number;
  readonly text: string;
  readonly action: string;
  readonly label: string;
  readonly focusOrder: number;
  readonly accent?: boolean;
}

function QuickButton(props: QuickButtonProps) {
  const style: ButtonProps["style"] = {
    background: props.accent ? "#D75F87FF" : "#50476FFF",
    color: "#FFFFFFFF", opacity: 1,
    token: props.accent ? "toolbarSave" : "toolbarButton",
    hoverBackground: props.accent ? "#EC7FA2FF" : "#6A79AFFF",
    focus: props.accent ? "#FFF4F2FF" : "#FFD5E1FF",
    disabledOpacity: 0.45,
  };
  return <Button name={props.name} position={[props.x, 16]} size={[74, 50]} align="center"
    style={style} action={props.action}
    runtimeProperties={{focusMode: "All"}} accessibilityLabel={props.label}
    accessibilityRole="button" accessibilityFocusOrder={props.focusOrder}>{props.text}</Button>;
}

export default (
  <Scene name="Prisma Family HUD" width={1280} height={720}
    theme={[
      {id: "dialogueCard", name: "Dialogue Card", value: "#FFF8F2F2"},
      {id: "ruby", name: "Ruby", value: "#D75F87FF"},
      {id: "sapphire", name: "Sapphire", value: "#6A79AFFF"},
      {id: "transparent", name: "Transparent", value: "#00000000"},
      {id: "nightGlass", name: "Night Glass", value: "#30284BD9"},
      {id: "paperText", name: "Paper Text", value: "#FFF4F2FF"},
      {id: "speaker", name: "Speaker Text", value: "#FFFFFFFF"},
      {id: "dialogueText", name: "Dialogue Text", value: "#30284BFF"},
      {id: "choices", name: "Choices", value: "#00000000"},
      {id: "nvlText", name: "NVL Text", value: "#30284BFF"},
      {id: "mode", name: "Mode Text", value: "#FFF4F2FF"},
      {id: "toolbarTransparent", name: "Toolbar Transparent", value: "#00000000"},
      {id: "toolbarSurface", name: "Toolbar Surface", value: "#30284BF2"},
      {id: "toolbarButton", name: "Toolbar Button", value: "#50476FFF"},
      {id: "toolbarSave", name: "Toolbar Save", value: "#D75F87FF"},
      {id: "toolbarHandle", name: "Toolbar Handle", value: "#D75F87FF"},
    ]}>
    <Group name="HUDRoot"
      appearance={transparent("transparent")} accessibilityLabel="遊戲介面"
      accessibilityRole="window" accessibilityFocusOrder={0}>
      <Group name="TopRibbon"
        layout={at(34, 28, 550, 46)}
        appearance={{backgroundColor: "#30284BD9", textColor: "#FFFFFFFF", opacity: 1, styleToken: "nightGlass"}} />
      <Text name="ChapterLabel"
        layout={at(54, 36, 420, 30)} text="CHAPTER 01  ·  今晚也在同一盞燈下"
        appearance={transparent("paperText", "#FFF4F2FF")} runtimeProperties={{fontSize: 18}}
        accessibilityLabel="章節：今晚也在同一盞燈下" accessibilityRole="heading"
        accessibilityFocusOrder={1} />
      <Group name="DialogueCard"
        layout={at(46, 486, 1188, 196, "fill")}
        appearance={{backgroundColor: "#FFF8F2F2", textColor: "#30284BFF", opacity: 1, styleToken: "dialogueCard"}} />
      <Group name="SpeakerTag"
        layout={at(72, 458, 250, 56)}
        appearance={{backgroundColor: "#D75F87FF", textColor: "#FFFFFFFF", opacity: 1, styleToken: "ruby"}} />
      <Text name="Speaker"
        layout={at(94, 470, 205, 36)} text="" appearance={transparent("speaker")}
        runtimeProperties={{fontSize: 25}} accessibilityLabel="說話者"
        accessibilityRole="heading" accessibilityFocusOrder={2} />
      <Text name="Dialogue"
        layout={at(84, 526, 1096, 112)} text=""
        appearance={transparent("dialogueText", "#30284BFF")}
        runtimeProperties={{fontSize: 29, wrap: true}} accessibilityLabel="對話文字"
        accessibilityRole="text" accessibilityFocusOrder={3} />
      <VBox name="Choices"
        layout={at(430, 275, 420, 190, "fill")} appearance={transparent("choices")}
        runtimeProperties={{separation: 10, clipContent: false}}
        accessibilityLabel="哥哥的選擇" accessibilityRole="listbox"
        accessibilityFocusOrder={10} />
      <Text name="NVLText" visible={false}
        layout={at(110, 110, 1060, 330)} text=""
        appearance={transparent("nvlText", "#30284BFF")}
        runtimeProperties={{fontSize: 25, wrap: true}} accessibilityLabel="NVL 對話記錄"
        accessibilityRole="log" accessibilityFocusOrder={20} />
      <Text name="ModeState"
        layout={at(930, 44, 145, 28, "end")} text="" appearance={transparent("mode", "#FFF4F2FF")}
        runtimeProperties={{fontSize: 16}} accessibilityLabel="自動或快轉狀態"
        accessibilityRole="status" accessibilityFocusOrder={21} />
      <Control kind="group"
        runtimeType="EdgeRevealContainer" name="EdgeToolbar"
        layout={at(730, 640, 550, 80, "fill")} appearance={transparent("toolbarTransparent")}
        runtimeProperties={{edge: "Right", revealSpeed: 3.8, triggerSize: 16,
          revealTrigger: "Hover", revealEasing: "EaseOut", pinned: false, clipContent: false}}
        accessibilityLabel="快速操作工具列；移到右下角展開" accessibilityRole="toolbar"
        accessibilityFocusOrder={22}>
        <Group name="ToolbarSurface"
          layout={at(0, 6, 550, 74, "fill")}
          appearance={{backgroundColor: "#30284BF2", textColor: "#FFFFFFFF", opacity: 1, styleToken: "toolbarSurface"}}
          runtimeProperties={{mouseFilter: "Ignore"}} />
        <QuickButton name="BacklogQuick"
          x={18} text="記" action="backlog.open" label="開啟對話紀錄" focusOrder={23} />
        <QuickButton name="SaveQuick"
          x={100} text="存" action="save.open" label="開啟存檔" focusOrder={24} accent />
        <QuickButton name="LoadQuick"
          x={182} text="讀" action="load.open" label="開啟讀檔" focusOrder={25} />
        <QuickButton name="AutoQuick"
          x={264} text="自" action="mode.auto" label="切換自動播放" focusOrder={26} />
        <QuickButton name="SkipQuick"
          x={346} text="速" action="mode.skip" label="切換快速略過" focusOrder={27} />
        <QuickButton name="GalleryQuick"
          x={428} text="憶" action="gallery.open" label="開啟回憶相簿" focusOrder={28} />
        <Text name="ToolbarHandle"
          layout={at(528, 8, 22, 70, "center")} text="‹"
          appearance={{backgroundColor: "#D75F87FF", textColor: "#FFFFFFFF", opacity: 1, styleToken: "toolbarHandle"}}
          runtimeProperties={{fontSize: 22, mouseFilter: "Ignore"}}
          accessibilityLabel="快速工具列展開提示" accessibilityRole="note"
          accessibilityFocusOrder={29} />
      </Control>
    </Group>
  </Scene>
);
