"use client";
import React from "react";
import PricingCard from "../common/PricingCard";

const plans = [
	{
		title: "Starter",
		price: "$19/mo",
		features: ["Basic AI tools", "Email support", "Single user"],
		popular: false,
	},
	{
		title: "Pro",
		price: "$49/mo",
		features: ["All Starter features", "Advanced analytics", "Team access"],
		popular: true,
	},
	{
		title: "Enterprise",
		price: "Contact us",
		features: ["All Pro features", "Custom integrations", "Dedicated support"],
		popular: false,
	},
];

export default function Pricing() {
	return (
		<section
			className="wrapper py-24 flex flex-col items-center"
			id="pricing"
		>
			<h2 className="h2-bold text-center mb-10">Pricing</h2>
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
							{plan.popular && (
								<span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#635BFF] text-white rounded-full text-xs font-bold shadow-lg animate-bounce z-20">
									Most Popular
								</span>
							)}
							<PricingCard {...plan} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
