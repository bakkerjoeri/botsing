type Point = [x: number, y: number];
type Rectangle = [[left: number, top: number], [right: number, bottom: number]];
export declare function isPointInPoint([aLeft, aTop]: Point, [bLeft, bTop]: Point): boolean;
export declare function isPointInRectangle([pointLeft, pointTop]: Point, [[rectangleLeft, rectangleTop], [rectangleRight, rectangleBottom],]: Rectangle): boolean;
export declare function isRectangleInRectangle([[aLeft, aTop], [aRight, aBottom]]: Rectangle, [[bLeft, bTop], [bRight, bBottom]]: Rectangle): boolean;
export {};
