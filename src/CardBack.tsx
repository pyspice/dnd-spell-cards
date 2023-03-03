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
const HEADER_OFFSET_HEIGHT = 48;
const FOOTER_OFFSET_HEIGHT = 32;

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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const separator1Ref = React.useRef<HTMLDivElement>(null);
  const separator2Ref = React.useRef<HTMLDivElement>(null);
  const descriptionRef = React.useRef<HTMLDivElement>(null);
  const attributesRef = React.useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = React.useState(BASE_FONT_SIZE);

  React.useEffect(() => {
    if (
      HEADER_OFFSET_HEIGHT +
        separator1Ref.current.getBoundingClientRect().height +
        attributesRef.current.getBoundingClientRect().height +
        separator2Ref.current.getBoundingClientRect().height +
        descriptionRef.current.getBoundingClientRect().height +
        FOOTER_OFFSET_HEIGHT >
      containerRef.current.getBoundingClientRect().height
    ) {
      setFontSize(fontSize - 1);
    }
  }, [descriptionRef, attributesRef, containerRef, fontSize]);

  return (
    <Card theme={theme} spellSchool={spellSchool}>
      <div ref={containerRef} className={classNames("sp-card-back", className)}>
        <Header
          className="sp-card-back-header"
          spellSchool={spellSchool}
          spellLevel={spellLevel}
          theme={theme}
        >
          {spellName}
        </Header>
        <Separator
          ref={separator1Ref}
          className="sp-card-back-header-separator"
        />
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
          <div ref={attributesRef} className="sp-card-back-attribute-container">
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
        <Separator ref={separator2Ref} />
        <div
          ref={descriptionRef}
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
