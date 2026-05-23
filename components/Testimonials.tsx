"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
	id: number;
	name: string;
	avatar: string;
	rating: number;
	date: string;
	service: string;
	text: string;
	verified: boolean;
	avatarBg: string;
}

const REVIEWS_DATA: Review[] = [
	{
		id: 1,
		name: "Joel R.",
		avatar: "JR",
		rating: 5,
		date: "3 months ago",
		service: "Trimming & Pruning",
		text: "Johnny did a wonderful job trimming my 4 palm trees. Team was very professional and cleaned everything up perfectly after the job. Their pricing was the best I found. Highly recommend!",
		verified: true,
		avatarBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
	},
	{
		id: 2,
		name: "Cathy F.",
		avatar: "CF",
		rating: 5,
		date: "1 month ago",
		service: "Tree Removal",
		text: "Tree Maniac is hands down the best tree company I have ever used and I have had three other big trees removed from different companies. Pricing was excellent. The clean up was so good I am able to just walk away without having to do any touch up cleaning. Rest assured you will not be disappointed.",
		verified: true,
		avatarBg: "bg-green-100 text-green-800 border-green-200",
	},
	{
		id: 3,
		name: "Gregorio T.",
		avatar: "GT",
		rating: 5,
		date: "2 weeks ago",
		service: "Tree Removal",
		text: "I called to inquired about knocking down a tree around 1:30pm… they called me back by 2pm to get an estimate… 2:30 made an appointment for today… by 3:45 tree down, cut up and ready for disposal. Thank you for the Great Work!!!",
		verified: true,
		avatarBg: "bg-lime-100 text-lime-800 border-lime-200",
	},
	{
		id: 4,
		name: "Brian D.",
		avatar: "BD",
		rating: 5,
		date: "4 months ago",
		service: "Trimming & Pruning",
		text: "Great service at affordable prices. Don't hesitate to use Tree Maniac. I had them trim my queen palms and they did a fantastic job.",
		verified: true,
		avatarBg: "bg-teal-100 text-teal-800 border-teal-200",
	},
	{
		id: 5,
		name: "Oscar M.",
		avatar: "OM",
		rating: 5,
		date: "3 weeks ago",
		service: "Stump Grinding",
		text: "Johnny was quick to give an estimate and ground out two huge oak stumps in my front yard. Clean and professional. Definitely highly recommend their stump grinding services!",
		verified: true,
		avatarBg: "bg-amber-100 text-amber-800 border-amber-200",
	},
	{
		id: 6,
		name: "Jon N.",
		avatar: "JN",
		rating: 5,
		date: "2 months ago",
		service: "General Maintenance",
		text: "Everything went well, from initial contact, the service, and the cleanup. Johnny's is a no-brainer next time I need something done.",
		verified: true,
		avatarBg: "bg-sky-100 text-sky-800 border-sky-200",
	},
];

const CATEGORIES = ["All", "Tree Removal", "Trimming & Pruning", "Stump Grinding", "General Maintenance"];

