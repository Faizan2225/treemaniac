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
			heroBgImage="/services/stump-trimming/IMG_5892.JPEG"
			heroImage="/services/tree-trimming/IMG_4917.JPEG"
			intro="we are Sanger's trusted choice for professional tree services. Whether you need an old stump removed, a dangerous tree taken down, or regular pruning to keep your oaks healthy, our experienced crew is fully equipped to handle projects of any size across the Nation's Christmas Tree City."
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
