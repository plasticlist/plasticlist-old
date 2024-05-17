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
    { "name": "Cider", "brand": "Angry Orchard", "category": "Alcohol", "packaging_type": "Bottle" },
    { "name": "Wine", "brand": "Barefoot", "category": "Alcohol", "packaging_type": "Bottle" },
    { "name": "Hard Seltzer", "brand": "White Claw", "category": "Alcohol", "packaging_type": "Can" },
    { "name": "White Wine", "brand": "Kendall-Jackson", "category": "Alcohol", "packaging_type": "Bottle" },
    { "name": "Red Wine", "brand": "Josh Cellars", "category": "Alcohol", "packaging_type": "Bottle" },
    { "name": "Hard Kombucha", "brand": "Boochcraft", "category": "Alcohol", "packaging_type": "Can" },
    { "name": "Hard Cider", "brand": "Ace", "category": "Alcohol", "packaging_type": "Bottle" },
    { "name": "Sparkling Rosé", "brand": "Cupcake Vineyards", "category": "Alcohol", "packaging_type": "Bottle" },
    { "name": "Plastic Baby Bottles", "brand": "Philips Avent", "category": "Baby Food", "packaging_type": "Bottle" },
    { "name": "Plastic Sippy Cups", "brand": "Munchkin", "category": "Baby Food", "packaging_type": "Set" },
    { "name": "Plastic Teething Toys", "brand": "Nuby", "category": "Baby Toys", "packaging_type": "Set" },
    { "name": "Annie’s Baby Food", "brand": "Annie's", "category": "Baby Food", "packaging_type": "Jar" },
    { "name": "Gerber Baby Food", "brand": "Gerber", "category": "Baby Food", "packaging_type": "Jar" },
    { "name": "Beech-Nut Baby Food", "brand": "Beech-Nut", "category": "Baby Food", "packaging_type": "Jar" },
    { "name": "Earth's Best Baby Food", "brand": "Earth's Best", "category": "Baby Food", "packaging_type": "Jar" },
    { "name": "Happy Baby Organic Baby Food", "brand": "Happy Baby", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Plum Organics Baby Food", "brand": "Plum Organics", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Sprout Organic Baby Food", "brand": "Sprout Organic", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Parent's Choice Baby Food", "brand": "Parent's Choice", "category": "Baby Food", "packaging_type": "Jar" },
    { "name": "Ella's Kitchen Baby Food", "brand": "Ella's Kitchen", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Yumi Baby Food", "brand": "Yumi", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Once Upon a Farm Baby Food", "brand": "Once Upon a Farm", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Holle Baby Food", "brand": "Holle", "category": "Baby Food", "packaging_type": "Jar" },
    { "name": "Happy Tot Super Foods", "brand": "Happy Tot", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Amara Organic Baby Food", "brand": "Amara", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Gerber Organic Baby Cereal", "brand": "Gerber", "category": "Baby Food", "packaging_type": "Box" },
    { "name": "Happy Baby Organic Puffs", "brand": "Happy Baby", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Plum Organics Pouches", "brand": "Plum Organics", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Sprout Organic Pouches", "brand": "Sprout Organic", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Earth's Best Organic Jars", "brand": "Earth's Best", "category": "Baby Food", "packaging_type": "Jar" },
    { "name": "Hipp Organic Baby Food", "brand": "Hipp", "category": "Baby Food", "packaging_type": "Jar" },
    { "name": "Peter Rabbit Organics Pouches", "brand": "Peter Rabbit Organics", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "NurturMe Organic Baby Food", "brand": "NurturMe", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Kabrita Goat Milk Baby Food", "brand": "Kabrita", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Happy Family Organics Yogurt", "brand": "Happy Family Organics", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Happy Baby Teethers", "brand": "Happy Baby", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Happy Baby Pouches", "brand": "Happy Baby", "category": "Baby Food", "packaging_type": "Pouch" },
    { "name": "Whole Wheat Bread", "brand": "Dave's Killer Bread", "category": "Bakery", "packaging_type": "Bag" },
    { "name": "Bagels", "brand": "Thomas'", "category": "Bakery", "packaging_type": "Bag" },
    { "name": "Gluten-Free Bread", "brand": "Udi's", "category": "Bakery", "packaging_type": "Bag" },
    { "name": "Baking Powder", "brand": "Clabber Girl", "category": "Baking", "packaging_type": "Can" },
    { "name": "Plastic Shower Curtain Liners", "brand": "Maytex", "category": "Bathroom", "packaging_type": "Package" },
    { "name": "Plastic Soap Dispensers", "brand": "Simplehuman", "category": "Bathroom", "packaging_type": "Package" },
    { "name": "Plastic Cosmetic Containers", "brand": "Revlon", "category": "Beauty", "packaging_type": "Set" },
    { "name": "Plastic Makeup Brushes", "brand": "Real Techniques", "category": "Beauty", "packaging_type": "Set" },
    { "name": "Almond Milk", "brand": "Almond Breeze", "category": "Beverage", "packaging_type": "Carton" },
    { "name": "Sparkling Water", "brand": "LaCroix", "category": "Beverage", "packaging_type": "Can" },
    { "name": "Ground Coffee", "brand": "Peet's Coffee", "category": "Beverage", "packaging_type": "Bag" },
    { "name": "Coconut Water", "brand": "Vita Coco", "category": "Beverage", "packaging_type": "Carton" },
    { "name": "Cashew Milk", "brand": "Silk", "category": "Beverage", "packaging_type": "Carton" },
    { "name": "Orange Juice", "brand": "Tropicana", "category": "Beverage", "packaging_type": "Carton" },
    { "name": "Sparkling Juice", "brand": "Spindrift", "category": "Beverage", "packaging_type": "Can" },
    { "name": "Soy Milk", "brand": "Silk", "category": "Beverage", "packaging_type": "Carton" },
    { "name": "Oat Milk", "brand": "Oatly", "category": "Beverage", "packaging_type": "Carton" },
    { "name": "Ginger Tea", "brand": "Traditional Medicinals", "category": "Beverage", "packaging_type": "Box" },
    { "name": "Starbucks Drink with Plastic Lid", "brand": "Starbucks", "category": "Beverages", "packaging_type": "Cup" },
    { "name": "Hydro Flask Hot Drink", "brand": "Hydro Flask", "category": "Beverages", "packaging_type": "Bottle" },
    { "name": "Hydro Flask Cold Drink", "brand": "Hydro Flask", "category": "Beverages", "packaging_type": "Bottle" },
    { "name": "Red Bull Energy Drink", "brand": "Red Bull", "category": "Beverages", "packaging_type": "Can" },
    { "name": "Soft Tea Bags", "brand": "Lipton", "category": "Beverages", "packaging_type": "Box" },
    { "name": "Coffee", "brand": "Starbucks", "category": "Beverages", "packaging_type": "Cup" },
    { "name": "Bone Broth", "brand": "Kettle & Fire", "category": "Broth", "packaging_type": "Carton" },
    { "name": "Organic Peanut Butter Cups", "brand": "Justin's", "category": "Candy", "packaging_type": "Bag" },
    { "name": "Canned Black Beans", "brand": "Bush's", "category": "Canned Goods", "packaging_type": "Can" },
    { "name": "Canned Tuna", "brand": "Wild Planet", "category": "Canned Goods", "packaging_type": "Can" },
    { "name": "Canned Chickpeas", "brand": "Goya", "category": "Canned Goods", "packaging_type": "Can" },
    { "name": "Canned Corn", "brand": "Green Giant", "category": "Canned Goods", "packaging_type": "Can" },
    { "name": "Tomato Paste", "brand": "Hunt's", "category": "Canned Goods", "packaging_type": "Can" },
    { "name": "Chicken Broth", "brand": "Swanson", "category": "Canned Goods", "packaging_type": "Carton" },
    { "name": "Vegetable Broth", "brand": "Pacific Foods", "category": "Canned Goods", "packaging_type": "Carton" },
    { "name": "Canned Pinto Beans", "brand": "S&W", "category": "Canned Goods", "packaging_type": "Can" },
    { "name": "Granola", "brand": "Nature Valley", "category": "Cereal", "packaging_type": "Box" },
    { "name": "Instant Oatmeal", "brand": "Quaker", "category": "Cereal", "packaging_type": "Box" },
    { "name": "Granola Clusters", "brand": "Bear Naked", "category": "Cereal", "packaging_type": "Bag" },
    { "name": "Hot Chocolate", "brand": "Swiss Miss", "category": "Chocolate Drink", "packaging_type": "Box" },
    { "name": "Plastic Trash Bags", "brand": "Hefty", "category": "Cleaning", "packaging_type": "Box" },
    { "name": "Plastic Spray Bottles", "brand": "Sprayco", "category": "Cleaning", "packaging_type": "Bottle" },
    { "name": "Plastic Cleaning Spray Bottles", "brand": "Windex", "category": "Cleaning", "packaging_type": "Bottle" },
    { "name": "Plastic Floor Cleaner Bottles", "brand": "Swiffer", "category": "Cleaning", "packaging_type": "Bottle" },
    { "name": "Plastic Surface Wipes", "brand": "Clorox", "category": "Cleaning", "packaging_type": "Container" },
    { "name": "Plastic Trash Cans", "brand": "Rubbermaid", "category": "Cleaning", "packaging_type": "Can" },
    { "name": "Cold Brew Coffee", "brand": "Starbucks", "category": "Coffee", "packaging_type": "Bottle" },
    { "name": "Black Coffee", "brand": "Stumptown", "category": "Coffee", "packaging_type": "Bottle" },
    { "name": "Espresso", "brand": "Illy", "category": "Coffee", "packaging_type": "Can" },
    { "name": "Mocha", "brand": "Starbucks", "category": "Coffee", "packaging_type": "Bottle" },
    { "name": "Cappuccino", "brand": "Starbucks", "category": "Coffee", "packaging_type": "Bottle" },
    { "name": "Vanilla Latte", "brand": "Starbucks", "category": "Coffee", "packaging_type": "Bottle" },
    { "name": "Cold Pressed Coffee", "brand": "High Brew", "category": "Coffee", "packaging_type": "Can" },
    { "name": "Cold Brew Latte", "brand": "Califia Farms", "category": "Coffee", "packaging_type": "Bottle" },
    { "name": "Apple Cider Vinegar", "brand": "Bragg", "category": "Condiment", "packaging_type": "Bottle" },
    { "name": "Hot Sauce", "brand": "Frank's RedHot", "category": "Condiment", "packaging_type": "Bottle" },
    { "name": "Greek Yogurt", "brand": "Chobani", "category": "Dairy", "packaging_type": "Cup" },
    { "name": "Cage-Free Eggs", "brand": "Vital Farms", "category": "Dairy", "packaging_type": "Carton" },
    { "name": "Cheddar Cheese", "brand": "Tillamook", "category": "Dairy", "packaging_type": "Block" },
    { "name": "Dairy-Free Yogurt", "brand": "So Delicious", "category": "Dairy", "packaging_type": "Cup" },
    { "name": "Vegan Butter", "brand": "Earth Balance", "category": "Dairy", "packaging_type": "Tub" },
    { "name": "Whole Milk", "brand": "Horizon Organic", "category": "Dairy", "packaging_type": "Carton" },
    { "name": "Milk", "brand": "Horizon Organic", "category": "Dairy Milk", "packaging_type": "Carton" },
    { "name": "Chocolate Milk", "brand": "Fairlife", "category": "Dairy Milk", "packaging_type": "Bottle" },
    { "name": "Eggnog", "brand": "Horizon Organic", "category": "Dairy Milk", "packaging_type": "Carton" },
    { "name": "Lactose-Free Milk", "brand": "Lactaid", "category": "Dairy Milk", "packaging_type": "Carton" },
    { "name": "Buttermilk", "brand": "Kroger", "category": "Dairy Milk", "packaging_type": "Carton" },
    { "name": "Hummus", "brand": "Sabra", "category": "Dips & Spreads", "packaging_type": "Tub" },
    { "name": "Salsa", "brand": "Pace", "category": "Dips & Spreads", "packaging_type": "Jar" },
    { "name": "Electrolyte Drink", "brand": "Pedialyte", "category": "Electrolyte", "packaging_type": "Bottle" },
    { "name": "Sports Drink", "brand": "Gatorade", "category": "Electrolyte", "packaging_type": "Bottle" },
    { "name": "Energy Drink", "brand": "Red Bull", "category": "Energy", "packaging_type": "Can" },
    { "name": "Kombucha", "brand": "GT's", "category": "Fermented", "packaging_type": "Bottle" },
    { "name": "Food Wrapped in Cellophane", "brand": "Glad", "category": "Food Storage", "packaging_type": "Wrap" },
    { "name": "Food Wrapped in Plastic Bags", "brand": "Ziploc", "category": "Food Storage", "packaging_type": "Bag" },
    { "name": "Food Microwaved in Plastic Container", "brand": "Rubbermaid", "category": "Food Storage", "packaging_type": "Container" },
    { "name": "Frozen Pizza", "brand": "DiGiorno", "category": "Frozen", "packaging_type": "Box" },
    { "name": "Frozen Mixed Berries", "brand": "365 by Whole Foods Market", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Frozen Peas", "brand": "Birds Eye", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Frozen Waffles", "brand": "Eggo", "category": "Frozen", "packaging_type": "Box" },
    { "name": "Frozen Green Beans", "brand": "Birds Eye", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Frozen Blueberries", "brand": "365 by Whole Foods Market", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Frozen Broccoli", "brand": "Birds Eye", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Frozen Strawberries", "brand": "365 by Whole Foods Market", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Frozen Cauliflower", "brand": "Birds Eye", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Frozen Spinach", "brand": "Birds Eye", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Frozen Edamame", "brand": "365 by Whole Foods Market", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Organic Cauliflower Rice", "brand": "Cascadian Farm", "category": "Frozen", "packaging_type": "Bag" },
    { "name": "Organic Fuji Apple", "brand": "Whole Foods", "category": "Fruit", "packaging_type": "Loose" },
    { "name": "Granny Smith Apple", "brand": "Whole Foods", "category": "Fruit", "packaging_type": "Loose" },
    { "name": "Organic Avocado", "brand": "Whole Foods", "category": "Fruit", "packaging_type": "Loose" },
    { "name": "Organic Strawberries", "brand": "Driscoll's", "category": "Fruit", "packaging_type": "Container" },
    { "name": "Organic Raspberries", "brand": "Driscoll's", "category": "Fruit", "packaging_type": "Container" },
    { "name": "Organic Blueberries", "brand": "Driscoll's", "category": "Fruit", "packaging_type": "Container" },
    { "name": "Organic Bananas", "brand": "Whole Foods", "category": "Fruit", "packaging_type": "Loose" },
    { "name": "Organic Gala Apple", "brand": "Whole Foods", "category": "Fruit", "packaging_type": "Loose" },
    { "name": "Organic Oranges", "brand": "Whole Foods", "category": "Fruit", "packaging_type": "Loose" },
    { "name": "Organic Grapes", "brand": "Whole Foods", "category": "Fruit", "packaging_type": "Container" },
    { "name": "Organic Pineapple", "brand": "Whole Foods", "category": "Fruit", "packaging_type": "Loose" },
    { "name": "Organic Limes", "brand": "Whole Foods", "category": "Fruit", "packaging_type": "Loose" },
    { "name": "Plastic Outdoor Furniture", "brand": "Keter", "category": "Furniture", "packaging_type": "Set" },
    { "name": "Plastic Bird Feeders", "brand": "Perky-Pet", "category": "Garden", "packaging_type": "Feeder" },
    { "name": "Plastic Plant Pots", "brand": "Bloem", "category": "Garden", "packaging_type": "Pot" },
    { "name": "Plastic Garden Hoses", "brand": "Flexzilla", "category": "Garden", "packaging_type": "Hose" },
    { "name": "Plastic Watering Cans", "brand": "Bloem", "category": "Garden", "packaging_type": "Can" },
    { "name": "Plastic Plant Saucers", "brand": "Curtis Wagner Plastics", "category": "Garden", "packaging_type": "Saucer" },
    { "name": "Brown Rice", "brand": "Lundberg", "category": "Grain", "packaging_type": "Bag" },
    { "name": "Quinoa", "brand": "Bob's Red Mill", "category": "Grain", "packaging_type": "Bag" },
    { "name": "Pasta", "brand": "Barilla", "category": "Grain", "packaging_type": "Box" },
    { "name": "Spaghetti", "brand": "Barilla", "category": "Grain", "packaging_type": "Box" },
    { "name": "Chia Seeds", "brand": "Navitas Organics", "category": "Grain", "packaging_type": "Bag" },
    { "name": "Organic Cilantro", "brand": "Whole Foods", "category": "Herb", "packaging_type": "Loose" },
    { "name": "Ben & Jerry's Chocolate Chip Cookie Dough", "brand": "Ben & Jerry's", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Haagen-Dazs Vanilla Ice Cream", "brand": "Haagen-Dazs", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Magnum Chocolate Ice Cream Bars", "brand": "Magnum", "category": "Ice Cream", "packaging_type": "Box" },
    { "name": "Talenti Gelato Layers", "brand": "Talenti", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Breyers Natural Vanilla", "brand": "Breyers", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Dairy-Free Coconut Milk Ice Cream", "brand": "So Delicious", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Halo Top Low-Calorie Ice Cream", "brand": "Halo Top", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Yasso Greek Yogurt Bars", "brand": "Yasso", "category": "Ice Cream", "packaging_type": "Box" },
    { "name": "Ben & Jerry's Dairy-Free Ice Cream", "brand": "Ben & Jerry's", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Good Humor Strawberry Shortcake", "brand": "Good Humor", "category": "Ice Cream", "packaging_type": "Box" },
    { "name": "Nestle Drumstick", "brand": "Nestle", "category": "Ice Cream", "packaging_type": "Box" },
    { "name": "Klondike Bars", "brand": "Klondike", "category": "Ice Cream", "packaging_type": "Box" },
    { "name": "Blue Bell Homemade Vanilla", "brand": "Blue Bell", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Non-Dairy Almond Milk Ice Cream", "brand": "So Delicious", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Turkey Hill Ice Cream", "brand": "Turkey Hill", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Mochi Ice Cream", "brand": "My/Mo", "category": "Ice Cream", "packaging_type": "Box" },
    { "name": "Ice Cream Sandwiches", "brand": "Generic", "category": "Ice Cream", "packaging_type": "Box" },
    { "name": "Salt & Straw Ice Cream", "brand": "Salt & Straw", "category": "Ice Cream", "packaging_type": "Tub" },
    { "name": "Orange Juice", "brand": "Tropicana", "category": "Juice", "packaging_type": "Carton" },
    { "name": "Green Juice", "brand": "Suja", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Smoothie", "brand": "Naked Juice", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Cold Pressed Juice", "brand": "Pressed Juicery", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Apple Juice", "brand": "Martinelli's", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Lemonade", "brand": "Simply Lemonade", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Beet Juice", "brand": "Lakewood", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Vegetable Juice", "brand": "V8", "category": "Juice", "packaging_type": "Can" },
    { "name": "Turmeric Tonic", "brand": "Temple Turmeric", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Carrot Juice", "brand": "Bolthouse Farms", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Limeade", "brand": "Simply Limeade", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Spiced Apple Cider", "brand": "Trader Joe's", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Mango Juice", "brand": "Looza", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Cherry Juice", "brand": "Cheribundi", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Pineapple Juice", "brand": "Dole", "category": "Juice", "packaging_type": "Can" },
    { "name": "Grape Juice", "brand": "Welch's", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Aloe Vera Juice", "brand": "ALO", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Hot Apple Cider", "brand": "Alpine", "category": "Juice", "packaging_type": "Box" },
    { "name": "Mango Smoothie", "brand": "Naked Juice", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Watermelon Water", "brand": "WTRMLN WTR", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Honey Lemonade", "brand": "Califia Farms", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Organic Juice", "brand": "Santa Cruz Organic", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Pomegranate Juice", "brand": "POM Wonderful", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Blood Orange Juice", "brand": "Natalie's Orchid Island Juice Company", "category": "Juice", "packaging_type": "Bottle" },
    { "name": "Plastic Food Storage Containers", "brand": "Tupperware", "category": "Kitchen", "packaging_type": "Box" },
    { "name": "Plastic Water Bottles", "brand": "Nalgene", "category": "Kitchen", "packaging_type": "Bottle" },
    { "name": "Plastic Wrap", "brand": "Glad", "category": "Kitchen", "packaging_type": "Box" },
    { "name": "Non-stick Cookware", "brand": "T-fal", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Cutlery", "brand": "Dixie", "category": "Kitchen", "packaging_type": "Box" },
    { "name": "Plastic Straws", "brand": "SipWell", "category": "Kitchen", "packaging_type": "Bag" },
    { "name": "Microwave-safe Plastic Containers", "brand": "Rubbermaid", "category": "Kitchen", "packaging_type": "Box" },
    { "name": "Plastic Plates", "brand": "Solo", "category": "Kitchen", "packaging_type": "Bag" },
    { "name": "Plastic Cups", "brand": "Solo", "category": "Kitchen", "packaging_type": "Bag" },
    { "name": "Plastic Cutting Boards", "brand": "Farberware", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Utensils", "brand": "OXO", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Food Storage Bags", "brand": "Ziploc", "category": "Kitchen", "packaging_type": "Box" },
    { "name": "Plastic Dishware", "brand": "Melamine", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Mixing Bowls", "brand": "Pyrex", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Food Processor Bowls", "brand": "Cuisinart", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Coffee Makers", "brand": "Keurig", "category": "Kitchen", "packaging_type": "Machine" },
    { "name": "Plastic Blenders", "brand": "Ninja", "category": "Kitchen", "packaging_type": "Machine" },
    { "name": "Plastic Kettles", "brand": "Hamilton Beach", "category": "Kitchen", "packaging_type": "Machine" },
    { "name": "Plastic Measuring Cups", "brand": "Oxo", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Measuring Spoons", "brand": "Oxo", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Electric Mixers", "brand": "KitchenAid", "category": "Kitchen", "packaging_type": "Machine" },
    { "name": "Plastic Food Choppers", "brand": "Hamilton Beach", "category": "Kitchen", "packaging_type": "Machine" },
    { "name": "Plastic Salad Spinners", "brand": "OXO", "category": "Kitchen", "packaging_type": "Machine" },
    { "name": "Plastic Ice Cube Trays", "brand": "OXO", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Food Canisters", "brand": "Oggi", "category": "Kitchen", "packaging_type": "Set" },
    { "name": "Plastic Travel Mugs", "brand": "Contigo", "category": "Kitchen", "packaging_type": "Mug" },
    { "name": "Plastic Lunch Boxes", "brand": "Rubbermaid", "category": "Kitchen", "packaging_type": "Box" },
    { "name": "Plastic Laundry Baskets", "brand": "Rubbermaid", "category": "Laundry", "packaging_type": "Basket" },
    { "name": "Plastic Detergent Bottles", "brand": "Tide", "category": "Laundry", "packaging_type": "Bottle" },
    { "name": "Plastic Fabric Softener Bottles", "brand": "Downy", "category": "Laundry", "packaging_type": "Bottle" },
    { "name": "Organic Chicken Breast", "brand": "Whole Foods", "category": "Meat", "packaging_type": "Package" },
    { "name": "Grass-Fed Beef", "brand": "Organic Valley", "category": "Meat", "packaging_type": "Package" },
    { "name": "Grain-Fed Beef", "brand": "Generic", "category": "Meat", "packaging_type": "Package" },
    { "name": "Organic Chicken", "brand": "Bell & Evans", "category": "Meat", "packaging_type": "Package" },
    { "name": "Cage-Free Chicken", "brand": "Vital Farms", "category": "Meat", "packaging_type": "Package" },
    { "name": "Non-Organic Chicken", "brand": "Generic", "category": "Meat", "packaging_type": "Package" },
    { "name": "Regular Chicken Breast", "brand": "Tyson", "category": "Meat", "packaging_type": "Package" },
    { "name": "Soy Milk", "brand": "Silk", "category": "Milk", "packaging_type": "Carton" },
    { "name": "Regular Milk", "brand": "DairyPure", "category": "Milk", "packaging_type": "Carton" },
    { "name": "Organic Milk", "brand": "Horizon Organic", "category": "Milk", "packaging_type": "Carton" },
    { "name": "Almond Milk", "brand": "Almond Breeze", "category": "Milk", "packaging_type": "Carton" },
    { "name": "Raw Milk", "brand": "Organic Pastures", "category": "Milk", "packaging_type": "Glass Bottle" },
    { "name": "Pasteurized Milk", "brand": "DairyPure", "category": "Milk", "packaging_type": "Carton" },
    { "name": "Almond Milk", "brand": "Almond Breeze", "category": "Non-Dairy Milk", "packaging_type": "Carton" },
    { "name": "Oat Milk", "brand": "Oatly", "category": "Non-Dairy Milk", "packaging_type": "Carton" },
    { "name": "Soy Milk", "brand": "Silk", "category": "Non-Dairy Milk", "packaging_type": "Carton" },
    { "name": "Cashew Milk", "brand": "Silk", "category": "Non-Dairy Milk", "packaging_type": "Carton" },
    { "name": "Rice Milk", "brand": "Rice Dream", "category": "Non-Dairy Milk", "packaging_type": "Carton" },
    { "name": "Horchata", "brand": "Rice Dream", "category": "Non-Dairy Milk", "packaging_type": "Carton" },
    { "name": "Almond Drink", "brand": "Califia Farms", "category": "Non-Dairy Milk", "packaging_type": "Bottle" },
    { "name": "Chocolate Almond Milk", "brand": "Silk", "category": "Non-Dairy Milk", "packaging_type": "Carton" },
    { "name": "Golden Milk", "brand": "Califia Farms", "category": "Non-Dairy Milk", "packaging_type": "Bottle" },
    { "name": "Non-Processed Groceries", "brand": "Whole Foods", "category": "Non-Processed Foods", "packaging_type": "Loose" },
    { "name": "Coconut Oil", "brand": "Nutiva", "category": "Oil", "packaging_type": "Jar" },
    { "name": "Olive Oil", "brand": "California Olive Ranch", "category": "Oil", "packaging_type": "Bottle" },
    { "name": "Seed Oils", "brand": "Spectrum", "category": "Oils", "packaging_type": "Bottle" },
    { "name": "Olive Oils", "brand": "California Olive Ranch", "category": "Oils", "packaging_type": "Bottle" },
    { "name": "Plastic Straws", "brand": "SipWell", "category": "Other Items", "packaging_type": "Bag" },
    { "name": "PFAS Test in Dairy Products", "brand": "", "category": "Other Items", "packaging_type": "Loose" },
    { "name": "Solo Cups with Water", "brand": "Solo", "category": "Other Items", "packaging_type": "Cup" },
    { "name": "Machine-Milked Cow Milk in Glass Bottles", "brand": "Straus Family Creamery", "category": "Other Items", "packaging_type": "Glass Bottle" },
    { "name": "Raw Milk Directly from a Cow", "brand": "", "category": "Other Items", "packaging_type": "Loose" },
    { "name": "Plastic Hair Brushes", "brand": "Conair", "category": "Personal Care", "packaging_type": "Package" },
    { "name": "Plastic Toothbrushes", "brand": "Oral-B", "category": "Personal Care", "packaging_type": "Package" },
    { "name": "Plastic Combs", "brand": "Goody", "category": "Personal Care", "packaging_type": "Package" },
    { "name": "Plastic Lotion Bottles", "brand": "Aveeno", "category": "Personal Care", "packaging_type": "Bottle" },
    { "name": "Plastic Shampoo Bottles", "brand": "Pantene", "category": "Personal Care", "packaging_type": "Bottle" },
    { "name": "Plastic Conditioner Bottles", "brand": "Dove", "category": "Personal Care", "packaging_type": "Bottle" },
    { "name": "Plastic Deodorant Containers", "brand": "Secret", "category": "Personal Care", "packaging_type": "Stick" },
    { "name": "Plastic Razors", "brand": "Gillette", "category": "Personal Care", "packaging_type": "Package" },
    { "name": "Plastic Toothpaste Tubes", "brand": "Colgate", "category": "Personal Care", "packaging_type": "Tube" },
    { "name": "Plastic Mouthwash Bottles", "brand": "Listerine", "category": "Personal Care", "packaging_type": "Bottle" },
    { "name": "Plastic Pet Food Containers", "brand": "IRIS USA", "category": "Pet", "packaging_type": "Container" },
    { "name": "Plastic Pet Bowls", "brand": "Van Ness", "category": "Pet", "packaging_type": "Bowl" },
    { "name": "Plastic Cat Litter Boxes", "brand": "Petmate", "category": "Pet", "packaging_type": "Box" },
    { "name": "Plastic Dog Toys", "brand": "KONG", "category": "Pet", "packaging_type": "Toy" },
    { "name": "Probiotic Drink", "brand": "GoodBelly", "category": "Probiotic", "packaging_type": "Carton" },
    { "name": "Kefir", "brand": "Lifeway", "category": "Probiotic", "packaging_type": "Bottle" },
    { "name": "Protein Shake", "brand": "Orgain", "category": "Protein Drink", "packaging_type": "Bottle" },
    { "name": "Protein Water", "brand": "Protein2o", "category": "Protein Drink", "packaging_type": "Bottle" },
    { "name": "Tomato Sauce", "brand": "Rao's Homemade", "category": "Sauce", "packaging_type": "Jar" },
    { "name": "Pesto Sauce", "brand": "Buitoni", "category": "Sauce", "packaging_type": "Tub" },
    { "name": "Marinara Sauce", "brand": "Classico", "category": "Sauce", "packaging_type": "Jar" },
    { "name": "BBQ Sauce", "brand": "Sweet Baby Ray's", "category": "Sauce", "packaging_type": "Bottle" },
    { "name": "Kale Chips", "brand": "Rhythm Superfoods", "category": "Snack", "packaging_type": "Bag" },
    { "name": "Protein Bars", "brand": "Clif Bar", "category": "Snack", "packaging_type": "Box" },
    { "name": "Chocolate Chip Cookies", "brand": "Tate's Bake Shop", "category": "Snack", "packaging_type": "Bag" },
    { "name": "Popcorn", "brand": "Boom Chicka Pop", "category": "Snack", "packaging_type": "Bag" },
    { "name": "Beef Jerky", "brand": "Jack Link's", "category": "Snack", "packaging_type": "Bag" },
    { "name": "Tortilla Chips", "brand": "Tostitos", "category": "Snack", "packaging_type": "Bag" },
    { "name": "Granola Bars", "brand": "Kind", "category": "Snack", "packaging_type": "Box" },
    { "name": "Pretzels", "brand": "Snyder's of Hanover", "category": "Snack", "packaging_type": "Bag" },
    { "name": "Almonds", "brand": "Blue Diamond", "category": "Snack", "packaging_type": "Bag" },
    { "name": "Cheddar Crackers", "brand": "Annie's", "category": "Snack", "packaging_type": "Box" },
    { "name": "Mixed Nuts", "brand": "Planters", "category": "Snack", "packaging_type": "Jar" },
    { "name": "Mango Slices", "brand": "Made in Nature", "category": "Snack", "packaging_type": "Bag" },
    { "name": "Organic Apple Sauce", "brand": "Santa Cruz Organic", "category": "Snack", "packaging_type": "Jar" },
    { "name": "Veggie Sticks", "brand": "Veggie Straws", "category": "Snacks", "packaging_type": "Bag" },
    { "name": "Powdered Peanut Butter", "brand": "PB2", "category": "Snacks", "packaging_type": "Jar" },
    { "name": "Ginger Ale", "brand": "Canada Dry", "category": "Soda", "packaging_type": "Can" },
    { "name": "Root Beer", "brand": "A&W", "category": "Soda", "packaging_type": "Can" },
    { "name": "Sparkling Lemonade", "brand": "San Pellegrino", "category": "Soda", "packaging_type": "Can" },
    { "name": "Ginger Beer", "brand": "Fever-Tree", "category": "Soda", "packaging_type": "Bottle" },
    { "name": "Cola", "brand": "Coca-Cola", "category": "Soda", "packaging_type": "Can" },
    { "name": "Cherry Cola", "brand": "Coca-Cola", "category": "Soda", "packaging_type": "Can" },
    { "name": "Peanut Butter", "brand": "Jif", "category": "Spread", "packaging_type": "Jar" },
    { "name": "Almond Butter", "brand": "Barney Butter", "category": "Spread", "packaging_type": "Jar" },
    { "name": "Plastic Storage Bins", "brand": "Sterilite", "category": "Storage", "packaging_type": "Bin" },
    { "name": "Maple Syrup", "brand": "Kirkland Signature", "category": "Sweetener", "packaging_type": "Bottle" },
    { "name": "Honey", "brand": "Nature Nate's", "category": "Sweetener", "packaging_type": "Bottle" },
    { "name": "Iced Tea", "brand": "Honest Tea", "category": "Tea", "packaging_type": "Bottle" },
    { "name": "Matcha Latte", "brand": "MatchaBar", "category": "Tea", "packaging_type": "Bottle" },
    { "name": "Herbal Tea", "brand": "Traditional Medicinals", "category": "Tea", "packaging_type": "Box" },
    { "name": "Yerba Mate", "brand": "Guayaki", "category": "Tea", "packaging_type": "Can" },
    { "name": "Green Tea", "brand": "Ito En", "category": "Tea", "packaging_type": "Bottle" },
    { "name": "Herbal Infusion", "brand": "Yogi Tea", "category": "Tea", "packaging_type": "Box" },
    { "name": "Black Tea", "brand": "Twinings", "category": "Tea", "packaging_type": "Box" },
    { "name": "Chai Latte", "brand": "Tazo", "category": "Tea", "packaging_type": "Bottle" },
    { "name": "Cold Brew Tea", "brand": "Pure Leaf", "category": "Tea", "packaging_type": "Bottle" },
    { "name": "Peach Tea", "brand": "Snapple", "category": "Tea", "packaging_type": "Bottle" },
    { "name": "Matcha Tea", "brand": "Ito En", "category": "Tea", "packaging_type": "Bottle" },
    { "name": "Lemon Iced Tea", "brand": "Arizona", "category": "Tea", "packaging_type": "Can" },
    { "name": "White Tea", "brand": "Tazo", "category": "Tea", "packaging_type": "Box" },
    { "name": "Hibiscus Tea", "brand": "Traditional Medicinals", "category": "Tea", "packaging_type": "Box" },
    { "name": "Spicy Ginger Tea", "brand": "Reed's", "category": "Tea", "packaging_type": "Bottle" },
    { "name": "Plastic Children's Toys", "brand": "Fisher-Price", "category": "Toys", "packaging_type": "Set" },
    { "name": "Plastic Travel Bottles", "brand": "Dot&Dot", "category": "Travel", "packaging_type": "Set" },
    { "name": "Reusable Chopsticks", "brand": "Generic", "category": "Utensils", "packaging_type": "Set" },
    { "name": "Organic Baby Spinach", "brand": "Earthbound Farm", "category": "Vegetable", "packaging_type": "Bag" },
    { "name": "Baby Carrots", "brand": "Bolthouse Farms", "category": "Vegetable", "packaging_type": "Bag" },
    { "name": "Organic Broccoli", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Organic Mixed Greens", "brand": "Taylor Farms", "category": "Vegetable", "packaging_type": "Bag" },
    { "name": "Organic Zucchini", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Organic Sweet Potatoes", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Organic Bell Peppers", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Organic Tomatoes", "brand": "NatureSweet", "category": "Vegetable", "packaging_type": "Container" },
    { "name": "Organic Cauliflower", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Organic Carrots", "brand": "Bolthouse Farms", "category": "Vegetable", "packaging_type": "Bag" },
    { "name": "Organic Spring Mix", "brand": "Organicgirl", "category": "Vegetable", "packaging_type": "Container" },
    { "name": "Organic Celery", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Organic Kale", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Organic Green Beans", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Organic Romaine Lettuce", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Organic Spinach", "brand": "Whole Foods", "category": "Vegetable", "packaging_type": "Loose" },
    { "name": "Sparkling Water", "brand": "LaCroix", "category": "Water", "packaging_type": "Can" },
    { "name": "Coconut Water", "brand": "Vita Coco", "category": "Water", "packaging_type": "Carton" },
    { "name": "Sparkling Juice", "brand": "Spindrift", "category": "Water", "packaging_type": "Can" },
    { "name": "Flavored Water", "brand": "Hint", "category": "Water", "packaging_type": "Bottle" },
    { "name": "Alkaline Water", "brand": "Essentia", "category": "Water", "packaging_type": "Bottle" },
    { "name": "Mineral Water", "brand": "Perrier", "category": "Water", "packaging_type": "Bottle" },
    { "name": "Cucumber Water", "brand": "Hint", "category": "Water", "packaging_type": "Bottle" },
    { "name": "Electrolyte Water", "brand": "Smartwater", "category": "Water", "packaging_type": "Bottle" },
    { "name": "Rosemary Water", "brand": "No1 Botanicals", "category": "Water", "packaging_type": "Bottle" },
    { "name": "Sparkling Coconut Water", "brand": "CoCo Joy", "category": "Water", "packaging_type": "Can" },
    { "name": "Honey Water", "brand": "Bee's Water", "category": "Water", "packaging_type": "Bottle" },
    { "name": "Tap Water", "brand": "", "category": "Water", "packaging_type": "Loose" },
    { "name": "Dasani Bottled Water", "brand": "Dasani", "category": "Water", "packaging_type": "Plastic Bottle" },
    { "name": "Evian Bottled Water", "brand": "Evian", "category": "Water", "packaging_type": "Plastic Bottle" },
    { "name": "Aquafina Bottled Water", "brand": "Aquafina", "category": "Water", "packaging_type": "Plastic Bottle" },
    { "name": "Fiji Bottled Water", "brand": "Fiji", "category": "Water", "packaging_type": "Plastic Bottle" },
    { "name": "Voss Bottled Water", "brand": "Voss", "category": "Water", "packaging_type": "Glass Bottle" },
    { "name": "Nalgene Bottled Water", "brand": "Nalgene", "category": "Water", "packaging_type": "Plastic Bottle" },
    { "name": "Generic Bottled Water", "brand": "Generic", "category": "Water", "packaging_type": "Plastic Bottle" },
    { "name": "Lifefactory Bottled Water", "brand": "Lifefactory", "category": "Water", "packaging_type": "Glass Bottle" },
    { "name": "Munchkin Bottled Water", "brand": "Munchkin", "category": "Water", "packaging_type": "Sippy Cup" },
    { "name": "Brita Filtered Water", "brand": "Brita", "category": "Water", "packaging_type": "Loose" },
    { "name": "5-Gallon Non-BPA Bottled Water", "brand": "Primo", "category": "Water", "packaging_type": "Plastic Bottle" },
    { "name": "Super Filtered Tap Water", "brand": "", "category": "Water", "packaging_type": "Loose" },
    { "name": "Mountain Spring Bottled Water", "brand": "Mountain Valley", "category": "Water", "packaging_type": "Glass Bottle" },
    { "name": "Water After Sitting in Nalgene Bottle", "brand": "Nalgene", "category": "Water", "packaging_type": "Plastic Bottle" },
    { "name": "Water After Sitting in Cheap Plastic Bottle", "brand": "Generic", "category": "Water", "packaging_type": "Plastic Bottle" },
    { "name": "Water After Sitting in Glass Bottle", "brand": "Generic", "category": "Water", "packaging_type": "Glass Bottle" },
    { "name": "Water After Sitting in Sippy Cup", "brand": "Munchkin", "category": "Water", "packaging_type": "Sippy Cup" },
    { "name": "Bottled Water Left in a Hot Car", "brand": "Generic", "category": "Water", "packaging_type": "Plastic Bottle" }
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
        <Button variant="outline" onClick={() => setIsSuggestDialogOpen(true)} className="mr-2">
          Suggest products
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
            <TableHead className="min-w-[200px]">Name</TableHead>
            <TableHead className="w-[100px]">Brand</TableHead>
            <TableHead className="w-[100px]">Category</TableHead>
            <TableHead className="w-[100px]">Packaging</TableHead>
            <TableHead className="w-[100px]">Test results</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRows.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="text-left">
                <Button
                  onClick={() => handleVote(item.name)}
                  disabled={votedItems.includes(item.name)}
                  size="sm"
                  className={`h-7 w-14 rounded-none ${votedItems.includes(item.name)
                    ? "bg-green-300 text-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-green-600 hover:text-background"
                    }`}
                >
                  {votedItems.includes(item.name) ? "VOTED" : "VOTE"}
                </Button>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className="font-medium">{item.brand}</TableCell>
              <TableCell className="">{item.category}</TableCell>
              <TableCell className="">{item.packaging_type}</TableCell>
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
            <DialogTitle>Suggest products to test</DialogTitle>
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
                    <li>Enter name, brand, category, and packaging type</li>
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
            <p className="py-4 text-center text-md">Thanks! We received your vote and will update the list soon.</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}