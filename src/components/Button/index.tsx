import { PropsWithChildren } from "react"
import { cx } from "../../utils"

import styles from './index.module.css'

interface Props extends PropsWithChildren {
  type?: 'primary' | 'secondary'
}

export function Button ({ type = 'primary', children }: Props) {

  return <button className={cx(styles.button, styles[type])}>
    {children}
  </button>
}