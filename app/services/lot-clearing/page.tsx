import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
	title: "Lot Clearing & Land Clearing in Fresno, CA | Tree Maniac",
	description: "Need lot or land clearing in Fresno? Tree Maniac clears overgrown land, removes trees and debris for residential and commercial projects. Call (559) 369-5748.",
};

export default function LotClearingPage() {
	return (
		<ServicePageTemplate
			title="Lot & Land Clearing"
			slug="lot-clearing"
			heroImage="/services/lot-and-land-clearing/IMG_3518.JPEG"
			intro="Planning a construction project, landscaping renovation, or simply reclaiming overgrown land? Tree Maniac Tree Service Inc. provides complete lot and land clearing services throughout Fresno and the Central Valley — removing trees, brush, stumps, and debris so your land is ready to use. We handle projects of all sizes, from small residential lots to large commercial parcels."
			importantNotes={[
				"Residential and commercial lot clearing available",
				"Full debris and brush removal included",
				"Stump grinding can be added to any clearing project",
				"Land left graded and ready for construction or landscaping",
			]}
			whyChoosePoints={[
				{
					heading: "Complete Lot Clearing Fresno CA",
					body: "From overgrown residential lots to large commercial parcels, we clear trees, brush, and debris efficiently — leaving your land clean and ready for use.",
				},
				{
					heading: "Affordable, Reliable Service",
					body: "Competitive pricing with no hidden fees. We give honest estimates and deliver professional results on every land clearing project in Fresno and surrounding areas.",
				},
				{
					heading: "Ready for Construction or Landscaping",
					body: "After clearing, your land is prepared for your next project — whether it's new construction, landscaping, farming, or recreational use.",
				},
			]}
		/>
	);
}
