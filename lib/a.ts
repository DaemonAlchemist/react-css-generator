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

