import { HTMLMotionProps } from 'framer-motion'

export interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export type ButtonProps = ButtonBaseProps & HTMLMotionProps<"button">
