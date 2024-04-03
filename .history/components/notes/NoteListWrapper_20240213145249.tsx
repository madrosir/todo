"use client";
import Masonry from 'react-masonry-css'


import NoteList from "./NotesList";
import { Note, } from "@prisma/client";
import { useState } from 'react';
import { NoteContent } from './add-content';
import { NoteTodo } from './add-todo';



interface NoteList {
    validNotes: Note[]

}


const NoteListWrapper = ({ validNotes }: NoteList) => {
    const [selected, setSelected] = useState(false)

    function handleChangeTodo() {
        setSelected(true)
    }
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
                                {selected === true ? <NoteContent data={note} /> : <NoteTodo data={note} />}
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
