'use client'

import { useEffect, useRef } from 'react'

import { sections } from '@/config/sections.config'

import { useStore } from '@/store'

import { useSectionObserver } from '@/hooks/useSectionObserver'

import { ISectionRef } from '@/types/store.interface'

export default function Home() {
  const { sectionObserver } = useSectionObserver()
  const { setSectionRef } = useStore()

  const sectionRef = sections.reduce<ISectionRef>((acc, { name }) => {
    acc[name] = useRef<HTMLElement>(null)
    return acc
  }, {})

  useEffect(() => {
    setSectionRef(sectionRef)
  }, [])

  return (
    <>
      {sections.map(({ Component, name }) => {
        const Observer = sectionObserver[name]

        return (
          <section key={name} className='section' ref={sectionRef[name]}>
            <Component />
            {Observer && <Observer name={name} />}
          </section>
        )
      })}
    </>
  )
}
