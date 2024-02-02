import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { sections } from '@/config/sections.config'

import { useStore } from '@/store'

import {
  ISectionObserver,
  ISectionObserverProps
} from '@/types/hooks.interface'

export const useSectionObserver = () => {
  const [sectionObserver, setSectionObserver] = useState<ISectionObserver>({})
  const { setSectionInView } = useStore()

  function Observer({ name }: ISectionObserverProps) {
    const { ref, inView } = useInView({
      threshold: 0
    })

    useEffect(() => {
      if (inView) setSectionInView({ [name]: inView })
    }, [inView, name])

    return <span className='observer' ref={ref} />
  }

  useEffect(
    () =>
      sections.forEach(({ name }) =>
        setSectionObserver(prevSectionObserver => ({
          ...prevSectionObserver,
          [name]: Observer
        }))
      ),
    []
  )

  return { sectionObserver }
}
