import { notFound } from "next/navigation";
import PartyDetails from "./PartyDetails";
import MainLayout from "@/components/Layout/MianLayout";
import { PartiesData } from "@/components/Data/PartiesData";

interface Party {
  partyId: string;
  title: string;
  image: string;
  hostedBy: string;
  location: string;
  date: string;
  price: string;
  time:string;
  partyType: string;
}

export async function generateMetadata() {
  return {
    title: "Event Details",
    description:
      "At JamNest , we are dedicated to shaping the future of brands in an ever-evolving landscape",
    keywords: "JamNest , brands, marketing",
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    manifest: "/site.webmanifest",
    twitter: {
      card: "summary_large_image",
      title: "Event Details ",
      description:
        "At JamNest , we are dedicated to shaping the future of brands in an ever-evolving landscape",
      siteId: "1467726470533754880",
      creator: "Trantrawave",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 650,
        },
      ],
    },
    category: "Marketing And entertainment",
    openGraph: {
      title: "Event Details",
      description:
        "At JamNest , we are dedicated to shaping the future of brands in an ever-evolving landscape",
      type: "website",
      url: "https://www.globalkartel.com",
      siteName: "JamNest",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 650,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return PartiesData.map((party: Party) => ({
    partyId: party.partyId,
  }));
}

export default function PartyDetailPage({
  params,
}: {
  params: { partyId: string };
}) {
  const { partyId } = params;

  const party = PartiesData.find((b) => b.partyId === partyId) || null;

  if (!party) {
    return notFound();
  }

  return (
    <MainLayout>
      <PartyDetails party={party} />
    </MainLayout>
  );
}
