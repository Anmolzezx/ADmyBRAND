"use client";
import React from "react";
import Accordion from "../common/Accordion";

const faqs = [
	{
		question: "What is ADmyBRAND AI Suite?",
		answer:
			"It is an all-in-one platform for automating and optimizing your marketing campaigns using AI.",
	},
	{
		question: "Can I try it for free?",
		answer: "Yes, we offer a free trial for all new users.",
	},
	{
		question: "Is my data secure?",
		answer:
			"Absolutely. We use industry-standard security practices to protect your data.",
	},
	{
		question: "Can I integrate with my CRM?",
		answer: "Yes, we support integrations with major CRM and marketing tools.",
	},
	{
		question: "Do you offer support?",
		answer: "Our team is available 24/7 via chat and email.",
	},
];

export default function FAQ() {
	return (
		<section
			className="wrapper py-24 flex flex-col items-center"
			id="faq"
		>
			<h2 className="h2-bold text-center mb-10 flex items-center gap-3">
				<svg
					width={32}
					height={32}
					fill="none"
					viewBox="0 0 40 40"
				>
					<circle
						cx={20}
						cy={20}
						r={18}
						stroke="#635BFF"
						strokeWidth={4}
					/>
					<text
						x="50%"
						y="60%"
						textAnchor="middle"
						fill="#635BFF"
						fontSize="18"
						fontWeight="bold"
						dy=".3em"
					>
						?
					</text>
				</svg>
				Frequently Asked Questions
			</h2>
			<div className="w-full max-w-2xl animate-fade-in">
				<Accordion
					items={faqs}
					className="max-w-2xl mx-auto"
				/>
			</div>
			<style jsx>{`
				.animate-fade-in {
					animation: fade-in 0.7s cubic-bezier(0.4, 2, 0.6, 1) both;
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
			`}</style>
		</section>
	);
}
