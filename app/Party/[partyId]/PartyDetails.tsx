import { Ubuntu } from "next/font/google";
import Image from "next/image";
import { LuCalendarRange } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { GrAlarm } from "react-icons/gr";
import { Tooltip } from "@nextui-org/tooltip";

import PriceCard from "@/components/Common/Cards/PriceCard";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

interface Party {
  title: string;
  image: string;
  hostedBy: string;
  location: string;
  date: string;
  price: string;
  time: string;
  partyType: string;
}

const PartyDetails: React.FC<{ party: Party }> = ({ party }) => {
  return (
    <section className="w-full md:px-8 xl:px-24 py-16 xl:pt-20 px-4 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative w-full   h-56 lg:h-[30rem] rounded-3xl overflow-hidden border-2 border-white/10">
          <Image
            fill
            priority
            alt={party.title}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            src={party.image}
          />
        </div>
        <div className="w-full flex justify-between gap-5 py-5">
          <div className="w-full max-w-screen-xl ">
            <h1 className={`text-6xl font-bold  ${ubuntu.className}`}>
              {party.title}
            </h1>
            <div className=" py-5 flex  items-center gap-5 flex-wrap">
              <Tooltip
                color="primary"
                content={<p className="p-2 text-base ">{party.location} </p>}
                offset={4}
                placement="bottom"
                showArrow={true}
              >
                <p className="flex items-center gap-2 text-xl bg-white/10 p-2 rounded-lg border-2 border-white/10">
                  <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-500 text-xl">
                    <GrLocation />
                  </span>
                  {party.location.length > 30
                    ? `${party.location.slice(0, 30)}...`
                    : party.location}
                </p>
              </Tooltip>

              <p className="flex items-center gap-2 text-xl bg-white/10 p-2 rounded-lg border-2 border-white/10">
                <span className="p-1.5 rounded-lg bg-sky-500/20 text-sky-500 text-xl">
                  <LuCalendarRange />
                </span>
                {party.date}
              </p>
              <p className="flex items-center gap-2 text-xl bg-white/10 p-2 rounded-lg border-2 border-white/10">
                <span className="p-1.5 rounded-lg bg-yellow-500/20 text-yellow-500 text-xl">
                  <GrAlarm />
                </span>
                {party.time}
              </p>
            </div>
            <p className="text-9xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis ex architecto eum. Dolorum aliquam, ea itaque
              molestias animi, asperiores rerum natus beatae aspernatur illo
              possimus laudantium fugit eveniet quidem est.
            </p>
          </div>
          <PriceCard price={party.price} />
        </div>
      </div>
      <div />
    </section>
  );
};

export default PartyDetails;
