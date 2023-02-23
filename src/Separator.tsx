import * as React from "react";

import "./Separator.css";
import classNames from "classnames";
import { DefaultProps } from "./DefaultProps";

export type SeparatorProps = DefaultProps & {};

export function Separator({ className }: SeparatorProps) {
  return <div className={classNames("sp-separator", className)} />;
}
