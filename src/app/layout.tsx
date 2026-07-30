import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Rinoplastia Ultrasónica Técnica Turca | Inspira Medical",
  description:
    "Rinoplastia Ultrasónica con filosofía Turca: resultados naturales, permanentes y precisos. Cero dolor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${raleway.variable} ${raleway.className} h-full antialiased`}
    >
      <body
        className={`${raleway.className} flex min-h-full flex-col font-sans antialiased`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
