import React from "react"
import type { ReactNode, FC } from "react"
interface IProp {
  children?: ReactNode[]
}
const Demo: FC<IProp> = () => {
  return <div>demo</div>
}

export default Demo
