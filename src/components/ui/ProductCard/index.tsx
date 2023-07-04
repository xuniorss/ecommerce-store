'use client'

import { useCart } from '@/hooks/useCart'
import { usePreviewModal } from '@/hooks/usePreviewModal'
import { Product } from '@/types'
import { Expand, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MouseEventHandler, useCallback } from 'react'
import { Currency } from '../Currency'
import { IconButton } from '../IconButton'

interface ProductCardProps {
   data: Product
}

export const ProductCard = ({ data }: ProductCardProps) => {
   const router = useRouter()
   const previewModal = usePreviewModal()
   const cart = useCart()

   const handleClick = useCallback(() => {
      router.push(`/product/${data?.id}`)
   }, [data?.id, router])

   const onPreview: MouseEventHandler<HTMLButtonElement> = useCallback(
      (event) => {
         event.stopPropagation()

         previewModal.onOpen(data)
      },
      [data, previewModal]
   )

   const onAddToCart: MouseEventHandler<HTMLButtonElement> = useCallback(
      (event) => {
         event.stopPropagation()

         cart.addItem(data)
      },
      [cart, data]
   )

   return (
      <div
         onClick={handleClick}
         className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
      >
         {/* Images and Actions */}
         <div className="relative aspect-square rounded-xl bg-gray-100">
            <Image
               src={data?.images?.[0].url}
               fill
               alt="Image"
               className="aspect-square rounded-md object-cover"
            />
            <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
               <div className="flex justify-center gap-x-6">
                  <IconButton
                     onClick={onPreview}
                     icon={<Expand size={20} className="text-gray-600" />}
                  />
                  <IconButton
                     onClick={onAddToCart}
                     icon={<ShoppingCart size={20} className="text-gray-600" />}
                  />
               </div>
            </div>
         </div>
         {/* Description */}
         <div>
            <p className="text-lg font-semibold">{data?.name}</p>
            <p className="text-sm text-gray-500">{data?.category?.name}</p>
         </div>
         {/* Price */}
         <div className="flex items-center justify-between">
            <Currency value={data?.price} />
         </div>
      </div>
   )
}
