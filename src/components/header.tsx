import Image from 'next/image';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b pb-2">
      <a href="/" className='text-3xl font-bold'>plasticlist</a>
      <div className="flex gap-8 items-center">
        <a href="/blog">blog</a>
        <a href="https://discord.gg/XqQEZAqc" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/discord.svg" alt="Discord Logo" width={30} height={30} />
        </a>
      </div>
    </header>
  );
}

