import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NotesSheet from "../modal/notesSheet";



const Navbar = () => {
    return (
        <div className="relative flex justify-between border-b-2 border-slate-200 bg-[#3d424a]">
            <div>
                <NotesSheet />
            </div>
            <div className="justify-between">
                <Link href="/notes" className="hidden md:block lg:block">
                    <Image
                        src="/saas.svg"
                        alt="logo"
                        width={150}
                        height={50}


                    />
                </Link>
                <div className="mx-4 py-3">
                    <UserButton afterSignOutUrl="/" />

                </div>
            </div>
        </div>
    );
}

export default Navbar;