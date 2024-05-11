// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"



// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col max-w-4xl mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-4">Plastic Chemicals Tests</h1>

//       <Table>
//         <TableCaption>A list of your recent invoices.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Invoice</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Method</TableHead>
//             <TableHead className="text-right">Amount</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           <TableRow>
//             <TableCell className="font-medium">INV001</TableCell>
//             <TableCell>Paid</TableCell>
//             <TableCell>Credit Card</TableCell>
//             <TableCell className="text-right">$250.00</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>

//     </main>
//   );
// }
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (response.ok) {
        form.reset();
        alert("Email submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("An error occurred while subscribing email. Please try again.");
    }
  }

  return (
    <main className="flex min-h-screen flex-col max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Plastic Chemicals Tests</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-4 space-y-6 max-w-sm">
          <FormField
            control={form.control}
            name="email"
            render={({ field: { ...field } }) => (
              <FormItem>
                <FormLabel>Subscribe to updates</FormLabel>
                <div className="flex gap-4">
                  <FormControl>
                    <Input type="email" placeholder="name@example.com" {...field} />
                  </FormControl>
                  <Button type="submit">Submit</Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Table>
        <TableCaption>Example of what results may look like. Taken from <a href="https://www.consumerreports.org/health/food-contaminants/the-plastic-chemicals-hiding-in-your-food-a7358224781/" target="_blank" rel="noopener noreferrer" className="underline">consumerreports.org</a>.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Category</TableHead>
            <TableHead>Good</TableHead>
            <TableHead className="w-[200px] text-right">Total phthalates per serving (nanograms)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Infant Food</TableCell>
            <TableCell>Gerber Mealtime for Baby Harvest Turkey Dinner (glass with lined lid)</TableCell>
            <TableCell className="text-right">4,267</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Infant Food</TableCell>
            <TableCell>Similac Advance Infant Milk-Based Powder Formula (can)</TableCell>
            <TableCell className="text-right">4,202</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Infant Food</TableCell>
            <TableCell>Beech-Nut Fruities Pouch Pear, Banana & Raspberries (pouch)</TableCell>
            <TableCell className="text-right">2,826</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Infant Food</TableCell>
            <TableCell>Gerber Cereal for Baby Rice (plastic)</TableCell>
            <TableCell className="text-right">1,599</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Infant Food</TableCell>
            <TableCell>Happy Baby Organics Clearly Crafted Banana & Strawberries (glass with lined lid)</TableCell>
            <TableCell className="text-right">1,300</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Infant Food</TableCell>
            <TableCell>Happy Baby Organic Milk-Based Infant Powder Formula With Iron (plastic)</TableCell>
            <TableCell className="text-right">977</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Infant Food</TableCell>
            <TableCell>Gerber Organic for Baby Pouch Apple Zucchini Spinach Strawberry (pouch)</TableCell>
            <TableCell className="text-right">706</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}