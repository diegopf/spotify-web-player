export interface ApplicationTheme {
  [key: string]: string;
  primaryColor: string;
  secondaryColor: string;
}
export const THEMES: { [key: string]: ApplicationTheme } = {
  light: {
    primaryColor: 'rgb(222, 232, 243)',
    secondaryColor: 'rgb(49, 69, 106)',
  },
  dark: {
    primaryColor: 'rgb(9, 14, 17)',
    secondaryColor: 'rgb(27, 97, 98)',
  },
};
