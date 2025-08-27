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

export function Call() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="mx-auto w-full flex flex-col justify-center items-center max-w-lg mt-10">
      <h3 className="text-2xl font-semibold tracking-tight">Contact me</h3>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="mt-2">
            Schedule a call with me
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Schedule a Meeting</DialogTitle>
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
      <p className="text-sm text-muted-foreground mt-4">
        or send me an email to{" "}
        <a href="mailto:hi@josuerhea.me" className="underline font-semibold">
          hi@josuerhea.me
        </a>
      </p>
    </section>
  );
}
