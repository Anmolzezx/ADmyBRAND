import React from "react"
import Image from "next/image"
import {icons, logos} from "../../../constants";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F5FF]/70 backdrop-blur-md border-t border-[#E0E0E0] py-10 px-6 md:px-12 mt-24">
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
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#2C2560]">
          <a href="#features" className="hover:text-[#635BFF] transition-colors">Features</a>
          <a href="#pricing" className="hover:text-[#635BFF] transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-[#635BFF] transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-[#635BFF] transition-colors">Contact</a>
          <a
            href="https://admybrand.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#635BFF] hover:underline"
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
