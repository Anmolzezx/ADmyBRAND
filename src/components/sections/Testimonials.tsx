"use client";
import React, { useRef, useEffect } from "react";
import TestimonialCard from "../common/TestimonialCard";

const testimonials = [
	{
		name: "Jane Doe",
		company: "Acme Corp",
		quote: "ADmyBRAND AI Suite transformed our marketing workflow and boosted our ROI.",
		avatar: "/assets/images/avatar1.png",
	},
	{
		name: "John Smith",
		company: "Beta Inc",
		quote: "The analytics and automation features are top-notch. Highly recommended!",
		avatar: "/assets/images/avatar2.png",
	},
	{
		name: "Sara Lee",
		company: "Gamma LLC",
		quote: "Seamless integration and great support. Our team loves it.",
		avatar: "/assets/images/avatar3.png",
	},
	{
		name: "Alex Kim",
		company: "Delta Media",
		quote: "The glassmorphic UI is beautiful and the features are powerful.",
		avatar: "/assets/images/avatar4.png",
	},
];

export default function Testimonials() {
	const scrollRef = useRef<HTMLDivElement>(null);

	// Auto-scroll logic
	useEffect(() => {
		const container = scrollRef.current;
		if (!container) return;
		let animationFrame: number;
		let scrollAmount = 0;
		let paused = false;

		const scroll = () => {
			if (!paused) {
				scrollAmount += 0.7; // speed
				if (scrollAmount >= container.scrollWidth / 2) {
					scrollAmount = 0;
				}
				container.scrollLeft = scrollAmount;
			}
			animationFrame = requestAnimationFrame(scroll);
		};

		scroll();

		const handleMouseEnter = () => {
			paused = true;
		};
		const handleMouseLeave = () => {
			paused = false;
		};

		container.addEventListener("mouseenter", handleMouseEnter);
		container.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			cancelAnimationFrame(animationFrame);
			container.removeEventListener("mouseenter", handleMouseEnter);
			container.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	// Duplicate testimonials for seamless loop
	const looped = [...testimonials, ...testimonials];

	return (
		<section className="wrapper py-24 flex flex-col items-center" id="testimonials">
			<h2 className="h2-bold text-center mb-10 flex items-center gap-3">
				<svg width={32} height={32} fill="none" viewBox="0 0 40 40">
					<circle cx={20} cy={20} r={18} stroke="#635BFF" strokeWidth={4} />
					<path d="M13 25c0-4 3-7 7-7s7 3 7 7" stroke="#635BFF" strokeWidth={2} />
				</svg>
				What Our Customers Say
			</h2>
			<div className="relative w-full max-w-5xl">
				<div
					ref={scrollRef}
					className="flex gap-8 md:gap-12 overflow-x-auto no-scrollbar py-4 scroll-smooth"
					style={{
						minWidth: 700,
						scrollBehavior: "smooth",
						whiteSpace: "nowrap",
					}}
				>
					{looped.map((t, i) => (
						<div key={i} className="inline-block w-80">
							<TestimonialCard {...t} />
						</div>
					))}
				</div>
				{/* Gradient fade on sides */}
				<div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F6F5FF] to-transparent z-10" />
				<div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F6F5FF] to-transparent z-10" />
			</div>
			<style jsx>{`
				.no-scrollbar::-webkit-scrollbar {
					display: none;
				}
				.no-scrollbar {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
			`}</style>
		</section>
	);
}
