import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

export const metadata: Metadata = {
	title: "Tree Service in Clovis, CA | Tree Maniac Tree Service Inc.",
	description:
		"Professional tree removal, trimming & emergency tree service in Clovis, CA. Tree Maniac proudly serves Clovis and the Central Valley. Call (559) 369-5748.",
};

export default function ClovisPage() {
	return (
		<ServiceAreaTemplate
			city="Clovis"
			heroBgImage="/services/lot-and-land-clearing/IMG_7100.JPEG"
			heroImage="/services/tree-removal/IMG_1239.JPEG"
			intro="we proudly serve homeowners and businesses throughout Clovis, CA. Whether you live near Buchanan High, Old Town Clovis, or out towards Harlan Ranch, our expert team is ready to handle all your tree removal, trimming, and emergency service needs with precision and care."
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
