"use client";

import React from "react";

export default function Contact() {
  return (
    <section className="wrapper py-24 flex flex-col items-center" id="contact">
      <h2 className="h2-bold text-center mb-10 flex items-center gap-3">
        <svg width={32} height={32} fill="none" viewBox="0 0 40 40">
          <rect
            x={6}
            y={10}
            width={28}
            height={20}
            rx={5}
            stroke="#635BFF"
            strokeWidth={4}
          />
          <polyline
            points="8,12 20,24 32,12"
            fill="none"
            stroke="#635BFF"
            strokeWidth={2}
          />
        </svg>
        Contact Us
      </h2>
      <form className="relative max-w-xl mx-auto bg-white rounded-2xl p-10 shadow-2xl border border-[#E0E0E0] w-full animate-fade-in space-y-6">
        <span className="absolute -z-10 left-1/2 top-0 w-40 h-40 rounded-full bg-[#635BFF]/10 blur-2xl opacity-80 -translate-x-1/2 -translate-y-1/2" />
        <div>
          <label className="block p-16-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="input-field w-full"
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
            className="input-field w-full"
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
            className="input-field w-full"
            id="message"
            name="message"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="submit-button bg-[#635BFF] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:bg-[#4D47D6] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#635BFF]/40"
        >
          Send Message
        </button>
      </form>
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
