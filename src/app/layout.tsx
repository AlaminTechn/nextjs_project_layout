import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Layout",
  description: "The project for Next js project Layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-center text-center`}>

        <header>
          <Header />
        </header>

        <div className="h-lvh">
          {children}
        </div>

        <footer className="bottom-0 top-auto">
          <Footer />
        </footer>

      </body>
    </html>
  );
}
