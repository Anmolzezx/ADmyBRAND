import React from "react";

type TestimonialCardProps = {
  name: string;
  company: string;
  quote: string;
  avatar?: string;
};

export default function TestimonialCard({ name, company, quote, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-[#E0E0E0] transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in">
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full mb-4 object-cover border border-[#E0E0E0] transition-transform duration-300 hover:scale-110"
        />
      )}
      <blockquote className="p-16-regular mb-4" style={{ color: "#2C2560" }}>&ldquo;{quote}&rdquo;</blockquote>
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
