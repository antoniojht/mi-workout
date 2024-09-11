import type { Metadata } from "next";
import "./globals.css";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "miWorkout",
  description: "Aplicación web para el seguimiento de entrenamientos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
