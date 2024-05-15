// page.tsx
"use client";
import { useState } from "react";
import { IntroText } from "@/components/intro-text";
import { PlasticList } from "@/components/plastic-list";
import { useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState<string | null>(null);

  const handleEmailSubmit = (email: string) => {
    setEmail(email);
  };

  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <div className="flex flex-col gap-8">
        <header className="text-3xl font-bold">PlasticList</header>
        <IntroText onEmailSubmit={handleEmailSubmit} />
        <PlasticList email={email} onEmailSubmit={handleEmailSubmit} />
      </div>
      <footer className="w-full text-center text-sm text-gray-500 border-t pt-2">
        2024{" "}
        <a href="https://twitter.com/theslavant" className="underline">
          Yaroslav Shipilov
        </a>
      </footer>
    </main>
  );
}