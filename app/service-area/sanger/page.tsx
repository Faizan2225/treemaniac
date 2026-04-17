import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

export const metadata: Metadata = {
	title: "Tree Service in Sanger, CA | Tree Maniac Tree Service Inc.",
	description:
		"Professional tree removal, trimming & 24/7 emergency tree service in Sanger, CA. Tree Maniac is your local expert. Call (559) 369-5748.",
};

export default function SangerPage() {
	return (
		<ServiceAreaTemplate
			city="Sanger"
			intro="we are your local tree service expert in Sanger, CA — available 24/7 for all tree care needs in Sanger and the surrounding foothills area. Whether you need hazardous tree removal, routine trimming, or emergency storm cleanup, our crew responds fast and gets the job done right."
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
