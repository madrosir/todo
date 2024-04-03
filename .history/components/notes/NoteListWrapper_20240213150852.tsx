"use client";
import Masonry from 'react-masonry-css'


import NoteList from "./NotesList";
import { Note, } from "@prisma/client";
import { useState } from 'react';
import { NoteContent } from './add-content';
import { X } from 'lucide-react';
import NotesDelete from './notes-delete';



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
                        className=" bg-no-repeat bg-center bg-cover bg-sky-700 rounded-md  p-2  text-center shadow-xl border-3  overflow-auto"
                    >
                        <div className="prose prose-xl">
                            <div className="block  text-xl font-black">{note.title}</div>
                            <div>
                                <NotesDelete id={note.id} sideOffset={10} side="center" align="center">
                                    <X />
                                </NotesDelete>
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
