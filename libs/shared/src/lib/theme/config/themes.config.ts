export interface ApplicationTheme {
  [key: string]: string;
  primaryColor: string;
  secondaryColor: string;
}
export const THEMES: { [key: string]: ApplicationTheme } = {
  light: {
    primaryColor: '#dee8f3',
    secondaryColor: '#31456a',
  },
  dark: {
    primaryColor: '#090e11',
    secondaryColor: '#1b6162',
  },
};
