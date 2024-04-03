"use client"
import { useRouter } from "next/navigation";
import NotesSheet from "../modal/notesSheet";
import { Search } from "../search/search";
import { Star } from "lucide-react";
import NotesDialog from "../modal/NotesDialogl";








const Sidebar = () => {
    const router = useRouter()
    function handledick() {
        router.push("/important")
    }

    return (
        <div >

            <section className=" bg-slate-200  border-slate-300 shadow-lg custom-scrollbar sticky left-0 top-0  h-screen flex-col   border-r p-6 pt-4 shadow-light-300  lg:block w-[300px] mr-3 overflow-y-auto mx-auto hidden ">
                <div>
                    <NotesDialog>Openm</NotesDialog>
                </div>
                <div className=" w-full items-center ">
                    <Search />
                </div>
                <div className="w-full" role="button" >
                    <button onClick={handledick} className={`  mt-5 w-full shadow-sm rounded-2xl h-12 text-start hover:bg-slate-300 flex items-center`}>
                        <Star className="ml-3 mr-2" />Top Priority</button>
                </div>

            </section>
            <NotesSheet />

        </div>


    );
}

export default Sidebar;