import Link from 'next/link';

export function BlogPosts() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-baseline">
        <p className="text-gray-500">2024-06-15</p>
        <Link href="/blog/2weeks" className="underline">PlasticList status report</Link>
      </div>
    </div>
  );
}