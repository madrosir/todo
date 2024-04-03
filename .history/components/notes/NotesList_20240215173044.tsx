import { User2 } from "lucide-react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import NoteListWrapper from "./NoteListWrapper";
import { Search } from "../search/search";
import Selected from "../search/slecte";


const NoteList = async () => {
    const current = new Date();
    const { userId } = auth();
    if (!userId) {
        redirect("/sign-in");
    }
    const data = await db.note.findMany({
        where: {
            authorId: userId,

        },

        orderBy: {
            createdAt: "desc",
        },
    });



    const validNotes = data.filter((note) => {
        if (!note?.expired || (note?.expired && note?.expired > current)) {
            return note;
        }
    });
    return (
        <div className="h-[100%] w-full space-y-4 border bg-slate-200">
            <div className="block items-center justify-center border md:hidden lg:hidden">
                <Search />
                <div className="justify-between"><Selected /></div>

            </div>
            <div className="flex items-center justify-center border text-lg font-semibold text-neutral-600">
                <User2 className="mr-2 h-4 w-4" /> NotesList
            </div>
            <div>
                <NoteListWrapper validNotes={validNotes} />
            </div>

        </div>

    );
};

export default NoteList;
