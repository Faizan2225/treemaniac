"use client";

import { useState } from "react";

const reviews = [
	{
		text: "Tree Maniac exceeded my expectations and went above and beyond. The crew was very communicative and committed to making sure I was happy throughout the whole process. They definitely know what they're doing and are willing to work with your every need.",
		author: "Maria Gonzalez",
		location: "Fresno, CA",
	},
	{
		text: "Fast, professional, and fair pricing. Tree Maniac came out the same day I called for an emergency tree removal after the storm. The team was courteous, worked efficiently, and left my yard spotless. Highly recommend!",
		author: "James Thornton",
		location: "Clovis, CA",
	},
	{
		text: "I've used Tree Maniac twice now — once for trimming and once for stump grinding. Both times the service was outstanding. They show up on time, get the job done right, and the price was very reasonable.",
		author: "Sandra Reyes",
		location: "Madera, CA",
	},
];

export default function Testimonials() {
	const [active, setActive] = useState(0);
	const r = reviews[active];

	return (
		<section
			className="relative py-24 px-6 overflow-hidden"
			style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)" }}
		>
			<div className="max-w-3xl mx-auto text-center">

				{/* Badge */}
				<div
					className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5 text-white font-bold text-xs uppercase tracking-widest"
					style={{ backgroundColor: "#22C55E" }}
				>
					TESTIMONIAL <span>🌲</span>
				</div>

				{/* Heading */}
				<h2
					className="font-tenor-sans font-bold mb-3"
					style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1B6B2A" }}
				>
					What our happy clients say about us?
				</h2>
				<p className="text-gray-500 text-sm mb-12 max-w-xl mx-auto leading-relaxed">
					Hear from satisfied clients across Fresno, CA who trust{" "}
					<strong className="text-gray-700">Tree Maniac Tree Service Inc.</strong>{" "}
					for professional tree removal, trimming, and emergency tree care.
				</p>

				{/* Large quote marks */}
				<div className="relative">
					<span
						className="absolute -top-6 left-1/2 -translate-x-1/2 select-none pointer-events-none font-serif leading-none"
						style={{ fontSize: "9rem", color: "rgba(27,107,42,0.1)", lineHeight: 1 }}
					>
						"
					</span>

					<blockquote
						key={active}
						className="relative z-10 text-gray-700 italic leading-relaxed mb-6"
						style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
					>
						"{r.text}"
					</blockquote>
				</div>

				<p className="font-semibold text-gray-800 mb-8">{r.author}</p>

				{/* Dot pagination */}
				<div className="flex justify-center items-center gap-2">
					{reviews.map((_, i) => (
						<button
							key={i}
							onClick={() => setActive(i)}
							className="rounded-full transition-all duration-300"
							style={{
								width: active === i ? "28px" : "10px",
								height: "10px",
								backgroundColor: active === i ? "#22C55E" : "rgba(27,107,42,0.25)",
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
