import Posts from "@/layouts/Posts";
import Link from "next/link";

export default function Home() {
   return (
      <main className={`flex flex-col items-center text-white ${"main"}`}>
         <Link href={'/create'}>
            <button>
               create post
            </button>
         </Link>
         <Posts />
      </main>
   );
}
