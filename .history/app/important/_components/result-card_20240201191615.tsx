import { Note } from "@prisma/client";




interface ResultCardProps {
    data: Note
};

export const ResultCard = ({
    data,
}: ResultCardProps) => {
    return (

        <div className="w-full flex gap-x-4">
            <div className="relative h-[9rem] w-[16rem]">

            </div>
            <div className="space-y-1">
                <div className="flex items-center gap-x-2">
                    <p className="font-bold text-lg cursor-pointer hover:text-blue-500">
                        {data.title}
                    </p>

                </div>

            </div>
        </div>

    );
};

