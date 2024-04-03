import NoteListWrapper from "@/components/notes/NoteListWrapper";
import { Note } from "@prisma/client";




interface ResultCardProps {
    data: Note[]
};

export const ResultCard = ({
    data,
}: ResultCardProps) => {
    const Data = data
    return (

        <div className="w-full flex gap-x-4">
            <div className="relative h-[9rem] w-[16rem]">

            </div>
            <div className="space-y-1">
                <div>
                    <NoteListWrapper validNotes={Data} />
                </div>


            </div>
        </div>

    );
};

