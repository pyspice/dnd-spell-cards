import * as React from "react";

import "./SpellLevel.css";
import classNames from "classnames";
import { DefaultProps } from "./DefaultProps";

export type SpellLevelProps = DefaultProps & {
  level: number;
};

export function SpellLevel({ className, level }: SpellLevelProps) {
  return (
    <div className={classNames("sp-spell-level", className)}>
      {level}
    </div>
  );
}
