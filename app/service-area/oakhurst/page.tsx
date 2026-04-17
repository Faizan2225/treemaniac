import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

export const metadata: Metadata = {
	title: "Tree Service in Oakhurst, CA | Tree Maniac Tree Service Inc.",
	description:
		"Tree removal, trimming & emergency tree service in Oakhurst, CA and the Sierra Nevada foothills. Tree Maniac has you covered. Call (559) 369-5748.",
};

export default function OakhurstPage() {
	return (
		<ServiceAreaTemplate
			city="Oakhurst"
			heroBgImage="/services/tree-removal/71692282806__81B0A94D-3ADB-4262-AB9A-E82D46C2D8B6.JPEG"
			heroImage="/services/lot-and-land-clearing/IMG_6450.JPEG"
			intro="we understand the unique tree care challenges of living in the foothills. We provide specialized tree removal, fire safety clearing, and emergency response services to homeowners and businesses throughout Oakhurst, Coarsegold, and Coalinga."
			nearbyAreas={[
				"Fresno",
				"Clovis",
				"Madera",
				"Sanger",
				"Sunnyside",
				"Tarpey Village",
				"Malaga",
				"Del Rey",
				"Fowler",
				"Selma",
				"Kerman",
				"Biola",
				"Friant",
				"Pinedale",
				"West Park",
				"Roosevelt",
				"Edison",
				"Calwa",
				"Herndon",
				"Fig Garden",
			]}
		/>
	);
}
