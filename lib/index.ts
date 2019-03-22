import { _ } from 'atp-pointfree';
import * as React from "react";
import { createLengthProp, createValueUpdater, updateCss } from "./common";

export * from "./a";
export { border } from "./border";
export * from "./transform";

export const createCss = _;

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
