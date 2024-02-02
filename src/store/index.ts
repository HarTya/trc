import { create } from 'zustand'

import { IStore } from '@/types/store.interface'

export const useStore = create<IStore>(set => ({
  headerRef: null,
  sectionRef: {},
  sectionInView: {},
  setHeaderRef: value => set({ headerRef: value }),
  setSectionRef: value => set({ sectionRef: value }),
  setSectionInView: value => set({ sectionInView: value })
}))
