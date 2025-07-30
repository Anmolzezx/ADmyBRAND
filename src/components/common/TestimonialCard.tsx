import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TestimonialCardProps = {
  name: string;
  company?: string;
  quote: string;
  avatar?: string;
  rating?: number; // Optional: for stars
};

const placeholderAvatar =
  "https://ui-avatars.com/api/?name=User&background=ececec&color=888&size=128&rounded=true";

export default function TestimonialCard({
  name,
  company,
  quote,
  avatar,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="rounded-3xl bg-gradient-to-br from-[#fff7f0] via-[#f3e7e9] to-[#f6f5ff] p-8 flex flex-col items-center text-center border border-[#f4791f]/30 shadow-2xl hover:shadow-[0_12px_48px_0_rgba(244,121,31,0.18),0_8px_32px_0_rgba(99,91,255,0.10)] transition-all duration-300"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.4, 2, 0.6, 1] }}
    >
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#f4791f]/30 shadow bg-white flex items-center justify-center">
          <Image
            src={avatar || placeholderAvatar}
            alt={name}
            width={112}
            height={112}
            className="object-cover w-28 h-28"
          />
        </div>
        {/* Rating stars */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-[#f4791f]" : "text-[#e0e0e0]"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <polygon points="10,2 12.59,7.36 18.51,8.09 14,12.26 15.18,18.02 10,15.1 4.82,18.02 6,12.26 1.49,8.09 7.41,7.36" />
            </svg>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-2 mb-4">
        <span className="font-bold text-lg text-[#2C2560]">{name}</span>
        {company && (
          <span className="text-sm text-[#6D6D6D] font-medium">{company}</span>
        )}
      </div>
      <div className="relative w-full flex flex-col items-center">
        {/* Quotes icon */}
        <svg
          className="absolute -top-7 left-1/2 -translate-x-1/2 text-[#f4791f]/30"
          width={36}
          height={36}
          fill="none"
          viewBox="0 0 36 36"
        >
          <path
            d="M10 14c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.21-1.2 4.15-3 5.19V24h-6v-4.81C11.2 18.15 10 16.21 10 14z"
            fill="currentColor"
            opacity="0.15"
          />
        </svg>
        <blockquote className="italic text-xl md:text-2xl text-[#2C2560] font-medium leading-relaxed z-10 px-2 pt-6 pb-2">
          {quote}
        </blockquote>
      </div>
    </motion.div>
  );
}
