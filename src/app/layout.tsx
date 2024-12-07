import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luca Agent',
  description: 'uidev.transparently.ai',
  icons: '/luca.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
