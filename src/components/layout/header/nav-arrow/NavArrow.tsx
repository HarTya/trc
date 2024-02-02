import cl from 'clsx'
import Image from 'next/image'

import styles from './NavArrow.module.scss'
import { INavArrow } from './nav-arrow.interface'

export default function NavArrow({ isActive }: INavArrow) {
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className={cl(styles.nav_arrow, {
        [styles.nav_arrow_active]: isActive
      })}
    >
      <div>
        <div className={styles.arrow}>
          <Image
            src='/nav-arrow.svg'
            alt=''
            fill
            draggable={false}
            quality={100}
          />
        </div>
      </div>
      <span className={styles.text}>НАГОРУ</span>
    </div>
  )
}
