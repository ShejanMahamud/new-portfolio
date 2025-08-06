import { cn } from "@/utils/utils";
import React from "react";
import ScrollFadeInWrapper from "./ScrollFadeInWrapper";

export default function CustomSection({
 children,
 className,
 id,
 title,
}: React.HTMLAttributes<HTMLDivElement>) {
 return (
  <section id={id} className={cn("mt-20 w-full z-10", className)}>
   <ScrollFadeInWrapper>
    <h2 className={`uppercase text-center font-display text-4xl mb-6`}>
     {title}
    </h2>
    {children}
   </ScrollFadeInWrapper>
  </section>
 );
}
