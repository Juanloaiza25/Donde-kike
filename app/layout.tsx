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
  title: 'Brasa Brava | Hamburguesas sin pedir permiso',
  description: 'Smash burgers al fuego, cheddar fundido y salsa Brava.',
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
