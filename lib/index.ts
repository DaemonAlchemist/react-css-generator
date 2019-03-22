import { _ } from 'atp-pointfree';
import * as React from "react";
import { createLengthProp, createValueUpdater, updateCss } from "./common";

export { border } from "./border";

export const createCss = _;

export const alignContent = {
    center: updateCss("alignContent", "center"),
    flexStart: updateCss("alignContent", "flex-start"),
    flexEnd: updateCss("alignContent", "flex-end"),
    inherit: updateCss("alignContent", "inherit"),
    initial: updateCss("alignContent", "initial"),
    spaceAround: updateCss("alignContent", "space-around"),
    spaceBetween: updateCss("alignContent", "space-between"),
    stretch: updateCss("alignContent", "stretch"),
};

export const alignItems = (alignItems:"stretch"|"center"|"flex-start"|"flex-end"|"baseline"|"initial"|"inherit") =>
    (css:React.CSSProperties) => ({
        ...css,
        alignItems
    });

export const height = createLengthProp("height");

export const padding = {
    bottom: createLengthProp("paddingBottom"),
    horizontal:(a:number) => createCss(
        updateCss("paddingLeft", `${a}`),
        updateCss("paddingright", `${a}`),
    ),
    is: createLengthProp("padding"),
    left: createLengthProp("paddingLeft"),
    right: createValueUpdater("paddingRight"),
    top: createValueUpdater("paddingTop"),
    vertical:(a:number) => createCss(
        updateCss("paddingTop", `${a}`),
        updateCss("paddingBottom", `${a}`),
    ),
};

export const width = createLengthProp("width");
