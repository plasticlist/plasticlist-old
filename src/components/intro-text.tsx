"use client"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export function IntroText() {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="space-y-4">
        <p>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline">Almost all</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p><a href="https://ehp.niehs.nih.gov/doi/10.1289/ehp.1306681" className="text-blue-500">The National Health and Nutrition Examination Survey (2001–2010)</a> found that at least 98% of participants had plastic chemicals called phthalates in their systems, with children having higher levels than adults.</p>
            </TooltipContent>
          </Tooltip>
          {" "}people in the US{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline">eat plastic</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p>Little plastic particles called microplastics and nanoplastics chip off or melt off of the bigger pieces of plastic, and they get everywhere.</p>
              <br />
              <p><a href="https://www.sciencedirect.com/science/article/pii/S2215153221001835" className="text-blue-500">Jadhav et al. (2021)</a> found that microplastics from food packaging contaminate food and beverages. People consume these microplastics daily through packaged food and drinks.</p>
            </TooltipContent>
          </Tooltip>
          {" "}every day. We also{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline">drink it</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p><a href="https://iris.who.int/bitstream/handle/10665/362049/9789240054608-eng.pdf?sequence=1#page=30" className="text-blue-500">WHO (2022)</a> summarized studies showing that both tap and bottled water contain nano- and microplastic particles.</p>
              <br />
              <p><a href="https://pubs.acs.org/doi/10.1021/acs.est.1c06768" className="text-blue-500">Zangmeister et al. (2022)</a> found that single-use plastics, such as nylon bags and beverage cups, release trillions of particles into water. These particles are small enough to be taken up by human cells.</p>
            </TooltipContent>
          </Tooltip>
          {" "}and{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline">inhale it</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1241713/" className="text-blue-500">Adibi et al. (2003)</a> found that pregnant women in New York City and Krakow, Poland, were significantly exposed to plastic chemicals called phthalates, with 100% detection in air and urine samples.</p>
              <br />
              <p><a href="https://pubmed.ncbi.nlm.nih.gov/14594359/" className="text-blue-500">Rudel et al. (2003)</a> found widespread presence of various chemicals in indoor air and dust across 120 homes. Some compounds exceeded health guidelines.</p>
            </TooltipContent>
          </Tooltip>
          .
        </p>
        <p>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline">Chemicals</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p>Plastics have thousands of chemicals added to them. <a href="https://www.sciencedirect.com/science/article/pii/S0160412023004981" className="text-blue-500">Seewoo et al. (2023)</a> documented 1202 additives.</p>
              <br />
              <p>Among them are plasticizers like phthalates, fame retardants, bisphenols, PFAS, and their substitutes.</p>
              <br />
              <p>For some of these chemicals, we know they are harmful. For many others, no one has checked yet.</p>
            </TooltipContent>
          </Tooltip>
          {" "}added to plastic end up inside us and likely{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline">make us sick</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p><a href="https://www.endocrine.org/-/media/endosociety/files/advocacy-and-outreach/important-documents/introduction-to-endocrine-disrupting-chemicals.pdf#page=22" className="text-blue-500">The Endocrine Society (2014)</a> summarized studies showing that plastic chemicals are linked to neurological and behavioral disorders, obesity, metabolic dysfunction, reproductive disorders, and hormone-sensitive cancers.</p>
            </TooltipContent>
          </Tooltip>
          . This may have{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline">society-level effects</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p><a href="https://pubmed.ncbi.nlm.nih.gov/17003688/" className="text-blue-500">Hauser et al. (2006)</a> found that a plastic chemical may be altering semen quality in men. Concentrations of the chemical were associated with decreased sperm concentration and motility.</p>
            </TooltipContent>
          </Tooltip>
          .
        </p>
        <p>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline">Children</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p><a href="https://pubmed.ncbi.nlm.nih.gov/14762970/" className="text-blue-500">Koch et al. (2004)</a> found that nursery school children have twice the internal exposure to a plastic chemical called DEHP compared to their parents and teachers.</p>
              <br />
              <p><a href="https://sproutsanfrancisco.com/get-educated/test-banned-dehp-phthalates/" className="text-blue-500">Sprout San Francisco (2018)</a> found that all their children had DEHP in their systems, with higher levels in 6- and 8-year-olds compared to 12-year-old.</p>
            </TooltipContent>
          </Tooltip>
          {" "}and{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline">infants</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p><a href="https://pubmed.ncbi.nlm.nih.gov/16466535/" className="text-blue-500">Koch et al. (2006)</a> found that premature newborns in Germany had DEHP exposure levels up to 100 times above safety limits, primarily due to intensive medical care involving DEHP-containing devices.</p>
            </TooltipContent>
          </Tooltip>
          {" "}may have the most chemicals in their bodies.
        </p>
        <p>
          Nat Friedman is <a href="https://twitter.com/natfriedman/status/1789287484515659896" className="underline">running tests</a> to find plastic chemicals in food, drinks, and household items.
        </p>
        <p>
          <b>PlasticList</b> will build a searchable database of Nat’s results.
        </p>
        <ul className="list-disc pl-5">
          <li>Get real-time updates as soon as test results are published.</li>
          <li>Search products by name, brand, or category.</li>
          <li>If a product has chemicals, we will explain what this means for you.</li>
        </ul>
        <p>
          Leave your email to be notified when we add test results.
        </p>
      </div>
    </TooltipProvider>
  )
}