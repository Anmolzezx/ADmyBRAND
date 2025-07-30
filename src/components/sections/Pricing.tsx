"use client";
import React from "react";
import PricingCard from "../common/PricingCard";

const plans = [
	{
		title: "Starter",
		price: "$0/mo",
		features: [
			"Basic AI tools",
			"Email support",
			"Single user",
			"Limited analytics",
			"Community access",
			"Up to 3 campaigns",
			"Standard templates",
		],
		icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/user.svg", // user icon for Starter
		badge: "Free Forever",
		accent: "from-[#eaf4f4] to-[#fff5ec]",
		popular: false,
		bg: "", // Remove gradient for Starter, use plain white
	},
	{
		title: "Pro",
		price: "$49/mo",
		features: [
			"All Starter features",
			"Advanced analytics",
			"Team access (up to 10 users)",
			"Priority email support",
			"Unlimited campaigns",
			"A/B testing",
			"Premium templates",
			"Integrations CRM and Slack ",
		],
		icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/star.svg", // star icon for Pro
		badge: "Best Value",
		accent: "from-[#f4791f] to-[#ffe7d1]",
		popular: true,
		bg: "bg-gradient-to-br from-[#fff5ec] to-[#ffe7d1]",
	},
	{
		title: "Enterprise",
		price: "Contact us",
		features: [
			"All Pro features",
			"Custom integrations",
			"Dedicated account manager",
			"24/7 priority support",
			"Unlimited users",
			"Custom onboarding",
			"White-labeling",
			"API access",
		],
		icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/briefcase.svg", // briefcase for Enterprise
		badge: "Custom",
		accent: "from-[#f6f5ff] to-[#eaf4f4]",
		popular: false,
		bg: "bg-gradient-to-br from-[#f6f5ff] to-[#eaf4f4]",
	},
];

export default function Pricing() {
	return (
		<section
			className="wrapper py-24 flex flex-col items-center"
			id="pricing"
		>
			{/* <h2 className="h2-bold text-center mb-10 flex items-center gap-3">
				<svg
					width={32}
					height={32}
					fill="none"
					viewBox="0 0 40 40"
				>
					<rect
						x={6}
						y={8}
						width={28}
						height={24}
						rx={8}
						stroke="#635BFF"
						strokeWidth={4}
					/>
					<path
						d="M12 20h16"
						stroke="#635BFF"
						strokeWidth={2}
						strokeLinecap="round"
					/>
				</svg>
				Pricing
			</h2> */}
			<div className="relative w-full flex justify-center">
				<div className="grid gap-10 md:grid-cols-3 w-full max-w-5xl">
					{plans.map((plan, i) => (
						<div
							key={i}
							className={`relative group transition-all duration-300 border ${plan.bg} ${
								plan.popular
									? "z-10 scale-105 shadow-2xl border-[#f4791f]"
									: "scale-100 shadow-lg border-[#E0E0E0]"
							} hover:scale-105 hover:shadow-2xl flex flex-col h-full`}
							style={{
								// Ensure all cards have the same height and alignment
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-end",
								height: "100%",
							}}
						>
							{/* Plan Icon */}
							<div className="flex justify-center -mt-10 mb-2">
								<span className="inline-flex items-center justify-center bg-white rounded-full p-4 shadow-lg border border-[#E0E0E0]">
									<img
										src={plan.icon}
										alt={`${plan.title} icon`}
										width={32}
										height={32}
										style={{
											filter: plan.popular
												? "invert(54%) sepia(92%) saturate(7496%) hue-rotate(10deg) brightness(101%) contrast(101%)"
												: "none",
										}}
									/>
								</span>
							</div>
							{/* Highlighted Plan Title */}
							<div className="flex justify-center mb-1">
								{plan.title === "Starter" && (
									<span className="text-lg md:text-xl font-extrabold tracking-wide text-[#659999] uppercase drop-shadow-sm" style={{ letterSpacing: "0.06em" }}>
										Starter
									</span>
								)}
								{plan.title === "Pro" && (
									<span className="text-lg md:text-xl font-extrabold tracking-wide text-[#f4791f] uppercase drop-shadow-sm" style={{ letterSpacing: "0.06em" }}>
										Pro
									</span>
								)}
								{plan.title === "Enterprise" && (
									<span className="text-lg md:text-xl font-extrabold tracking-wide text-[#f4791f] uppercase drop-shadow-sm" style={{ letterSpacing: "0.06em" }}>
										Enterprise
									</span>
								)}
							</div>
							{/* Badge */}
							<div className="flex justify-center mb-2">
								<span
									className={`${
										plan.popular
											? "bg-[#f4791f] text-white animate-bounce"
											: "bg-[#FFF5EC] text-[#f4791f]"
									} px-3 py-1 rounded-full text-xs font-semibold shadow`}
								>
									{plan.badge}
								</span>
							</div>
							{/* Pricing Card */}
							<div className="flex-1 flex flex-col justify-end">
								<PricingCard
									title={plan.title}
									price={plan.price}
									features={plan.features}
									popular={plan.popular}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<style jsx>{`
				.animate-bounce {
					animation: bounce 1.2s infinite alternate;
				}
				@keyframes bounce {
					0% {
						transform: translateY(0);
					}
					100% {
						transform: translateY(-6px);
					}
				}
			`}</style>
		</section>
	);
}
