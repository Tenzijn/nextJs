import Link from 'next/link';

export default function page() {
  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        <li>
          <Link href='/blog/first-post'>First Post</Link>
        </li>
        <li>
          <Link href='/blog/second-post'>Second Post</Link>
        </li>
      </ul>
    </main>
  );
}
