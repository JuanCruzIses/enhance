"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Función para generar el título dinámico
  const getPageTitle = () => {
    const pageName = {
      "/": "Inicio",
      "/sobre-mi": "Sobre mí",
      "/ustedes": "Ustedes",
      "/preguntas-frecuentes": "Preguntas frecuentes",
      "/contacto": "Contacto",
      "/asesoria": "Asesoría",
      "/ejercicios": "Ejercicios",
    };
    return `Enhance - ${pageName[pathname] || "Página"}`;
  };

  useEffect(() => {
    document.title = getPageTitle();
  }, [pathname]);

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-orange-200 px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
