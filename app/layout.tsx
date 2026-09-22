import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EREEP | Empowering People, Transforming Communities',
  description:
    'Edmund Rice Eldoret Empowerment Program creates opportunities for communities in Langas, Eldoret to learn, participate and thrive.',
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
