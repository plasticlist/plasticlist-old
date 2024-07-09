"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Airtable } from "@/components/database/airtable";

export default function List() {
  return (
    <main className="min-h-screen max-w-7xl flex flex-col mx-auto py-12 justify-between gap-8">
      <Airtable />
    </main>
  );
}