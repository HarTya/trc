export interface ILocalizationProps {
  menu?: boolean
}

export interface ILocalizationListProps {
  localization: string
  setLocalization: React.Dispatch<React.SetStateAction<string>>
}
