export const getLanguageCode = (localization: string) =>
  localization.split('-')[0]

export const getCountryCode = (localization: string) =>
  localization.split('-')[1].toLowerCase()
