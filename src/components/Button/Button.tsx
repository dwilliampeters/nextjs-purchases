import { type FC } from 'react'
import { type ButtonProps } from './Button.interface'
import styles from './Button.module.scss'
import cn from 'classnames'
import Link from 'next/link'

export const Button: FC<ButtonProps> = ({ children, link, linkTarget, className, variant}) => (
  <Link href={link} target={linkTarget ?? ''} className={cn(styles['container'], className, variant ? styles[variant] : '')}>
    {children}
  </Link>
)
