export default function page({ params }) {
  return (
    <main>
      <h1>{params.slug}</h1>
      <p>This is a blog post!</p>
    </main>
  );
}
