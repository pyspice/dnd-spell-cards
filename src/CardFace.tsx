import "./CardFace.css";
import * as React from "react";

import classNames from "classnames";
import { Icon } from "./Icon";
import { SpellSchool } from "./SpellSchool";
import { DefaultProps } from "./DefaultProps";
import { Localization } from "./Localization";
import { Card } from "./Card";

export type CardFaceProps = DefaultProps & {
  spellSchool: SpellSchool;
};

export function CardFace({
  className,
  spellSchool,
}: CardFaceProps) {
  return (
    <Card spellSchool={spellSchool}>
      <div className={classNames("sp-card-face", className, "spell-color")}>
        <Icon
          className="sp-card-face-icon"
          icon={spellSchool}
          width={"60mm"}
          height={"60mm"}
        />
        <div className="sp-card-face-title">
          {Localization[spellSchool]}
        </div>
      </div>
    </Card>
  );
}
