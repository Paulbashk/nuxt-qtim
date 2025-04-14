export type TColor = 'light' | 'dark' | 'light-grey'
export type TSize = 'lg' | 'sm' | 'xs'
export type TBorderColor = 'grey'
export type TBorderSize = 'lg' | 'xs'
export type TRounded = 'xs' | 'lg' | 'circle'

export interface IPropsButton {
  color?: TColor
  size?: TSize
  border?: boolean
  borderColor?: TBorderColor
  borderSize?: TBorderSize
  rounded?: TRounded
  withIcon?: boolean
  noHoverEffect?: boolean
}
