import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, children, disabled, type = 'button', ...props }, ref) => {
      return (
         <button
            className={cn(
               'w-auto rounded-full border-transparent bg-black px-5 py-3 font-semibold text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50',
               className
            )}
            disabled={disabled}
            type={type}
            ref={ref}
            {...props}
         >
            {children}
         </button>
      )
   }
)

Button.displayName = 'Button'

export default Button
