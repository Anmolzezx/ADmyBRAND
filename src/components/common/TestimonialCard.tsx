import React from "react";

type TestimonialCardProps = {
  name: string;
  company: string;
  quote: string;
  avatar?: string;
};

export default function TestimonialCard({ name, company, quote, avatar }: TestimonialCardProps) {
  return (
    <div
      className="rounded-xl p-6 flex flex-col items-center text-center border transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
      style={{
        background: "linear-gradient(135deg, #fff7f0 60%, #f3e7e9 100%)",
        boxShadow: "0 8px 32px 0 rgba(244,121,31,0.10), 0 2px 8px 0 rgba(99,91,255,0.08)",
        border: "2px solid #f4791f",
        minHeight: 320,
        justifyContent: "center",
      }}
    >
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[#f4791f] transition-transform duration-300 hover:scale-110"
        />
      )}
      <blockquote className="p-16-regular mb-4" style={{ color: "#2C2560" }}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="p-16-semibold" style={{ color: "#2C2560" }}>{name}</div>
      <div className="p-14-medium" style={{ color: "#6D6D6D" }}>{company}</div>
      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,2,.6,1) both;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}
