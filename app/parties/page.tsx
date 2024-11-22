import React from "react";
import AllParties from "./AllParties";


export async function generateMetadata() {
  return {
    title: "All Parties",
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
      title: "JamNest ",
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
      title: "All Parties",
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

const page = () => {
  return <AllParties />;
};

export default page;
