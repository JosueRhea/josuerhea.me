"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/app/components/ui/contribution-graph";
import { SectionHeading } from "./section-heading";

export function Activity() {
  return (
    <section>
      <SectionHeading>Activity</SectionHeading>
      <div className="overflow-x-auto">
        <ContributionGraph username="JosueRhea">
          <ContributionGraphCalendar>
            {({ activity, dayIndex, weekIndex }) => (
              <ContributionGraphBlock
                activity={activity}
                dayIndex={dayIndex}
                weekIndex={weekIndex}
              />
            )}
          </ContributionGraphCalendar>
          <ContributionGraphFooter>
            <ContributionGraphTotalCount />
            <ContributionGraphLegend />
          </ContributionGraphFooter>
        </ContributionGraph>
      </div>
    </section>
  );
}
