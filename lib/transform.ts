import { concatCss, updateCss } from "./common";

// Matrix transformations
export const matrix = (a:number, b:number, c:number, d:number, tx:number, ty:number) =>
    concatCss("transform", `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`);
export const matrix3d = (
    a1:number, b1:number, c1:number, d1:number, 
    a2:number, b2:number, c2:number, d2:number, 
    a3:number, b3:number, c3:number, d3:number, 
    a4:number, b4:number, c4:number, d4:number, 
) => concatCss("transform", `matrix3d(${a1}, ${b1}, ${c1}, ${d1}, ${a2}, ${b2}, ${c2}, ${d2}, ${a3}, ${b3}, ${c3}, ${d3}, ${a4}, ${b4}, ${c4}, ${d4})`);

// Translation
export const translate = (x:number, y:number) => concatCss("transform", `translate(${x}, ${y})`);
export const translate3d = (x:number, y:number, z:number) => concatCss("transform", `translate3d(${x}, ${y}, ${z})`);
export const translateX = (x:number) => concatCss("transform", `translateX(${x})`);
export const translateY = (y:number) => concatCss("transform", `translateY(${y})`);
export const translateZ = (z:number) => concatCss("transform", `translateZ(${z})`);

// Scaling
export const scale = (x:number, y:number) => concatCss("transform", `scale(${x}, ${y})`);
export const scale3d = (x:number, y:number, z:number) => concatCss("transform", `scale3d(${x}, ${y}, ${z})`);
export const scaleX = (x:number) => concatCss("transform", `scaleX(${x})`);
export const scaleY = (y:number) => concatCss("transform", `scaleY(${y})`);
export const scaleZ = (z:number) => concatCss("transform", `scaleZ(${z})`);

// Rotation
export const rotate = (angle:number) => concatCss("transform", `rotate(${angle})`);
export const rotateAround = (x:number, y:number, z:number) => ({
    by: (angle:number) => concatCss("transform", `rotate3d(${x}, ${y}, ${z}, ${angle})`),
});
export const rotateX = (x:number) => concatCss("transform", `rotateX(${x})`);
export const rotateY = (y:number) => concatCss("transform", `rotateY(${y})`);
export const rotateZ = (z:number) => concatCss("transform", `rotateZ(${z})`);

// Skew
export const skew = (xAngle:number, yAngle:number) => concatCss("transform", `skew(${xAngle}, ${yAngle})`);
export const skewX = (x:number) => concatCss("transform", `skewX(${x})`);
export const skewY = (y:number) => concatCss("transform", `skewY(${y})`);
export const skewZ = (z:number) => concatCss("transform", `skewZ(${z})`);

// Perspective
export const perspective = (n:number) => concatCss("transform", `perspective(${n})`);

// Misc
export const transform = {
    inherit: updateCss("transform", "none"),
    initial: updateCss("transform", "initial"),
    none: updateCss("transform", "none"),
};
