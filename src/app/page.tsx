// page.tsx
"use client";
import { useState } from "react";
import { IntroText } from "@/components/intro-text";
import { PlasticList } from "@/components/plastic-list";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  const [email, setEmail] = useState<string | null>(null);

  const handleEmailSubmit = (email: string) => {
    setEmail(email);
  };

  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <div className="flex flex-col gap-8">
        <Header />
        <IntroText onEmailSubmit={handleEmailSubmit} />
        <PlasticList email={email} onEmailSubmit={handleEmailSubmit} />
      </div>
      <Footer />
    </main>
  );
}