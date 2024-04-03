"use client"
import NotesDialog from "../modal/NotesDialogl";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search } from "../search/search";
import { Plus } from "lucide-react";




const Sidebar = () => {

    const pathname = usePathname();

    return (
        <div>
            <section className="custom-scrollbar shadow-light-300 sticky left-0 top-0 mx-auto mr-3 hidden h-screen w-[300px] flex-col overflow-y-auto border-r border-slate-300 bg-slate-200 p-6 pt-4 shadow-lg md:block lg:block">
                <div className="w-full py-5">
                    <NotesDialog > <button className="text-md h w-full justify-between bg-slate-300 font-semibold shadow-md hover:bg-slate-400 max-md:block" > Create Notes  <Plus /> </button></NotesDialog>
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
                                className={`${isActive
                                    ? "bg-slate-400"
                                    : ""
                                    }  flex items-center justify-start gap-4 bg-transparent p-4 rounded-2xl hover:bg-slate-300`}
                            >
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    width={20}
                                    height={20}

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
