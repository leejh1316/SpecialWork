import { ensureDate } from "./ensureDate";

/**
 *  기준일(base)이 최소일, 최대일을 넘었는지 판별하는 함수
 * @param baseDateSting yyyy-mm-dd | Date
 * @param minDateString yyyy-mm-dd | Date
 * @param maxDateString yyyy-mm-dd | Date
 * @returns boolean
 */
export function isDateOutOfRange(baseDateSting:string|Date, minDateString:string|Date, maxDateString:string|Date){
    const baseTime = ensureDate(baseDateSting).getTime();
    const minTime = ensureDate(minDateString).getTime();
    const maxTime = ensureDate(maxDateString).getTime();
    return baseTime < minTime || baseTime > maxTime;
}
