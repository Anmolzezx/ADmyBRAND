// src/components/sections/Hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/animations/MotionDiv"; // custom animation wrapper
import Image from "next/image";
import { images } from "../../../constants";
import { ArrowRight } from "lucide-react";

export default function Hero() {
	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const href = e.currentTarget.href;
		const targetId = href.replace(/.*#/, "");
		const elem = document.getElementById(targetId);
		elem?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<>
			{/* Floating Glassmorphic Navbar with Glow */}
			<div className="fixed top-0 left-0 w-full flex justify-center z-[60] pointer-events-none">
				{/* Blurred Glow Behind Navbar */}
				<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90vw] md:w-[60vw] h-24 rounded-3xl bg-gradient-to-r from-[#65999966] via-[#f4791f33] to-[#fff5ec33] blur-2xl opacity-70 pointer-events-none"></div>
			</div>
			<nav
				className="fixed top-3 left-1/2 -translate-x-1/2 w-[98vw] md:w-[80vw] z-[70]
        bg-white/60 backdrop-blur-2xl border border-[#E0E0E0]/80
        rounded-3xl shadow-[0_8px_32px_0_rgba(101,153,153,0.18),0_1.5px_8px_0_rgba(244,121,31,0.10)]
        ring-1 ring-[#f4791f22]
        transition-all duration-300
        flex items-center"
				style={{
					boxShadow:
						"0 8px 32px 0 rgba(101,153,153,0.18), 0 1.5px 8px 0 rgba(244,121,31,0.10), 0 0 0 2px #fff8",
					border: "1.5px solid #E0E0E0",
					background: "linear-gradient(90deg,rgba(255,255,255,0.85) 60%,rgba(244,121,31,0.08) 100%)",
				}}
			>
				<div className="max-w-7xl mx-auto flex items-center justify-between w-full px-6 py-3 pointer-events-auto">
					<span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#659999] via-[#222] to-[#f4791f] bg-clip-text text-transparent drop-shadow-lg">
						AdMyBrand
					</span>
					<div className="flex-1 flex justify-center">
						<div className="flex gap-2 md:gap-3">
							<Button
								asChild
								variant="ghost"
								className="text-[#222] hover:bg-[#f5f5f5] hover:text-[#f4791f] active:bg-[#eaf4f4] rounded-full px-4 py-2 font-semibold transition-all duration-150 shadow-none"
							>
								<a href="#features" onClick={handleScroll}>
									Features
								</a>
							</Button>
							<Button
								asChild
								variant="ghost"
								className="text-[#222] hover:bg-[#f5f5f5] hover:text-[#f4791f] active:bg-[#eaf4f4] rounded-full px-4 py-2 font-semibold transition-all duration-150 shadow-none"
							>
								<a href="#pricing" onClick={handleScroll}>
									Pricing
								</a>
							</Button>
							<Button
								asChild
								variant="ghost"
								className="text-[#222] hover:bg-[#f5f5f5] hover:text-[#f4791f] active:bg-[#eaf4f4] rounded-full px-4 py-2 font-semibold transition-all duration-150 shadow-none"
							>
								<a href="#faq" onClick={handleScroll}>
									FAQ
								</a>
							</Button>
							<Button
								asChild
								variant="ghost"
								className="text-[#222] hover:bg-[#f5f5f5] hover:text-[#f4791f] active:bg-[#eaf4f4] rounded-full px-4 py-2 font-semibold transition-all duration-150 shadow-none"
							>
								<a href="#contact" onClick={handleScroll}>
									Contact
								</a>
							</Button>
						</div>
					</div>
					{/* Add Get Started CTA */}
					<Button
						asChild
						className="ml-2 bg-[#f4791f] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#d96a17] transition-all duration-150"
					>
						<a href="#pricing" onClick={handleScroll}>
							Get Started
						</a>
					</Button>
				</div>
			</nav>
			<section
				className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-20 text-center"
				style={{
					background: "linear-gradient(180deg, #eaf4f4 0%, #fff5ec 100%)",
				}}
			>
				{/* Gradient background behind section */}
				<div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eaf4f4] via-[#fff5ec] to-[#fff] opacity-90 pointer-events-none" />
				<div className="max-w-4xl mx-auto z-10 w-full">
					<div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-[#E0E0E0] p-8 md:p-14 flex flex-col gap-8 mt-24">
						<MotionDiv>
							<h1
								className="text-4xl md:text-6xl font-extrabold leading-tight flex flex-col items-center gap-2"
								style={{ color: "#222", letterSpacing: "-0.01em" }}
							>
								<span className="flex items-center justify-center gap-3">
									<img
										src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/cpu.svg"
										alt="AI Icon"
										width={48}
										height={48}
										style={{
											display: "inline",
											verticalAlign: "middle",
											filter:
												"invert(41%) sepia(97%) saturate(7496%) hue-rotate(10deg) brightness(101%) contrast(101%)",
										}}
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
										style={{
											display: "inline",
											verticalAlign: "middle",
											filter:
												"invert(54%) sepia(92%) saturate(7496%) hue-rotate(10deg) brightness(101%) contrast(101%)",
										}}
									/>
									<span className="inline-block align-middle">
										that{" "}
										<span style={{ color: "#f4791f" }}>Grows</span> with You
									</span>
								</span>
							</h1>
						</MotionDiv>

						<MotionDiv delay={0.2}>
							<p
								className="mt-4 text-lg md:text-xl"
								style={{ color: "#6D6D6D" }}
							>
								Automate, optimize, and scale your campaigns with the power of AI.
								Trusted by 1000+ marketers.
							</p>
						</MotionDiv>
						<MotionDiv delay={0.25}>
							<div className="flex justify-center">
								<div className="relative inline-block group">
									{/* Soft glowing gradient border effect */}
									<div
										className="absolute inset-0 rounded-[2rem] pointer-events-none transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
										style={{
											background:
												"radial-gradient(circle at 60% 40%, #f4791f33 0%, #eaf4f4 60%, #fff5ec 100%)",
											zIndex: 0,
											filter: "blur(12px)",
											opacity: 0.8,
										}}
									/>
									{/* Decorative top-right accent */}
									<div
										className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#f4791f55] to-[#65999933] blur-md opacity-70 pointer-events-none"
										style={{ zIndex: 1 }}
									/>
									{/* Decorative bottom-left accent */}
									<div
										className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-tr from-[#65999955] to-[#f4791f33] blur-md opacity-60 pointer-events-none"
										style={{ zIndex: 1 }}
									/>
									<Image
										src={images.heroImage}
										alt="AI Marketing Illustration"
										width={360}
										height={240}
										className="relative z-10 rounded-[2rem] border-2 border-[#eaf4f4] bg-white/80 shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_32px_rgba(101,153,153,0.18)]"
										priority
									/>
								</div>
							</div>
						</MotionDiv>

						{/* Brand Logos Row */}
						<MotionDiv delay={0.3}>
							<div className="mt-4 flex flex-wrap justify-center gap-6 items-center opacity-90">
								<span className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-xs text-white">
									Logo
								</span>
								<span className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-xs text-white">
									Logo
								</span>
								<span className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-xs text-white">
									Logo
								</span>
								<span className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-xs text-white">
									Logo
								</span>
							</div>
						</MotionDiv>

						<MotionDiv delay={0.4}>
							<div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 items-center">
								{/* Enhanced Get Started Button */}
								<Button
									asChild
									className="flex items-center gap-3 px-8 py-4 text-lg rounded-full font-semibold text-white bg-gradient-to-r from-[#659999] via-[#f4791f] to-[#659999] hover:scale-105 transition-transform duration-300 shadow-[0_4px_20px_rgba(244,121,31,0.4)] border border-transparent"
								>
									<a
										href="#pricing"
										className="flex items-center gap-3 relative z-10"
										onClick={handleScroll}
									>
										<span className="inline-flex items-center justify-center bg-white rounded-full p-2">
											<ArrowRight className="w-5 h-5 text-[#f4791f]" />
										</span>
										Get Started
									</a>
								</Button>
								{/* Enhanced Watch Demo Button */}
								<Button
									asChild
									variant="outline"
									className="border-[#E0E0E0] text-[#222] flex items-center gap-3 px-8 py-4 text-lg rounded-full shadow-lg transition-transform duration-200 hover:scale-105 bg-white hover:bg-[#fff5ec] font-semibold relative"
									style={{ boxShadow: "0 4px 24px 0 #f4791f11" }}
								>
									<a
										href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3"
									>
										<span className="relative inline-flex items-center justify-center">
											<span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-[#f4791f]/30 opacity-75"></span>
											<span
												className="inline-flex items-center justify-center bg-white rounded-full p-2 mr-1 border border-[#eaf4f4] shadow"
												style={{ boxShadow: "0 2px 8px #f4791f11" }}
											>
												<img
													src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/play-circle.svg"
													alt="Watch Demo Icon"
													width={22}
													height={22}
													style={{
														display: "inline",
														verticalAlign: "middle",
														filter:
															"invert(54%) sepia(92%) saturate(7496%) hue-rotate(10deg) brightness(101%) contrast(101%)",
													}}
												/>
											</span>
										</span>
										Watch Demo
									</a>
								</Button>
							</div>
						</MotionDiv>

						{/* Feature Highlights Row */}
						{/* <MotionDiv delay={0.5}>
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
            </MotionDiv> */}
					</div>
				</div>
				{/* Remove the AI Dashboard Preview image below */}
				{/* <MotionDiv delay={0.6}>
          <Image
              src="/hero-preview.png"
              alt="AI Dashboard Preview"
              width={900}
              height={600}
              className="absolute bottom-0 w-full max-w-5xl mx-auto"
          />
        </MotionDiv> */}
				{/* Optional Glass/Glow Overlay */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background:
							"linear-gradient(180deg, #F6F5FF 0%, #FFFFFF 100%)",
						borderRadius: "1rem",
					}}
				/>
			</section>
		</>
	);
}

