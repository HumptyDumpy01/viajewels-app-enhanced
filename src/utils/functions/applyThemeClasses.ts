import { ThemeType } from '../../app/UI/theme/toggle-icon/toggle-icon.component';

export function applyThemeClasses(theme: ThemeType, ifLight: string, ifDark: string) {
  return (theme === 'light' ? ` ${ifLight}` : ` ${ifDark}`);
}
