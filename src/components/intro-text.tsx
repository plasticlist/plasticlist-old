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
            <p><b>Plasticlist</b> is <a href="https://twitter.com/natfriedman/status/1789287484515659896" className="underline">running tests</a> to find out how much plastic chemicals are in the food, drinks, and household items we consume.</p>
            <p>Go ahead and tell us what products we should test. It may be something you eat regularly or use in your home. Simply vote or add an item below.</p>
          </div>
          <SubscribeEmailForm onSubmitSuccess={onEmailSubmit} />
        </div>
      </div>
    </TooltipProvider>
  )
}