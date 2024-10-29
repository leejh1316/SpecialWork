/**
 * 지정된달의 마지막날을 알려주는 함수
 * 내부적으로 month + 1을 함(0~11)
 */
export function getLastDayOfMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
