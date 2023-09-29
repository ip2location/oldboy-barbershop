export const SEVEN_DAYS = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

export enum Cookies {
  Country = 'country',
  City = 'city',
  Language = 'language',
  Theme = 'theme',
}

export enum Languages {
  EN = 'en',
  RU = 'ru',
}

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}
