"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow">
          <button
            className="w-full text-left p-4 h3-bold flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            {item.question}
            <span>{openIndex === idx ? "−" : "+"}</span>
          </button>
          {openIndex === idx && (
            <div className="p-4 pt-0 p-16-regular">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
