import * as React from "react";
import "./Colors.scss";

import "./App.css";
import { CardBack } from "./CardBack";
import { CardFace } from "./CardFace";
import { Spellbook } from "./Spellbook";
import classNames from "classnames";
import { Theme } from "./Theme";

export default function App() {
  return (
    <div className={classNames("App", Theme.dark)}>
      {Spellbook.map((spell) => (
        <>
          <CardBack
            key={spell.name}
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
          />
        </>
      ))}
    </div>
  );
}
