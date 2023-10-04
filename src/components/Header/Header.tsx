import { type FC } from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'
import Link from 'next/link'

export const Header: FC = () => (
  <div className={styles.container}>
    <div className="container d-flex justify-content-center">
      <Link href="/">
        <Image src="/images/aardy-logo.png" width="250" height="51" alt="Aardy Logo" />
      </Link>
    </div>
  </div>
)
