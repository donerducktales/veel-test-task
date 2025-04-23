import Delete from "./Delete";

export default function Card(
   {id, userId, title, completed}: 
   {id: number, userId: number, title: string, completed: boolean}
) {
   return (
      <div className={`w-full mb-1 p-2 rounded-lg border gap-1 border-white flex flex-col items-start ${'card'}`}>
         <p>user id: {userId}</p>
         <p>{title}</p>
         <p>completed: {completed.toString()}</p>
         <Delete idProp={id}/>
      </div>
   );
}
