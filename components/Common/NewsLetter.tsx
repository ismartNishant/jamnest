import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { IoCalendarOutline, IoHandLeftOutline } from "react-icons/io5";

export default function NewsLetter() {
  return (
    <section className="px-4">
      <div className="relative isolate overflow-hidden   lg:py-16 my-10   lg:px-24 ">
        <div className="mx-auto  p-3 lg:p-10 rounded-xl bg-white/10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
                velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-2 lg:gap-x-4 items-center">
                <Input
                  className=""
                  classNames={{
                    input: ["bg-transparent lg:text-base"],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                      "shadow-xl",
                      "bg-dark-2",
                      "dark:bg-black",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "hover:bg-black",
                      "dark:hover:bg-black",
                      "group-data-[focus=true]:bg-black",
                      "dark:group-data-[focus=true]:bg-black",
                      "!cursor-text",
                    ],
                  }}
                  id="newsletter-email"
                  placeholder="Enter Email"
                  radius="sm"
                  size="md"
                  type="email"
                />
                <Button
                  className=" font-medium px-5 text-lg rounded-lg"
                  variant="solid"
                  color="primary"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <IoCalendarOutline
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                  cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <IoHandLeftOutline
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  No spam
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non adipisicing.
                  Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-secondary opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
