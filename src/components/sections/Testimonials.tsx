"use client";
import React, { useState, useEffect, useRef } from "react";
import TestimonialCard from "../common/TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { icons, images } from "../../../constants";

const testimonials = [
	{
		name: "Jane Doe",
		company: "Acme Corp",
		quote: "ADmyBRAND AI Suite transformed our marketing workflow and boosted our ROI.",
		avatar: images.avatar1,
	},
	{
		name: "John Smith",
		company: "Beta Inc",
		quote: "The analytics and automation features are top-notch. Highly recommended!",
		avatar: images.avatar2,
	},
	{
		name: "Sara Lee",
		company: "Gamma LLC",
		quote: "Seamless integration and great support. Our team loves it.",
		avatar: images.avatar3,
	},
	{
		name: "Alex Kim",
		company: "Delta Media",
		quote: "The glassmorphic UI is beautiful and the features are powerful.",
		avatar: images.avatar4,
	},
	{
		name: "Priya Patel",
		company: "Omega Solutions",
		quote: "ADmyBRAND made campaign management effortless for our team.",
		avatar: images.avatar5,
	},
];

function useResponsiveSlides() {
	const [slidesToShow, setSlidesToShow] = useState(3);
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 640) setSlidesToShow(1);
			else if (window.innerWidth < 1024) setSlidesToShow(2);
			else setSlidesToShow(3);
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return slidesToShow;
}

export default function Testimonials() {
	const slidesToShow = useResponsiveSlides();
	const [current, setCurrent] = useState(0);
	const [paused, setPaused] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Calculate visible testimonials
	const total = testimonials.length;
	const getVisible = () => {
		if (slidesToShow === 1) return [testimonials[current]];
		if (slidesToShow === 2)
			return [
				testimonials[current],
				testimonials[(current + 1) % total],
			];
		// slidesToShow === 3
		return [
			testimonials[current],
			testimonials[(current + 1) % total],
			testimonials[(current + 2) % total],
		];
	};

	// Auto-slide logic
	useEffect(() => {
		if (paused) return;
		timeoutRef.current = setTimeout(() => {
			setCurrent((prev) => (prev + 1) % total);
		}, 4000);
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [current, paused, slidesToShow, total]);

	// Manual navigation
	const goLeft = () => setCurrent((prev) => (prev - 1 + total) % total);
	const goRight = () => setCurrent((prev) => (prev + 1) % total);

	// Pagination dots
	const dotCount = total;
	const isActiveDot = (idx: number) => {
		if (slidesToShow === 1) return idx === current;
		if (slidesToShow === 2) return idx === current || idx === (current + 1) % total;
		return (
			idx === current ||
			idx === (current + 1) % total ||
			idx === (current + 2) % total
		);
	};

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
			<h2
				className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight flex items-center gap-3 leading-tight"
				style={{
					background: "linear-gradient(90deg, #f4791f 0%, #ffbc5b 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					textShadow: "0 2px 12px rgba(244,121,31,0.15)",
					fontWeight: 800,
					lineHeight: "1.15",
				}}
			>
				<span style={{ paddingBottom: "0.1em" }}>What Our Customers Say</span>
			</h2>
			<p
				className="text-lg md:text-xl text-center mb-10 font-semibold tracking-wide"
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
				{/* Left Arrow */}
				<button
					aria-label="Previous testimonial"
					className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow hover:bg-[#fff5ec] border border-[#f4791f] transition-all duration-200"
					style={{ display: slidesToShow === 1 ? "flex" : "none" }}
					onClick={goLeft}
				>
					<ChevronLeft className="w-6 h-6 text-[#f4791f]" />
				</button>
				{/* Carousel */}
				<div
					className={`flex w-full max-w-5xl items-stretch justify-center relative`}
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
				>
					<AnimatePresence initial={false} mode="wait">
						<motion.div
							key={current + "-" + slidesToShow}
							className={`flex gap-8 md:gap-12 w-full justify-center items-stretch`}
							initial={{ opacity: 0, x: 60 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -60 }}
							transition={{ duration: 0.5, ease: [0.4, 2, 0.6, 1] }}
						>
							{getVisible().map((t, i) => {
								const isMiddle =
									slidesToShow === 3
										? i === 1
										: slidesToShow === 2
										? i === 0
										: true;
								return (
									<div
										key={t.name + t.company}
										className={`inline-block w-full sm:w-96 align-top transition-transform duration-300 group ${
											isMiddle
												? "scale-110 z-10 shadow-2xl"
												: "scale-95 opacity-80"
										}`}
										style={{
											minWidth: slidesToShow === 1 ? "100%" : undefined,
											maxWidth: 400,
											transition: "transform 0.3s, box-shadow 0.3s, opacity 0.3s",
										}}
									>
										<div className="transition-transform duration-300 group-hover:scale-110 group-hover:z-20">
											<TestimonialCard {...t} />
										</div>
									</div>
								);
							})}
						</motion.div>
					</AnimatePresence>
				</div>
				{/* Right Arrow */}
				<button
					aria-label="Next testimonial"
					className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow hover:bg-[#fff5ec] border border-[#f4791f] transition-all duration-200"
					style={{ display: slidesToShow === 1 ? "flex" : "none" }}
					onClick={goRight}
				>
					<ChevronRight className="w-6 h-6 text-[#f4791f]" />
				</button>
			</div>
			{/* Pagination Dots */}
			<div className="flex justify-center gap-2 mt-8">
				{Array.from({ length: dotCount }).map((_, idx) => (
					<button
						key={idx}
						aria-label={`Go to testimonial ${idx + 1}`}
						className={`w-3 h-3 rounded-full transition-all duration-200 border-2 ${
							isActiveDot(idx)
								? "bg-[#f4791f] border-[#f4791f] scale-110"
								: "bg-[#fff5ec] border-[#f4791f] opacity-60"
						}`}
						onClick={() => setCurrent(idx)}
					/>
				))}
			</div>
			<style jsx>{`
				@media (max-width: 640px) {
					.w-96 {
						width: 100% !important;
						min-width: 0 !important;
						max-width: 100vw !important;
					}
				}
			`}</style>
		</section>
	);
}
