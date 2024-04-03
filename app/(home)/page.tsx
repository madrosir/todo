import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const headingFont = localFont({
    src: '../../public/fonts/font.woff2',
    variable: '--font-heading'
})
const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ],
});

const MarketingPage = () => {
    const { userId } = auth();

    if (userId) {
        redirect('/notes')
    }
    return (


        <div className="flex items-center justify-center flex-col">
            <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
                <div className="mt-10  flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2 " />
                    Mo 9999 task managment
                </div>
                <h1 className="mt-10 text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    Taskflow propels teams forward.
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r
   from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-1 w-fit">
                    work forward.
                </div>
            </div>
            <div className={cn("text-sm md:text-xl text-neutral-400 mt-4  max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
                Taskflow: Supercharge Your Team's Productivity with Seamless Taskflow Management! Collaborate effortlessly, streamline projects, and elevate your workflow to unprecedented levels. Whether you're in a high-rise office or working from home, Taskflow empowers your team with intuitive taskflow control. .
            </div>
            <Button className="mt-6" size='lg' asChild>
                <Link href="/sign-up">
                    Get Taskflow for free
                </Link>
            </Button>
        </div>

    );
}

export default MarketingPage;