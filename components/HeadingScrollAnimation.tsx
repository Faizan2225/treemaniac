"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HeadingScrollAnimation() {
	const pathname = usePathname();

	useEffect(() => {
		// Wait brief moment for layout/react rendering to catch up
		const timer = setTimeout(() => {
			// Select headings strictly inside <section> tags (components) to exclude global nav/footer
			const headings = document.querySelectorAll(
				"section h1, section h2, section h3, section h4, section h5, section h6",
			);

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("heading-animated");
							observer.unobserve(entry.target);
						}
					});
				},
				{ threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
			);

			headings.forEach((heading) => {
				// Prevent re-processing
				if (heading.getAttribute("data-animated-processed")) return;
				heading.setAttribute("data-animated-processed", "true");

				// Remove existing animation classes to prevent flashes or clashes
				heading.classList.remove(
					"animate-fadeInLeft",
					"animate-fadeInUp",
					"scroll-heading-hidden",
					"animate-fadeInLeft-scroll",
				);

				let charCount = 0;

				// Utility to break text nodes into staggered letter spans
				function spanify(node: Node) {
					if (node.nodeType === Node.TEXT_NODE) {
						const text = node.textContent;
						if (!text) return;
						const frag = document.createDocumentFragment();
						for (let i = 0; i < text.length; i++) {
							const c = text[i];
							if (c.trim() === "") {
								// Preserve exact whitespace
								frag.appendChild(document.createTextNode(c));
							} else {
								const span = document.createElement("span");
								span.textContent = c;
								span.className =
									"char-anim inline-block opacity-0 -translate-x-3 transition-all duration-[400ms] ease-out";
								span.style.transitionDelay = `${charCount * 0.025}s`;
								frag.appendChild(span);
								charCount++;
							}
						}
						if (node.parentNode) {
							node.parentNode.replaceChild(frag, node);
						}
					} else if (node.nodeType === Node.ELEMENT_NODE) {
						const el = node as HTMLElement;
						if (!el.classList.contains("char-anim")) {
							const children = Array.from(el.childNodes);
							children.forEach(spanify);
						}
					}
				}

				Array.from(heading.childNodes).forEach(spanify);
				observer.observe(heading);
			});
		}, 100);

		return () => clearTimeout(timer);
	}, [pathname]);

	return null;
}
