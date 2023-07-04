'use client'

import { useEffect, useState } from 'react'

export const formatter = new Intl.NumberFormat('pt-BR', {
   style: 'currency',
   currency: 'BRL',
})

export const Currency = ({ value }: { value?: string | number }) => {
   const [isMounted, setIsMounted] = useState(false)

   useEffect(() => {
      setIsMounted(true)
   }, [])

   if (!isMounted) return null

   return <div className="font-semibold">{formatter.format(Number(value))}</div>
}
