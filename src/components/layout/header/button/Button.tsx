import cl from 'clsx'

import styles from './Button.module.scss'
import { IButtonProps } from './button.interface'

export default function Button({ menu }: IButtonProps) {
  return (
    <button
      className={cl(
        styles.button,
        {
          [styles.button_menu]: menu
        },
        'button'
      )}
    >
      Записатись на прийом
    </button>
  )
}
