import Image from 'next/image';

export function Header() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between p-4">
        <a href="/" className='text-3xl font-bold'>plasticlist</a>
        <div className="flex items-center gap-4">
          <a className="border border-gray-700 px-2 py-1" href="/list">data (alpha)</a>
          <a href="https://discord.gg/ZcH6ywXcTR" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/discord.svg" alt="Discord Logo" width={30} height={30} />
          </a>
        </div>
      </div>
    </header>
  );
}

