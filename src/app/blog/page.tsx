import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <div className="flex flex-col gap-8">
        <Header />
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-baseline">
            <p className="text-xs text-gray-500">2024-06-04</p>
            <a href="/blog/users" className="underline">What we learned from 18,000 plasticlist users</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}