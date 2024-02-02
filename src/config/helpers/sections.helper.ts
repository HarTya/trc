import { Section } from '@/types/config.interface'

export const initializeSection = (
  title: string,
  Component: () => JSX.Element
): Section => ({
  title,
  Component,
  name: Component.name
})
