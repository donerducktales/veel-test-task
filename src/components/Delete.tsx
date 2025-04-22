'use client'

import { useRouter } from "next/navigation";

export default function Delete({idProp}: {idProp: number}) {
   const router = useRouter();
   
   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/{${idProp}}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({idProp}),
      });

      router.push('/');
      console.log(`${JSON.stringify(response)} ${idProp}`);
      return JSON.stringify(response);
   }
   
   return (
      <form onSubmit={handleSubmit}>
         <button 
            className={`w-16 rounded-lg bg-red-700 ${'cardDeleteButton'}`}
            type="submit"
         >
            delete
         </button>
      </form>
   )
}
