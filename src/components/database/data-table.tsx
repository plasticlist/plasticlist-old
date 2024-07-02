"use client"

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const headerGroups = [
    {
      id: "product-info",
      title: "Product information",
      colSpan: 5,
    },
    {
      id: "one-to-one",
      title: "One-to-one findings comparison",
      colSpan: 2,
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
    <div className="border border-gray-700">
      <Table>
        <TableHeader>
        <TableRow>
            {headerGroups.map((group) => (
              <TableHead
                key={group.id}
                colSpan={group.colSpan}
                className={`border border-gray-700 text-gray-700 text-center font-bold h-6 ${group.className || ''}`}
              >
                {group.title}
              </TableHead>
            ))}
          </TableRow>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="border border-gray-700 text-gray-700 font-bold">
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
  )
}
