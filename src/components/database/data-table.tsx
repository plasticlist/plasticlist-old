// data-table.tsx
"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value)
  }

  const headerGroups = [
    {
      id: "product-info",
      title: "Product information",
      colSpan: 5,
    },
    {
      id: "one-to-one",
      title: "One-to-one findings comparison",
      colSpan: 5,
      className: "bg-blue-600 text-white",
    },
    {
      id: "study-info",
      title: "Study information",
      colSpan: 4,
      className: "bg-green-600 text-white",
    },
    {
      id: "individual-analytes",
      title: "Individual analyte levels reported",
      colSpan: 18,
      className: "bg-red-600 text-white",
    },
    {
      id: "additional-info",
      title: "Additional information",
      colSpan: 2,
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end items-center pb-4">
        <Input
          placeholder="Search..."
          value={globalFilter ?? ""}
          onChange={handleFilterChange}
          className="max-w-sm border border-gray-700 rounded-none focus:outline-none"
        />
      </div>
      <div className="flex-1 border border-gray-700 overflow-auto">
        <Table>
          <TableHeader className="sticky top-0 z-10">
            <TableRow>
              {headerGroups.map((group) => (
                <TableHead
                  key={group.id}
                  colSpan={group.colSpan}
                  className={`bg-gray-100 border border-gray-700 text-gray-700 text-center font-bold h-6 ${group.className || ''}`}
                >
                  {group.title}
                </TableHead>
              ))}
            </TableRow>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="bg-gray-100 border border-gray-700 text-gray-700 font-bold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="border border-gray-700">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}