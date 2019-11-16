interface Deltas {
    deltaX: number;
    deltaY: number;
}


export const getWheelDirection = (
    deltas: Deltas,
    ABSTHRESHOLD: number = 10,
    THRESHOLD: number = 0,
): string => {
    let direction = 'left';

    const wheelDeltaX = deltas.deltaX;
    const wheelDeltaY = deltas.deltaY;

    const absWheelDeltaX = Math.abs(wheelDeltaX);
    const absWheelDeltaY = Math.abs(wheelDeltaY);

    if (
        wheelDeltaX > THRESHOLD &&
        absWheelDeltaY < ABSTHRESHOLD &&
        absWheelDeltaX > absWheelDeltaY
    ) {
        direction = 'right';
    }

    if (
        wheelDeltaX < THRESHOLD &&
        absWheelDeltaY < ABSTHRESHOLD &&
        absWheelDeltaX > absWheelDeltaY
    ) {
        direction = 'left';
    }

    if (
        wheelDeltaY > THRESHOLD &&
        absWheelDeltaX < ABSTHRESHOLD &&
        absWheelDeltaY > absWheelDeltaX
    ) {
        direction = 'down';
    }

    if (
        wheelDeltaY < THRESHOLD &&
        absWheelDeltaX < ABSTHRESHOLD &&
        absWheelDeltaY > absWheelDeltaX
    ) {
        direction = 'up';
    }

    return direction;
};
