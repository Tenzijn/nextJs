import './globals.css';
import Nav from '@/components/nav';

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
