"use server";

import { getSearch } from "@/lib/SearchService";

import {
    ResultCard,

} from "./result-card";
import NotesDialog from "@/components/modal/NotesDialogl";
import NoteListWrapper from "@/components/notes/NoteListWrapper";
import { User2 } from "lucide-react";

interface ResultsProps {
    term?: string;
};

export const Results = async ({
    term,
}: ResultsProps) => {
    const data = await getSearch(term);

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">
                Results for term &quot;{term}&quot;
            </h2>
            {data.length === 0 && (
                <p className="text-muted-foreground text-sm">
                    No results found. Try searching for something else
                </p>
            )}
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
        </div>
    );
};

