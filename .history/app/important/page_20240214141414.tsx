import { UpdatePriority } from "@/action/update-priority/schema";
import { NoteContent } from "@/components/notes/addcontent";
import NotesDelete from "@/components/notes/notesdelete";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { Note } from "@prisma/client";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
import Masonry from "react-masonry-css";

interface NoteList {
    validNotes: Note[]

}
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
    return (
        <div>
            <Masonry
                breakpointCols={{
                    default: 4,
                    1200: 4,
                    1024: 3,
                    768: 2,
                    576: 1,
                }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {validNotes.map((note: any) => (
                    <div
                        key={note.id}
                        style={{ backgroundColor: note.color }}
                        className=" bg-no-repeat bg-center bg-cover bg-sky-700 rounded-md  p-2  text-center shadow-xl border-3  overflow-auto relative"
                    >
                        <div className="prose prose-xl">
                            <div className="block  text-xl font-black">{note.title}</div>
                            <div>
                                <div className="absolute top-0 right-0 mt-2 mr-2">
                                    <NotesDelete id={note.id} sideOffset={10} side="left" align="start">
                                        <Trash2 />
                                    </NotesDelete>

                                </div>
                                <div className="absolute top-0 left-2 mt-2 mr-2">
                                    <UpdatePriority data={note} />
                                </div>

                                <NoteContent data={note} />

                            </div>


                        </div>

                    </div>
                ))
                }
            </Masonry>

        </div>
    )
}

export default important;