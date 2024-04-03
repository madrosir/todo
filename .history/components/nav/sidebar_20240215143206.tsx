import { useState } from "react";
import { useRouter } from "next/router";
import { Star, CalendarOff, Search } from "lucide-react";
import NotesDialog from "../modal/NotesDialogl";
import NotesSheet from "../modal/notesSheet";


const Sidebar = () => {
    const router = useRouter();




    return (
        <div>
            <section className="custom-scrollbar shadow-light-300 sticky left-0 top-0 mx-auto mr-3 hidden h-screen w-[300px] flex-col overflow-y-auto border-r border-slate-300 bg-slate-200 p-6 pt-4 shadow-lg lg:block">
                <div className="w-full py-5">
                    <NotesDialog />
                </div>
                <div className="w-full items-center">
                    <Search />
                </div>

        </div>
            </section >
    <NotesSheet />
        </div >
    );
};

export default Sidebar;
