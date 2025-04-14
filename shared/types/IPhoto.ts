type TSrcKeys =
  | 'original'
  | 'large2x'
  | 'large'
  | 'medium'
  | 'small'
  | 'portrait'
  | 'landscape'
  | 'tiny'

type TSrc = {
  [K in TSrcKeys]: string
}

export interface IPhoto {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: TSrc
  liked: boolean
  alt: string
}
