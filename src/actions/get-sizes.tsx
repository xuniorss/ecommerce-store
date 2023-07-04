import { Size } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

export const getSizes = async (): Promise<Array<Size>> => {
   const res = await fetch(URL)
   return res.json()
}
