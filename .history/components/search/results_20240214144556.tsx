"use server";

import { getSearch } from "@/lib/SearchService";

import {
    ResultCard,

} from "./result-card";
import NoteListWrapper from "../notes/NoteListWrapper";

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
            <div className="flex flex-col gap-y-4">

                <div>
                    <NoteListWrapper validNotes={data} />
                </div>

            </div>
        </div>
    );
};

