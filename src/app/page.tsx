"use client"
import { SubscribeEmailForm } from "@/components/subscribe-email-form"
import { IntroText } from "@/components/intro-text"
import { PlasticList } from "@/components/plastic-list"

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">PlasticList</h1>
        <IntroText />
        <SubscribeEmailForm />
        <PlasticList />
      </div>
      <footer className="w-full text-center text-sm text-gray-500 border-t pt-2">2024 <a href="https://twitter.com/theslavant" className="underline">Yaroslav Shipilov</a></footer>
    </main>
  );
}