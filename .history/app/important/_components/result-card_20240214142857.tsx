import NotesDialog from "@/components/modal/NotesDialogl";
import NoteListWrapper from "@/components/notes/NoteListWrapper";
import { Note } from "@prisma/client";
import { User2 } from "lucide-react";




interface ResultCardProps {
    data: Note[]
};

export const ResultCard = ({
    data,
}: ResultCardProps) => {
    const validNotes = data
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

    );
};

