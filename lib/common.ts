export type CSSGenerator = (css:React.CSSProperties) => React.CSSProperties;

export const updateCss = (prop:string, value:string) => (css:React.CSSProperties):React.CSSProperties => ({
    ...css,
    [prop]: value
});

export const concatCss = (prop:string, value:string) => (css:any):React.CSSProperties => ({
    ...css,
    [prop]: css[prop] ? `${value} ${css[prop]}` : value
});

export const createValueUpdater = (prop:string) => (value:string) => updateCss(prop, value);

export const createCalcUpdater = (prop:string) => (value:string) => updateCss(prop, `calc(${value})`);

export const createLengthPropUpdater = (prop:string) => (value:number) => ({
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

export const createLengthProp = (prop:string) => ({
    auto: updateCss(prop, "auto"),
    calc: createCalcUpdater(prop),
    inherit: updateCss(prop, "inherit"),
    initial: updateCss(prop, "initial"),
    is: createLengthPropUpdater(prop),
});
