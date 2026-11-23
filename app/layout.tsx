import type { Metadata } from 'next';
import './globals.css';
import { ScrollToTop } from './components/ScrollToTop';

export const metadata: Metadata = {
  title: 'EREEP | Empowering People, Transforming Communities',
  description:
    'Edmund Rice Eldoret Empowerment Program creates opportunities for communities in Langas, Eldoret to learn, participate and thrive.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
