export interface GlazeTheme {
  glaze: string;
  antiglaze: string;
  disabled: string;
  primary: string;
  secondary: string;
}

/** dark theme */
export const darkTheme: GlazeTheme = {
  glaze: '#FFF2EA',
  antiglaze: '#080807',
  disabled: '#AAAAAA',
  primary: '#071808',
  secondary: '#917717'
};

/** light theme */
export const lightTheme: GlazeTheme = {
  glaze: '#071808',
  antiglaze: '#FFF2EA',
  disabled: '#AAAAAA',
  primary: '#071808',
  secondary: '#917717'
};
