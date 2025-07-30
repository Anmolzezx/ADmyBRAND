"use client";
import React from "react";
import Image from "next/image";

const features = [
	{
		icon: (
			<span className="feature-icon-anim">
				<Image
					src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/cpu.svg"
					alt="AI Ad Creation"
					width={40}
					height={40}
					className="animated-icon"
					unoptimized
				/>
			</span>
		),
		title: "AI-Powered Ad Creation",
		description: "Generate high-converting ads in seconds with AI.",
	},
	{
		icon: (
			<span className="feature-icon-anim">
				<Image
					src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/bar-chart-2.svg"
					alt="Analytics"
					width={40}
					height={40}
					className="animated-icon"
					unoptimized
				/>
			</span>
		),
		title: "Real-Time Analytics",
		description: "Track campaign performance with live dashboards.",
	},
	{
		icon: (
			<span className="feature-icon-anim">
				<Image
					src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/link.svg"
					alt="Integrations"
					width={40}
					height={40}
					className="animated-icon"
					unoptimized
				/>
			</span>
		),
		title: "Seamless Integrations",
		description: "Connect with your favorite tools and platforms.",
	},
	{
		icon: (
			<span className="feature-icon-anim">
				<Image
					src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/sliders.svg"
					alt="Optimization"
					width={40}
					height={40}
					className="animated-icon"
					unoptimized
				/>
			</span>
		),
		title: "Smart Optimization",
		description: "AI auto-optimizes your campaigns for best ROI.",
	},
	{
		icon: (
			<span className="feature-icon-anim">
				<Image
					src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/users.svg"
					alt="Collaboration"
					width={40}
					height={40}
					className="animated-icon"
					unoptimized
				/>
			</span>
		),
		title: "Team Collaboration",
		description: "Invite your team and manage roles easily.",
	},
	{
		icon: (
			<span className="feature-icon-anim">
				<Image
					src="https://cdn.jsdelivr.net/gh/feathericons/feather/icons/mail.svg"
					alt="Reporting"
					width={40}
					height={40}
					className="animated-icon"
					unoptimized
				/>
			</span>
		),
		title: "Automated Reporting",
		description: "Get beautiful reports delivered to your inbox.",
	},
];

