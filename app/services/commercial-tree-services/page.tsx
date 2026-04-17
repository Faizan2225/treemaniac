import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
	title: "Commercial Tree Services in Fresno, CA | Tree Maniac",
	description: "Tree Maniac provides professional commercial tree services in Fresno, CA for businesses, HOAs, and property managers. Reliable, fast & insured. Call (559) 369-5748.",
};

export default function CommercialTreeServicesPage() {
	return (
		<ServicePageTemplate
			title="Commercial Tree Services"
			slug="commercial-tree-services"
			heroImage="/services/lot-and-land-clearing/IMG_6450.JPEG"
			intro="First impressions matter. Tree Maniac Tree Service Inc. partners with businesses, HOAs, property managers, and commercial developers throughout Fresno to maintain safe, attractive, and liability-free landscapes. Our commercial team is equipped for large-scale tree removal, trimming, and lot clearing on any timeline — with minimal disruption to your operations."
			importantNotes={[
				"Serving businesses, HOAs, and property managers across Fresno",
				"Large-scale commercial projects handled efficiently",
				"Flexible scheduling to minimize business disruption",
				"Fully licensed & insured for commercial work",
			]}
			whyChoosePoints={[
				{
					heading: "Commercial Tree Services Fresno CA",
					body: "We work with businesses, HOAs, and property managers throughout Fresno to keep commercial landscapes safe, attractive, and compliant with local regulations.",
				},
				{
					heading: "Large-Scale Capability",
					body: "Our crew and equipment are fully capable of handling large commercial properties — from office parks and shopping centers to apartment complexes and HOA communities.",
				},
				{
					heading: "Protect Your Business from Liability",
					body: "Overgrown or hazardous trees create liability risks. Our commercial services help you maintain a safe property and reduce exposure to property damage claims.",
				},
			]}
		/>
	);
}
