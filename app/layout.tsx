import type { Metadata } from 'next';
import { Archivo_Black, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const archivo = Archivo_Black({
  weight: '400',
  variable: '--font-archivo',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Donde Kike | Hamburguesas, perros y antojos',
  description: 'Hamburguesas, perros calientes, picadas, bebidas y domicilios de Donde Kike.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${manrope.variable} ${archivo.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
