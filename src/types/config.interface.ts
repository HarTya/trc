export enum Localization {
  Ukraine = 'uk-UA',
  UnitedStates = 'en-US'
}

export interface Section {
  title: string
  Component: () => JSX.Element
  name: string
}
