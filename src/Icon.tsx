import * as React from "react";

import "./Icon.css";
import { Icons } from "./Icons";
import classNames from "classnames";
import { DefaultProps } from "./DefaultProps";

export type IconProps = DefaultProps &
  Pick<React.CSSProperties, "width" | "height" | "color"> & {
    icon: keyof typeof Icons;
  };

export function Icon({
  className,
  icon,
  color,
  width = 32,
  height = 32,
}: IconProps) {
  const iconElement = React.cloneElement(Icons[icon], { width, height });

  return (
    <div
      className={classNames("sp-icon", className)}
      style={{ color, width, height }}
    >
      {iconElement}
    </div>
  );
}
