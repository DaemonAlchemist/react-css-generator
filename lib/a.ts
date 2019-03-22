import {updateCss} from './common';

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

export const alignSelf = {
    auto: updateCss("alignSelf", "auto"),
    baseline: updateCss("alignSelf", "baseline"),
    center: updateCss("alignSelf", "center"),
    flexEnd: updateCss("alignSelf", "flex-end"),
    flextStart: updateCss("alignSelf", "flex-start"),
    inherit: updateCss("alignSelf", "inherit"),
    initial: updateCss("alignSelf", "initial"),
    stretch: updateCss("alignSelf", "stretch"),
};

export const all = {
    inherit: updateCss("all", "inherit"),
    initial: updateCss("all", "initial"),
    unset: updateCss("all", "unset"),
};

export const animation = {
    delay: {
        inherit: updateCss("animationDelay", "inherit"),
        initial: updateCss("animationDelay", "initial"),
        is: (time:number) => ({
            seconds: updateCss("animationDelay", `${time}s`),
            milliseconds: updateCss("animationDelay", `${time}ms`),
        }),
    },
    direction: {
        alternate: updateCss("animationDirection", "alternate"),
        alternateReverse: updateCss("animationDirection", "alternateReverse"),
        inherit: updateCss("animationDirection", "inherit"),
        initial: updateCss("animationDirection", "initial"),
        normal: updateCss("animationDirection", "normal"),
        reverse: updateCss("animationDirection", "reverse"),
    },
    duration: {
        inherit: updateCss("animationDuration", "inherit"),
        initial: updateCss("animationDuration", "initial"),
        is: (time:number) => ({
            seconds: updateCss("animationDuration", `${time}s`),
            milliseconds: updateCss("animationDuration", `${time}ms`),
        }),
    },
    fillMode: {
        backwards: updateCss("animationFillMode", "backwards"),
        both: updateCss("animationFillMode", "both"),
        forwards: updateCss("animationFillMode", "forwards"),
        inherit: updateCss("animationFillMode", "inherit"),
        initial: updateCss("animationFillMode", "initial"),
        none: updateCss("animationFillMode", "none"),
    },
    iterationCount: {
        infinite: updateCss("animationIterationCount", "infinite"),
        inherit: updateCss("animationIterationCount", "inherit"),
        initial: updateCss("animationIterationCount", "initial"),
        is: (count:number) => updateCss("animationIterationCount", `${count}`),
    },
    name: {
        inherit: updateCss("animationName", "inherit"),
        initial: updateCss("animationName", "initial"),
        is: (name:string) => updateCss("animationName", name),
        none: updateCss("animationName", ""),
    },
    playState: {
        inherit: updateCss("animationPlayState", "inherit"),
        initial: updateCss("animationPlayState", "initial"),
        paused: updateCss("animationPlayState", "paused"),
        running: updateCss("animationPlayState", "running"),
    },
    timingFunction: {
        cubicBezier: (a:number, b:number, c:number, d:number) => updateCss("animationTimingFunction", `cubic-bezier(${a}, ${b}, ${c}, ${d})`),
        ease: updateCss("animationTimingFunction", "ease"),
        easeIn: updateCss("animationTimingFunction", "ease-in"),
        easeInOut: updateCss("animationTimingFunction", "ease-in-out"),
        easeOut: updateCss("animationTimingFunction", "ease-out"),
        inherit: updateCss("animationTimingFunction", "inherit"),
        initial: updateCss("animationTimingFunction", "initial"),
        linear: updateCss("animationTimingFunction", "linear"),
        stepEnd: updateCss("animationTimingFunction", "step-end"),
        steps: (intervals:number, changePoint?:"start" | "end") => updateCss("animationTimingFunction", `steps(${intervals}, ${changePoint || "end"})`),
        stepStart: updateCss("animationTimingFunction", "step-start"),
    }
};
