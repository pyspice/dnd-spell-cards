import * as React from "react";

import "./Header.css";
import { Icon } from "./Icon";
import classNames from "classnames";
import { SpellLevel } from "./SpellLevel";
import { DefaultProps } from "./DefaultProps";
import { SpellSchool } from "./SpellSchool";

export type HeaderProps = DefaultProps & {
  spellSchool: SpellSchool;
  spellLevel: number;
};

export function Header({
  className,
  children,
  spellSchool,
  spellLevel,
}: HeaderProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [tallText, setTallText] = React.useState(false);

  React.useEffect(() => {
    if (ref.current.offsetHeight > 48) {
      setTallText(true);
    }
  }, [ref]);

  return (
    <div className={classNames("sp-header", className, "spell-color")}>
      <Icon
        className={"sp-header-icon"}
        icon={spellSchool}
        width={48}
        height={48}
      />
      <div className="sp-header-text-container">
        <span
          ref={ref}
          className="sp-header-text"
          style={tallText ? { fontSize: 21 } : undefined}
        >
          {children}
        </span>
      </div>
      <SpellLevel
        className="sp-header-postfix"
        level={spellLevel}
      />
    </div>
  );
}
