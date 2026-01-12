"use client"
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        {/* Google Analytics */}
        <Script
          id="google-analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6EEE592R8E"
          strategy="beforeInteractive"
        />
        <Script
          id="google-analytics-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6EEE592R8E');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TNLTF2N5');`,
          }}
        />
        <link rel="icon" href="/logo.ico" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNLTF2N5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-orange-200 px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
