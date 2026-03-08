import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SNDS Portal',
  description: 'School Needs Data System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
