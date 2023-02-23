import "./CardBack.css";
import * as React from "react";

import { Header } from "./Header";
import classNames from "classnames";
import { Separator } from "./Separator";
import { Icon } from "./Icon";
import { DefaultProps } from "./DefaultProps";
import { SpellSchool } from "./SpellSchool";
import { Card } from "./Card";

export type CardBackProps = DefaultProps & {
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

  fontSize = 13,
}: CardBackProps): JSX.Element {
  return (
    <Card spellSchool={spellSchool}>
      <div className={classNames("sp-card-back", className)}>
        <Header
          className="sp-card-back-header"
          spellSchool={spellSchool}
          spellLevel={spellLevel}
        >
          {spellName}
        </Header>
        <Separator className="sp-card-back-header-separator" />
        <div className="sp-card-back-attributes">
          <div className="sp-card-back-attribute-container">
            <span className="sp-card-back-attribute-title">
              Дистанция
            </span>
            <span className="sp-card-back-attribute-value">
              {range}
            </span>
          </div>
          <div className="sp-card-back-attribute-container">
            <span className="sp-card-back-attribute-title">
              Длительность
            </span>
            <span className="sp-card-back-attribute-value">
              {duration}
            </span>
          </div>
          <div className="sp-card-back-attribute-container">
            <span className="sp-card-back-attribute-title">
              Время накладывания
            </span>
            <span className="sp-card-back-attribute-value">
              {castingTime}
            </span>
          </div>
        </div>
        <Separator />
        <div className="sp-card-back-description"
             style={{ fontSize }}
        >
          {children}
        </div>
        <div className="sp-card-back-footer spell-color">
          {hasVerbalComponent && (
            <Icon
              className="sp-card-back-footer-icon"
              icon={"verbal"}
              width={24}
              height={24}
            />
          )}
          {hasSomaticComponent && (
            <Icon
              className="sp-card-back-footer-icon"
              icon={"somatic"}
              width={24}
              height={24}
            />
          )}
          {materialComponent && (
            <>
              <Icon
                className="sp-card-back-footer-icon"
                icon={"material"}
                width={24}
                height={24}
              />
              <span className="sp-card-back-footer-text-delimeter">
                -
              </span>
              <span className="sp-card-back-footer-text">
                {materialComponent}
              </span>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
