"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DataTable } from "@/components/database/data-table";
import { columns } from "@/components/database/columns";
import { TestResult } from "@/components/database/columns";
import { useState, useEffect } from "react";

export default function List() {
  const [data, setData] = useState<TestResult[]>([]);

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
      }
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen flex flex-col mx-auto p-8 justify-between gap-8">
      <div className="max-w-4xl mx-auto w-full">
        <Header />
      </div>
      <div className="max-w-8xl mx-auto h-[85vh] w-full overflow-hidden">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="max-w-4xl mx-auto w-full">
        <Footer />
      </div>
    </main>
  );
}