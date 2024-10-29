/**
 *  입력된 값을 Date객체로 반환해주는 함수
 * @param input yyyy-mm-dd | Date Object
 * @returns Date(input)
 */
export function ensureDate(input:Date|string) {
  if (input instanceof Date) return input;
  return new Date(input);
}
