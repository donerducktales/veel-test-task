import Card from "@/components/Card";

interface Post {
   id: number,
   userId: number,
   title: string,
}

export default async function Posts() {
   const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
   const parsedData = await data.json() as Post[];
   
   return (
      <section className={`w-full rounded-lg border border-white mt-2 mb-4 px-1 pt-1 max-w-[1216px] min-h-[100vh] flex flex-col items-center ${'postsList'}`}>
         {parsedData.map(el => 
            <Card key={el.id} userId={el.userId} title={el.title} />
         )}
      </section>
   )
}
