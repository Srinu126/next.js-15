import Link from "next/link";

export default function Category() {
  return (
    <div>
      <h1>Featured Categories</h1>
      <Link href="/category/1">Category1</Link>
      <Link href="/category/2">Category2</Link>
      <Link href="/category/3">Category3</Link>
    </div>
  );
}
