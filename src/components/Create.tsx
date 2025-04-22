'use client'

import { useRouter } from "next/navigation"
import { useState } from "react";

export default function Create() {
   const [title, setTitle] = useState<string>('');
   const router = useRouter();
   
   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const data = await fetch('https://jsonplaceholder.typicode.com/todos');
      const parsedData = await data.json();

      const maxId = parsedData.reduce((max: number, todo: { id: number }) => Math.max(max, todo.id), 0);
      const newId = maxId + 1;

      try {
         const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({userId: 1, id: newId, title: title, completed: false})
         });

         router.push('/');
         console.log(JSON.stringify(response));
         return JSON.stringify(response);
      } catch (error) {
         alert(`error in create.tsx: ${error}`)
      }
   }
   
   return (
      <div className={`max-w-[1216px] w-full h-[450px] p-1 rounded-lg border border-white flex flex-col items-center justify-center ${'createPageWrapper'}`}>
         <h1 className={`mb-4 text-2xl`}>
            Create Todo
         </h1>
         <form onSubmit={handleSubmit}
            className='flex justify-center gap-2 w-full'
         >
            <input 
               type="text" 
               placeholder='title:' 
               className='outline-none bg-white text-black max-w-96 w-full h-12 rounded-lg'
               onChange={(e) => setTitle(e.target.value)}
            />
            <button 
               className='bg-green-600 w-16 rounded-lg'
               type="submit"
            >
               create
            </button>
         </form>
      </div>
   )
}
