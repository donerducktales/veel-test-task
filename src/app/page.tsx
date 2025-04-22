import Posts from "@/layouts/Posts";

export default function Home() {
   return (
      <main className={`flex flex-col items-center text-white ${"main"}`}>
         <Posts />
      </main>
   );
}
