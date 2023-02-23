import "./Card.css";
import * as React from "react";

import { Header } from "./Header";
import classNames from "classnames";
import { Separator } from "./Separator";
import { Colors } from "./Colors";
import { Icon } from "./Icon";
import { DefaultProps } from "./DefaultProps";
import { SpellSchool } from "./SpellSchool";
import { Theme } from "./Theme";

export type CardProps = DefaultProps & {
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
  fontSize: number;
};

export function Card({
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

  fontSize = 13,
  theme = Theme.dark,
}: CardProps): JSX.Element {
  return (
    <div
      className={classNames("sp-card", className)}
      style={{ backgroundColor: Colors[theme][spellSchool] }}
    >
      <div
        className="sp-card-content"
        style={{ backgroundColor: Colors[theme].bg }}
      >
        <Header
          className="sp-card-header"
          spellSchool={spellSchool}
          spellLevel={spellLevel}
          theme={theme}
        >
          {spellName}
        </Header>
        <Separator className="sp-card-header-separator" />
        <div className="sp-card-attributes">
          <div className="sp-card-attribute-container">
            <span
              className="sp-card-attribute-title"
              style={{ color: Colors[theme].text }}
            >
              Дистанция
            </span>
            <span
              className="sp-card-attribute-value"
              style={{ color: Colors[theme].text }}
            >
              {range}
            </span>
          </div>
          <div className="sp-card-attribute-container">
            <span
              className="sp-card-attribute-title"
              style={{ color: Colors[theme].text }}
            >
              Длительность
            </span>
            <span
              className="sp-card-attribute-value"
              style={{ color: Colors[theme].text }}
            >
              {duration}
            </span>
          </div>
          <div className="sp-card-attribute-container">
            <span
              className="sp-card-attribute-title"
              style={{ color: Colors[theme].text }}
            >
              Время накладывания
            </span>
            <span
              className="sp-card-attribute-value"
              style={{ color: Colors[theme].text }}
            >
              {castingTime}
            </span>
          </div>
        </div>
        <Separator />
        <div
          className="sp-card-description"
          style={{ fontSize, color: Colors[theme].text }}
        >
          {children}
        </div>
        <div className="sp-card-footer">
          {hasVerbalComponent && (
            <Icon
              className="sp-card-footer-icon"
              icon={"verbal"}
              color={Colors[theme][spellSchool]}
              width={24}
              height={24}
            />
          )}
          {hasSomaticComponent && (
            <Icon
              className="sp-card-footer-icon"
              icon={"somatic"}
              color={Colors[theme][spellSchool]}
              width={24}
              height={24}
            />
          )}
          {materialComponent && (
            <>
              <Icon
                className="sp-card-footer-icon"
                icon={"material"}
                color={Colors[theme][spellSchool]}
                width={24}
                height={24}
              />
              <span
                className="sp-card-footer-text-delimeter"
                style={{ color: Colors[theme][spellSchool] }}
              >
                -
              </span>
              <span
                className="sp-card-footer-text"
                style={{ color: Colors[theme][spellSchool] }}
              >
                {materialComponent}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
