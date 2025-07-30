// components/sections/Testimonials.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import TestimonialCard from "../common/TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../../../constants";

const testimonials = [
  {
    name: "Jane Doe",
    company: "Acme Corp",
    quote: "ADmyBRAND AI Suite transformed our marketing workflow and boosted our ROI.",
    avatar: images.avatar1,
  },
  {
    name: "John Smith",
    company: "Beta Inc",
    quote: "The analytics and automation features are top-notch. Highly recommended!",
    avatar: images.avatar2,
  },
  {
    name: "Sara Lee",
    company: "Gamma LLC",
    quote: "Seamless integration and great support. Our team loves it.",
    avatar: images.avatar3,
  },
  {
    name: "Alex Kim",
    company: "Delta Media",
    quote: "The glassmorphic UI is beautiful and the features are powerful.",
    avatar: images.avatar4,
  },
  {
    name: "Priya Patel",
    company: "Omega Solutions",
    quote: "ADmyBRAND made campaign management effortless for our team.",
    avatar: images.avatar5,
  },
];

function useResponsiveSlides() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return slidesToShow;
}

export default function Testimonials() {
  const slidesToShow = useResponsiveSlides();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const total = testimonials.length;
  const groups = Math.ceil(total / slidesToShow);
  const canNavigate = total > slidesToShow;

  const getVisible = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(testimonials[(current + i) % total]);
    }
    return visible;
  };

  useEffect(() => {
    if (paused || !canNavigate) {
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + slidesToShow) % total);
    }, 5000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, paused, slidesToShow, total]);

  const goLeft = () => {
    setPaused(true);
    setCurrent((prev) => (prev - slidesToShow + total) % total);
  };

  const goRight = () => {
    setPaused(true);
    setCurrent((prev) => (prev + slidesToShow) % total);
  };

  return (
    <section
      className="wrapper py-24 flex flex-col items-center relative overflow-x-clip rounded-3xl shadow-2xl bg-gradient-to-br from-[#fff7f0] via-[#ffe0c1] to-[#f3e7e9]"
      id="testimonials"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight bg-gradient-to-r from-[#f4791f] to-[#ffbc5b] bg-clip-text text-transparent">
        What Our Customers Say
      </h2>
      <p className="text-lg md:text-xl text-center mb-10 font-semibold bg-gradient-to-r from-[#f4791f] to-[#ffbc5b] bg-clip-text text-transparent">
        Real stories from real users. See how we help brands grow.
      </p>

      <div className="relative w-full flex justify-center items-center px-4 md:px-8">
        {canNavigate && (
          <button
            onClick={goLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 border border-[#f4791f] shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4791f]"
            aria-label="Previous"
          >
            <ChevronLeft className="text-[#f4791f] w-6 h-6" />
          </button>
        )}

        <div
          className="flex max-w-6xl w-full justify-center items-center gap-6 md:gap-10 mr-8 ml-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current + "-" + slidesToShow}
              className="flex justify-center items-stretch w-full gap-6 md:gap-10"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.4, 2, 0.6, 1] }}
            >
              {getVisible().map((t, i) => (
                <div
                  key={t.name + t.company}
                  className="w-full sm:w-96 flex-shrink-0"
                >
                  <TestimonialCard {...t} avatar={t.avatar.src} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {canNavigate && (
          <button
            onClick={goRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 border border-[#f4791f] shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4791f]"
            aria-label="Next"
          >
            <ChevronRight className="text-[#f4791f] w-6 h-6" />
          </button>
        )}
      </div>

      <div className="flex gap-2 mt-8 justify-center">
        {Array.from({ length: groups }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent((idx * slidesToShow) % total)}
            aria-label={`Go to slide group ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4791f] ${
              Math.floor(current / slidesToShow) === idx
                ? "bg-[#f4791f] border-[#f4791f] scale-110"
                : "bg-[#fff5ec] border-[#f4791f] opacity-60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
