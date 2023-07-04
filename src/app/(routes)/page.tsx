import { getBillboard } from '@/actions/get-billboard'
import { getProducts } from '@/actions/get-products'
import { Billboard } from '@/components/Billboard'
import { ProductList } from '@/components/ProductList'
import { Container } from '@/components/ui/Container'

export const revalidate = 0

export default async function Home() {
   const products = await getProducts({ isFeatured: true })
   const billboard = await getBillboard('1d8e8c45-dd8b-4692-bd01-6b34b71dc901')

   return (
      <Container>
         <div className="space-y-10 pb-10">
            <Billboard data={billboard} />

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
               <ProductList title="Featured Produtcs" items={products} />
            </div>
         </div>
      </Container>
   )
}
