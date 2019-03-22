export type CSSGenerator = (css:React.CSSProperties) => React.CSSProperties;

export type PropUpdater = (prop:string, value:string) => (css:React.CSSProperties) => React.CSSProperties;
export const updateCss:PropUpdater = (prop:string, value:string) => (css:React.CSSProperties):React.CSSProperties => ({
    ...css,
    [prop]: value
});

export const concatCss = (prop:string, value:string) => (css:any):React.CSSProperties => ({
    ...css,
    [prop]: css[prop] ? `${value} ${css[prop]}` : value
});

export const createValueUpdater = (prop:string) => (value:string) => updateCss(prop, value);

export const createCalcUpdater = (prop:string) => (value:string) => updateCss(prop, `calc(${value})`);

export const createLengthPropUpdater = (prop:string, updater:PropUpdater = updateCss) => (value:number) => ({
    ch: updater(prop, `${value}ch`),
    cm: updater(prop, `${value}cm`),
    em: updater(prop, `${value}em`),
    ex: updater(prop, `${value}ex`),
    in: updater(prop, `${value}in`),
    mm: updater(prop, `${value}mm`),
    pc: updater(prop, `${value}pc`),
    percent: updater(prop, `${value}%`),
    pt: updater(prop, `${value}pt`),
    px: updater(prop, `${value}px`),
    rem: updater(prop, `${value}rem`),
    vh: updater(prop, `${value}vh`),
    vmax: updater(prop, `${value}vmax`),
    vmin: updater(prop, `${value}vmin`),
    vw: updater(prop, `${value}vw`),
});

export const createLengthProp = (prop:string, updater:PropUpdater = updateCss) => ({
    auto: updateCss(prop, "auto"),
    calc: createCalcUpdater(prop),
    inherit: updateCss(prop, "inherit"),
    initial: updateCss(prop, "initial"),
    is: createLengthPropUpdater(prop, updater),
});
