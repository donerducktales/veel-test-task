export async function POST(request: Request) {
   try {
      const body = await request.json()

      const response = await fetch('https://jsonplaceholder.typicode.com/todos', { 
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(body),
      });

      if (!response.ok) {
         alert(`Error ${response.status}`);
         return new Response(null, { status: response.status });
      }

      return new Response(JSON.stringify(response));
   } catch (error) {
      console.error(error);
   }
}