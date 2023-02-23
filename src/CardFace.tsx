import "./CardFace.css";
import * as React from "react";

import classNames from "classnames";
import { Icon } from "./Icon";
import { Colors } from "./Colors";
import { SpellSchool } from "./SpellSchool";
import { DefaultProps } from "./DefaultProps";
import { Theme } from "./Theme";
import { Localization } from "./Localization";
import { Card } from "./Card";

export type CardFaceProps = DefaultProps & {
  theme: Theme;
  spellSchool: SpellSchool;
};

export function CardFace({
  className,
  spellSchool,
  theme = Theme.dark,
}: CardFaceProps) {
  return (
    <Card theme={theme} spellSchool={spellSchool}>
      <div className={classNames("sp-card-face", className)}>
        <Icon
          className="sp-card-face-icon"
          icon={spellSchool}
          color={Colors[theme][spellSchool]}
          width={"60mm"}
          height={"60mm"}
        />
        <div
          className="sp-card-face-title"
          style={{ color: Colors[theme][spellSchool] }}
        >
          {Localization[spellSchool]}
        </div>
      </div>
    </Card>
  );
}
