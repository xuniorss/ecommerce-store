import { cn } from '@/lib/utils'
import { MouseEventHandler, ReactElement } from 'react'

interface IconButtonProps {
   onClick?: MouseEventHandler<HTMLButtonElement> | undefined
   icon: ReactElement
   className?: string
}

export const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
   return (
      <button
         onClick={onClick}
         className={cn(
            'flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110',
            className
         )}
      >
         {icon}
      </button>
   )
}
