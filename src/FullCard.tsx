import "./FullCard.scss";
import * as React from "react";

import classNames from "classnames";
import { DefaultProps } from "./DefaultProps";
import { SpellDescription} from "./Spellbook";
import { CardBack } from "./CardBack";
import { CardFace } from "./CardFace";

export type CardProps = DefaultProps & {
  spell: SpellDescription;
};

export function FullCard({
  className,
  spell,
}: CardProps): JSX.Element {
  return (
    <div className={classNames("sp-full-card", className)}>
      <CardBack
        key={spell.name}
        className="sp-full-card-back"
        spellSchool={spell.school}
        spellName={spell.name}
        spellLevel={spell.level}
        hasVerbalComponent={spell.hasVerbalComponent}
        hasSomaticComponent={spell.hasSomaticComponent}
        materialComponent={spell.materialComponent}
        range={spell.range}
        duration={spell.duration}
        castingTime={spell.castingTime}
        fontSize={spell.fontSize}
      >
        {spell.description}
      </CardBack>
      <CardFace
        key={`face_${spell.name}`}
        spellSchool={spell.school}
        className="sp-full-card-face"
      />
    </div>
  );
}
