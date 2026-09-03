import {Button} from "@prismatix/authoring-sdk";

interface OverlayCloseButtonProps {
  readonly label: string;
}

/** Shared authoring-only component imported by the overlay scenes. */
export function OverlayCloseButton({label}: OverlayCloseButtonProps) {
  return (
    <Button name="Close" position={[1054, 636]} size={[156, 56]} align="center"
      style={{token: "ruby", background: "#D75F87FF", color: "#FFFFFFFF",
        hoverBackground: "#EC7FA2FF", focus: "#FFF4F2FF", disabledOpacity: 0.45}}
      action="overlay.close" runtimeProperties={{focusMode: "All"}}
      accessibilityLabel={label} accessibilityRole="button" accessibilityFocusOrder={20}>
      返回  Esc
    </Button>
  );
}
