export interface GlazeTheme {
  glaze: string;
  antiglaze: string;
  disabled: string;
  primary: string;
  secondary: string;
  timing: number;
  radius: number;
}

/** dark theme */
export const darkTheme: GlazeTheme = {
  glaze: '#FFF2EA',
  antiglaze: '#080807',
  disabled: '#AAAAAA',
  primary: '#071808',
  secondary: '#917717',
  timing: 200,
  radius: 2
};

/** light theme */
export const lightTheme: GlazeTheme = {
  glaze: '#071808',
  antiglaze: '#FFF2EA',
  disabled: '#AAAAAA',
  primary: '#071808',
  secondary: '#917717',
  timing: 200,
  radius: 2
};
