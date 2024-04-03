import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="relative flex w-full border-b-2 border-slate-200 bg-[#3d424a]">
            <Link href="/notes" className="item-start hidden md:block lg:block">
                <Image
                    src="/saas.svg"
                    alt="logo"
                    width={150}
                    height={50}
                />
            </Link>
            <div className="flex items-end justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}

export default Navbar;
