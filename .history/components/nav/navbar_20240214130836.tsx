import Image from "next/image";
import { UserButton } from "@clerk/nextjs";



const Navbar = () => {
    return (
        <div className="flex justify-between relative   border-b-2 border-slate-200  bg-[#3d424a]">
            <Image
                src="/saas.svg"
                alt="logo"
                width={150}
                height={50}

            />

            <div className="mx-4 py-3  ">
                <UserButton afterSignOutUrl="/" />

            </div>
        </div>
    );
}

export default Navbar;