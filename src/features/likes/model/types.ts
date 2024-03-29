import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface svgInterface
  extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  colorsvg: "red" | "green" | "gray";
}
