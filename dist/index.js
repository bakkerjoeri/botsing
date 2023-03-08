export function isPointInPoint([aLeft, aTop], [bLeft, bTop]) {
    return aLeft === bLeft && aTop === bTop;
}
export function isPointInRectangle([pointLeft, pointTop], [[rectangleLeft, rectangleTop], [rectangleRight, rectangleBottom],]) {
    return (pointLeft >= rectangleLeft &&
        pointTop >= rectangleTop &&
        pointLeft < rectangleRight &&
        pointTop < rectangleBottom);
}
export function isRectangleInRectangle([[aLeft, aTop], [aRight, aBottom]], [[bLeft, bTop], [bRight, bBottom]]) {
    return aLeft < bRight && aRight > bLeft && aTop < bBottom && aBottom > bTop;
}
