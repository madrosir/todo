
import NotesDialog from "@/components/modal/NotesDialogl";
import NoteListWrapper from "@/components/notes/NoteListWrapper";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

import { User2 } from "lucide-react";
import { redirect } from "next/navigation";



const expired = async () => {

    const current = new Date();

    const { userId } = auth();
    if (!userId) {
        redirect('/sign-in')
    }
    const data = await db.note.findMany({
        where: {
            authorId: userId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    const validNotes = data.filter((note) => {
        if (note.expired! > current) {
            return note;
        }
    });

    return (
        <div className="h-[100%] w-full space-y-4 border bg-slate-200">
            <div className="flex items-center justify-center border text-lg font-semibold text-neutral-600">
                <User2 className="mr-2 h-4 w-4" /> NotesList
            </div>
            <div>
                <NoteListWrapper validNotes={validNotes} />
            </div>

        </div>
    )
}

export default expired;