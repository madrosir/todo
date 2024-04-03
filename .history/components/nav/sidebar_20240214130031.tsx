"use client"
import { useRouter } from "next/navigation";
import NotesSheet from "../modal/notesSheet";
import { Search } from "./search";
import TodoMap from "../add-todo/todo-map";







const Sidebar = () => {
    const router = useRouter()
    function handledick() {
        router.push("/search")
    }

    return (
        <div >
            <section className=" bg-slate-300  custom-scrollbar sticky left-0 top-0  h-screen flex-col   border-r p-6 pt-4 shadow-light-300 dark:shadow-none lg:block w-[300px] mr-3 overflow-y-auto mx-auto hidden ">
                <div className=" w-full items-center ">
                    <Search />
                </div>
                <div className="w-full" role="button" >
                    <button onClick={handledick} className={`  mt-5 w-full shadow-md rounded-xl h-12 text-start hover:bg-slate-200 `}>Top Priority</button>
                </div>

            </section>
            <NotesSheet />

        </div>


    );
}

export default Sidebar;