import { _ } from 'atp-pointfree';
import { createLengthProp, createValueUpdater, updateCss } from "./common";

// Reference: https://www.w3schools.com/cssref/
export * from "./a";
export * from "./b";
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
