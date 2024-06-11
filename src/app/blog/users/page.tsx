import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function BlogUsersPage() {
  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <div className="flex flex-col gap-8">
        <Header />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">What we learned from 18,000 plasticlist users</h1>
            <p className="text-gray-500">Published 2024-06-04 by <a href="https://x.com/theslavant" className="underline" target="_blank" rel="noopener noreferrer">Yaroslav</a></p>
          </div>
          <br />
          <p>We launched <a href="https://plasticlist.org" className="underline">plasticlist.org</a> on May 21. Since then, 18,000 people visited it more than 250,000 times. We received about 7,500 votes for different products to test.</p>
          <p>In this post, I’ll look at some of the interesting things we’ve learned from the way people use and vote on plasticlist.</p>
          <br />
          <p className="font-bold">1. In the last 2 weeks, people from most of the world’s countries visited <a href="https://plasticlist.org" className="underline">plasticlist.org</a>.</p>
          <p>Everywhere in blue is a country where someone visited our website.</p>
          <p>For example, as of this writing, we had 17 visits from Greenland and 142,559 from the US.</p>
          <p>We are focusing on testing food in California for now, so it’s interesting to see worldwide usage.</p>
          <br />
          <Image src="/blog/map.jpg" alt="Map of plasticlist users" width={800} height={400} />
          <br />
          <p className="font-bold">2. Plasticlist users submitted 500 ideas for things to test.</p>
          <p>To build v1 of plasticlist, I scraped the comments under Nat’s tweet with people asking him to test speicific products. If Nat responded affirmatively, I would add a product to the list.</p>
          <p>I then generated about 300 of the most popular products in California using gpt-4o and added them in.</p>
          <br />
          <div className="flex justify-center">
            <Image src="/blog/nat-tweet.png" alt="Comment under Nat's tweet" width={500} height={250} />
          </div>
          <br />
          <p>Since then, plasticlist users have not only voted for products we should test, but also sent us about 500 suggestions for other products we should add.</p>
          <p>Now we have ideas on the list ranging from most things in the vegetable aisle to Haribo Sour Spaghetti, Zyn nicotine pouches, and Psyllium Husk.</p>
          <br />
          <p className="font-bold">3. The most upvoted product so far is Chobani Greek Yogurt.</p>
          <p>Looks like I’m not the only one eating Chobani every morning. Our top-5 also includes Starbucks coffee, Angry Orchard cider, Almond Breeze milk, and White Claw / Water / Oat Milk.</p>
          <br />
          <div className="flex justify-center">
            <Image src="/blog/most-upvoted-product.png" alt="Most upvoted product" width={800} height={400} />
          </div>
          <br />
          <p className="font-bold">4. The most upvoted category so far is water, and people have many ideas on what water we should test.</p>
          <p>There are 29 different water products on the list. People are interested in tap water, filtered water, bottled water, and hot water, to name a few.</p>
          <br />
          <div className="flex justify-center">
            <Image src="/blog/most-upvoted-category.png" alt="Most upvoted category" width={500} height={1000} />
          </div>
          <br />
          <p className="font-bold">5. The most requested brands are for fresh produce.</p>
          <p>365 by Whole Foods and Driscoll’s are in the lead. Funnily, frozen berries are another product I eat daily. I may be the modal Bay Area resident.</p>
          <br />
          <div className="flex justify-center">
            <Image src="/blog/most-upvoted-brand.png" alt="Most upvoted brand" width={500} height={250} />
          </div>
          <br />
          <p className="font-bold">6. We received a lot of requests for baby food.</p>
          <p>Both on the list and in DMs, people are asking us to test different brands and types of packaging for baby food. Similarly, a lot of research in the field studies the health effects of plastic-related chemicals on children.</p>
          <br />
          <div className="flex justify-center">
            <Image src="/blog/baby-food-votes.png" alt="Baby food votes" width={500} height={1000} />
          </div>
          <br />
          <p>As of me writing this, it has been less than 2 weeks since we launched plasticlist, but we already learned a lot. We plan to share more insights and interesting data in the future.</p>
          <br />
          <p>We also learned that many of the products above require different, sometimes unique, testing methods. We are talking to analytical chemists right now to assess how long it will take to develop testing methods for the different products on the list.</p>
          <br />
          <p>You can stay up to date with our findings by <a href="https://discord.gg/acagubnX" target="_blank" rel="noopener noreferrer" className="underline">joining our Discord</a> and voting on <a href="https://plasticlist.org" className="underline">plasticlist.org</a>.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}