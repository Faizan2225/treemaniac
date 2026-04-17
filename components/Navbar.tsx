"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
	{ label: "Tree Removal", href: "/services/tree-removal" },
	{ label: "Emergency Tree Service", href: "/services/emergency-tree-service" },
	{ label: "Tree Trimming", href: "/services/tree-trimming" },
	{ label: "Stump Grinding", href: "/services/stump-grinding" },
	{ label: "Lot & Land Clearing", href: "/services/lot-clearing" },
	{
		label: "Residential Tree Services",
		href: "/services/residential-tree-services",
	},
	{
		label: "Commercial Tree Services",
		href: "/services/commercial-tree-services",
	},
];

const areas = [
	{ label: "Fresno", href: "/service-area/fresno" },
	{ label: "Clovis", href: "/service-area/clovis" },
	{ label: "Madera", href: "/service-area/madera" },
	{ label: "Sanger", href: "/service-area/sanger" },
	{ label: "Oakhurst", href: "/service-area/oakhurst" },
];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [areasOpen, setAreasOpen] = useState(false);

	return (
		<header className="absolute top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5">
			{/* Pill-shaped floating navbar */}
			<nav className="w-full max-w-7xl bg-white rounded-full shadow-xl flex items-center justify-between px-6 py-3">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 shrink-0">
					<Image
						src="/logo.png"
						alt="Fresno Tree Service Logo"
						width={56}
						height={56}
					/>
				</Link>

				{/* Desktop nav links */}
				<ul className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700 uppercase tracking-wide">
					<li>
						<Link href="/" className="text-forest-green nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="hover:text-forest-green nav-link transition-colors"
						>
							About Us
						</Link>
					</li>
					{/* Services dropdown */}
					<li className="relative group">
						<button
							className="flex items-center gap-1 hover:text-forest-green nav-link transition-colors"
							onClick={() => setServicesOpen(!servicesOpen)}
						>
							Services
							<svg
								className="w-3 h-3 mt-0.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2.5}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						<div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
							{services.map((s) => (
								<Link
									key={s.href}
									href={s.href}
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-forest-green normal-case font-normal tracking-normal"
								>
									{s.label}
								</Link>
							))}
						</div>
					</li>
					{/* Areas dropdown */}
					<li className="relative group">
						<button
							className="flex items-center gap-1 hover:text-forest-green nav-link transition-colors"
							onClick={() => setAreasOpen(!areasOpen)}
						>
							Areas We Serve
							<svg
								className="w-3 h-3 mt-0.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2.5}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						<div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
							{areas.map((a) => (
								<Link
									key={a.href}
									href={a.href}
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-forest-green normal-case font-normal tracking-normal"
								>
									{a.label}
								</Link>
							))}
						</div>
					</li>
					<li>
						<Link
							href="/faqs"
							className="hover:text-forest-green nav-link transition-colors"
						>
							FAQs
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="hover:text-forest-green nav-link transition-colors"
						>
							Contact Us
						</Link>
					</li>
				</ul>

				{/* Phone + CTA */}
				<div className="hidden lg:flex items-center gap-3">
					<a
						href="tel:+15593695748"
						className="flex items-center gap-2 text-sm"
					>
						<div className="w-9 h-9 rounded-full bg-forest-green flex items-center justify-center shrink-0">
							<svg
								className="w-4 h-4 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
							</svg>
						</div>
						<div className="leading-tight">
							<div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
								Call Us Now
							</div>
							<div className="font-bold text-gray-800 text-sm">
								(559) 369-5748
							</div>
						</div>
					</a>
					<Link
						href="/contact"
						className="bg-forest-green hover:bg-green-800 text-white font-bold text-sm px-5 py-3 rounded-full transition-colors whitespace-nowrap"
					>
						Get a Free Quote
					</Link>
				</div>

				{/* Mobile hamburger */}
				<button
					className="lg:hidden p-2 rounded-full hover:bg-gray-100"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle menu"
				>
					<svg
						className="w-6 h-6 text-gray-700"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{mobileOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</nav>

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl py-6 px-6 flex flex-col gap-4">
					<Link
						href="/"
						className="font-semibold text-forest-green"
						onClick={() => setMobileOpen(false)}
					>
						Home
					</Link>
					<Link
						href="/about"
						className="font-semibold text-gray-700"
						onClick={() => setMobileOpen(false)}
					>
						About Us
					</Link>
					<div>
						<button
							className="font-semibold text-gray-700 w-full text-left"
							onClick={() => setServicesOpen(!servicesOpen)}
						>
							Services ▾
						</button>
						{servicesOpen && (
							<div className="mt-2 ml-4 flex flex-col gap-2">
								{services.map((s) => (
									<Link
										key={s.href}
										href={s.href}
										className="text-sm text-gray-600"
										onClick={() => setMobileOpen(false)}
									>
										{s.label}
									</Link>
								))}
							</div>
						)}
					</div>
					<div>
						<button
							className="font-semibold text-gray-700 w-full text-left"
							onClick={() => setAreasOpen(!areasOpen)}
						>
							Areas We Serve ▾
						</button>
						{areasOpen && (
							<div className="mt-2 ml-4 flex flex-col gap-2">
								{areas.map((a) => (
									<Link
										key={a.href}
										href={a.href}
										className="text-sm text-gray-600"
										onClick={() => setMobileOpen(false)}
									>
										{a.label}
									</Link>
								))}
							</div>
						)}
					</div>
					<Link
						href="/faqs"
						className="font-semibold text-gray-700"
						onClick={() => setMobileOpen(false)}
					>
						FAQs
					</Link>
					<Link
						href="/contact"
						className="font-semibold text-gray-700"
						onClick={() => setMobileOpen(false)}
					>
						Contact Us
					</Link>
					<a
						href="tel:+15593695748"
						className="font-bold text-forest-green text-lg"
					>
						(559) 369-5748
					</a>
					<Link
						href="/contact"
						className="bg-forest-green hover:bg-green-800 text-white font-bold text-center py-3 rounded-full transition-colors"
						onClick={() => setMobileOpen(false)}
					>
						Get a Free Quote
					</Link>
				</div>
			)}
		</header>
	);
}
