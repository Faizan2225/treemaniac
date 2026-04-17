import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

export const metadata: Metadata = {
	title: "Tree Service in Fresno, CA | Tree Maniac Tree Service Inc.",
	description:
		"Professional tree removal, trimming, stump grinding & emergency tree service in Fresno, CA. Serving all Fresno neighborhoods. Call (559) 369-5748.",
};

export default function FresnoPage() {
	return (
		<ServiceAreaTemplate
			city="Fresno"
			intro="we keep properties across Fresno safe, clean, and beautiful. As the heart of the Central Valley, Fresno is our home base. We serve all Fresno neighborhoods including Fig Garden, Sunnyside, Tarpey Village, West Park, Herndon, Edison, Calwa, Roosevelt, and more — with fast, professional tree care at fair prices."
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
