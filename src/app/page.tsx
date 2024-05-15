"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SubscribeEmailForm } from "@/components/subscribe-email-form"
import { IntroText } from "@/components/intro-text"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col max-w-4xl mx-auto gap-8 p-8">
      <h1 className="text-3xl font-bold">PlasticList</h1>
      <IntroText />
      <SubscribeEmailForm />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Category</TableHead>
            <TableHead>Good</TableHead>
            <TableHead className="w-[200px] text-right">Total phthalates per serving (nanograms)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Coming soon</TableCell>
            <TableCell>Coming soon</TableCell>
            <TableCell className="text-right">5,123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Coming soon</TableCell>
            <TableCell>Coming soon</TableCell>
            <TableCell className="text-right">4,123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Coming soon</TableCell>
            <TableCell>Coming soon</TableCell>
            <TableCell className="text-right">3,123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Coming soon</TableCell>
            <TableCell>Coming soon</TableCell>
            <TableCell className="text-right">2,123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Coming soon</TableCell>
            <TableCell>Coming soon</TableCell>
            <TableCell className="text-right">1,123</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}