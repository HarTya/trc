import cl from 'clsx'
import Image from 'next/image'

import Button from '@/layout/header/button/Button'
import Localization from '@/layout/header/localization/Localization'

import { sections } from '@/config/sections.config'

import { useStore } from '@/store'

import { useSectionLocation } from '@/hooks/useSectionLocation'

import styles from './Menu.module.scss'
import { IMenuProps } from './menu.interface'

export default function Menu({ isMenuOpen, setIsMenuOpen }: IMenuProps) {
  const { sectionLocation } = useSectionLocation()
  const { sectionInView } = useStore()

  return (
    <>
      {isMenuOpen && (
        <style jsx global>
          {`
            body {
              overflow-y: hidden;
            }
          `}
        </style>
      )}
      <div
        className={cl(styles.body, {
          [styles.body_active]: isMenuOpen
        })}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav
          className={cl(styles.menu, {
            [styles.menu_active]: isMenuOpen
          })}
          onClick={event => event.stopPropagation()}
        >
          <div className={styles.top}>
            <div className={styles.main_logo}>
              <Image
                src='/main-logo.svg'
                alt=''
                fill
                draggable={false}
                quality={100}
              />
            </div>
            <div className={styles.close} onClick={() => setIsMenuOpen(false)}>
              <Image
                src='/menu-close.svg'
                alt=''
                fill
                draggable={false}
                quality={100}
              />
            </div>
          </div>
          <ul className={styles.list}>
            {sections.map(({ title, name }) => (
              <li
                key={name}
                onClick={() => {
                  window.scrollTo(0, sectionLocation[name])
                  setIsMenuOpen(false)
                }}
                className={cl(styles.item, {
                  [styles.item_active]: sectionInView[name]
                })}
              >
                {title}
              </li>
            ))}
          </ul>
          <Localization menu />
          <Button menu />
        </nav>
      </div>
    </>
  )
}
