'use client'

import { Currency } from '@/components/ui/Currency'
import { IconButton } from '@/components/ui/IconButton'
import { useCart } from '@/hooks/useCart'
import { Product } from '@/types'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useCallback } from 'react'

interface CartItemProps {
   data: Product
}

export const CartItem = ({ data }: CartItemProps) => {
   const cart = useCart()

   const onRemove = useCallback(() => cart.removeItem(data.id), [cart, data.id])

   return (
      <li className="flex border-b py-6">
         <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
            <Image
               fill
               src={data.images[0].url}
               alt=""
               className="object-cover object-center"
            />
         </div>
         <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="absolute right-0 top-0 z-10">
               <IconButton onClick={onRemove} icon={<X size={15} />} />
            </div>
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
               <div className="flex justify-between">
                  <p className="text-lg font-semibold text-black">
                     {data.name}
                  </p>
               </div>
               <div className="mt-1 flex text-sm">
                  <p className="text-gray-500">{data.color.name}</p>
                  <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                     {data.size.name}
                  </p>
               </div>
               <Currency value={data.price} />
            </div>
         </div>
      </li>
   )
}
