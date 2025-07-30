import React from "react"
import Image from "next/image"
import {icons, logos} from "../../../constants";

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-[#E0E0E0] py-10 px-6 md:px-12 mt-0 shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] rounded-t-2xl"
      style={{
        marginTop: 0,
        background: "linear-gradient(135deg, #F6F5FF 0%, #e0e7ff 60%, #f3e7e9 100%)",
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10), 0 2px 8px 0 rgba(244,121,31,0.08)",
        backdropFilter: "blur(8px)"
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-8">

        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Image
            src={logos.logo}
            alt="ADmyBRAND Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-semibold text-xl tracking-tight text-[#2C2560]">
            ADmyBRAND
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-3 text-sm font-medium text-[#2C2560]">
          <a
            href="#features"
            className="hover:text-[#635BFF] transition-colors"
            aria-current="page"
          >
            Features
          </a>
          <span aria-hidden="true" className="mx-1 text-[#B0AEE0]">•</span>
          <a href="#pricing" className="hover:text-[#635BFF] transition-colors">
            Pricing
          </a>
          <span aria-hidden="true" className="mx-1 text-[#B0AEE0]">•</span>
          <a href="#faq" className="hover:text-[#635BFF] transition-colors">
            FAQ
          </a>
          <span aria-hidden="true" className="mx-1 text-[#B0AEE0]">•</span>
          <a href="#contact" className="hover:text-[#635BFF] transition-colors">
            Contact
          </a>
          <span aria-hidden="true" className="mx-1 text-[#B0AEE0]">•</span>
          <a
            href="https://admybrand.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "#f4791f" }}
          >
            Main Site
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src={icons.linkedin}
              alt="LinkedIn"
              width={24}
              height={24}
              className="opacity-80 hover:opacity-100"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src={icons.twitter}
              alt="Twitter"
              width={24}
              height={24}
              className="opacity-80 hover:opacity-100"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src={icons.instagram}
              alt="Instagram"
              width={24}
              height={24}
              className="opacity-80 hover:opacity-100"
            />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[#2C2560]/70">
        © {new Date().getFullYear()} ADmyBRAND. All rights reserved. ·{" "}
        <a href="/privacy" className="underline hover:text-[#635BFF]">Privacy Policy</a> ·{" "}
        <a href="/terms" className="underline hover:text-[#635BFF]">Terms of Service</a>
      </div>
    </footer>
  )
}
