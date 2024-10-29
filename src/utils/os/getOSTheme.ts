/**
 * 운영체제에서 설정한 테마를 가지고 온다.
 * @returns "dark" | "light" [default return: dark]
 */
export function getOSTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    } else {
      return 'dark';
    }
}