import { notFound } from "next/navigation";
import MainLayout from "@/components/Layout/MianLayout";
import UserDetails from "./UserDetails";
import { UsersData } from "@/components/Data/UsersData";

interface User {
  userId: string;
}

export async function generateMetadata() {
  return {
    title: "User Details",
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
      title: "User Details",
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
  return UsersData.map((party: User) => ({
    userId: party.userId,
  }));
}

export default function UserDetailPage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;

  const user = UsersData.find((b) => b.userId === userId) || null;

  if (!user) {
    return notFound();
  }

  return (
    <MainLayout>
      <UserDetails user={user} />
    </MainLayout>
  );
}
