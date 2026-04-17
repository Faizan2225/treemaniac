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
			intro="we proudly serve Clovis, CA — one of the fastest-growing communities in the Central Valley. Our team is ready for residential and commercial tree care throughout Clovis, delivering reliable, affordable service with fast response times and professional results every time."
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
