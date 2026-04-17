import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
	title: "Residential Tree Services in Fresno, CA | Tree Maniac",
	description: "From trimming to removal, Tree Maniac handles all residential tree services in Fresno, CA. Trusted by homeowners throughout the Central Valley. Call (559) 369-5748.",
};

export default function ResidentialTreeServicesPage() {
	return (
		<ServicePageTemplate
			title="Residential Tree Services"
			slug="residential-tree-services"
			heroImage="/services/tree-trimming/IMG_1695.JPEG"
			intro="Your home deserves the best care. Tree Maniac Tree Service Inc. provides a full range of residential tree services — from regular trimming and pruning to emergency removal and stump grinding. We treat every home like it's our own, delivering clean, safe, and professional results every time. Homeowners across Fresno and the Central Valley trust us for reliable, friendly service at fair prices."
			importantNotes={[
				"Full range of tree services for homeowners",
				"Available 24/7 for emergency situations",
				"Licensed & insured — your property is protected",
				"Transparent pricing with free estimates",
			]}
			whyChoosePoints={[
				{
					heading: "Trusted by Fresno Homeowners",
					body: "Hundreds of satisfied homeowners across Fresno and the Central Valley rely on Tree Maniac for safe, professional residential tree care.",
				},
				{
					heading: "All Residential Tree Services in One Place",
					body: "From routine trimming and pruning to emergency removal, stump grinding, and lot clearing — we handle everything so you don't have to call multiple contractors.",
				},
				{
					heading: "Friendly, Professional Service",
					body: "We treat your property with respect, communicate clearly throughout the job, and leave your yard clean and tidy when we're done.",
				},
			]}
		/>
	);
}
