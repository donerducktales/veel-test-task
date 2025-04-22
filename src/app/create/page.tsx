import Create from '@/components/Create'
import Link from 'next/link'
import React from 'react'

export default function CreatePage() {
   return (
      <div className={`text-white flex flex-col items-center justify-center h-[100vh] p-2 ${'createPage'}`}>
         <Link href={'/'}>
            <button>
               back
            </button>
         </Link>
         <Create />
      </div>
   )
}
