import type { Metadata } from 'next';
import Header from '@/components/Header';
import "@fontsource/source-sans-pro"; 
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
      <body>
          <Header />
          <main>
            {children}
          </main>       
      </body>
    </html>
  )
}
