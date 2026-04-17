import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
	title: "Tree Trimming & Pruning in Fresno, CA | Tree Maniac",
	description: "Professional tree trimming and pruning services in Fresno, CA. Keep your trees healthy and beautiful. Call Tree Maniac at (559) 369-5748 for a free estimate.",
};

export default function TreeTrimmingPage() {
	return (
		<ServicePageTemplate
			title="Tree Trimming & Pruning"
			slug="tree-trimming"
			heroBgImage="/services/tree-trimming/IMG_4917.JPEG"
			heroImage="/services/tree-trimming/IMG_1267.JPEG"
			intro="Regular tree trimming keeps your trees healthy, your yard looking great, and your property safe. Tree Maniac Tree Service Inc. provides expert trimming and pruning services for all tree types across Fresno and the Central Valley. From shaping and deadwood removal to crown reduction and canopy thinning, we deliver precise results that improve both the health and appearance of your trees."
			importantNotes={[
				"Free estimates — no obligation",
				"All tree types and sizes serviced",
				"Seasonal pruning schedules available",
				"Debris cleanup included with every service",
			]}
			whyChoosePoints={[
				{
					heading: "Expert Trimming & Pruning Fresno CA",
					body: "Trusted across Fresno for precision trimming that improves tree health, reduces hazards, and keeps your property looking its best year-round.",
				},
				{
					heading: "Affordable, Reliable Service",
					body: "Premium trimming results at prices that fit your budget — on time, every time, throughout Fresno and surrounding communities.",
				},
				{
					heading: "Healthy Trees, Beautiful Property",
					body: "Proper pruning extends tree lifespan, improves sunlight penetration, and reduces the risk of storm damage — protecting your investment long-term.",
				},
			]}
		/>
	);
}
