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
                    {sidebarLinks.map((item) => {
                        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;





                        return (

                            <Link
                                href={item.route}
                                key={item.label}
                                className={`${isActive ? "bg-slate-600" : ""} flex items-center justify-center gap-4 w-full p-4 rounded-2xl hover:bg-slate-500 bg-[#9ca9b8fa]`}
                            >

                                <Image
                                    src={item.imgURL}
                                    alt={item.label}


                                />
                                <p className={`max-md:hidden`}>{item.label}</p>
                            </Link>

                        )
                    })}
                </div>

            </section>

        </div>
    )
}

export default Sidebar;
