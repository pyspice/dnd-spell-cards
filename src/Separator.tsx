import * as React from "react";

import "./Separator.css";
import classNames from "classnames";
import { DefaultProps } from "./DefaultProps";

export type SeparatorProps = DefaultProps & {};

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className }: SeparatorProps, ref) => {
    return <div ref={ref} className={classNames("sp-separator", className)} />;
  }
);
