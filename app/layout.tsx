import type { Metadata } from 'next';
import Header from '@/components/Header';
import '@smastrom/react-rating/style.css'
import '@/styles/_styles.scss';

export const metadata: Metadata = {
  title: 'FreeTable',
  description: 'Restaurant reservation service.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
