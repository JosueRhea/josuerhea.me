"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { SectionHeading } from "./section-heading";

export function Call() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section>
      <SectionHeading>Contact</SectionHeading>
      <p className="text-base leading-relaxed text-foreground/90">
        Want to talk? Book a quick call, or email me at{" "}
        <a
          href="mailto:hi@josuerhea.me"
          className="font-medium underline underline-offset-4 transition-colors hover:text-foreground"
        >
          hi@josuerhea.me
        </a>
        .
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="mt-5">
            Schedule a call
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Schedule a meeting</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Cal
              namespace="15min"
              calLink="josuerhea/15min"
              style={{ width: "100%", height: "600px", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
