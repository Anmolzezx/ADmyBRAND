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
		icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/star.svg",
		badge: "Free Forever",
		accent: "from-[#EDEBFF] to-[#F9F8FF]",
		popular: false,
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
		icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/award.svg",
		badge: "Best Value",
		accent: "from-[#DCD9F9] to-[#EDEBFF]",
		popular: true,
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
		icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/briefcase.svg",
		badge: "Custom",
		accent: "from-[#F6F5FF] to-[#EDEBFF]",
		popular: false,
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
							className={`relative group transition-all duration-300 ${
								plan.popular
									? "z-10 scale-105 shadow-2xl bg-gradient-to-br from-[#EDEBFF] to-[#F9F8FF] border-[#635BFF]"
									: "scale-100 shadow-lg bg-white border-[#E0E0E0]"
							} hover:scale-105 hover:shadow-2xl`}
							style={{
								transition: "box-shadow 0.3s, transform 0.3s",
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
												? "invert(41%) sepia(97%) saturate(7496%) hue-rotate(241deg) brightness(90%) contrast(101%)"
												: "none",
										}}
									/>
								</span>
							</div>
							{/* Badge */}
							<div className="flex justify-center mb-2">
								<span
									className={`${
										plan.popular
											? "bg-[#635BFF] text-white animate-bounce"
											: "bg-[#EDEBFF] text-[#635BFF]"
									} px-3 py-1 rounded-full text-xs font-semibold shadow`}
								>
									{plan.badge}
								</span>
							</div>
							<PricingCard
								title={plan.title}
								price={plan.price}
								features={plan.features}
								popular={plan.popular}
							/>
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
