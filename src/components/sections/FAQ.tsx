"use client";
import React from "react";
import Image from "next/image";
import Accordion from "../common/Accordion";
import { icons } from "lucide-react";
import { images } from "../../../constants";
import { motion } from "framer-motion";

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
			style={{
				borderRadius: "2rem",
			}}
		>
			<motion.h2
				className="h2-bold text-center mb-10 flex items-center gap-3 font-extrabold text-4xl md:text-5xl"
				style={{
					background: "linear-gradient(90deg, #635BFF 0%, #f4791f 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					textShadow: "0 2px 12px rgba(99,91,255,0.12)",
					fontWeight: 800,
				}}
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.7 }}
				transition={{ duration: 0.7, ease: [0.4, 2, 0.6, 1] }}
			>
				<Image
					src={images.faq}
					alt="Question Mark"
					width={44}
					height={44}
					style={{ flexShrink: 0 }}
				/>
				FAQs
			</motion.h2>
			<motion.div
				className="w-full max-w-2xl animate-fade-in"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 2, 0.6, 1] }}
			>
				<Accordion
					items={faqs}
					className="max-w-2xl mx-auto"
				/>
			</motion.div>
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
