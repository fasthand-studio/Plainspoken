import { lazy, Suspense } from "react";
import gridIcon from "@/assets/icons/grid-1.svg?raw";
import bookIcon from "@/assets/icons/book.svg?raw";
import layerIcon from "@/assets/icons/layer.svg?raw";
import starIcon from "@/assets/icons/magic-star.svg?raw";
import arrowRightIcon from "@/assets/icons/arrow-right.svg?raw";
import arrowDownIcon from "@/assets/icons/arrow-down.svg?raw";
import tickCircleIcon from "@/assets/icons/tick-circle.svg?raw";
import closeIcon from "@/assets/icons/close-circle.svg?raw";
import menuIcon from "@/assets/icons/menu.svg?raw";
import copyIcon from "@/assets/icons/copy.svg?raw";
import notificationIcon from "@/assets/icons/notification.svg?raw";
import heartIcon from "@/assets/icons/heart.svg?raw";
import basicStarIcon from "@/assets/icons/star.svg?raw";
import messageIcon from "@/assets/icons/message.svg?raw";
import downloadIcon from "@/assets/icons/document-download.svg?raw";
import settingIcon from "@/assets/icons/setting.svg?raw";
import profileIcon from "@/assets/icons/profile.svg?raw";
import warningIcon from "@/assets/icons/warning-2.svg?raw";
import shareIcon from "@/assets/icons/share.svg?raw";

const icons = {
  "grid-1": gridIcon,
  book: bookIcon,
  layer: layerIcon,
  "magic-star": starIcon,
  "arrow-right": arrowRightIcon,
  "arrow-down": arrowDownIcon,
  "tick-circle": tickCircleIcon,
  "close-circle": closeIcon,
  menu: menuIcon,
  copy: copyIcon,
  notification: notificationIcon,
  heart: heartIcon,
  star: basicStarIcon,
  message: messageIcon,
  "document-download": downloadIcon,
  setting: settingIcon,
  profile: profileIcon,
  "warning-2": warningIcon,
  share: shareIcon,
} as const;

type IconName = keyof typeof icons;
type IconMode = "static" | "loop" | "onClick" | "hover";

const AnimatedIcon = lazy(() => import("./IconTreeAnimated"));

interface IconTreeIconProps {
  name: IconName;
  color: string;
  size?: number;
  mode?: IconMode;
  onClick?: () => void;
  bindId?: string;
  resetAfterPlay?: boolean;
}

export default function IconTreeIcon({ name, color, size = 20, mode = "static", onClick, bindId, resetAfterPlay = true }: IconTreeIconProps) {
  if (mode !== "static" && (name === "copy" || name === "heart")) {
    return (
      <Suspense fallback={
        <span
          aria-hidden="true"
          className="inline-flex shrink-0 [&>svg]:h-full [&>svg]:w-full"
          data-icon-tree={name}
          style={{ width: size, height: size, color, lineHeight: 0, pointerEvents: "none" }}
          dangerouslySetInnerHTML={{ __html: icons[name] }}
        />
      }>
        <AnimatedIcon
          name={name}
          color={color}
          size={size}
          mode={mode}
          onClick={onClick}
          bindId={bindId}
          resetAfterPlay={resetAfterPlay}
        />
      </Suspense>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 [&>svg]:h-full [&>svg]:w-full"
      data-icon-tree={name}
      style={{ width: size, height: size, color, lineHeight: 0, pointerEvents: "none" }}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
}
