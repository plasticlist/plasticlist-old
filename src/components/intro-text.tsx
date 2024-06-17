"use client"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SubscribeEmailForm } from "@/components/subscribe-email-form"
import { ResearchSummary } from "@/components/research-summary"

const OverlayTrigger = ({ children, content }: { children: React.ReactNode, content: React.ReactNode }) => (
  <>
    <Popover>
      <PopoverTrigger asChild>
        <span className="sm:hidden underline">{children}</span>
      </PopoverTrigger>
      <PopoverContent className="w-80">{content}</PopoverContent>
    </Popover>
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="hidden sm:inline underline">{children}</span>
      </TooltipTrigger>
      <TooltipContent className="max-w-sm">{content}</TooltipContent>
    </Tooltip>
  </>
)

type IntroTextProps = {
  onEmailSubmit: (email: string) => void;
};

export function IntroText({ onEmailSubmit }: IntroTextProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="space-y-4">
        <ResearchSummary />
        <div className="border bg-secondary p-4 rounded-md flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p><b>PlasticList</b> is <a href="https://twitter.com/natfriedman/status/1789287484515659896" className="underline">running tests</a> to find out which endocrine-disrupting chemicals leach into our food and drinks from plastic.</p>
            <p>To start, we set two goals:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Test the food popular among the Bay Area tech community for endocrine-disrupting chemicals related to plastic.</li>
              <li>Publish everything we learn along the way, so that others can evaluate, replicate, and build on our work.</li>
            </ol>
            <p>You can follow our progress by reading the blog posts below and subscribing.</p>
          </div>
          <SubscribeEmailForm onSubmitSuccess={onEmailSubmit} />
        </div>
      </div>
    </TooltipProvider>
  )
}