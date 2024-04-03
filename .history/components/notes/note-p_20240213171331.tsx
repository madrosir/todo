"use client"


import { useState } from "react";
import { toast } from "sonner";


import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { updatecontent } from "@/action/add-content";
import { Star } from "lucide-react";
import { updatePriority } from "@/action/update-priority";









interface NotesListProps {
    data: Note;
}

export const NoteContent = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatePriority, {
        onSuccess: (data) => {
            toast.success(`content "${data.important}" updated!`);
            setContent(data.important);

        },
        onError: (error) => {
            toast.error(error);
        }

    })




    const [content, setContent] = useState(data.important);







    const onSubmit = () => {


        execute({
            id: data.id,
            important: content,
            noteId: "",


        })
    };
    console.log(content, "submit")






    return (
        <form action={onSubmit} className="flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm ">

            <Star

            />


        </form>
    )
}
