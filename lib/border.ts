import { createLengthProp, createValueUpdater, updateCss } from "./common";

const createBorderStyleUpdater = (prop:string) => ({
    dashed: updateCss(prop, "dashed"),
    dotted: updateCss(prop, "dotted"),
    double: updateCss(prop, "double"),
    hidden: updateCss(prop, "hidden"),
    inherit: updateCss(prop, "inherit"),
    initial: updateCss(prop, "initial"),
    inset: updateCss(prop, "inset"),
    groove: updateCss(prop, "groove"),
    none: updateCss(prop, "none"),
    outset: updateCss(prop, "outset"),
    ridge: updateCss(prop, "ridge"),
    solid: updateCss(prop, "solid"),
});
const createBorderSideUpdater = (side:string) => ({
    color: createValueUpdater(`border${side}color`),
    style: createBorderStyleUpdater(`border${side}Style`),
    width: createLengthProp(`border${side}Width`),
});
export const border = {
    bottom: createBorderSideUpdater("Bottom"),
    collapse: {
        collapse: updateCss("borderCollapse", "collapse"),
        inherit: updateCss("borderCollapse", "inherit"),
        initial: updateCss("borderCollapse", "initial"),
        separate: updateCss("borderCollapse", "separate"),
    },
    color: createValueUpdater("borderColor"),
    image: {
        outset: createLengthProp("borderImageOutset"),
        repeat: {
            inherit: updateCss("borderImageRepeat", "inherit"),
            initiaL: updateCss("borderImageRepeat", "initial"),
            repeat: updateCss("borderImageRepeat", "repeat"),
            round: updateCss("borderImageRepeat", "round"),
            stretch: updateCss("borderImageRepeat", "stretch"),
        },
        slice: {
            inherit: updateCss("borderSlice", "inherit"),
            initial: updateCss("borderSlice", "initial"),
            is: (a:number) => ({
                px: {
                    filled: updateCss("borderSlice", `${a} filled`),
                    unfilled: updateCss("borderSlice", `${a}`),
                },
                percent: {
                    filled: updateCss("borderSlice", `${a}% filled`),
                    unfilled: updateCss("borderSlice", `${a}%`),
                },
            })
        },
        source: {
            inherit: updateCss("borderImageSource", "inherit"),
            initial: updateCss("borderImageSource", "initial"),
            none: updateCss("borderImageSource", "none"),
            url: (url:string) => updateCss("borderImageSource", `url(${url})`),
        },
        width: createLengthProp("borderImageWidth"),
    },
    is: createLengthProp("border"),
    left: createBorderSideUpdater("Left"),
    radius: {
        bottom: {
            left: createLengthProp("borderBottomLeftRadius"),
            right: createLengthProp("borderBottomRightRadius"),
        },
        is: createLengthProp("borderRadius"),
        top: {
            left: createLengthProp("borderTopLeftRadius"),
            right: createLengthProp("borderTopRightRadius"),
        },
    },
    right: createBorderSideUpdater("Right"),
    spacing: createLengthProp("borderSpacing"), //TODO: Handle two values
    style: createBorderStyleUpdater("borderStyle"),
    top: createBorderSideUpdater("Top"),
    width: createValueUpdater("borderWidth"),
};
