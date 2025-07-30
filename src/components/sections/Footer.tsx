import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col md:flex-row items-center justify-between border-t mt-16 px-8 bg-[#F6F5FF] backdrop-blur-lg border-[#E0E0E0]">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <img src="/assets/images/logo.png" alt="ADmyBRAND Logo" className="w-8 h-8" />
        <span className="font-bold text-lg tracking-tight" style={{ color: "#2C2560" }}>ADmyBRAND</span>
      </div>
      <nav className="flex gap-6 mb-4 md:mb-0">
        <a href="#features" className="hover:underline" style={{ color: "#2C2560" }}>Features</a>
        <a href="#pricing" className="hover:underline" style={{ color: "#2C2560" }}>Pricing</a>
        <a href="#faq" className="hover:underline" style={{ color: "#2C2560" }}>FAQ</a>
        <a href="#contact" className="hover:underline" style={{ color: "#2C2560" }}>Contact</a>
        <a href="https://admybrand.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#635BFF" }}>
          Main Site
        </a>
      </nav>
      <div className="flex gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" className="w-8 h-8" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
}
