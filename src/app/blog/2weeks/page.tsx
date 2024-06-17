import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function Blog2WeeksPage() {
  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <div className="flex flex-col gap-8">
        <Header />
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-bold">PlasticList status report</h1>
          <p className="text-gray-500">Published: 2024-06-15</p>
          <p>In recent years there has been mounting evidence that plastic-related chemicals in our environment and particularly in our food are making their way into our bodies, and could be having health effects that we can see at an individual and maybe even a population level.</p>
          <p>A few recent pieces caught our attention:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><a href="https://annalsofglobalhealth.org/articles/10.5334/aogh.4056" target="_blank" rel="noopener noreferrer" className="underline">The Minderoo-Monaco Commission on Plastics and Human Health</a></li>
            <li><a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0114003" target="_blank" rel="noopener noreferrer" className="underline">Persistent Associations between Maternal Prenatal Exposure to Phthalates on Child IQ at Age 7 Years</a></li>
            <li><a href="https://www.amazon.com/Count-Down-Threatening-Reproductive-Development/dp/1982113677" target="_blank" rel="noopener noreferrer" className="underline">Count Down: How Our Modern World Is Threatening Sperm Counts, Altering Male and Female Reproductive Development, and Imperiling the Future of the Human Race</a></li>
            <li><a href="https://www.amazon.com/dp/1582437025?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank" rel="noopener noreferrer" className="underline">Slow Death by Rubber Duck: The Secret Danger of Everyday Things</a></li>
            <li><a href="https://www.amazon.com/Obesogen-Effect-Exercise-Struggle-Weight/dp/1549168983" target="_blank" rel="noopener noreferrer" className="underline">The Obesogen Effect: Why We Eat Less and Exercise More but Still Struggle to Lose Weight</a></li>
            <li><a href="https://www.consumerreports.org/health/food-contaminants/the-plastic-chemicals-hiding-in-your-food-a7358224781/" target="_blank" rel="noopener noreferrer" className="underline">Consumer Reports: The Plastic Chemicals Hiding in Your Food</a></li>
          </ul>
          <p>The Consumer Reports article in particular made us curious about the foods that we ourselves eat every day and whether they may contain endocrine-disrupting chemicals. Talking to our tech friends in the Bay Area, we found that many of them are also interested in this.</p>
          <p>So a couple of weeks ago, we launched PlasticList to pursue our own amateur investigation. Here's how Nat announced the project on X:</p>
          <div className="flex justify-center">
            <Image src="/blog/nat-tweet.png" alt="Nat's tweet" width={500} height={150} />
          </div>
          <p>Since then, three million people have seen Nat's tweets, and many of them have commented asking to test products they were personally interested in.</p>
          <div className="flex justify-center">
            <Image src="/blog/karpathy-tweet.png" alt="Comment under Nat's tweet" width={500} height={150} />
          </div>
          <p>It seems that there is wide interest in understanding what's in the food we eat! So we formed a team and got to work.</p>
          <div className="flex flex-col items-center">
            <Image src="/blog/desks.jpg" alt="PlasticList team assembling our desks in late May" width={500} height={250} />
            <p className="text-sm text-gray-500 mt-2">PlasticList team assembling our desks in late May</p>
          </div>
          <p className="font-bold">Our goals</p>
          <p>We decided to make our project deliberately narrow in scope, and set two goals for ourselves:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Test the food popular among the Bay Area tech community for endocrine-disrupting chemicals related to plastic.</li>
            <li>Publish everything we learn along the way, so that others can evaluate, replicate, and build on our work.</li>
          </ol>
          <p>Maybe in the future we will test more foods, but for our first project, limiting our tests to the foods that this one community cares about is a deliberately parochial strategy. This way, at least we know that our results will be of interest to one group of people. It's also easier for us to source samples if we can just buy them locally.</p>
          <p>By transparently sharing our methodology and the things we learn, we hope to make it much easier for anyone to replicate what we do, with the foods that matter to them.</p>
          <p>Note that our project is not focused on microplastics, which are little particles of plastic. Instead, we are testing for endocrine-disrupting plastic-related chemicals that can leach into foods at molecule scale during the food production process. For example, it is believed that phthalates can leach into processed foods when they pass through flexible plastic tubing during manufacturing (and especially if the foods are warm at the time).</p>
          <p className="font-bold">What foods should we test?</p>
          <p>We launched a website, plasticlist.org, on May 21st so that people can vote on which foods we should test. Over the last two weeks, 22,000 people visited PlasticList, and voted more than 7,500 times for over 700 unique products.</p>
          <div className="flex flex-col items-center">
            <Image src="/blog/votes-ui.png" alt="Votes UI" width={800} height={600} />
            <p className="text-sm text-gray-500 mt-2">PlasticList voting interface</p>
          </div>
          <p>These votes, along with the comments on Nat's original tweet, helped us curate a list of products Bay Area techies care about the most. For example, water left in the heat was the most popular request, followed by Chobani Greek yogurt and Starbucks coffee:</p>
          <div className="flex justify-center">
            <Image src="/blog/most-upvoted-product.png" alt="Most upvoted product" width={800} height={400} />
          </div>
          <p className="font-bold">Preparing to test</p>
          <p>It turns out that testing foods for chemicals is not as easy as it might sound. There is no machine that you can put an arbitrary food into and have it report the level of an arbitrary chemical.</p>
          <p>Different foods have different chemical compositions and, most of the time, labs need to develop a new testing method for each food type. For example, testing water and juice requires two different methods, and so does testing nonfat and whole milk yogurt.</p>
          <p>Method development involves designing a process to isolate the target <a href="https://en.wikipedia.org/wiki/Analyte" target="_blank" rel="noopener noreferrer" className="underline">analyte</a> from the <a href="https://en.wikipedia.org/wiki/Matrix_(chemical_analysis)" target="_blank" rel="noopener noreferrer" className="underline">matrix</a>. This is usually not something you can just look up in a book; in practice, it requires careful experimentation and validation.</p>
          <p>We worked with an analytical chemist to group 100 top-voted foods based on composition. For example, if we wanted to test beverages, we grouped them into matrix categories like "water," "milk," and so on. We ended up with these categories:</p>
          <ol className="list-decimal pl-5">
            <li>Water</li>
            <li>Soda and non-alcoholic drinks</li>
            <li>Coffee</li>
            <li>Yogurt</li>
            <li>Milk</li>
            <li>Ice cream</li>
            <li>Plant-based baby food</li>
            <li>Strawberries (representative fruit)</li>
            <li>Broccoli (representative vegetable)</li>
            <li>Poultry</li>
            <li>Red meat</li>
            <li>Chocolate</li>
            <li>Bread</li>
            <li>Tablets</li>
            <li>Complex foods (each in a category of their own)</li>
          </ol>
          <p>In selecting products, our aim has been to test the foods that Bay Area techies eat – things like Blue Bottle coffee, Fairlife, Salt & Straw ice cream, La Croix, Tartine sourdough bread, and Kind bars.</p>
          <p>Within the matrices, we are going to try to explore a few splits:</p>
          <ul className="list-disc pl-5">
            <li>Do water filters filter out chemicals or add chemicals?</li>
            <li>Do plastic takeout containers as delivered via DoorDash or UberEats increase chemical levels in foods vs the same food eaten in a restaurant?</li>
            <li>Do different flavors of foods have different levels of chemicals, as production processes may differ slightly?</li>
            <li>Does organic produce have different levels of chemicals than non-organic produce?</li>
            <li>Are those super soft tea bags worse than the traditional paper bags?</li>
            <li>Does exposing bottled water to heat or sunlight increase chemical load?</li>
            <li>Do zero sugar sodas contain different levels of chemicals from regular sugary sodas?</li>
            <li>Do different flavors of Fairlife have different compositions of EDCs?</li>
          </ul>
          <p>We have identified two potential partner labs and are working with them to prepare and sequence the tests. Some matrices will be easier to test than others, and so we expect to receive the results from those first. Our plan is to publish the results as we get them.</p>
          <p>In practice, the available matrices may be limited by our budget and the capabilities of the available labs.</p>
          <p>We are amateurs and our study will be relatively small, so we don’t expect our data to be statistically significant or to definitively answer any questions. It should be interesting, though! We’ll share more information on the specific tests we are running when we have it.</p>
          <p className="font-bold">Choosing analytes</p>
          <p>The <a href="https://plastchem-project.org/" target="_blank" rel="noopener noreferrer" className="underline">PlastChem database</a> lists more than 20,000 plastic-related chemicals with varying levels of human exposure and health hazards. We worked with food safety experts to filter these down to 16 chemicals that 1) Americans are widely exposed to and 2) have well-researched links to adverse health effects in humans.</p>
          <p>From there, we worked with an analytical chemist to choose the most relevant chemicals that we could realistically test this year. We narrowed it down to 17 chemicals. Some of them are on the <a href="https://www.p65warnings.ca.gov/" target="_blank" rel="noopener noreferrer" className="underline">Proposition 65</a> list, and we linked to their fact sheets so you can read more about their effects on health:</p>
          <ol className="list-decimal pl-5">
            <li><a href="https://www.p65warnings.ca.gov/fact-sheets/di-n-butyl-phthalate-dbp" target="_blank" rel="noopener noreferrer" className="underline">Di-n-butyl phthalate (DBP)</a></li>
            <li><a href="https://www.p65warnings.ca.gov/fact-sheets/di2-ethylhexylphthalate-dehp" target="_blank" rel="noopener noreferrer" className="underline">Di-2-ethylhexyl phthalate (DEHP)</a></li>
            <li><a href="https://www.p65warnings.ca.gov/fact-sheets/diisononyl-phthalate-dinp" target="_blank" rel="noopener noreferrer" className="underline">Di-isononyl phthalate (DiNP)</a></li>
            <li><a href="https://www.p65warnings.ca.gov/fact-sheets/butyl-benzyl-phthalate-bbp" target="_blank" rel="noopener noreferrer" className="underline">Benzylbutyl phthalate (BBP)</a></li>
            <li><a href="https://www.p65warnings.ca.gov/fact-sheets/di-isodecyl-phthalate-didp" target="_blank" rel="noopener noreferrer" className="underline">Di-isodecyl phthalate (DiDP)</a></li>
            <li><a href="https://www.p65warnings.ca.gov/fact-sheets/di-n-hexyl-phthalate-dnhp" target="_blank" rel="noopener noreferrer" className="underline">Di-n-hexyl phthalate (DnHP)</a></li>
            <li>Diethyl phthalate (DEP)</li>
            <li>Diisobutyl phthalate (DiBP)</li>
            <li>Dimethyl phthalate (DMP)</li>
            <li>Di-n-octyl phthalate (DnOP)</li>
            <li>Di-2-ethylhexyl terephthalate (DEHTP)</li>
            <li>Adipate (DEHA)</li>
            <li>Diisodecyl adipate (DIDA)</li>
            <li>Di-(isononyl)-cyclohexane-1,2-dicarboxylate (DINCH)</li>
            <li><a href="https://www.p65warnings.ca.gov/fact-sheets/bisphenol-bpa" target="_blank" rel="noopener noreferrer" className="underline">Bisphenol A</a></li>
            <li><a href="https://oehha.ca.gov/proposition-65/crnr/bisphenol-s-bps-added-proposition-65-list-following-2023-meeting-developmental" target="_blank" rel="noopener noreferrer" className="underline">Bisphenol S</a></li>
            <li>Bisphenol F</li>
          </ol>
          <p>Just like with the foods, we are still finalizing our exact list of chemicals to test for. The available analytes may be limited by our budget and the capabilities of the available labs.</p>
          <p className="font-bold">What's next</p>
          <p>We are now working with our analytical chemist to select a lab and set of methodologies for the tests that we will run. Ideally we will have a lab identified this week! Then, we’ll finalize our food and chemicals list, prepare our samples, and send them off to be tested. Different labs have different turnaround times, and they can be distressingly long. For our first round of tests, we will prioritize quality over latency.</p>
          <p>Stay tuned!</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}