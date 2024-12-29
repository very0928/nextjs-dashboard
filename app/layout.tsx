import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout(
  {children,}: {children: React.ReactNode;} ) {
  return (
    <html lang="en">
      {/* use antialiased class in tailwind to smooth out the font
      not necessary -> but add a nice touch*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
