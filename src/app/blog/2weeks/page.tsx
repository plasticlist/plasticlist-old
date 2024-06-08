import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function Blog2WeeksPage() {
  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <div className="flex flex-col gap-8">
        <Header />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">PlasticList: 2 weeks in</h1>
            <p className="text-gray-500">How we started, where we are today, and an open call for labs</p>
          </div>
          <br />
          <div className="border bg-secondary p-4 rounded-md flex flex-col gap-2">
            <p className="font-bold">Open call for labs</p>
            <p>To run the tests, we are looking to partner with a lab. We are looking for labs that have experience testing any of the matrices and analytes mentioned in this post.</p>
            <p>If you work at or know of such a lab, please reach out to us at <a href="mailto:team@plasticlist.org" className="underline">team@plasticlist.org</a> or <a href="https://discord.gg/XqQEZAqc" target="_blank" rel="noopener noreferrer" className="underline">on Discord.</a></p>
          </div>
          <br />
          <p className="font-bold">PlasticList origins</p>
          <p>Plasticlist started with Nat Friedman's tweet about testing foods in California for endocrine-disrupting chemicals that leach from plastics:</p>
          <br />
          <div className="flex justify-center">
            <Image src="/blog/nat-tweet.png" alt="Comment under Nat's tweet" width={500} height={150} />
          </div>
          <br />
          <p>Since then, three million people have seen Nat's tweets from all around the globe. Many of them have commented asking to test products they were personally interested in.</p>
          <br />
          <p className="font-bold">Open call for products</p>
          <p>On May 21, we launched <a href="https://plasticlist.org" className="underline">plasticlist.org</a> to collect suggestions from a wider audience. Now users could suggest foods to test and vote for products suggested by others.</p>
          <p>Over the last two weeks, 22,000 people from 137 countries visited plasticlist 540,000 times. They voted 7,533 times for over 700 unique products.</p>
          <br />
          <div className="flex flex-col items-center">
            <Image src="/blog/map.jpg" alt="World map of plasticlist users" width={800} height={400} />
            <p className="text-sm text-gray-500 mt-2">World map of plasticlist users</p>
          </div>
          <br />
          <p>These votes, along with the comments on Nat's original tweet, helped us curate a list of products people cared about the most. For example, Chobani Greek yogurt was the most popular product by far:</p>
          <br />
          <div className="flex justify-center">
            <Image src="/blog/most-upvoted-product.png" alt="Most upvoted product" width={800} height={400} />
          </div>
          <br />
          <p>With these insights in hand, we could define a more specific scope for the project.</p>
          <br />
          <p className="font-bold">Grouping products by matrix</p>
          <p>We worked with an analytical chemist to group the 100 most popular products based on composition, or <a href="https://en.wikipedia.org/wiki/Matrix_(chemical_analysis)" target="_blank" rel="noopener noreferrer" className="underline">matrix</a>. For example, if we wanted to test beverages, we grouped them into matrices like "water-based," "dairy-based," and so on.</p>
          <p>From our initial 100 most popular products, we ended up with 12 matrices:</p>
          <ol className="list-decimal pl-5">
            <li>Water</li>
            <li>Plant-based baby food</li>
            <li>Broccoli</li>
            <li>Strawberry</li>
            <li>Yogurt</li>
            <li>Milk</li>
            <li>Poultry</li>
            <li>Soda and non-alcoholic beverage</li>
            <li>Coffee</li>
            <li>Spreads</li>
            <li>Protein shake</li>
            <li>Burger</li>
          </ol>
          <br />
          <p>For each matrix, we selected several product samples based on the number of votes. We picked samples from different brands, processing types, and packaging materials.</p>
          <br />
          <p className="font-bold">Choosing analytes</p>
          <p>The <a href="https://plastchem-project.org/" target="_blank" rel="noopener noreferrer" className="underline">PlastChem database</a> lists more than 20,000 plastic-related chemicals with varying levels of human exposure and health hazards. We worked with food safety experts to filter these down to 16 chemicals that 1) Americans are widely exposed to and 2) have well-researched links to adverse health effects in humans.</p>
          <p>From there, we worked with an analytical chemist to choose the chemicals that we could realistically test in a summer. We narrowed it down to this list:</p>
          <ol className="list-decimal pl-5">
            <li>Di-n-butyl phthalate (DBP)</li>
            <li>Diethyl phthalate (DEP)</li>
            <li>Di-2-ethylhexyl phthalate (DEHP)</li>
            <li>Adipate (DEHA)</li>
            <li>Di-isononyl phthalate (DiNP)</li>
            <li>Diisodecyl adipate (DIDA)</li>
            <li>Benzylbutyl phthalate (BzBP)</li>
            <li>Diisobutyl phthalate (DiBP)</li>
            <li>Dicyclohexyl phthalate (DCHP)</li>
            <li>Dimethyl phthalate (DMP)</li>
            <li>Di-n-octyl phthalate (DnOP)</li>
            <li>Di-(isononyl)-cyclohexane-1,2-dicarboxylate (DINCH)</li>
            <li>Di-2-ethylhexyl terephthalate (DEHTP)</li>
            <li>Bisphenol A</li>
            <li>Bisphenol F</li>
            <li>Bisphenol S</li>
          </ol>
          <br />
          <div className="border bg-secondary p-4 rounded-md flex flex-col gap-2">
            <p className="font-bold">Open call for labs</p>
            <p>To run these tests, we are looking to partner with a lab. We are looking for labs that have experience testing any of the matrices and analytes mentioned in this post.</p>
            <p>If you work at or know of such a lab, please reach out to us at <a href="mailto:team@plasticlist.org" className="underline">team@plasticlist.org</a> or <a href="https://discord.gg/XqQEZAqc" target="_blank" rel="noopener noreferrer" className="underline">on Discord.</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </main >
  );
}