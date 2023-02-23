import "./CardFace.css";
import * as React from "react";

import classNames from "classnames";
import { Icon } from "./Icon";
import { Colors } from "./Colors";
import { SpellSchool } from "./SpellSchool";
import { DefaultProps } from "./DefaultProps";
import { Theme } from "./Theme";
import { Localization } from "./Localization";

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
    <div
      className={classNames("sp-card-face", className)}
      style={{ backgroundColor: Colors[theme][spellSchool] }}
    >
      <div
        className="sp-card-face-content"
        style={{ backgroundColor: Colors[theme].bg }}
      >
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
    </div>
  );
}
