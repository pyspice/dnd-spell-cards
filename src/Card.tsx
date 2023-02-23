import "./Card.css";
import * as React from "react";

import classNames from "classnames";
import { Colors } from "./Colors";
import { DefaultProps } from "./DefaultProps";
import { SpellSchool } from "./SpellSchool";
import { Theme } from "./Theme";

export type CardProps = DefaultProps & {
  theme: Theme;
  spellSchool: SpellSchool;
};

export function Card({
  className,
  children,
  theme = Theme.dark,
  spellSchool,
}: CardProps): JSX.Element {
  return (
    <div
      className={classNames("sp-card", className)}
      style={{ backgroundColor: Colors[theme][spellSchool] }}
    >
      <div
        className="sp-card-content"
        style={{ backgroundColor: Colors[theme].bg }}
      >
        {children}
      </div>
    </div>
  );
}
