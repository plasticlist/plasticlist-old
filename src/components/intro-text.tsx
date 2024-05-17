"use client"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SubscribeEmailForm } from "@/components/subscribe-email-form"

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
        <div className="border bg-secondary p-4 rounded-md flex flex-col gap-4">
          <p>
            Nat Friedman is <a href="https://twitter.com/natfriedman/status/1789287484515659896" className="underline">running tests</a> to find plastic chemicals in food, drinks, and household items.
          </p>
          <p><b>PlasticList</b> is an interactive UI for Nat's tests.</p>
          <p>To start, we are launching a database of all popular food, drink, and household products in CA, so you can upvote items to test first.</p>
          <ul className="list-disc pl-5">
            <li><b>Today:</b> add or upvote things you want tested for chemicals.</li>
            <li><b>Next week:</b> access interactive research summaries.</li>
            <li><b>Soon:</b> analyze Nat's findings, get a template to petition your rep, find links to research grants, and more.</li>
          </ul>
          <SubscribeEmailForm onSubmitSuccess={onEmailSubmit} />
        </div>
        <p>
          As of today, we are not affiliated with Nat. If you know Nat and would like to put us in touch, you can forward this{" "}
          <OverlayTrigger
            content={
              <p>Hey Nat,<br /><br /><a href="https://plasticlist.app" className="text-blue-500">plasticlist.app</a> is building a database of your tests for plastic. They want to work with you.<br /><br />If interesting, send them an email at <a href="mailto:team@plasticlist.app" className="text-blue-500">team@plasticlist.app</a>.</p>
            }
          >
            short blurb
          </OverlayTrigger>
          .
        </p>
      </div>
    </TooltipProvider>
  )
}