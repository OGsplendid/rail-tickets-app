import { PropsWithChildren } from "react"

export const MainContainer = ({children}: PropsWithChildren) => {
  return (
    <div className="main-container">
      {children}
    </div>
  )
}
