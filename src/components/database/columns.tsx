//columns.tsx
"use client"

import { ColumnDef } from "@tanstack/react-table"
import React from "react"

export type TestResult = {
  product: string // 
  category: string
  country: string
  packaging: string
  sampleSize: string
  summary: string
  compounds: string
  phthalates: number
  phthalate_substitutes: number
  bisphenols: number
  author: string
  title: string
  published: string
  reporting: string
  dbp: string
  bbp: string
  dehp: string
  dinp: string
  didp: string
  dmp: string
  dep: string
  dibp: string
  dnhp: string
  dchp: string
  dnop: string
  dida: string
  deha: string
  dinch: string
  deht: string
  bpa: string
  bps: string
  bpf: string
  serving: number
  notes?: string
}

export const columns: ColumnDef<TestResult>[] = [
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => { return <div className="w-40">{row.getValue("product")}</div> },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => { return <div className="w-40">{row.getValue("category")}</div> },
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => { return <div className="w-24">{row.getValue("country")}</div> },
  },
  {
    accessorKey: "packaging",
    header: "Packaging reported",
    cell: ({ row }) => { return <div className="w-40">{row.getValue("packaging")}</div> },
  },
  {
    accessorKey: "sampleSize",
    header: "Sample size (n)",
    cell: ({ row }) => { return <div className="w-28">{row.getValue("sampleSize")}</div> },
  },
  {
    accessorKey: "summary",
    header: "Summarized findings (ng/serving)",
    cell: ({ row }) => {
      const findings = row.getValue("summary");
      if (typeof findings !== 'string') {
        return <div className="text-right w-80">Invalid data</div>;
      }
      const splitFindings = findings.split(/(?<=phthalates|phthalate substitutes)/gi).filter(Boolean);
      return (
        <div className="text-right w-80">
          {splitFindings.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < splitFindings.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "compounds",
    header: "Compounds tested",
    cell: ({ row }) => {
      const compounds = row.getValue("compounds");
      if (typeof compounds !== 'string') {
        return <div className="w-96">Invalid data</div>;
      }
      const splitCompounds = compounds.split(/(?=Phthalate|Bisphenol)/gi).filter(Boolean);
      return (
        <div className="w-96">
          {splitCompounds.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < splitCompounds.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "phthalates",
    header: "Total phthalates (ng/serving)",
    cell: ({ row }) => { return <div className="w-52">{row.getValue("phthalates")}</div> },
  },
  {
    accessorKey: "phthalate_substitutes",
    header: "Total phthalate substitutes (ng/serving)",
    cell: ({ row }) => { return <div className="w-72">{row.getValue("phthalate_substitutes")}</div> },
  },
  {
    accessorKey: "bisphenols",
    header: "Total bisphenols (ng/serving)",
    cell: ({ row }) => { return <div className="w-52">{row.getValue("bisphenols")}</div> },
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => { return <div className="w-28">{row.getValue("author")}</div> },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => { return <div className="w-72">{row.getValue("title")}</div> },
  },
  {
    accessorKey: "published",
    header: "Published",
    cell: ({ row }) => { return <div className="w-18">{row.getValue("published")}</div> },
  },
  {
    accessorKey: "reporting",
    header: "Reporting format",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("reporting")}</div> },
  },
  {
    accessorKey: "dbp",
    header: "Mean DBP (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("dbp")}</div> },
  },
  {
    accessorKey: "bbp",
    header: "Mean BBP (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("bbp")}</div> },
  },
  {
    accessorKey: "dehp",
    header: "Mean DEHP (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("dehp")}</div> },
  },
  {
    accessorKey: "dinp",
    header: "Mean DINP (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("dinp")}</div> },
  },
  {
    accessorKey: "didp",
    header: "Mean DIDP (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("didp")}</div> },
  },
  {
    accessorKey: "dmp",
    header: "Mean DMP (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("dmp")}</div> },
  },
  {
    accessorKey: "dep",
    header: "Mean DEP (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("dep")}</div> },
  },
  {
    accessorKey: "dibp",
    header: "Mean DIBP (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("dibp")}</div> },
  },
  {
    accessorKey: "dnhp",
    header: "Mean DNHP (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("dnhp")}</div> },
  },
  {
    accessorKey: "dchp",
    header: "Mean DCHP (ng/g)",
    cell: ({ row }) => { return <div className="w-36">{row.getValue("dchp")}</div> },
  },
  {
    accessorKey: "dnop",
    header: "Mean DNOP (ng/g)",
    cell: ({ row }) => { return <div className="w-36">{row.getValue("dnop")}</div> },
  },
  {
    accessorKey: "dida",
    header: "Mean DIDA (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("dida")}</div> },
  },
  {
    accessorKey: "deha",
    header: "Mean DEHA (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("deha")}</div> },
  },
  {
    accessorKey: "dinch",
    header: "Mean DINCH (ng/g)",
    cell: ({ row }) => { return <div className="w-36">{row.getValue("dinch")}</div> },
  },
  {
    accessorKey: "deht",
    header: "Mean DEHT (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("deht")}</div> },
  },
  {
    accessorKey: "bpa",
    header: "Mean BPA (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("bpa")}</div> },
  },
  {
    accessorKey: "bps",
    header: "Mean BPS (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("bps")}</div> },
  },
  {
    accessorKey: "bpf",
    header: "Mean BPF (ng/g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("bpf")}</div> },
  },
  {
    accessorKey: "serving",
    header: "Serving size (g)",
    cell: ({ row }) => { return <div className="w-32">{row.getValue("serving")}</div> },
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ row }) => { return <div className="w-72">{row.getValue("notes")}</div> },
  },
]
