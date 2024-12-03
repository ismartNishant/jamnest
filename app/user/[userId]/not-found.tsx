"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function BlogNotFound() {
    const router = useRouter();

    const handleGoHome = () => {
        router.push("/"); // Redirect to the home page
    };

    return (
        <div className="min-h-[650px] flex items-center justify-center">
            <div className="text-center max-w-screen-sm w-full p-10 rounded-2xl bg-white/5">
                <div className="flex items-center justify-center text-primary">
                    <div className="text-9xl md:text-[250px] font-bold">4</div>
                    <div className="text-9xl md:text-[250px] font-bold">0</div>
                    <div className="text-9xl md:text-[250px] font-bold">4</div>
                </div>
                <div className="mt-4 flex flex-col gap-4 items-center">
                    <h1 className="text-2xl md:text-4xl font-semibold">User not Found</h1>
                    <h4 className="text-base md:text-lg text-gray-500 font-medium">
                        Could not find the requested User resource
                    </h4>
                    <Button
                        className="text-lg uppercase font-medium"
                        color="primary"
                        variant="bordered"
                        onClick={handleGoHome}
                    >
                        Got To Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
