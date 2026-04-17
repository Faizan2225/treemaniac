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
			intro="we serve Oakhurst, CA and the Sierra Nevada foothills with expert tree care. Whether you need hazardous tree removal on a slope, routine trimming of mature trees, or emergency storm cleanup in the foothills, we have the crew and equipment to handle it safely and efficiently."
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
