"use client";
import { Airtable } from "@/components/database/airtable";

export default function List() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-between gap-8">
      <Airtable />
    </div>
  );
}