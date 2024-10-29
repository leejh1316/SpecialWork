/**
 * yyyy-mm-dd로 만들어주는 함수 
 * @param0 {year:yyyy, month:mm, date:dd}
 * @returns yyyy-mm-dd
 */

export function formatDate({ year, month, date }: { year: number; month: number; date: number }): string {
    return `${year}-${month.toString().padStart(2,"0")}-${date.toString().padStart(2,"0")}`;
}