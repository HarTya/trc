import { Localization } from '@/types/config.interface'

export const LOCALIZATION_LS_KEY = 'localization'
export const DEFAULT_LOCALIZATION: Localization = Localization.Ukraine
export const LOCALIZATION_LIST: Localization[] = [
  DEFAULT_LOCALIZATION,
  Localization.UnitedStates
]
