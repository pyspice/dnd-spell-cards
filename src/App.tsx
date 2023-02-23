import * as React from "react";

import "./App.css";
import { Card } from "./Card";
import { CardFace } from "./CardFace";
import { Spellbook } from "./Spellbook";
import { Theme } from "./Theme";

export default function App() {
  return (
    <div className="App">
      {Spellbook.map((spell) => (
        <>
          <Card
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
            theme={Theme.light}
          >
            {spell.description}
          </Card>
          <CardFace
            key={`face_${spell.name}`}
            spellSchool={spell.school}
            theme={Theme.light}
          />
        </>
      ))}
    </div>
  );
}
