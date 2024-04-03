
import NoteListWrapper from "@/components/notes/NoteListWrapper";
import { Results } from "@/components/search/results";
import { Search } from "@/components/search/search";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

import { User2 } from "lucide-react";
import { redirect } from "next/navigation";
import SelectedButton from "@/components/nav/selectButton";

interface SearchPageProps {
    searchParams: {
        term?: string;
    };
};

const important = async ({ searchParams,
}: SearchPageProps) => {


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
            <div className="block items-center justify-center md:hidden lg:hidden">
                <Search />
                <div className="mt-5 flex w-full border border-red-800"><SelectedButton /></div>

            </div>
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