import { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/providers/QueryProvider';

export const metadata: Metadata = {
  title: 'Fakebug',
  description: 'Fakebug is a social media app',
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className="">{children}</body>
      </html>
    </QueryProvider>
  );
}
