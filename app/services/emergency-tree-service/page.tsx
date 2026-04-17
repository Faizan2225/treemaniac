import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
	title: "24/7 Emergency Tree Service in Fresno, CA | Tree Maniac",
	description: "Storm damage? Fallen tree? Tree Maniac provides 24/7 emergency tree services in Fresno, Clovis & nearby areas. Fast response — Call now: (559) 369-5748.",
};

export default function EmergencyTreeServicePage() {
	return (
		<ServicePageTemplate
			title="Emergency Tree Service"
			slug="emergency-tree-service"
			heroImage="/services/tree-removal/65524423604__842AC5D4-4616-4B70-A5FA-89C9903EF790.JPEG"
			intro="Storms don't wait — and neither do we. Tree Maniac Tree Service Inc. is on call around the clock to handle emergency tree situations including fallen trees, storm damage, blocked driveways, and hazardous limbs threatening your property. Our rapid response team is available 24/7, including weekends and holidays, to protect your home and restore your property fast."
			importantNotes={[
				"Available 24/7 — including nights, weekends & holidays",
				"Rapid response times across Fresno and surrounding areas",
				"Fallen tree and debris removal included",
				"Insurance documentation assistance available",
			]}
			whyChoosePoints={[
				{
					heading: "24/7 Emergency Response Fresno",
					body: "We're always on call — day or night — to respond to fallen trees, storm damage, and urgent hazards across Fresno, Clovis, Madera, and nearby areas.",
				},
				{
					heading: "Fast, Professional Crew",
					body: "Our experienced team arrives quickly and works efficiently to clear hazards and restore safety to your property with minimal disruption.",
				},
				{
					heading: "Full Storm Damage Cleanup",
					body: "From fallen branches to full tree removal, we handle everything — including debris hauling — so your property is safe and clean after the storm.",
				},
			]}
		/>
	);
}
