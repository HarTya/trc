import cl from 'clsx'
import { useEffect, useState } from 'react'

import {
  DEFAULT_LOCALIZATION,
  LOCALIZATION_LIST,
  LOCALIZATION_LS_KEY
} from '@/config/localization.config'

import styles from './Localization.module.scss'
import { getCountryCode, getLanguageCode } from './localization.helper'
import {
  ILocalizationListProps,
  ILocalizationProps
} from './localization.interface'

export default function Localization({ menu }: ILocalizationProps) {
  const [localization, setLocalization] = useState('')

  useEffect(() => {
    const localization = localStorage.getItem(LOCALIZATION_LS_KEY)

    if (localization) setLocalization(localization)
    else {
      localStorage.setItem(LOCALIZATION_LS_KEY, DEFAULT_LOCALIZATION)
      setLocalization(DEFAULT_LOCALIZATION)
    }
  }, [])

  useEffect(() => {
    if (localization) document.documentElement.lang = localization
  }, [localization])

  if (!localization) return

  return (
    <div
      className={cl(styles.localization, {
        [styles.localization_menu]: menu
      })}
    >
      <span>
        <style jsx>{`
          span::before {
            background: center / contain no-repeat
              url('/country/${getCountryCode(localization)}.svg');
        `}</style>
        {getLanguageCode(localization)}
      </span>
      <List localization={localization} setLocalization={setLocalization} />
    </div>
  )
}

function List({ localization, setLocalization }: ILocalizationListProps) {
  return (
    <ul className={styles.list}>
      {LOCALIZATION_LIST.map(LOCALIZATION => (
        <li
          key={LOCALIZATION}
          onClick={() => {
            localStorage.setItem(LOCALIZATION_LS_KEY, LOCALIZATION)
            setLocalization(LOCALIZATION)
          }}
          className={cl(styles.item, {
            [styles.item_active]: LOCALIZATION === localization
          })}
        >
          <style jsx>{`
            li::before {
              background: center / contain no-repeat
                url('/country/${getCountryCode(LOCALIZATION)}.svg');
            }
          `}</style>
          {getLanguageCode(LOCALIZATION)}
        </li>
      ))}
    </ul>
  )
}
