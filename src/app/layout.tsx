import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <DarkModeProvider>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
