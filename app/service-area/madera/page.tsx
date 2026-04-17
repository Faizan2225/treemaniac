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
			heroBgImage="/services/tree-trimming/IMG_1695.JPEG"
			heroImage="/services/lot-and-land-clearing/IMG_1694.JPG"
			intro="we provide expert tree care services to Madera and surrounding communities. From residential trimming to large-scale lot clearing, our licensed and insured team delivers safe, reliable, and affordable tree solutions to keep Madera properties beautiful and hazard-free."
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
