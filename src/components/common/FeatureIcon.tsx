import React from "react";

type FeatureIconProps = {
  name: "automation" | "analytics" | "integration" | "optimization" | "collaboration" | string;
  className?: string;
};

export default function FeatureIcon({ name, className }: FeatureIconProps) {
  if (name === "automation")
    return (
      <svg className={className} width={40} height={40} fill="none" viewBox="0 0 40 40">
        <circle cx={20} cy={20} r={18} stroke="#a78bfa" strokeWidth={4} />
        <path d="M12 20h16M20 12v16" stroke="#a78bfa" strokeWidth={2} strokeLinecap="round" />
      </svg>
    );
  if (name === "analytics")
    return (
      <svg className={className} width={40} height={40} fill="none" viewBox="0 0 40 40">
        <rect x={8} y={24} width={4} height={8} fill="#a78bfa" />
        <rect x={18} y={16} width={4} height={16} fill="#a78bfa" />
        <rect x={28} y={8} width={4} height={24} fill="#a78bfa" />
      </svg>
    );
  if (name === "integration")
    return (
      <svg className={className} width={40} height={40} fill="none" viewBox="0 0 40 40">
        <rect x={8} y={8} width={24} height={24} rx={6} stroke="#a78bfa" strokeWidth={4} />
        <circle cx={20} cy={20} r={4} fill="#a78bfa" />
      </svg>
    );
  if (name === "optimization")
    return (
      <svg className={className} width={40} height={40} fill="none" viewBox="0 0 40 40">
        <path d="M20 8v8l6 6" stroke="#a78bfa" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx={20} cy={20} r={16} stroke="#a78bfa" strokeWidth={3} />
      </svg>
    );
  if (name === "collaboration")
    return (
      <svg className={className} width={40} height={40} fill="none" viewBox="0 0 40 40">
        <circle cx={14} cy={18} r={4} stroke="#a78bfa" strokeWidth={2} />
        <circle cx={26} cy={18} r={4} stroke="#a78bfa" strokeWidth={2} />
        <rect x={10} y={26} width={20} height={6} rx={3} stroke="#a78bfa" strokeWidth={2} />
      </svg>
    );
  // Default icon
  return (
    <svg className={className} width={40} height={40} fill="none" viewBox="0 0 40 40">
      <circle cx={20} cy={20} r={18} stroke="#a78bfa" strokeWidth={4} />
    </svg>
  );
}
