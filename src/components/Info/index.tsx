'use client'

import { Product } from '@/types'
import { ShoppingCart } from 'lucide-react'
import Button from '../ui/Button'
import { Currency } from '../ui/Currency'

interface InfoProps {
   data: Product
}

export const Info = ({ data }: InfoProps) => {
   return (
      <div>
         <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
         <div className="mt-3 flex items-end justify-between">
            <p className="text-2xl text-gray-900">
               <Currency value={data?.price} />
            </p>
         </div>
         <hr className="my-4" />
         <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4">
               <h3 className="font-semibold text-black">Size:</h3>
               <span>{data?.size?.name}</span>
            </div>
            <div className="flex items-center gap-x-4">
               <h3 className="font-semibold text-black">Color:</h3>
               <span
                  className="h-6 w-6 rounded-full border border-gray-600"
                  style={{ backgroundColor: data?.color?.value }}
               />
            </div>
         </div>
         <div className="mt-10 flex items-center gap-x-3">
            <Button className="flex items-center gap-x-2">
               Add To Cart
               <ShoppingCart />
            </Button>
         </div>
      </div>
   )
}
