'use client'

import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { GalleryTab } from './components/GalleryTab'

interface GalleryProps {
   images: Array<ImageType>
}

export const Gallery = ({ images }: GalleryProps) => {
   return (
      <Tab.Group as="div" className="flex flex-col-reverse">
         <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
               {images.map((image) => (
                  <GalleryTab key={image.id} image={image} />
               ))}
            </Tab.List>
         </div>
         <Tab.Panels className="aspect-square w-full">
            {images.map((image) => (
               <Tab.Panel key={image.id}>
                  <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
                     <Image
                        fill
                        src={image.url}
                        alt="Image"
                        className="object-cover object-center"
                     />
                  </div>
               </Tab.Panel>
            ))}
         </Tab.Panels>
      </Tab.Group>
   )
}
