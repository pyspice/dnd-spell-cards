import * as React from "react";
import "./Colors.scss";

import "./App.css";
import { Spellbook } from "./Spellbook";
import classNames from "classnames";
import { Theme } from "./Theme";
import { FullCard } from "./FullCard";

export default function App() {
  return (
    <div className={classNames("App", Theme.light)}>
      {Spellbook.map((spell) => (
        <FullCard spell={spell}/>
      ))}
    </div>
  );
}
