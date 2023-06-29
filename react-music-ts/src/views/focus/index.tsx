import React from "react"
import type { ReactNode, FC } from "react"
interface IProp {
  children?: ReactNode[]
}
const Focus: FC<IProp> = () => {
  return <div>Focus</div>
}

export default Focus