export default function Testimonials() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredReviews = activeCategory === "All"
		? REVIEWS_DATA
		: REVIEWS_DATA.filter((r) => r.service === activeCategory);

	return (
		<section
			className="relative py-24 px-6 overflow-hidden"
			style={{
				backgroundColor: "#f8fdf8",
			}}
		>
			{/* Mascot placed safely at the bottom right behind text to ensure it does not overlap or hide anything */}
			<motion.div 
				initial={{ x: 50, opacity: 0 }}
				whileInView={{ x: 0, opacity: 0.8 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="absolute -bottom-4 -right-2 sm:-bottom-2 sm:right-10 w-28 sm:w-40 z-0 pointer-events-none"
			>
				<Image
					src="/mascot.png"
					alt="Tree Maniac mascot"
					width={160}
					height={200}
					style={{ width: "auto", height: "auto" }}
					className="object-contain"
				/>
			</motion.div>

			<div className="relative z-10 max-w-6xl mx-auto">
				{/* Top Section */}
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="text-center mb-12"
				>
					{/* Badge */}
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5 text-white font-bold text-xs uppercase tracking-widest"
						style={{ backgroundColor: "#22C55E" }}
					>
						TESTIMONIALS <span>🌲</span>
					</div>

					{/* Heading */}
					<h2
						className="font-tenor-sans font-bold mb-3"
						style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1B6B2A" }}
					>
						What our happy clients say about us?
					</h2>
					<p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed mb-8">
						Hear from satisfied clients across Fresno, CA who trust{" "}
						<strong className="text-gray-700">
							Tree Maniac Tree Service Inc.
						</strong>{" "}
						for professional tree removal, trimming, and emergency tree care.
					</p>

					{/* Google Overall Rating Card */}
					<div className="flex justify-center mb-10">
						<div className="bg-white/80 backdrop-blur-md border border-emerald-500/10 rounded-2xl p-6 shadow-xl max-w-md w-full flex flex-col sm:flex-row items-center gap-6 justify-center">
							<div className="flex flex-col items-center sm:items-start">
								<div className="flex items-center gap-2 mb-1">
									{/* Google SVG Logo */}
									<svg viewBox="0 0 24 24" width="24" height="24" className="w-6 h-6">
										<path
											fill="#4285F4"
											d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
										/>
										<path
											fill="#34A853"
											d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										/>
										<path
											fill="#FBBC05"
											d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
										/>
										<path
											fill="#EA4335"
											d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
										/>
									</svg>
									<span className="font-semibold text-gray-800 text-sm">Google Reviews</span>
								</div>
								<div className="flex items-center gap-1">
									<span className="text-3xl font-extrabold text-gray-900">4.9</span>
									<div className="flex flex-col justify-center">
										<div className="flex text-amber-400">
											{[...Array(5)].map((_, i) => (
												<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
													<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
												</svg>
											))}
										</div>
										<span className="text-xs text-gray-500">Based on 60+ ratings</span>
									</div>
								</div>
							</div>
							<div className="h-px sm:h-12 w-full sm:w-px bg-gray-200"></div>
							<div className="text-center sm:text-left">
								<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
									<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
									100% Verified
								</span>
								<p className="text-xs text-gray-500 mt-1">Excellent client satisfaction rating</p>
							</div>
						</div>
					</div>

					{/* Interactive Category Filter */}
					<div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto px-4 mb-4">
						{CATEGORIES.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveCategory(cat)}
								className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
									activeCategory === cat
										? "text-white shadow-md shadow-emerald-700/20 scale-105"
										: "bg-white text-gray-600 hover:bg-emerald-50 border border-gray-100"
								}`}
								style={{
									backgroundColor: activeCategory === cat ? "#1B6B2A" : undefined,
								}}
							>
								{cat}
							</button>
						))}
					</div>
				</motion.div>

				{/* Testimonial Cards Grid with AnimatePresence */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
					<AnimatePresence mode="popLayout">
						{filteredReviews.map((review, idx) => (
							<motion.div
								key={review.id}
								layout
								initial={{ opacity: 0, y: 30, scale: 0.95 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9, y: 10 }}
								transition={{ duration: 0.4, ease: "easeInOut", delay: idx * 0.05 }}
								className="bg-white border border-emerald-500/5 rounded-2xl p-6 shadow-lg shadow-emerald-950/[0.02] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
							>
								<div>
									{/* Top Bar inside Card */}
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											{/* Avatar */}
											<div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border ${review.avatarBg}`}>
												{review.avatar}
											</div>
											<div>
												<h3 className="font-semibold text-gray-800 text-sm group-hover:text-emerald-800 transition-colors">
													{review.name}
												</h3>
												<div className="flex items-center gap-1.5">
													<span className="text-[11px] text-gray-400">{review.date}</span>
													<span className="text-gray-300 text-[10px]">•</span>
													<span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
														{review.service}
													</span>
												</div>
											</div>
										</div>

										{/* Google Icon & Verified Badge */}
										<div className="flex flex-col items-end">
											<svg viewBox="0 0 24 24" width="16" height="16" className="w-4 h-4">
												<path
													fill="#4285F4"
													d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
												/>
												<path
													fill="#34A853"
													d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
												/>
												<path
													fill="#FBBC05"
													d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
												/>
												<path
													fill="#EA4335"
													d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
												/>
											</svg>
											<span className="text-[9px] text-emerald-600 font-semibold mt-0.5">Verified</span>
										</div>
									</div>

									{/* Star Rating */}
									<div className="flex text-amber-400 mb-3 gap-0.5">
										{[...Array(review.rating)].map((_, i) => (
											<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
												<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
											</svg>
										))}
									</div>

									{/* Review Text */}
									<p className="text-gray-600 text-sm leading-relaxed italic">
										"{review.text}"
									</p>
								</div>

								{/* Bottom Tag */}
								<div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
									<span>Tree Maniac Client</span>
									<span className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
										<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
										Highly Recommend
									</span>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
