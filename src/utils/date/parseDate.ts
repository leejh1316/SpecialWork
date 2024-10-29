/**
 *
 * @param dateString yyyy-mm-dd
 * @return {year,month,date}
 */
export function parseDate(dateString: string): {
  year: number;
  month: number;
  date: number;
} {
  const [year, month, date] = dateString.split("-").map(Number);
  return { year, month, date };
}
