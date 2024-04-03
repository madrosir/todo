"use client"
import NotesDialog from "../modal/NotesDialog";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search } from "../search/search";





const Sidebar = () => {

    const pathname = usePathname();

    return (
        <div>
            <section className="shadow-light-300 sticky left-0 top-0 mx-auto mr-3 hidden h-screen w-[300px] flex-col overflow-y-auto border-r border-slate-300 bg-slate-200 p-6 pt-4 shadow-lg md:block lg:block">
                <div className="w-full py-5">
                    <NotesDialog />
                </div>
                <div className="my-4 w-full items-center">
                    <Search />
                </div>
                <div className="flex flex-1 flex-col gap-6">

                </div>

            </section>

        </div>
    )
}

export default Sidebar;
