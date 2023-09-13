import type { Metadata } from 'next';
import AuthContext from '@/context/AuthContext';
import Header from '@/components/Header';
import ToasterContext from '@/context/ToasterContext';
import "@fontsource/source-sans-pro"; 
import "react-datepicker/dist/react-datepicker.css";
import '@smastrom/react-rating/style.css';
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
        <AuthContext>
          <Header />
          <main>
            {children}
          </main> 
          <ToasterContext />
        </AuthContext>    
      </body>
    </html>
  )
}
