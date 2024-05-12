"use client";

import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z, ZodTypeAny } from "zod";


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  search: z.string().optional(),
});


const DATA = [
  { category: "Infant Food", product: "Gerber Cereal for Baby Rice (plastic)", phthalates: 1599 },
  { category: "Infant Food", product: "Happy Baby Organics Clearly Crafted Banana & Strawberries (glass with lined lid)", phthalates: 1300 },
  { category: "Infant Food", product: "Happy Baby Organic Milk-Based Infant Powder Formula With Iron (plastic)", phthalates: 977 },
  { category: "Infant Food", product: "Gerber Organic for Baby Pouch Apple Zucchini Spinach Strawberry (pouch)", phthalates: 706 },
  { category: "Beverages", product: "Brisk Iced Tea Lemon (can)", phthalates: 7467 },
  { category: "Beverages", product: "Coca-Cola Original (plastic)", phthalates: 6167 },
  { category: "Beverages", product: "Lipton Diet Green Tea Citrus (plastic)", phthalates: 4433 },
  { category: "Beverages", product: "Poland Spring 100% Natural Spring Water (plastic)", phthalates: 4217 },
  { category: "Beverages", product: "Juicy Juice 100% Juice Apple (plastic)", phthalates: 3348 },
  { category: "Beverages", product: "Pepsi Cola (can)", phthalates: 2938 },
  { category: "Beverages", product: "Juicy Juice 100% Juice Apple (cardboard box)", phthalates: 2260 },
  { category: "Beverages", product: "Gatorade Frost Thirst Quencher Glacier Freeze (plastic)", phthalates: 1752 },
  { category: "Canned Beans", product: "Hormel Chili With Beans (can)", phthalates: 9847 },
  { category: "Canned Beans", product: "Bush’s Chili Red Beans Mild Chili Sauce (can)", phthalates: 6405 },
  { category: "Canned Beans", product: "Great Value (Walmart) Baked Beans Original (can)", phthalates: 6184 },
  { category: "Canned Beans", product: "Bush’s Baked Beans Original (can)", phthalates: 3709 },
  { category: "Condiments", product: "Mrs. Butterworth’s Syrup Original (plastic)", phthalates: 1010 },
  { category: "Condiments", product: "Hunt’s Tomato Ketchup (plastic)", phthalates: 574 },
  { category: "Dairy", product: "Fairlife Core Power High Protein Milk Shake Chocolate (plastic)", phthalates: 20452 },
  { category: "Dairy", product: "SlimFast High Protein Meal Replacement Shake Creamy Chocolate (plastic)", phthalates: 16916 },
  { category: "Dairy", product: "Yoplait Original Low Fat Yogurt French Vanilla (plastic)", phthalates: 10948 },
  { category: "Dairy", product: "Tuscan Dairy Farms Whole Milk (plastic)", phthalates: 10932 },
  { category: "Dairy", product: "Ben & Jerry’s Ice Cream Vanilla (paperboard carton)", phthalates: 6387 },
  { category: "Dairy", product: "Wholesome Pantry (ShopRite) Organic Whole Milk (carton)", phthalates: 4620 },
  { category: "Dairy", product: "Great Value (Walmart) Ice Cream Homestyle Vanilla (paperboard)", phthalates: 3068 },
  { category: "Dairy", product: "Jell-O Pudding Snacks Original Chocolate (plastic)", phthalates: 1756 },
  { category: "Dairy", product: "Sargento Sliced Natural Cheddar Cheese Sharp (plastic)", phthalates: 1481 },
  { category: "Dairy", product: "Land O’Lakes Butter Salted (paper wrap/cardboard)", phthalates: 581 },
  { category: "Fast Food", product: "Wendy’s Crispy Chicken Nuggets (paperboard)", phthalates: 33980 },
  { category: "Fast Food", product: "Moe’s Southwest Grill Chicken Burrito (aluminum foil)", phthalates: 24330 },
  { category: "Fast Food", product: "Chipotle Chicken Burrito (aluminum foil)", phthalates: 20579 },
  { category: "Fast Food", product: "Burger King Whopper With Cheese (paper)", phthalates: 20167 },
  { category: "Fast Food", product: "Burger King Chicken Nuggets (paper bag)", phthalates: 19782 },
  { category: "Fast Food", product: "Wendy’s Dave’s Single With Cheese (aluminum foil/paper wrap)", phthalates: 19520 },
  { category: "Fast Food", product: "McDonald’s Quarter Pounder With Cheese (cardboard)", phthalates: 9956 },
  { category: "Fast Food", product: "Wendy’s Natural-Cut French Fries (paperboard)", phthalates: 8876 },
  { category: "Fast Food", product: "Burger King Classic French Fries (paperboard)", phthalates: 8512 },
  { category: "Fast Food", product: "McDonald’s Chicken McNuggets (cardboard)", phthalates: 8030 },
  { category: "Fast Food", product: "Little Caesars Classic Cheese Pizza (cardboard box)", phthalates: 5703 },
  { category: "Fast Food", product: "McDonald’s French Fries (paperboard)", phthalates: 5538 },
  { category: "Fast Food", product: "McDonald’s Quarter Pounder Hamburger Patty (varied)", phthalates: 5428 },
  { category: "Fast Food", product: "Taco Bell Chicken Burrito (paper wrap)", phthalates: 4720 },
  { category: "Fast Food", product: "Domino’s Hand Tossed Cheese Pizza (cardboard box)", phthalates: 4356 },
  { category: "Fast Food", product: "Wendy’s Dave’s Single Hamburger Patty (varied)", phthalates: 3629 },
  { category: "Fast Food", product: "Burger King Whopper Hamburger Patty (varied)", phthalates: 2870 },
  { category: "Fast Food", product: "Pizza Hut Original Cheese Pan Pizza (cardboard box)", phthalates: 2718 },
  { category: "Grains", product: "General Mills Cheerios Original (paperboard box with plastic bag inside)", phthalates: 10980 },
  { category: "Grains", product: "Success 10 Minute Boil-in-Bag White Rice (paperboard box with plastic bag inside)", phthalates: 4308 },
  { category: "Grains", product: "Pepperidge Farm Farmhouse Hearty White Bread (plastic bag)", phthalates: 2184 },
  { category: "Grains", product: "Barilla Penne Pasta (box)", phthalates: 1500 },
  { category: "Grains", product: "Quaker Oats Old Fashioned Oatmeal (cardboard canister)", phthalates: 1200 },
  { category: "Grains", product: "Kellogg's Corn Flakes (box)", phthalates: 950 },
  { category: "Meat and Poultry", product: "Perdue Ground Chicken Breast (plastic)", phthalates: 9985 },
  { category: "Meat and Poultry", product: "Trader Joe’s Ground Pork 80% Lean 20% Fat (plastic wrap)", phthalates: 5503 },
  { category: "Meat and Poultry", product: "Premio Foods Sweet Italian Sausage (foam tray with plastic wrap)", phthalates: 4725 },
  { category: "Meat and Poultry", product: "Libby’s Corned Beef (can)", phthalates: 4088 },
  { category: "Meat and Poultry", product: "Bar S Chicken Jumbo Franks (plastic)", phthalates: 3295 },
  { category: "Meat and Poultry", product: "Stop & Shop Ground Beef 80% Lean 20% Fat (foam tray with plastic wrap)", phthalates: 2729 },
  { category: "Meat and Poultry", product: "Applegate Naturals Oven Roasted Turkey Breast (plastic)", phthalates: 2295 },
  { category: "Meat and Poultry", product: "Swanson White Premium Chunk Chicken Breast (can)", phthalates: 1376 },
  { category: "Meat and Poultry", product: "Johnsonville Smoked Sausage Beef Hot Links (plastic)", phthalates: 912 },
  { category: "Packaged Fruits and Vegetables", product: "Del Monte Sliced Peaches in 100% Fruit Juice (can)", phthalates: 24928 },
  { category: "Packaged Fruits and Vegetables", product: "Green Giant Cream Style Sweet Corn (can)", phthalates: 7603 },
  { category: "Packaged Fruits and Vegetables", product: "Del Monte Fresh Cut Italian Green Beans (can)", phthalates: 5264 },
  { category: "Packaged Fruits and Vegetables", product: "Progresso Vegetable Classics Vegetable Soup (can)", phthalates: 2888 },
  { category: "Packaged Fruits and Vegetables", product: "Birds Eye Steamfresh Cut Green Beans (plastic bag)", phthalates: 907 },
  { category: "Packaged Fruits and Vegetables", product: "Hunt’s Tomato Sauce (can)", phthalates: 680 },
  { category: "Seafood", product: "Chicken of the Sea Pink Salmon in Water Skinless Boneless (can)", phthalates: 24321 },
  { category: "Seafood", product: "King Oscar Wild Caught Sardines in Extra Virgin Olive Oil (can)", phthalates: 7792 },
  { category: "Seafood", product: "Snow’s Chopped Clams (can)", phthalates: 4380 },
  { category: "Seafood", product: "StarKist Wild Caught Light Tuna in Water (pouch)", phthalates: 1735 },
  { category: "Seafood", product: "StarKist Chunk Light Tuna in Water (can)", phthalates: 1687 },
  { category: "Seafood", product: "Season Brand Sardines in Water Skinless & Boneless (can)", phthalates: 1258 },
  { category: "Seafood", product: "Bumble Bee Solid White Albacore Tuna in Water (can)", phthalates: 2300 },
  { category: "Seafood", product: "Gorton's Grilled Salmon Fillets (plastic)", phthalates: 1800 },
  { category: "Seafood", product: "Red Lobster Snow Crab Legs (shell)", phthalates: 1500 },
  { category: "Seafood", product: "Trader Joe's Farm-Raised Shrimp (plastic)", phthalates: 1200 },
  { category: "Seafood", product: "Whole Foods Market Wild Caught Haddock (plastic)", phthalates: 1000 },
  { category: "Seafood", product: "Costco Wholesale Frozen Tilapia Fillets (plastic)", phthalates: 950 }
];


