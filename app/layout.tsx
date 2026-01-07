import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Javier Tinajo | Data Scientist, AI Engineer & Full-Stack Developer",
  description:
    "Data Scientist, AI Engineer y Full-Stack Developer especializado en la creación de aplicaciones web escalables, sistemas de inteligencia artificial y soluciones basadas en Big Data. Experiencia en React, Next.js, Python, Node.js, TensorFlow y arquitecturas modernas.",
  keywords: [
    "Javier Tinajo",
    "Data Scientist",
    "AI Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Inteligencia Artificial",
    "Big Data",
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "TensorFlow",
    "Django",
    "AWS",
    "Docker",
  ],
  authors: [{ name: "Javier Tinajo" }],
  creator: "Javier Tinajo",
  openGraph: {
    title: "Javier Tinajo | Data Scientist & Full-Stack Developer",
    description:
      "Transformo ideas complejas en experiencias digitales elegantes y funcionales mediante inteligencia artificial, Big Data y desarrollo full stack.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable}`}>
        {children}
        <Script id="add-loaded-class" strategy="afterInteractive">
          {`document.documentElement.classList.add('loaded');`}
        </Script>
      </body>
    </html>
  );
}
