import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <div className="flex gap-4">
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      </div>
    </>
  );
}
