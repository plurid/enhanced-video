/**
 * Check if value is between the limits (strictly or not).
 *
 * @param value
 * @param lowerLimit
 * @param upperLimit
 * @param strict
 */
export const valueIsBetween = (
    value: number,
    lowerLimit: number,
    upperLimit: number,
    strict: boolean = false
) => {
    if (strict) {
        return (value > lowerLimit && value < upperLimit);
    } else {
        return (value >= lowerLimit && value <= upperLimit);
    }
}
