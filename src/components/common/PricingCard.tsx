import React from "react";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
};

export default function PricingCard({ title, price, features, popular }: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow p-8 flex flex-col items-center text-center border-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative group",
        popular ? "border-[#635BFF]" : "border-[#E0E0E0]"
      )}
      style={{ minHeight: 440 }}
    >
      {/* ...icon and badge handled in parent... */}
      <h3 className="h3-bold mb-2 mt-2" style={{ color: "#2C2560" }}>{title}</h3>
      <div className="p-24-bold mb-4" style={{ color: "#2C2560" }}>{price}</div>
      <ul className="mb-8 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="p-16-regular flex items-center gap-2" style={{ color: "#6D6D6D" }}>
            <svg width={18} height={18} fill="none" viewBox="0 0 20 20">
              <circle cx={10} cy={10} r={9} stroke="#635BFF" strokeWidth={2} fill="#EDEBFF" />
              <path d="M7 10l2 2 4-4" stroke="#635BFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "w-full py-2 px-4 rounded-md font-semibold transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg",
          popular
            ? "bg-[#635BFF] text-white hover:bg-[#4D47D6]"
            : "bg-[#E5E5F8] text-[#2C2560] hover:bg-[#DCD9F9]"
        )}
      >
        Choose Plan
      </button>
      <style jsx>{`
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
