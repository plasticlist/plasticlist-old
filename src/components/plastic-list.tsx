import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export function PlasticList() {
  const [searchQuery, setSearchQuery] = useState("");

  const rows = [
    { "category": "Water", "product": "Tap water", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Bottled water from different types of plastic bottles", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Bottled water from glass bottles", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Water after sitting in Nalgene bottle", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Water after sitting in cheap plastic bottle", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Water after sitting in glass bottle", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Water after sitting in sippy cup", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Water from Brita filter", "phthalates": 123, "bisphenols": 123 },
    { "category": "Food Storage", "product": "Food wrapped in cellophane", "phthalates": 123, "bisphenols": 123 },
    { "category": "Food Storage", "product": "Food wrapped in plastic bags", "phthalates": 123, "bisphenols": 123 },
    { "category": "Food Storage", "product": "Food microwaved in different containers", "phthalates": 123, "bisphenols": 123 },
    { "category": "Beverages", "product": "Starbucks drink in plastic lid", "phthalates": 123, "bisphenols": 123 },
    { "category": "Beverages", "product": "Hydro flask for hot drink", "phthalates": 123, "bisphenols": 123 },
    { "category": "Beverages", "product": "Hydro flask for cold drink", "phthalates": 123, "bisphenols": 123 },
    { "category": "Baby Food", "product": "Annie’s baby food", "phthalates": 123, "bisphenols": 123 },
    { "category": "Snacks", "product": "Veggie sticks", "phthalates": 123, "bisphenols": 123 },
    { "category": "Meat", "product": "Grass-fed beef", "phthalates": 123, "bisphenols": 123 },
    { "category": "Meat", "product": "Grain-fed beef", "phthalates": 123, "bisphenols": 123 },
    { "category": "Non-processed Foods", "product": "Non-processed foods from groceries", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Water in non-BPA 5-gallon plastic", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Super filtered tap water", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Water in glass bottles", "phthalates": 123, "bisphenols": 123 },
    { "category": "Beverages", "product": "Fruit or energy drinks", "phthalates": 123, "bisphenols": 123 },
    { "category": "Other items", "product": "Plastic straws", "phthalates": 123, "bisphenols": 123 },
    { "category": "Beverages", "product": "Super soft tea bags", "phthalates": 123, "bisphenols": 123 },
    { "category": "Utensils", "product": "Reusable chopsticks", "phthalates": 123, "bisphenols": 123 },
    { "category": "Meat", "product": "Organic chicken", "phthalates": 123, "bisphenols": 123 },
    { "category": "Meat", "product": "Cage-free chicken", "phthalates": 123, "bisphenols": 123 },
    { "category": "Meat", "product": "Non-organic chicken", "phthalates": 123, "bisphenols": 123 },
    { "category": "Oils", "product": "Seed oils", "phthalates": 123, "bisphenols": 123 },
    { "category": "Oils", "product": "Olive oils", "phthalates": 123, "bisphenols": 123 },
    { "category": "Milk", "product": "Soy milk", "phthalates": 123, "bisphenols": 123 },
    { "category": "Milk", "product": "Regular milk", "phthalates": 123, "bisphenols": 123 },
    { "category": "Milk", "product": "Organic milk", "phthalates": 123, "bisphenols": 123 },
    { "category": "Meat", "product": "Regular chicken breast", "phthalates": 123, "bisphenols": 123 },
    { "category": "Milk", "product": "Almond milk", "phthalates": 123, "bisphenols": 123 },
    { "category": "Snacks", "product": "Powdered peanut butter", "phthalates": 123, "bisphenols": 123 },
    { "category": "Other items", "product": "Test for PFAS, especially in dairy products", "phthalates": 123, "bisphenols": 123 },
    { "category": "Other items", "product": "Solo cups with water", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Mountain Valley spring water in glass bottles", "phthalates": 123, "bisphenols": 123 },
    { "category": "Beverages", "product": "Coffee", "phthalates": 123, "bisphenols": 123 },
    { "category": "Ice Cream", "product": "Salt & Straw ice cream", "phthalates": 123, "bisphenols": 123 },
    { "category": "Other items", "product": "Machine-milked cow milk in glass bottles", "phthalates": 123, "bisphenols": 123 },
    { "category": "Other items", "product": "Raw milk directly from a cow", "phthalates": 123, "bisphenols": 123 },
    { "category": "Water", "product": "Bottled water left in a hot car", "phthalates": 123, "bisphenols": 123 },
    { "category": "Milk", "product": "Raw milk", "phthalates": 123, "bisphenols": 123 },
    { "category": "Milk", "product": "Pasteurized milk", "phthalates": 123, "bisphenols": 123 },
    { "category": "Baby Food", "product": "Baby/kids food", "phthalates": 123, "bisphenols": 123 }
  ];

  const filteredRows = rows.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col gap-2">
      <p className="mx-auto text-sm text-gray-500">Example data from responses to Nat's tweet.</p>
      <Input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-48 ml-auto"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Category</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="w-[150px] text-right">
              Phthalates per serving (nanograms)
            </TableHead>
            <TableHead className="w-[150px] text-right">
              Bisphenols per serving (nanograms)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRows.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.category}</TableCell>
              <TableCell>{item.product}</TableCell>
              <TableCell className="text-right">{item.phthalates}</TableCell>
              <TableCell className="text-right">{item.bisphenols}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}