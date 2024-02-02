import { useEffect, useState } from 'react'

import { useStore } from '@/store'

import { ISectionLocation } from '@/types/hooks.interface'

export const useSectionLocation = () => {
  const [sectionLocation, setSectionLocation] = useState<ISectionLocation>({})
  const { headerRef, sectionRef } = useStore()

  useEffect(() => {
    const handleResize = () => {
      const header = headerRef?.current

      let headerHeight = 0
      if (header) headerHeight = header.clientHeight

      Object.keys(sectionRef).forEach(name => {
        const section = sectionRef[name].current

        if (section)
          setSectionLocation(prevSectionLocation => ({
            ...prevSectionLocation,
            [name]: section.offsetTop - headerHeight
          }))
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [sectionRef])

  return { sectionLocation }
}
