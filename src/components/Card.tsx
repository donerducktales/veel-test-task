export default function Card({userId, title}: {userId: number, title: string}) {
   return (
      <div className={`w-full mb-1 p-2 rounded-lg border gap-1 border-white flex flex-col items-start ${'card'}`}>
         <p>user id: {userId}</p>
         <p>{title}</p>
         <button className={`w-16 rounded-lg bg-red-700 ${'cardDeleteButton'}`}>
            delete
         </button>
      </div>
   )
}
