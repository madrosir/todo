import { User2 } from "lucide-react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import NoteListWrapper from "./NoteListWrapper";
import NotesDialog from "../modal/NotesDialogl";


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
        <div className="space-y-4 bg-gray-200 h-[100%] w-full border ">
            <div className="flex items-center font-semibold text-lg text-neutral-600 justify-center border ">
                <User2 className="h-4 w-4 mr-2" /> NotesList
            </div>
            <div>
                <NoteListWrapper validNotes={validNotes} />
            </div>
            <div>
                <NotesDialog></NotesDialog>
            </div>
        </div>

    );
};

export default NoteList;
