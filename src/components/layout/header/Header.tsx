'use client'

import cl from 'clsx'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { useStore } from '@/store'

import { useScrollTop } from '@/hooks/useScrollTop'

import styles from './Header.module.scss'
import Button from './button/Button'
import Localization from './localization/Localization'
import Menu from './menu/Menu'
import NavArrow from './nav-arrow/NavArrow'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const { setHeaderRef } = useStore()

  useEffect(() => {
    setHeaderRef(headerRef)
  }, [])

  const { scrollTop } = useScrollTop()

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <header
        ref={headerRef}
        className={cl(styles.header, {
          [styles.header_scroll]: scrollTop > 50
        })}
      >
        <div className='container'>
          <div className={styles.inner}>
            <div className={styles.left}>
              <div
                className={styles.burger_menu}
                onClick={() => setIsMenuOpen(true)}
              >
                <div />
                <div />
                <div />
              </div>
              <div className={styles.logo}>
                <Image
                  src='/main-logo.svg'
                  alt=''
                  fill
                  draggable={false}
                  quality={100}
                />
              </div>
            </div>
            <div className={styles.right}>
              <Localization />
              <Button />
            </div>
          </div>
        </div>
      </header>
      <NavArrow isActive={scrollTop > 50} />
    </>
  )
}