export default function Features() {
	return (
		<section id="features" className="wrapper py-24 flex flex-col items-center relative overflow-x-clip">
			{/* Animated Gradient Glow */}
			<div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-gradient-to-br from-[#659999]/30 via-[#f4791f]/30 to-[#fff]/0 blur-3xl rounded-full opacity-80 animate-glow" />
			<h2 className="h2-bold text-center mb-12 flex items-center gap-4 relative z-10 text-[2.2rem] md:text-4xl font-extrabold tracking-tight"
				style={{ letterSpacing: "0.04em" }}
			>
				<span className="relative flex items-center">
					{/* Animated SVG Glow */}
					<span className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#659999] via-[#f4791f] to-[#659999] blur-lg opacity-70 animate-glow pointer-events-none" />
					<svg width={44} height={44} fill="none" viewBox="0 0 44 44" className="drop-shadow-lg">
						<defs>
							<linearGradient id="ftrg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
								<stop stopColor="#659999" />
								<stop offset="1" stopColor="#f4791f" />
							</linearGradient>
						</defs>
						<rect x={6} y={6} width={32} height={32} rx={10} fill="url(#ftrg)" />
						<path d="M15 22h14M22 15v14" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" />
						{/* Decorative sparkles */}
						<circle cx="36" cy="10" r="2" fill="#f4791f" opacity="0.7" />
						<circle cx="10" cy="36" r="1.5" fill="#659999" opacity="0.6" />
					</svg>
				</span>
				<span className="drop-shadow-lg text-black"
					style={{ letterSpacing: "0.04em" }}
				>
					Features
				</span>
			</h2>
			<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
				{features.map((f, i) => (
					<div
						key={i}
						className="group flex flex-col items-center text-center p-12 rounded-3xl shadow-2xl bg-gradient-to-br from-[#eaf4f4] to-[#fff5ec] border border-[#e0e0e0] backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_16px_48px_0_#65999944,0_2px_8px_0_#f4791f22] relative overflow-visible animate-fade-in"
						style={{
							minHeight: 340,
							boxShadow: "0 8px 32px 0 #65999922, 0 2px 8px 0 #f4791f22",
							background: "linear-gradient(135deg, #eaf4f4 60%, #fff5ec 100%)"
						}}
					>
						{/* Animated Icon with Glow and floating accent */}
						<div className="mb-8 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 relative">
							<span
								className="inline-flex items-center justify-center bg-gradient-to-br from-[#eaf4f4] to-[#fff5ec] rounded-full w-20 h-20 shadow-3xl border border-[#e0e0e0] relative z-10"
								style={{
									boxShadow: "0 12px 32px 0 #65999944, 0 2px 8px 0 #f4791f22, 0 0 0 6px #fff9",
									background: "linear-gradient(145deg, #eaf4f4 60%, #fff5ec 100%)"
								}}
							>
								<span className="absolute inset-0 rounded-full bg-[#f4791f]/10 blur-lg opacity-0 group-hover:opacity-80 transition-all duration-500 z-0 animate-pulse-glow" />
								{f.icon}
								{/* 3D highlight */}
								<span className="absolute left-3 top-3 w-6 h-2 rounded-full bg-white/70 blur-sm opacity-70 pointer-events-none" />
								{/* 3D shadow */}
								<span className="absolute bottom-2 right-2 w-8 h-3 rounded-full bg-[#659999]/10 blur-md opacity-60 pointer-events-none" />
							</span>
							{/* Floating accent ring */}
							<span className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#f4791f33] to-[#65999933] blur-md opacity-60 group-hover:opacity-90 transition-all duration-500 pointer-events-none" />
						</div>
						<h3
							className="h3-bold mb-2 text-[1.45rem] md:text-2xl text-black drop-shadow-sm tracking-tight group-hover:text-[#f4791f] transition-colors duration-300"
							style={{ letterSpacing: "0.03em" }}
						>
							<span className="font-extrabold tracking-tight"
								style={{ letterSpacing: "0.03em" }}
							>
								{f.title}
							</span>
						</h3>
						<p
							className="p-16-regular text-[1.08rem] md:text-lg text-[#222] mb-2 transition-colors duration-300 group-hover:text-[#659999]"
							style={{ letterSpacing: "0.01em" }}
						>
							<span className="font-semibold"
								style={{ letterSpacing: "0.01em" }}
							>
								{f.description}
							</span>
						</p>
						{/* Animated accent background on hover */}
						<span
							className="absolute -z-10 left-1/2 top-1/2 w-60 h-60 rounded-full bg-gradient-to-br from-[#65999922]/10 via-[#f4791f22] to-[#fff0]/0 blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"
							style={{ transform: "translate(-50%, -50%)" }}
						/>
						{/* Removed Decorative floating dots */}
						{/* Removed Decorative bottom-right accent */}
						{/* 3D card shadow */}
						<span className="absolute left-1/2 -bottom-6 w-40 h-8 rounded-full bg-[#659999]/10 blur-2xl opacity-60 pointer-events-none -translate-x-1/2" />
					</div>
				))}
			</div>
			{/* Subtle section divider */}
			<div className="w-32 h-1 mt-20 bg-gradient-to-r from-[#65999933] via-[#f4791f22] to-[#65999933] rounded-full opacity-70 mx-auto" />
			<style jsx>{`
				.animate-fade-in {
					animation: fade-in 0.9s cubic-bezier(.4,2,.6,1) both;
				}
				@keyframes fade-in {
					from { opacity: 0; transform: translateY(40px);}
					to { opacity: 1; transform: translateY(0);}
				}
				.animate-glow {
					animation: glowmove 6s ease-in-out infinite alternate;
				}
				@keyframes glowmove {
					0% { filter: blur(60px) brightness(1);}
					100% { filter: blur(80px) brightness(1.1);}
				}
				.animate-pulse-glow {
					animation: pulse-glow 2.2s infinite alternate;
				}
				@keyframes pulse-glow {
					0% { opacity: 0.2; }
					100% { opacity: 0.7; }
				}
				.animate-float {
					animation: float 3.2s ease-in-out infinite alternate;
				}
				@keyframes float {
					0% { transform: translateY(0);}
					100% { transform: translateY(-12px);}
				}
				.animate-float2 {
					animation: float2 2.7s ease-in-out infinite alternate;
				}
				@keyframes float2 {
					0% { transform: translateY(0);}
					100% { transform: translateY(10px);}
				}
				.animated-icon {
					transition: transform 0.4s cubic-bezier(0.4, 2, 0.6, 1), filter 0.3s;
					filter: drop-shadow(0 2px 8px #635bff33);
				}
				.group:hover .animated-icon {
					transform: rotate(-8deg) scale(1.15);
					filter: drop-shadow(0 4px 16px #635BFF55);
				}
		`}</style>
	</section>
)}