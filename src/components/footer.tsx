export function Footer() {
  return (
    <footer className="border-t">
      <div className="flex justify-between items-center gap-4 text-center text-gray-500 p-4">
        <p>© 2024 PlasticList. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/legal/terms" className="">Terms</a>
          <a href="/legal/privacy" className="">Privacy</a>
          <a href="mailto:team@plasticlist.org" className="">Contact</a>
        </div>
      </div>
    </footer>
  );
}