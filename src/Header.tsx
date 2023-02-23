import * as React from "react";

import { Colors } from "./Colors";
import "./Header.css";
import { Icon } from "./Icon";
import classNames from "classnames";
import { SpellLevel } from "./SpellLevel";
import { DefaultProps } from "./DefaultProps";
import { SpellSchool } from "./SpellSchool";
import { Theme } from "./Theme";

export type HeaderProps = DefaultProps & {
  theme: Theme;
  spellSchool: SpellSchool;
  spellLevel: number;
};

export function Header({
  className,
  children,
  spellSchool,
  spellLevel,
  theme,
}: HeaderProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [tallText, setTallText] = React.useState(false);

  React.useEffect(() => {
    if (ref.current.offsetHeight > 48) {
      setTallText(true);
    }
  }, [ref]);

  return (
    <div className={classNames("sp-header", className)}>
      <Icon
        className={"sp-header-icon"}
        icon={spellSchool}
        color={Colors[theme][spellSchool]}
        width={48}
        height={48}
      />
      <div
        className="sp-header-text-container"
        style={{ color: Colors[theme][spellSchool] }}
      >
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
        theme={theme}
      />
    </div>
  );
}
