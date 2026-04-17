import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
	title: "Tree Removal in Fresno, CA | Tree Maniac Tree Service Inc.",
	description: "Need professional tree removal in Fresno, CA? Tree Maniac offers safe, affordable tree removal for residential and commercial properties. Call (559) 369-5748.",
};

export default function TreeRemovalPage() {
	return (
		<ServicePageTemplate
			title="Tree Removal"
			slug="tree-removal"
			heroImage="/services/tree-removal/65524423604__842AC5D4-4616-4B70-A5FA-89C9903EF790.JPEG"
			intro="When a tree becomes a hazard, eyesore, or obstacle, Tree Maniac Tree Service Inc. is the team to call. We provide professional tree removal services across Fresno and the surrounding Central Valley — safely, efficiently, and at a price that won't break the bank. Whether it's a dead tree, a storm-damaged limb, or a large tree threatening your home, our experienced crew handles every job with care and precision."
			importantNotes={[
				"Free estimates provided — no obligation to book",
				"Licensed & insured professionals on every job",
				"Same-day and emergency removal available 24/7",
				"Full debris cleanup and haul-away included",
			]}
			whyChoosePoints={[
				{
					heading: "Expert Tree Removal Fresno CA",
					body: "Trusted across Fresno and the Central Valley for safe, precise tree removal on residential and commercial properties.",
				},
				{
					heading: "Affordable, Reliable Service",
					body: "Professional results at prices that fit your budget, delivered on time, every time across all of Fresno and surrounding areas.",
				},
				{
					heading: "Proven Customer Satisfaction",
					body: "200+ satisfied customers rely on us for clean, safe, and thorough tree removal throughout the Central Valley.",
				},
			]}
		/>
	);
}
