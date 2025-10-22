import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import "../globals.css";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "StoreIt",
  description: "StoreIt - The only storage solution you need.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <main className="flex h-screen">
          <Sidebar />
          <section className="flex h-full flex-1 flex-col">
            <Header />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}