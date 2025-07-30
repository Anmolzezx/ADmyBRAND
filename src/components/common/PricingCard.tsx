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
      style={{ minHeight: 400 }}
    >
      {popular && (
        <span className="mb-2 px-3 py-1 bg-[#EDEBFF] text-[#635BFF] rounded-full text-xs font-semibold animate-pulse absolute -top-6 left-1/2 -translate-x-1/2 shadow-lg z-10">
          Most Popular
        </span>
      )}
      <h3 className="h3-bold mb-2" style={{ color: "#2C2560" }}>{title}</h3>
      <div className="p-24-bold mb-4" style={{ color: "#2C2560" }}>{price}</div>
      <ul className="mb-6 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="p-16-regular" style={{ color: "#6D6D6D" }}>{f}</li>
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
