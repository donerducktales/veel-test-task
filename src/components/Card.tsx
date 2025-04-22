export default function Card({userId, title, completed}: {userId: number, title: string, completed: boolean}) {
   return (
      <div className={`w-full mb-1 p-2 rounded-lg border gap-1 border-white flex flex-col items-start ${'card'}`}>
         <p>user id: {userId}</p>
         <p>{title}</p>
         <p>completed: {completed.toString()}</p>
         <button className={`w-16 rounded-lg bg-red-700 ${'cardDeleteButton'}`}>
            delete
         </button>
      </div>
   );
}
