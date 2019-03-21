import * as React from "react";
import {_} from 'atp-pointfree';

export const createCss = _;

export type CSSGenerator = (css:React.CSSProperties) => React.CSSProperties;

const updateCss = (prop:string, value:string) => (css:React.CSSProperties):React.CSSProperties => ({
    ...css,
    [prop]: value
});

const createValueUpdater = (prop:string) => (value:string) => updateCss(prop, value);

const createCalcUpdater = (prop:string) => (value:string) => updateCss(prop, `calc(${value})`);

const createLengthPropUpdater = (prop:string) => (value:number) => ({
    ch: updateCss(prop, `${value}ch`),
    cm: updateCss(prop, `${value}cm`),
    em: updateCss(prop, `${value}em`),
    ex: updateCss(prop, `${value}ex`),
    in: updateCss(prop, `${value}in`),
    mm: updateCss(prop, `${value}mm`),
    pc: updateCss(prop, `${value}pc`),
    percent: updateCss(prop, `${value}%`),
    pt: updateCss(prop, `${value}pt`),
    px: updateCss(prop, `${value}px`),
    rem: updateCss(prop, `${value}rem`),
    vh: updateCss(prop, `${value}vh`),
    vmax: updateCss(prop, `${value}vmax`),
    vmin: updateCss(prop, `${value}vmin`),
    vw: updateCss(prop, `${value}vw`),
});

const createLengthProp = (prop:string) => ({
    auto: updateCss(prop, "auto"),
    calc: createCalcUpdater(prop),
    inherit: updateCss(prop, "inherit"),
    initial: updateCss(prop, "initial"),
    is: createLengthPropUpdater(prop),
});

export const alignContent = {
    stretch: updateCss("alignContent", "stretch"),
    center: updateCss("alignContent", "center"),
    flexStart: updateCss("alignContent", "flex-start"),
    flexEnd: updateCss("alignContent", "flex-end"),
    spaceBetween: updateCss("alignContent", "space-between"),
    spaceAround: updateCss("alignContent", "space-around"),
    initial: updateCss("alignContent", "initial"),
    inherit: updateCss("alignContent", "inherit"),
};

export const alignItems = (alignItems:"stretch"|"center"|"flex-start"|"flex-end"|"baseline"|"initial"|"inherit") =>
    (css:React.CSSProperties) => ({
        ...css,
        alignItems
    });

export const height = createLengthProp("height");

export const padding = {
    bottom: createLengthProp("paddingBottom"),
    is: createLengthPropUpdater("padding"),
    is2:(a:number, b:number) => createCss(
        updateCss("paddingTop", `${a}`),
        updateCss("paddingBottom", `${a}`),
        updateCss("paddingLeft", `${b}`),
        updateCss("paddingright", `${b}`),
    ),
    left: createLengthProp("paddingLeft"),
    right: createValueUpdater("paddingRight"),
    top: createValueUpdater("paddingTop"),
};

export const width = createLengthProp("width");
