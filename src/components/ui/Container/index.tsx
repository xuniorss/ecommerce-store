import { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
   return <div className="mx-auto max-w-7xl">{children}</div>
}
