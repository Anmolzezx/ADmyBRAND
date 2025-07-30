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
			<div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-gradient-to-br from-[#635BFF]/30 via-[#EDEBFF]/40 to-[#F9F8FF]/0 blur-3xl rounded-full opacity-80 animate-glow" />
			<h2 className="h2-bold text-center mb-12 flex items-center gap-3 relative z-10">
				<svg width={36} height={36} fill="none" viewBox="0 0 40 40">
					<defs>
						<linearGradient id="ftrg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
							<stop stopColor="#635BFF" />
							<stop offset="1" stopColor="#EDEBFF" />
						</linearGradient>
					</defs>
					<rect x={4} y={4} width={32} height={32} rx={8} fill="url(#ftrg)" />
					<path d="M13 20h14M20 13v14" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
				</svg>
				Features
			</h2>
			<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
				{features.map((f, i) => (
					<div
						key={i}
						className="group flex flex-col items-center text-center p-12 rounded-3xl shadow-2xl bg-gradient-to-br from-[#EDEBFF] to-[#F9F8FF] border border-[#E0E0E0] backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_40px_0_#635BFF22] relative overflow-hidden animate-fade-in"
						style={{ minHeight: 340, boxShadow: "0 4px 32px 0 #635BFF11" }}
					>
						{/* Animated Icon with Glow */}
						<div className="mb-8 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6 relative">
							<span className="inline-flex items-center justify-center bg-gradient-to-br from-[#E5E5F8] to-[#DCD9F9] rounded-full w-20 h-20 shadow-lg border border-[#E0E0E0] relative z-10"
								style={{ boxShadow: "0 8px 32px 0 #635BFF33, 0 1.5px 8px 0 #EDEBFF88" }}>
								<span className="absolute inset-0 rounded-full bg-[#635BFF]/20 blur-lg opacity-0 group-hover:opacity-80 transition-all duration-500 z-0 animate-pulse-glow" />
								{f.icon}
							</span>
						</div>
						<h3 className="h3-bold mb-2 text-[#2C2560] drop-shadow-sm tracking-tight group-hover:text-[#635BFF] transition-colors duration-300">
							{f.title}
						</h3>
						<p className="p-16-regular text-[#6D6D6D] mb-2 transition-colors duration-300 group-hover:text-[#2C2560]">
							{f.description}
						</p>
						{/* Animated accent background on hover */}
						<span
							className="absolute -z-10 left-1/2 top-1/2 w-52 h-52 rounded-full bg-[#635BFF]/10 blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"
							style={{ transform: "translate(-50%, -50%)" }}
						/>
						{/* Decorative floating dots */}
						<span className="absolute right-6 top-6 w-3 h-3 rounded-full bg-[#635BFF]/30 animate-float" />
						<span className="absolute left-6 bottom-6 w-2 h-2 rounded-full bg-[#EDEBFF]/60 animate-float2" />
					</div>
				))}
			</div>
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
	);
}
