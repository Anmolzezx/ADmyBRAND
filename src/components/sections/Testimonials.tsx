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
				scrollAmount += 0.7;
				if (scrollAmount >= container.scrollWidth / 2) {
					scrollAmount = 0;
				}
				container.scrollLeft = scrollAmount;
			}
			animationFrame = requestAnimationFrame(scroll);
		};

		scroll();

		const handleMouseEnter = () => { paused = true; };
		const handleMouseLeave = () => { paused = false; };

		container.addEventListener("mouseenter", handleMouseEnter);
		container.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			cancelAnimationFrame(animationFrame);
			container.removeEventListener("mouseenter", handleMouseEnter);
			container.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	const looped = [...testimonials, ...testimonials];

	return (
		<section
			className="wrapper py-24 flex flex-col items-center relative overflow-x-clip"
			id="testimonials"
			style={{
				background: "linear-gradient(135deg, #fff7f0 0%, #ffe0c1 60%, #f3e7e9 100%)",
				borderRadius: "2rem",
				boxShadow: "0 8px 32px 0 rgba(244,121,31,0.10), 0 2px 8px 0 rgba(99,91,255,0.08)",
			}}
		>
			<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight flex items-center gap-3"
				style={{
					background: "linear-gradient(90deg, #f4791f 0%, #ffbc5b 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					textShadow: "0 2px 12px rgba(244,121,31,0.15)",
					fontWeight: 800,
				}}
			>
				<svg width={44} height={44} fill="none" viewBox="0 0 44 44">
					<circle cx={22} cy={22} r={20} stroke="#f4791f" strokeWidth={4} />
					<path d="M15 29c0-5 4-9 7-9s7 4 7 9" stroke="#f4791f" strokeWidth={2.5} />
				</svg>
				<span>What Our Customers Say</span>
			</h2>
			<p className="text-lg md:text-xl text-center mb-10 font-semibold tracking-wide"
				style={{
					color: "#f4791f",
					background: "linear-gradient(90deg, #f4791f 0%, #ffbc5b 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
			>
				Real stories from real users. See how we help brands grow.
			</p>
			<div className="relative w-full flex justify-center">
				<div
					ref={scrollRef}
					className="flex gap-8 md:gap-12 overflow-x-auto no-scrollbar py-4 scroll-smooth items-stretch"
					style={{
						minWidth: 700,
						scrollBehavior: "smooth",
						whiteSpace: "nowrap",
						justifyContent: "center",
						alignItems: "stretch",
					}}
				>
					{looped.map((t, i) => (
						<div key={i} className="inline-block w-80 align-top">
							<TestimonialCard {...t} />
						</div>
					))}
				</div>
				{/* Gradient fade on sides */}
				<div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#fff7f0] to-transparent z-10" />
				<div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#ffe0c1] to-transparent z-10" />
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
