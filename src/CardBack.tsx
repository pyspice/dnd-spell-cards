import "./CardBack.css";
import * as React from "react";

import { Header } from "./Header";
import classNames from "classnames";
import { Separator } from "./Separator";
import { Colors } from "./Colors";
import { Icon } from "./Icon";
import { DefaultProps } from "./DefaultProps";
import { SpellSchool } from "./SpellSchool";
import { Theme } from "./Theme";
import { Card } from "./Card";

const BASE_FONT_SIZE = 13;
const BASE_CARD_DESCRIPTION_OFFSET_HEIGHT = 378;

export type CardBackProps = DefaultProps & {
  theme: Theme;
  spellSchool: SpellSchool;
  spellName: string;
  spellLevel: number;
  range: string;
  duration: React.ReactNode;
  castingTime: string;
  hasVerbalComponent: boolean;
  hasSomaticComponent: boolean;
  materialComponent: string;
};

export function CardBack({
  className,
  children,

  spellSchool,
  spellName,
  spellLevel,
  range,
  duration,
  castingTime,
  hasVerbalComponent,
  hasSomaticComponent,
  materialComponent,

  theme = Theme.dark,
}: CardBackProps): JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = React.useState(BASE_FONT_SIZE);

  React.useEffect(() => {
    if (ref.current.offsetHeight > BASE_CARD_DESCRIPTION_OFFSET_HEIGHT) {
      setFontSize(fontSize - 1);
    }
  }, [ref, fontSize]);

  return (
    <Card theme={theme} spellSchool={spellSchool}>
      <div className={classNames("sp-card-back", className)}>
        <Header
          className="sp-card-back-header"
          spellSchool={spellSchool}
          spellLevel={spellLevel}
          theme={theme}
        >
          {spellName}
        </Header>
        <Separator className="sp-card-back-header-separator" />
        <div className="sp-card-back-attributes">
          <div className="sp-card-back-attribute-container">
            <span
              className="sp-card-back-attribute-title"
              style={{ color: Colors[theme].text }}
            >
              Дистанция
            </span>
            <span
              className="sp-card-back-attribute-value"
              style={{ color: Colors[theme].text }}
            >
              {range}
            </span>
          </div>
          <div className="sp-card-back-attribute-container">
            <span
              className="sp-card-back-attribute-title"
              style={{ color: Colors[theme].text }}
            >
              Длительность
            </span>
            <span
              className="sp-card-back-attribute-value"
              style={{ color: Colors[theme].text }}
            >
              {duration}
            </span>
          </div>
          <div className="sp-card-back-attribute-container">
            <span
              className="sp-card-back-attribute-title"
              style={{ color: Colors[theme].text }}
            >
              Время накладывания
            </span>
            <span
              className="sp-card-back-attribute-value"
              style={{ color: Colors[theme].text }}
            >
              {castingTime}
            </span>
          </div>
        </div>
        <Separator />
        <div
          ref={ref}
          className="sp-card-back-description"
          style={{ fontSize, color: Colors[theme].text }}
        >
          {children}
        </div>
        <div className="sp-card-back-footer">
          {hasVerbalComponent && (
            <Icon
              className="sp-card-back-footer-icon"
              icon={"verbal"}
              color={Colors[theme][spellSchool]}
              width={24}
              height={24}
            />
          )}
          {hasSomaticComponent && (
            <Icon
              className="sp-card-back-footer-icon"
              icon={"somatic"}
              color={Colors[theme][spellSchool]}
              width={24}
              height={24}
            />
          )}
          {materialComponent && (
            <>
              <Icon
                className="sp-card-back-footer-icon"
                icon={"material"}
                color={Colors[theme][spellSchool]}
                width={24}
                height={24}
              />
              <span
                className="sp-card-back-footer-text-delimeter"
                style={{ color: Colors[theme][spellSchool] }}
              >
                -
              </span>
              <span
                className="sp-card-back-footer-text"
                style={{ color: Colors[theme][spellSchool] }}
              >
                {materialComponent}
              </span>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
