import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NotesSheet from "../modal/notesSheet";



const Navbar = () => {
    return (
        <div className="relative flex w-full border-b-2 border-slate-200 bg-[#3d424a]">
            <NotesSheet />
            <Link href="/notes" className="item-start hidden md:block lg:block">
                <Image
                    src="/saas.svg"
                    alt="logo"
                    width={150}
                    height={50}


                />
            </Link>
            <div className="item-end mx-4 justify-end border border-red-700 py-3">
                <UserButton afterSignOutUrl="/" />

            </div>

        </div >
    );
}

export default Navbar;