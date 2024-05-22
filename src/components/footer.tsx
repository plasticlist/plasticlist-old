export function Footer() {
  return (
    <footer className="flex justify-between gap-4 w-full text-center text-sm text-gray-500 border-t pt-2">
      <p>© 2024 Plasticlist. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="/legal/terms" className="">Terms</a>
        <a href="/legal/privacy" className="">Privacy</a>
        <a href="mailto:team@plasticlist.org" className="">Contact</a>
      </div>
    </footer>
  );
}