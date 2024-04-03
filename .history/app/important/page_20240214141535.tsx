import { UpdatePriority } from "@/action/update-priority/schema";
import NotesDialog from "@/components/modal/NotesDialogl";
import NoteListWrapper from "@/components/notes/NoteListWrapper";
import { NoteContent } from "@/components/notes/addcontent";
import NotesDelete from "@/components/notes/notesdelete";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { Note } from "@prisma/client";
import { format } from "date-fns";
import { Trash2, User2 } from "lucide-react";
import { redirect } from "next/navigation";
import Masonry from "react-masonry-css";

interface importantProps {
    validNotes: Note[]

}
const important = async ({ validNotes }: importantProps) => {


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
    return (
        <div className="space-y-4 bg-slate-200 h-[100%] w-full border ">
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
    )
}

export default important;