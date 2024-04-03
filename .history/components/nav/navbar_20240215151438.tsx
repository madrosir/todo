import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NotesSheet from "../modal/notesSheet";



const Navbar = () => {
    return (
        <div>


            <div className="relative flex w-full justify-between border-b-2 border-slate-200 bg-[#3d424a]">

                <Link href="/notes" className="item-start hidden md:block lg:block">
                    <Image
                        src="/saas.svg"
                        alt="logo"
                        width={150}
                        height={50}


                    />
                </Link>
                <div className="item-end mx-4 justify-end py-3">
                    <UserButton afterSignOutUrl="/" />

                </div>
            </div>
        </div >
    );
}

export default Navbar;