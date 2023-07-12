import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => (

  <html lang="en">
    <body className="bg-zinc-900 text-zinc-50">{children}</body>
  </html>
);
export default RootLayout;