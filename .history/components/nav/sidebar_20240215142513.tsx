"use client"
import { useState } from "react";
import { Star, CalendarOff, Search } from "lucide-react";
import NotesDialog from "../modal/NotesDialogl";
import NotesSheet from "../modal/notesSheet";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";


const Sidebar = () => {
    const { userId } = useAuth();
    const pathname = usePathname();


    return (
        <div>
            <section className="custom-scrollbar shadow-light-300 sticky left-0 top-0 mx-auto mr-3 hidden h-screen w-[300px] flex-col overflow-y-auto border-r border-slate-300 bg-slate-200 p-6 pt-4 shadow-lg lg:block">
                <div className="w-full py-5">
                    <NotesDialog />
                </div>
                <div className="w-full items-center">
                    <Search />
                </div>
                <div className="w-full" role="button">
                    <button
                        onClick={handleImportant}
                        className={`mt-5 flex h-12 w-full items-center rounded-2xl text-start shadow-sm hover:bg-slate-300 ${selectedButton === "important" ? "bg-black" : ""
                            }`}
                    >
                        <Star className="ml-3 mr-2" />
                        Top Priority
                    </button>
                    <button
                        onClick={handleExpired}
                        className={`mt-5 flex h-12 w-full items-center rounded-2xl text-start shadow-sm hover:bg-slate-300 ${selectedButton === "expired" ? "bg-black" : ""
                            }`}
                    >
                        <CalendarOff className="ml-3 mr-2" />
                        Expired Data
                    </button>
                </div>
            </section>
            <NotesSheet />
        </div>
    );
};

export default Sidebar;
