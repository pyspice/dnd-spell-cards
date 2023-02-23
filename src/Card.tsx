import "./Card.css";
import * as React from "react";

import classNames from "classnames";
import { DefaultProps } from "./DefaultProps";
import { SpellSchool } from "./SpellSchool";

export type CardProps = DefaultProps & {
  spellSchool: SpellSchool;
};

export function Card({
  className,
  children,
  spellSchool,
}: CardProps): JSX.Element {
  return (
    <div className={classNames("sp-card", className, spellSchool)}>
      <div className="sp-card-content">
        {children}
      </div>
    </div>
  );
}
