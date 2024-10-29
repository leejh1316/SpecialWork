import type { Theme } from "./theme";

/** 테마 관리자 클래스 */
class ThemeManager {
  private themes: { [key: string]: Theme } = {};
  private activeThemeName: string | null = null;

  /**
   * 테마를 정의합니다.
   * @param name 테마 이름
   * @param themeProperties 테마 속성
   * @returns ThemeManager 현재 테마 매니저를 체이닝합니다.
   */
  createTheme(name: string, themeProperties: Theme): ThemeManager {
    this.themes[name] = themeProperties;
    return this;
  }

  /**
   * 테마를 가져옵니다.
   * @param name 테마 이름
   * @returns {Theme | undefined} 테마 객체
   */
  findTheme(name: string): Theme | undefined {
    return this.themes[name];
  }

  /**
   * 모든 테마를 가져옵니다.
   * @returns {Object | undefined} 테막 객체
   */
  getAllThemes():Object | undefined{
    return this.themes
  }

  /**
   * 현재 테마를 설정합니다.
   * @param name 적용할 테마 이름
   */
  activateTheme(name: string): void {
    const theme = this.themes[name];
    if (theme) {
      this.activeThemeName = name;
      Object.keys(theme).forEach((key) => {
        if (theme[key])
          document.documentElement.style.setProperty(`--${key}`, theme[key]!);
      });
    }
  }

  /**
   * 현재 적용된 테마의 이름과 객체를 반환합니다.
   * @returns 현재 테마 이름과 객체
   */
  getActiveTheme(): { name: string | null; theme: Theme | undefined } {
    return {
      name: this.activeThemeName,
      theme: this.activeThemeName
        ? this.themes[this.activeThemeName]
        : undefined,
    };
  }
}

const themeManagerInstance = new ThemeManager();

export function useTheme(): ThemeManager {
  return themeManagerInstance;
}
