"use client";
import { useState, useEffect } from "react";
import { IntroText } from "@/components/intro-text";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPosts } from "@/components/blog-posts";
import { TestResult } from "@/components/database/columns";

export default function Home() {
  const [email, setEmail] = useState<string | null>(null);
  const [data, setData] = useState<TestResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/load-database');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        if (fetchedData.error) {
          throw new Error(fetchedData.error);
        }
        setData(fetchedData);
      } catch (e) {
        console.error('Fetching error:', e);
        setError(e instanceof Error ? e.message : 'An unknown error occurred');
      }
    }
    fetchData();
  }, []);

  const handleEmailSubmit = (email: string) => {
    setEmail(email);
  };

  return (
    <main className="min-h-screen max-w-3xl flex flex-col mx-auto justify-between gap-12 py-12">
      <IntroText onEmailSubmit={handleEmailSubmit} />
      <BlogPosts />
    </main>
  );
}