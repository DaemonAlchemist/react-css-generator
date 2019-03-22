import {updateCss, createLengthProp} from './common';

export const backfaceVisibility = {
    hidden: updateCss("backfaceVisibility", "hidden"),
    inherit: updateCss("backfaceVisibility", "inherit"),
    initial: updateCss("backfaceVisibility", "initial"),
    visible: updateCss("backfaceVisibility", "visible"),
};

export * from "./background";
export * from './border';

export const bottom = createLengthProp("bottom");

export const boxDecorationBreak = {
    clone: updateCss("boxDecorationBreak", "clone"),
    inherit: updateCss("boxDecorationBreak", "inherit"),
    initial: updateCss("boxDecorationBreak", "initial"),
    slice: updateCss("boxDecorationBreak", "slice"),
    unset: updateCss("boxDecorationBreak", "unset"),
};

// TODO:  boxShadow, boxSizing, breakAfter, breakBefore, breakInside
