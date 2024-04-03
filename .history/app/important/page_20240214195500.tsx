
import NotesDialog from "@/components/modal/NotesDialogl";
import NoteListWrapper from "@/components/notes/NoteListWrapper";
import { Results } from "@/components/search/results";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

import { User2 } from "lucide-react";
import { redirect } from "next/navigation";



const important = async () => {


    const { userId } = auth();
    if (!userId) {
        redirect('/sign-in')
    }
    const notes = await db.note.findMany({
        where: {
            important: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    const validNotes = notes
    return (
        <div className="h-[100%] w-full space-y-4 border bg-slate-200">
            <div className="flex items-center justify-center border text-lg font-semibold text-neutral-600">
                <User2 className="mr-2 h-4 w-4" /> NotesList
            </div>
            <div>
                {searchParams.term === undefined ? <NoteListWrapper validNotes={validNotes} /> : <Results term={searchParams.term} />}
            </div>

        </div>
    )
}

export default important;