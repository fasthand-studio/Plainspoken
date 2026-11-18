import CopyIcon from "icon-tree-animate/icons/copy";
import HeartIcon from "icon-tree-animate/icons/heart";

type AnimatedIconName = "copy" | "heart";
type IconMode = "static" | "loop" | "onClick" | "hover";

interface IconTreeAnimatedProps {
  name: AnimatedIconName;
  color: string;
  size: number;
  mode: IconMode;
  onClick?: () => void;
  bindId?: string;
  resetAfterPlay: boolean;
}

export default function IconTreeAnimated({
  name,
  color,
  size,
  mode,
  onClick,
  bindId,
  resetAfterPlay,
}: IconTreeAnimatedProps) {
  const Icon = name === "copy" ? CopyIcon : HeartIcon;

  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0"
      data-icon-tree={name}
      data-icon-mode={mode}
      style={{
        width: size,
        height: size,
        lineHeight: 0,
        pointerEvents: mode === "hover" || (mode === "onClick" && !bindId) ? "auto" : "none",
      }}
    >
      <Icon
        id={name}
        color={color}
        size={size}
        mode={mode}
        onClick={onClick}
        bindId={bindId}
        resetAfterPlay={resetAfterPlay}
      />
    </span>
  );
}
