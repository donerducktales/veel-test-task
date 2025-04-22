import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'

export const metadata: Metadata = {
   title: "Veel Test Task",
   description: "Home page",
};

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['400']
})

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`bg-gray-950 antialiased ${roboto.className}`}
         >
            {children}
         </body>
      </html>
   );
}
