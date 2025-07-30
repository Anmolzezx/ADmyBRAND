"use client";
import React from "react";
import PricingCard from "../common/PricingCard";
import { motion } from "framer-motion";
import InteractivePricingCalculator from "../common/InteractivePricingCalculator";

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
			className="wrapper pt-10 pb-24 flex flex-col items-center"
			id="pricing"
		>
			{/* Pricing Heading and Subtitle */}
			<motion.div
				className="w-full max-w-5xl flex flex-col items-center mb-8"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.7 }}
				transition={{ duration: 0.7, ease: [0.4, 2, 0.6, 1] }}
			>
				<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-[#f4791f] drop-shadow-lg">
					Pricing
				</h2>
				<p className="text-lg md:text-xl text-center text-[#659999] font-semibold tracking-wide pb-6 mb-8">
					Unlock your endless possibilities
				</p>
			</motion.div>
			<div className="relative w-full flex justify-center">
				<motion.div
					className="grid gap-10 md:grid-cols-3 w-full max-w-5xl"
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.2 }}
					variants={{
						offscreen: { opacity: 0, y: 40 },
						onscreen: {
							opacity: 1,
							y: 0,
							transition: { staggerChildren: 0.12, delayChildren: 0.1 },
						},
					}}
				>
					{plans.map((plan, i) => (
						<motion.div
							key={i}
							className={`relative group transition-all duration-300 border ${plan.bg} ${
								plan.popular
									? "z-10 scale-105 shadow-2xl border-[#f4791f]"
									: "scale-100 shadow-lg border-[#E0E0E0]"
							} hover:scale-105 hover:shadow-2xl flex flex-col h-full rounded-b-3xl`}
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-end",
								height: "100%",
							}}
							initial={{ opacity: 0, y: 60, scale: 0.97 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: 0.6,
								delay: i * 0.08,
								type: "spring",
								bounce: 0.22,
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
						</motion.div>
					))}
				</motion.div>
			</div>
			<InteractivePricingCalculator />
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
