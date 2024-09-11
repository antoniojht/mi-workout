import type { Metadata } from "next";
import "./globals.css";
import Footer from "./ui/footer";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

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
      <body className="m-2">
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            {children}
          </NextThemesProvider>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
