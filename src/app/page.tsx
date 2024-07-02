"use client";
import { useState, useEffect } from "react";
import { IntroText } from "@/components/intro-text";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPosts } from "@/components/blog-posts";
import { DatabaseIframe } from "@/components/database-iframe";
import { DatabaseTable } from "@/components/database-table";
import { DataTable } from "@/components/database/data-table";
import { columns } from "@/components/database/columns";
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
    <main className="min-h-screen flex flex-col justify-between gap-8">
      <div className="flex flex-col gap-8">
        <div className="max-w-4xl mx-auto w-full px-8">
          <Header />
        </div>
        <div className="max-w-4xl mx-auto w-full px-8">
          <IntroText onEmailSubmit={handleEmailSubmit} />
        </div>
        <div className="max-w-8xl mx-auto w-full px-8">
          {error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </div>
        {/* <div className="max-w-8xl mx-auto w-full px-8">
          <DatabaseTable />
        </div>
        <div className="max-w-8xl mx-auto w-full px-8">
          <DatabaseIframe />
        </div> */}
        <div className="max-w-4xl mx-auto w-full px-8">
          <BlogPosts />
        </div>
      </div>
      <div className="max-w-4xl mx-auto w-full px-8">
        <Footer />
      </div>
    </main>
  );
}