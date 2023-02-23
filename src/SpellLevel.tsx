import * as React from "react";

import "./SpellLevel.css";
import classNames from "classnames";
import { Colors } from "./Colors";
import { DefaultProps } from "./DefaultProps";
import { Theme } from "./Theme";

export type SpellLevelProps = DefaultProps & {
  level: number;
  theme: Theme;
};

export function SpellLevel({ className, level, theme }: SpellLevelProps) {
  return (
    <div
      className={classNames("sp-spell-level", className)}
      style={{ color: Colors[theme].text }}
    >
      {level}
    </div>
  );
}
