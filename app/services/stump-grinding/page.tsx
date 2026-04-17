import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
	title: "Stump Grinding & Removal in Fresno, CA | Tree Maniac",
	description: "Get rid of ugly stumps fast. Tree Maniac offers professional stump grinding and removal in Fresno, CA. Safe, efficient & affordable. Call (559) 369-5748.",
};

export default function StumpGrindingPage() {
	return (
		<ServicePageTemplate
			title="Stump Grinding"
			slug="stump-grinding"
			heroImage="/services/stump-trimming/IMG_5892.JPEG"
			intro="Leftover tree stumps are more than an eyesore — they're a tripping hazard and can attract pests. Tree Maniac Tree Service Inc. uses professional-grade equipment to grind and remove stumps quickly and cleanly, restoring your yard to a smooth, usable surface. We grind stumps below ground level and can fill the area with wood chips or topsoil upon request."
			importantNotes={[
				"Stumps ground below ground level for a clean finish",
				"All stump sizes handled — from small to large",
				"Wood chip fill included or can be removed",
				"Yard left clean and ready for replanting or landscaping",
			]}
			whyChoosePoints={[
				{
					heading: "Professional Stump Grinding Fresno CA",
					body: "We use professional-grade grinders to remove stumps of any size quickly and cleanly, leaving your lawn smooth and hazard-free.",
				},
				{
					heading: "Eliminate Pests & Hazards",
					body: "Old stumps attract termites, ants, and other pests. Removing them protects your property and prevents pest infestations before they start.",
				},
				{
					heading: "Restore Your Yard",
					body: "After grinding, your yard is restored and ready for new landscaping, grass seeding, or whatever you have planned — with no unsightly stump in the way.",
				},
			]}
		/>
	);
}