export default function Home() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      search: ""
    },
  });

  const [filteredData, setFilteredData] = useState(DATA);
  const search = useWatch({ control: form.control, name: "search" });

  useEffect(() => {
    const newFilteredData = search ? DATA.filter(item => item.product.toLowerCase().includes(search.toLowerCase())) : DATA;
    setFilteredData(newFilteredData);
  }, [search]);

  const onSubmit = async (values) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });
  
      if (response.ok) {
        form.reset();  // Resets the form fields after successful submission
        alert("Email submitted successfully!");
      } else {
        const errorData = await response.json();  // Assuming the server responds with JSON-formatted error messages
        alert(`Error: ${errorData.error || 'Failed to subscribe'}`);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("An error occurred while submitting the email. Please check the console for more details.");
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">Plastic Chemicals Tests</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-4 space-y-6 flex justify-between items-end">
          
      <div className="flex justify-between items-center w-full">
  <div className="flex gap-2">
    <FormControl>
      <Input type="email" placeholder="name@example.com" {...form.register("email")} />
    </FormControl>
    <Button type="submit">Submit</Button>
  </div>
  <FormControl style={{ width: '300px' }}>
    <Input type="text" placeholder="Search..." {...form.register("search")} />
  </FormControl>
</div>

        </form>
      </Form>

      <Table>
        
      <TableCaption>
  Filtered results based on your search. Taken from{" "}
  <a href="https://www.consumerreports.org/health/food-contaminants/the-plastic-chemicals-hiding-in-your-food-a7358224781/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
    consumerreports.org
  </a>.
</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Total phthalates per serving (nanograms)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.product}</TableCell>
              <TableCell>{item.phthalates}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
