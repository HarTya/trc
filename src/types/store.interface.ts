export type HeaderRef = React.RefObject<HTMLElement> | null

export interface ISectionRef {
  [key: string]: React.RefObject<HTMLElement>
}

export interface ISectionInView {
  [key: string]: boolean
}

export interface IStore {
  headerRef: HeaderRef
  sectionRef: ISectionRef
  sectionInView: ISectionInView
  setHeaderRef: (value: HeaderRef) => void
  setSectionRef: (value: ISectionRef) => void
  setSectionInView: (value: ISectionInView) => void
}
