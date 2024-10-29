/**
 * @description input 123 -> [1, 2, 3]
 * @param num number
 * @param outputMode string | number [default: number]
 * @returns [] : Array<outputMode>
 */
export function toDigits(num: string, outputMode: 'string'): string[];
export function toDigits(num: number, outputMode?: 'number'): number[];
export function toDigits(num: number | string, outputMode: 'string' | 'number' = 'number'){
    const digits = num.toString().split('');
    return outputMode === 'number' ? digits.map(Number) : digits;
};
