import { getCategories } from '@/actions/get-categories'
import Link from 'next/link'
import { MainNav } from '../MainNav'
import { NavbarActions } from '../NavbarActions'
import { Container } from '../ui/Container'

export const revalidate = 0

export const Navbar = async () => {
   const categories = await getCategories()

   return (
      <div className="border-b">
         <Container>
            <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
               <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
                  <p className="text-xl font-bold">STORE</p>
               </Link>
               <MainNav data={categories} />
               <NavbarActions />
            </div>
         </Container>
      </div>
   )
}
