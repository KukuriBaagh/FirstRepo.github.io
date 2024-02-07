import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'My Next FirstRepo PortFolio App',
  description: 'My App is an PortFolio App in NextJs App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
