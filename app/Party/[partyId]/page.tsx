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
  partyType: string;
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
