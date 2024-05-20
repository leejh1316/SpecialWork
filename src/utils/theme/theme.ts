export interface Theme {
  primary?: string; // 기본 색상 (예: 브랜드 색상)
  secondary?: string; // 보조 색상
  success?: string; // 성공 메시지 색상
  warning?: string; // 경고 메시지 색상
  error?: string; // 오류 메시지 색상
  info?: string; // 정보 메시지 색상
  background?: string; // 배경 색상
  text?: string; // 기본 텍스트 색상
  [key: string]: string | undefined;
}
