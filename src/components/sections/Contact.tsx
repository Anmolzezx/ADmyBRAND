"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      className="wrapper py-24 flex flex-col items-center w-full"
      id="contact"
    >
      {/* Animate heading like hero section */}
      <motion.h2
        className="h2-bold text-center mb-10 flex items-center gap-3 font-extrabold text-4xl md:text-5xl"
        style={{
          background: "linear-gradient(90deg, #f4791f 0%, #ffbc5b 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 12px rgba(244,121,31,0.15)",
          fontWeight: 800,
        }}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: [0.4, 2, 0.6, 1] }}
      >
        <svg
          width={56}
          height={56}
          fill="none"
          viewBox="0 0 56 56"
          style={{ flexShrink: 0 }}
        >
          <rect
            x={10}
            y={16}
            width={36}
            height={24}
            rx={7}
            stroke="#f4791f"
            strokeWidth={5}
          />
          <polyline
            points="13,19 28,34 43,19"
            fill="none"
            stroke="#f4791f"
            strokeWidth={3}
          />
        </svg>
        Contact Us
      </motion.h2>
      {/* Contact Info Box */}
      <motion.form
        className="relative max-w-xl mx-auto rounded-2xl p-10 w-full space-y-6"
        style={{
          border: "3px solid #f4791f",
          boxShadow:
            "0 12px 48px 0 rgba(244,121,31,0.18), 0 4px 24px 0 rgba(99,91,255,0.10)",
        }}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 2, 0.6, 1] }}
      >
        <span className="absolute -z-10 left-1/2 top-0 w-40 h-40 rounded-full bg-[#f4791f]/10 blur-2xl opacity-80 -translate-x-1/2 -translate-y-1/2" />
        <div>
          <label className="block p-16-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="input-field w-full border border-[#f4791f] focus:border-[#ffbc5b] rounded-lg shadow-md focus:shadow-lg"
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block p-16-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="input-field w-full border border-[#f4791f] focus:border-[#ffbc5b] rounded-lg shadow-md focus:shadow-lg"
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block p-16-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="input-field w-full border border-[#f4791f] focus:border-[#ffbc5b] rounded-lg shadow-md focus:shadow-lg"
            id="message"
            name="message"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="submit-button text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2"
          style={{
            background:
              "linear-gradient(90deg, #f4791f 0%, #ffbc5b 100%)",
            boxShadow: "0 4px 24px 0 rgba(244,121,31,0.18)",
          }}
        >
          Send Message
        </button>
      </motion.form>
      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4, 2, 0.6, 1) both;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}