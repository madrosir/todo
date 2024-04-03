"use client";
import Masonry from 'react-masonry-css'


import NoteList from "./NotesList";
import { Note, } from "@prisma/client";
import { NoteContent } from './addcontent';
import { Trash2 } from 'lucide-react';
import NotesDelete from './notesdelete';
import { UpdatePriority } from './notePriority';



interface NoteList {
    validNotes: Note[]

}


const NoteListWrapper = ({ validNotes }: NoteList) => {

    return (
        <div>
            <Masonry
                breakpointCols={{
                    default: 4,
                    1200: 4,
                    1024: 2,
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
                        className="border-3 relative overflow-auto rounded-md bg-sky-700 bg-cover bg-center bg-no-repeat p-2 text-center shadow-xl"
                    >
                        <div className="prose prose-xl">
                            <div className="block text-xl font-black">{note.title}</div>
                            <div>
                                <div className="absolute right-0 top-0 mr-2 mt-2">
                                    <NotesDelete id={note.id} sideOffset={10} side="left" align="start">
                                        <Trash2 />
                                    </NotesDelete>

                                </div>
                                <div className="absolute left-2 top-0 mr-2 mt-2">
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

export default NoteListWrapper;
