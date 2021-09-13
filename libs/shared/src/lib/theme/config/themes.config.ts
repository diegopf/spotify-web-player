export interface ApplicationTheme {
  [key: string]: string;
  primaryColor: string;
  secondaryColor: string;
}
export const THEMES: { [key: string]: ApplicationTheme } = {
  light: {
    primaryColor: 'rgb(100, 179, 244)',
    secondaryColor: 'rgb(194, 229, 156)',
  },
  dark: {
    primaryColor: 'rgb(9, 14, 17)',
    secondaryColor: 'rgb(27, 97, 98)',
  },
};
