// src/components/sections/Hero.tsx

import { Button } from "@/components/ui/button"
import { MotionDiv } from "@/components/animations/MotionDiv" // custom animation wrapper
import Image from "next/image"

export default function Hero() {
  return (
    <>
      {/* Floating Glassmorphic Navbar with Glow */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-[60] pointer-events-none">
        {/* Blurred Glow Behind Navbar */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90vw] md:w-[60vw] h-24 rounded-3xl bg-gradient-to-r from-[#635BFF66] via-[#A18AFF33] to-[#00E0FF33] blur-2xl opacity-70 pointer-events-none"></div>
      </div>
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[92vw] md:w-[60vw] z-[70]
        bg-white/60 backdrop-blur-2xl border border-[#E5E5F8]/80
        rounded-3xl shadow-[0_8px_32px_0_rgba(99,91,255,0.18),0_1.5px_8px_0_rgba(99,91,255,0.10)]
        ring-1 ring-[#635BFF22]
        transition-all duration-300
        flex items-center"
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(99,91,255,0.18), 0 1.5px 8px 0 rgba(99,91,255,0.10), 0 0 0 2px #fff8",
          border: "1.5px solid #E5E5F8",
          background: "linear-gradient(90deg,rgba(255,255,255,0.85) 60%,rgba(163,148,255,0.13) 100%)"
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between w-full px-6 py-3 pointer-events-auto">
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#635BFF] via-[#2C2560] to-[#00E0FF] bg-clip-text text-transparent drop-shadow-lg">
            AdMyBrand
          </span>
          <div className="flex gap-2 md:gap-3">
            <Button
              asChild
              variant="ghost"
              className="text-[#2C2560] hover:bg-[#F6F5FF] hover:text-[#635BFF] active:bg-[#E5E5F8] rounded-full px-4 py-2 font-semibold transition-all duration-150 shadow-none"
            >
              <a href="#features">Features</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-[#2C2560] hover:bg-[#F6F5FF] hover:text-[#635BFF] active:bg-[#E5E5F8] rounded-full px-4 py-2 font-semibold transition-all duration-150 shadow-none"
            >
              <a href="#pricing">Pricing</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-[#2C2560] hover:bg-[#F6F5FF] hover:text-[#635BFF] active:bg-[#E5E5F8] rounded-full px-4 py-2 font-semibold transition-all duration-150 shadow-none"
            >
              <a href="#faq">FAQ</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-[#2C2560] hover:bg-[#F6F5FF] hover:text-[#635BFF] active:bg-[#E5E5F8] rounded-full px-4 py-2 font-semibold transition-all duration-150 shadow-none"
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </nav>
      <section
        className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-20 text-center"
        style={{
          background: "linear-gradient(180deg, #F6F5FF 0%, #FFFFFF 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto z-10 w-full">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-[#E0E0E0] p-8 md:p-14 flex flex-col gap-8 mt-24">
            <MotionDiv>
              <h1
                className="text-4xl md:text-6xl font-extrabold leading-tight flex flex-col items-center gap-2"
                style={{ color: "#2C2560", letterSpacing: "-0.01em" }}
              >
                <span className="flex items-center justify-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/cpu.svg"
                    alt="AI Icon"
                    width={48}
                    height={48}
                    style={{ display: "inline", verticalAlign: "middle", filter: "invert(27%) sepia(67%) saturate(7496%) hue-rotate(241deg) brightness(90%) contrast(101%)" }}
                  />
                  <span className="inline-block align-middle">
                    AI-Powered Marketing
                  </span>
                </span>
                <span className="flex items-center justify-center gap-3 mt-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/trending-up.svg"
                    alt="Growth Icon"
                    width={40}
                    height={40}
                    style={{ display: "inline", verticalAlign: "middle", filter: "invert(27%) sepia(67%) saturate(7496%) hue-rotate(241deg) brightness(90%) contrast(101%)" }}
                  />
                  <span className="inline-block align-middle">
                    that <span style={{ color: "#635BFF" }}>Grows</span> with You
                  </span>
                </span>
              </h1>
            </MotionDiv>

            <MotionDiv delay={0.2}>
              <p className="mt-4 text-lg md:text-xl" style={{ color: "#6D6D6D" }}>
                Automate, optimize, and scale your campaigns with the power of AI. Trusted by 1000+ marketers.
              </p>
            </MotionDiv>

            {/* Brand Logos Row */}
            <MotionDiv delay={0.3}>
              <div className="mt-4 flex flex-wrap justify-center gap-6 items-center opacity-90">
                <span className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-xs text-white">Logo</span>
                <span className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-xs text-white">Logo</span>
                <span className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-xs text-white">Logo</span>
                <span className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-xs text-white">Logo</span>
              </div>
            </MotionDiv>

            <MotionDiv delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 items-center">
                <Button
                  className="flex items-center gap-3 px-7 py-4 text-lg shadow-lg rounded-full transition-transform duration-200 hover:scale-105 font-semibold"
                  style={{ background: "#635BFF", color: "#fff", boxShadow: "0 4px 24px 0 #635bff22" }}
                >
                  <span className="inline-flex items-center justify-center bg-white rounded-full p-2 mr-1 border border-[#E5E5F8] shadow"
                    style={{ boxShadow: "0 2px 8px #635bff22" }}>
                    <img
                      src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/arrow-right.svg"
                      alt="Get Started Icon"
                      width={22}
                      height={22}
                      style={{ display: "inline", verticalAlign: "middle", filter: "invert(41%) sepia(97%) saturate(7496%) hue-rotate(241deg) brightness(90%) contrast(101%)" }}
                    />
                  </span>
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-[#E0E0E0] text-[#2C2560] flex items-center gap-3 px-7 py-4 text-lg rounded-full shadow-lg transition-transform duration-200 hover:scale-105 bg-white hover:bg-[#F6F5FF] font-semibold"
                  style={{ boxShadow: "0 4px 24px 0 #635bff11" }}
                >
                  <span className="inline-flex items-center justify-center bg-white rounded-full p-2 mr-1 border border-[#E5E5F8] shadow"
                    style={{ boxShadow: "0 2px 8px #635bff11" }}>
                    <img
                      src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/play-circle.svg"
                      alt="Watch Demo Icon"
                      width={22}
                      height={22}
                      style={{ display: "inline", verticalAlign: "middle", filter: "invert(41%) sepia(97%) saturate(7496%) hue-rotate(241deg) brightness(90%) contrast(101%)" }}
                    />
                  </span>
                  Watch Demo
                </Button>
              </div>
            </MotionDiv>

            {/* Feature Highlights Row */}
            <MotionDiv delay={0.5}>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#E5E5F8] to-[#F6F5FF] rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <span className="inline-flex items-center justify-center bg-[#635BFF]/10 rounded-full p-3 mb-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/settings.svg"
                      alt="AI Automation Icon"
                      width={32}
                      height={32}
                      style={{ display: "inline", verticalAlign: "middle", color: "#635BFF" }}
                    />
                  </span>
                  <span className="font-semibold text-lg" style={{ color: "#2C2560" }}>AI Automation</span>
                  <span className="text-[#6D6D6D] text-sm text-center">Let AI handle repetitive marketing tasks and free up your time.</span>
                </div>
                <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#E5E5F8] to-[#F6F5FF] rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <span className="inline-flex items-center justify-center bg-[#635BFF]/10 rounded-full p-3 mb-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/bar-chart-2.svg"
                      alt="Advanced Analytics Icon"
                      width={32}
                      height={32}
                      style={{ display: "inline", verticalAlign: "middle", color: "#635BFF" }}
                    />
                  </span>
                  <span className="font-semibold text-lg" style={{ color: "#2C2560" }}>Advanced Analytics</span>
                  <span className="text-[#6D6D6D] text-sm text-center">Gain deep insights with real-time analytics and reporting.</span>
                </div>
                <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#E5E5F8] to-[#F6F5FF] rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <span className="inline-flex items-center justify-center bg-[#635BFF]/10 rounded-full p-3 mb-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/users.svg"
                      alt="Team Collaboration Icon"
                      width={32}
                      height={32}
                      style={{ display: "inline", verticalAlign: "middle", color: "#635BFF" }}
                    />
                  </span>
                  <span className="font-semibold text-lg" style={{ color: "#2C2560" }}>Team Collaboration</span>
                  <span className="text-[#6D6D6D] text-sm text-center">Work together seamlessly with built-in collaboration tools.</span>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
        <MotionDiv delay={0.6}>
          <Image
              src="/hero-preview.png"
              alt="AI Dashboard Preview"
              width={900}
              height={600}
              className="absolute bottom-0 w-full max-w-5xl mx-auto"
          />
        </MotionDiv>
        {/* Optional Glass/Glow Overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, #F6F5FF 0%, #FFFFFF 100%)", borderRadius: "1rem" }} />
      </section>
    </>
  )
}
