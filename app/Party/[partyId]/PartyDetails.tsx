interface Party {
  title: string;
  image: string;
  hostedBy: string;
  location: string;
  date: string;
  price: string;
  partyType: string;
}

const PartyDetails: React.FC<{ party: Party }> = ({ party }) => {
  return (
    <section className="w-full md:px-8 xl:px-24 py-12 xl:pt-20 px-4">
        <h1 className="text-5xl font-bold mt-4">{party.title}</h1>
        <p className="mt-2 text-gray-700">{party.hostedBy}</p>
        <p className="mt-2 text-gray-700">{party.date}</p>
        <p className="mt-2 text-gray-700">{party.location}</p>
        <p className="mt-2 text-gray-700">{party.partyType}</p>
        <p className="mt-2 text-gray-700">{party.price}</p>
    </section>
  );
};

export default PartyDetails;
