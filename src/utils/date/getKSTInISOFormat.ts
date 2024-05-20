/**
 * 
 * @returns [0] yyyy-mm-dd, [1] hh-mm-ss, [3] 일, 월, 화 ...day
 */
function getKSTInISOFormat() {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  // 현재 날짜 및 시간을 가져옵니다
  const now = new Date();
  // UTC와 KST(UTC+9)의 시차를 밀리초 단위로 계산합니다
  const kstOffset = 9 * 60 * 60 * 1000;
  // UTC 시간에 KST 시차를 더합니다
  const kstTime = new Date(now.getTime() + kstOffset);
  // ISO 형식으로 변환합니다
  const [date, time] = kstTime.toISOString().split('T');
  return [date, time.slice(0,8), days[now.getDay()]]
}

export default getKSTInISOFormat