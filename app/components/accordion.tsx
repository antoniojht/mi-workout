"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function AccordionWrapper(content: AccordionProps) {
  return (
    <Accordion selectionMode="multiple">
      <AccordionItem key="1" aria-label="Accordion 1" title={content.title}>
        {content.children}
      </AccordionItem>
    </Accordion>
  );
}
