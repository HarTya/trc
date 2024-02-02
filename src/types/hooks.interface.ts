export interface ISectionLocation {
  [key: string]: number
}

export interface ISectionObserver {
  [key: string]: (props: ISectionObserverProps) => JSX.Element
}

export interface ISectionObserverProps {
  name: string
}
