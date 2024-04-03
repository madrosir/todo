import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NotesSheet from "../modal/notesSheet";



const Navbar = () => {
    return (



        <div className="flex w-full border-b-2 border-slate-200 bg-[#3d424a]">

            <Link href="/notes" className="item-start hidden md:block lg:block">
                <Image
                    src="/saas.svg"
                    alt="logo"
                    width={150}
                    height={50}


                />
            </Link>
            <div className="mb-12 justify-between">
                <UserButton afterSignOutUrl="/" />

            </div>

        </div >
    );
}

export default Navbar;