"use client";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SubscribeEmailForm } from "@/components/subscribe-email-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster, toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { X } from "lucide-react";


type PlasticListProps = {
  email: string | null;
  onEmailSubmit: (email: string) => void;
};

const suggestionFormSchema = z.object({
  items: z.array(z.string().min(1, { message: "Please enter an item." })),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export function PlasticList({ email, onEmailSubmit }: PlasticListProps) {
  // Rerender component when emailSubmitted prop changes
  useEffect(() => { }, [email]);

  const [searchQuery, setSearchQuery] = useState("");
  const [votedItems, setVotedItems] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hasShownDialog, setHasShownDialog] = useState(false);
  const [isSuggestDialogOpen, setIsSuggestDialogOpen] = useState(false);
  const [suggestedItem, setSuggestedItem] = useState("");
  const [suggestEmail, setSuggestEmail] = useState("");
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);
  const [numItems, setNumItems] = useState(1);

  const rows = [
    { "category": "Water", "item": "Tap water", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Bottled water from different types of plastic bottles", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Gerber baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Bottled water from glass bottles", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Beech-Nut baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Ben & Jerry's Chocolate Chip Cookie Dough", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Water after sitting in Nalgene bottle", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Water after sitting in cheap plastic bottle", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Earth's Best baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Haagen-Dazs Vanilla Ice Cream", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Water after sitting in glass bottle", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Water after sitting in sippy cup", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Magnum Chocolate Ice Cream Bars", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Happy Baby organic baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Water from Brita filter", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Food Storage", "item": "Food wrapped in cellophane", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Talenti Gelato Layers", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Plum Organics baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Food Storage", "item": "Food wrapped in plastic bags", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Breyers Natural Vanilla", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Sprout Organic baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Food Storage", "item": "Food microwaved in different containers", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Dairy-Free Coconut Milk Ice Cream", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Beverages", "item": "Starbucks drink in plastic lid", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Parent's Choice baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Halo Top Low-Calorie Ice Cream", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Beverages", "item": "Hydro flask for hot drink", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Beverages", "item": "Hydro flask for cold drink", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Ella's Kitchen baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Yasso Greek Yogurt Bars", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Snacks", "item": "Veggie sticks", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Meat", "item": "Grass-fed beef", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Happy Tot super foods", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Ben & Jerry's Dairy-Free Ice Cream", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Meat", "item": "Grain-fed beef", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Non-processed Foods", "item": "Non-processed foods from groceries", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Good Humor Strawberry Shortcake", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Water in non-BPA 5-gallon plastic", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Once Upon a Farm baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Super filtered tap water", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Water in glass bottles", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Nestle Drumstick", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Beverages", "item": "Fruit or energy drinks", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Holle baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Klondike Bars", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Other items", "item": "Plastic straws", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Beverages", "item": "Super soft tea bags", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Yumi baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Utensils", "item": "Reusable chopsticks", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Blue Bell Homemade Vanilla", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Meat", "item": "Organic chicken", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Meat", "item": "Cage-free chicken", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Non-dairy Almond Milk Ice Cream", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Meat", "item": "Non-organic chicken", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Oils", "item": "Seed oils", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Amara organic baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Oils", "item": "Olive oils", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Milk", "item": "Soy milk", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Milk", "item": "Regular milk", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Mochi Ice Cream", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Milk", "item": "Organic milk", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Little Spoon baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Meat", "item": "Regular chicken breast", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Milk", "item": "Almond milk", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Turkey Hill Ice Cream", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Snacks", "item": "Powdered peanut butter", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Gerber Organic baby cereal", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Other items", "item": "Test for PFAS, especially in dairy products", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Other items", "item": "Solo cups with water", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Happy Baby organic puffs", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Mountain Valley spring water in glass bottles", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Beverages", "item": "Coffee", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Salt & Straw ice cream", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Other items", "item": "Machine-milked cow milk in glass bottles", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Plum Organics pouches", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Other items", "item": "Raw milk directly from a cow", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Sprout Organic pouches", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Water", "item": "Bottled water left in a hot car", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Milk", "item": "Raw milk", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Milk", "item": "Pasteurized milk", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Earth's Best Organic jars", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Hipp Organic baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Peter Rabbit Organics pouches", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "NurturMe organic baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Kabrita goat milk baby food", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Happy Family Organics yogurt", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Baby Food", "item": "Happy Baby teethers", "phthalates": "TBD", "bisphenols": "TBD" },
    { "category": "Ice Cream", "item": "Ice Cream Sandwiches", "phthalates": "TBD", "bisphenols": "TBD" }
  ];


  const filteredRows = rows.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleVote = async (item: string) => {
    if (!email && !hasShownDialog) {
      setIsDialogOpen(true);
      setHasShownDialog(true);
    } else {
      try {
        await fetch("/api/vote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item }),
        });
        setVotedItems((prevVotedItems) => [...prevVotedItems, item]);
      } catch (error) {
        console.error("Error voting:", error);
      }
    }
  };

  const handleNotify = async () => {
    setIsDialogOpen(true);
    setHasShownDialog(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleSuggestDialogClose = () => {
    setIsSuggestDialogOpen(false);
    setSuggestedItem("");
    setSuggestEmail("");
    setSuggestionSubmitted(false);
    setNumItems(1);
  };

  const suggestionForm = useForm<z.infer<typeof suggestionFormSchema>>({
    resolver: zodResolver(suggestionFormSchema),
    defaultValues: {
      items: [""],
      email: "",
    },
  });

  const handleSuggestSubmit = async (values: z.infer<typeof suggestionFormSchema>) => {
    try {
      await fetch("/api/suggest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: values.items, email: values.email }),
      });
      setSuggestionSubmitted(true);
      onEmailSubmit(values.email); // Call onEmailSubmit with the submitted email
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      toast.error("An error occurred while submitting the suggestion. Please try again.");
    }
  };


  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end">
        <Button variant="link" onClick={() => setIsSuggestDialogOpen(true)} className="ml-2">
          Suggest items to test
        </Button>
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-48"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Vote</TableHead>
            <TableHead className="min-w-[200px]">Item</TableHead>
            <TableHead className="w-[100px]">Category</TableHead>
            <TableHead className="w-[100px]">Test results</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRows.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="text-left">
                <Button
                  onClick={() => handleVote(item.item)}
                  disabled={votedItems.includes(item.item)}
                  size="sm"
                  className={`h-7 w-14 rounded-none ${votedItems.includes(item.item)
                    ? "bg-green-300 text-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-green-600 hover:text-background"
                    }`}
                >
                  {votedItems.includes(item.item) ? "VOTED" : "VOTE"}
                </Button>
              </TableCell>
              <TableCell>{item.item}</TableCell>
              <TableCell className="font-medium">{item.category}</TableCell>
              <TableCell className="text-left">
                <Button className="h-7 rounded-none bg-secondary text-secondary-foreground hover:bg-blue-600 hover:text-background" onClick={() => handleNotify()}>Notify me</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Stay in the know</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <SubscribeEmailForm onSubmitSuccess={(email) => {
              onEmailSubmit(email);
              handleDialogClose();
            }} />
            <p className="text-sm text-muted-foreground">Entered your email before? Skip this step.</p>
          </div>
          <DialogFooter>
            <Button variant="link" className="text-muted-foreground text-sm" onClick={handleDialogClose}>Skip</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isSuggestDialogOpen} onOpenChange={handleSuggestDialogClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Suggest items to test</DialogTitle>
          </DialogHeader>
          {!suggestionSubmitted ? (
            <Form {...suggestionForm}>
              <form onSubmit={suggestionForm.handleSubmit(handleSuggestSubmit)} className="flex flex-col gap-2">
                {[...Array(numItems)].map((_, index) => (
                  <FormField
                    key={index}
                    control={suggestionForm.control}
                    name={`items.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              placeholder="e.g. Ben & Jerry's ice cream in pint cartons"
                              className="col-span-3"
                              maxLength={70}
                            />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => {
                                  suggestionForm.setValue(`items.${index}`, "");
                                  setNumItems(numItems - 1);
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                              >
                                <X size={16} />
                              </button>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                {numItems < 5 && (
                  <Button variant="link" type="button" size="sm" onClick={() => setNumItems(numItems + 1)}>
                    Add another item
                  </Button>
                )}
                <div className="text-sm text-muted-foreground">
                  <ul className="ml-4 list-disc flex flex-col gap-1">
                    <li>Check if item is already on the list - if yes, vote instead</li>
                    <li>Be specific</li>
                  </ul>
                </div>
                <FormField
                  control={suggestionForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Your email"
                          className="col-span-3"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <p className="text-sm text-muted-foreground">We will notify you about the results</p>
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={suggestionForm.formState.isSubmitting}>
                    {suggestionForm.formState.isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          ) : (
            <p className="py-4 text-center text-md">Thanks! We received your suggestion.</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}