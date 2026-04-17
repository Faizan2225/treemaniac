import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

export const metadata: Metadata = {
	title: "Tree Service in Madera, CA | Tree Maniac Tree Service Inc.",
	description:
		"Expert tree removal, trimming & emergency tree service in Madera, CA. Tree Maniac serves Madera and surrounding rural properties. Call (559) 369-5748.",
};

export default function MaderaPage() {
	return (
		<ServiceAreaTemplate
			city="Madera"
			intro="we provide expert tree removal, trimming, and emergency services throughout Madera, CA. From downtown Madera to surrounding rural properties, our experienced crew handles jobs of all sizes — available 24/7 with fair pricing and professional results you can count on."
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
