
import NoteListWrapper from "@/components/notes/NoteListWrapper";
import NoteList from "@/components/notes/NotesList";
import NotesList from "@/components/notes/NotesList";
import { Results } from "@/components/search/results";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

import { User2 } from "lucide-react";
import { redirect } from "next/navigation";


interface SearchPageProps {
    searchParams: {
        term?: string;
    };
};
const expired = async ({
    searchParams,
}: SearchPageProps) => {

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

            <div>

                {searchParams.term === undefined ? <NoteList /> : <Results term={searchParams.term} />}
            </div>
        </div>


    )
}

export default expired;