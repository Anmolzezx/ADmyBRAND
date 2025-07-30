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
		<section id="features" className="wrapper py-24 flex flex-col items-center">
			<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
				{features.map((f, i) => (
					<div
						key={i}
						className="group flex flex-col items-center text-center p-10 rounded-2xl shadow-2xl bg-gradient-to-br from-[#EDEBFF] to-[#F9F8FF] border border-[#E0E0E0] backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden animate-fade-in"
						style={{ minHeight: 320 }}
					>
						<div className="mb-6 transition-transform duration-300 group-hover:scale-110">
							{f.icon}
						</div>
						<h3 className="h3-bold mb-2" style={{ color: "#2C2560" }}>
							{f.title}
						</h3>
						<p className="p-16-regular" style={{ color: "#6D6D6D" }}>
							{f.description}
						</p>
						{/* Animated accent background on hover */}
						<span
							className="absolute -z-10 left-1/2 top-1/2 w-40 h-40 rounded-full bg-[#635BFF]/10 blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
							style={{ transform: "translate(-50%, -50%)" }}
						/>
					</div>
				))}
			</div>
			{/* Move the following styles to a global CSS/SCSS file or use Tailwind classes */}
			{/* <style jsx>{`
				.animated-icon {
					transition: transform 0.4s cubic-bezier(0.4, 2, 0.6, 1),
						filter 0.3s;
					filter: drop-shadow(0 2px 8px #635bff33);
				}
				.group:hover .animated-icon {
					transform: rotate(-8deg) scale(1.15);
					filter: drop-shadow(0 4px 16px #635bff55);
				}
				.feature-icon-anim {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					background: linear-gradient(135deg, #e5e5f8 60%, #dcd9f9 100%);
					border-radius: 50%;
					width: 64px;
					height: 64px;
					box-shadow: 0 2px 12px #635bff22;
					transition: background 0.4s;
				}
				.group:hover .feature-icon-anim {
					background: linear-gradient(135deg, #635bff 40%, #edebff 100%);
				}
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(40px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in {
					animation: fade-in 0.7s cubic-bezier(0.4, 2, 0.6, 1) both;
				}
			`}</style> */}
		</section>
	);
}
