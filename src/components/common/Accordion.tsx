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
    <div className={cn("space-y-5", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "rounded-xl shadow transition-all duration-300 border-2",
            openIndex === idx
              ? "border-transparent bg-gradient-to-br from-[#fff7f0] via-[#ffe0c1] to-[#f3e7e9] p-[2px]"
              : "border-[#f4791f] bg-white"
          )}
        >
          <div className={openIndex === idx ? "rounded-xl bg-white" : ""}>
            <button
              className={cn(
                "w-full text-left px-6 py-5 h3-bold flex justify-between items-center rounded-xl transition-colors duration-200",
                openIndex === idx
                  ? "text-[#f4791f] bg-white"
                  : "text-[#2C2560] hover:bg-[#fff7f0]"
              )}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "ml-4 text-2xl font-bold transition-transform duration-300",
                  openIndex === idx ? "rotate-180 text-[#f4791f]" : "rotate-0 text-[#b0aee0]"
                )}
                aria-hidden="true"
              >
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-5 pt-0 p-16-regular text-[#2C2560] transition-all duration-300">
                {item.answer}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
