import Link from 'next/link';
import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href='/about'>about us</Link>
      </p>
    </main>
  );
}
