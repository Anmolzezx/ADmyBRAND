import React from "react";

type FeatureIconProps = {
  name: "automation" | "analytics" | "integration" | "optimization" | "collaboration" | string;
  className?: string;
};

export default function FeatureIcon({ name, className }: FeatureIconProps) {
  // Add a glowing gradient background and a subtle shadow for all icons
  return (
    <span
      className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#edefff] via-[#a78bfa22] to-[#f9f8ff] shadow-lg border border-[#e0e0e0] ${className || ""}`}
      style={{
        boxShadow: "0 8px 32px 0 #a78bfa33, 0 1.5px 8px 0 #edefff88",
      }}
    >
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-[#a78bfa]/20 blur-lg opacity-60 pointer-events-none z-0" />
      {/* Icon SVG */}
      <span className="relative z-10">
        {name === "automation" && (
          <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
            <circle cx={20} cy={20} r={18} stroke="#a78bfa" strokeWidth={4} />
            <path d="M12 20h16M20 12v16" stroke="#a78bfa" strokeWidth={2} strokeLinecap="round" />
          </svg>
        )}
        {name === "analytics" && (
          <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
            <rect x={8} y={24} width={4} height={8} fill="#a78bfa" />
            <rect x={18} y={16} width={4} height={16} fill="#a78bfa" />
            <rect x={28} y={8} width={4} height={24} fill="#a78bfa" />
          </svg>
        )}
        {name === "integration" && (
          <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
            <rect x={8} y={8} width={24} height={24} rx={6} stroke="#a78bfa" strokeWidth={4} />
            <circle cx={20} cy={20} r={4} fill="#a78bfa" />
          </svg>
        )}
        {name === "optimization" && (
          <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
            <path d="M20 8v8l6 6" stroke="#a78bfa" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx={20} cy={20} r={16} stroke="#a78bfa" strokeWidth={3} />
          </svg>
        )}
        {name === "collaboration" && (
          <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
            <circle cx={14} cy={18} r={4} stroke="#a78bfa" strokeWidth={2} />
            <circle cx={26} cy={18} r={4} stroke="#a78bfa" strokeWidth={2} />
            <rect x={10} y={26} width={20} height={6} rx={3} stroke="#a78bfa" strokeWidth={2} />
          </svg>
        )}
        {/* Default icon */}
        {!(["automation", "analytics", "integration", "optimization", "collaboration"].includes(name)) && (
          <svg width={40} height={40} fill="none" viewBox="0 0 40 40">
            <circle cx={20} cy={20} r={18} stroke="#a78bfa" strokeWidth={4} />
          </svg>
        )}
      </span>
      {/* Decorative floating dot */}
      <span className="absolute right-2 top-2 w-2 h-2 rounded-full bg-[#a78bfa]/40 animate-pulse pointer-events-none" />
    </span>
  );
}
