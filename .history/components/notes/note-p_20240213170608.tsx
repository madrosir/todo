"use client"


import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";


import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { updatecontent } from "@/action/add-content";
import { FormTextarea } from "../form/FormTextarea";
import { Star } from "lucide-react";









interface NotesListProps {
    data: Note;
}

export const NoteContent = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatecontent, {
        onSuccess: (data) => {
            toast.success(`content "${data.content}" updated!`);
            setContent(data.content);
            disableEditing();
        },
        onError: (error) => {
            toast.error(error);
        }

    })

    const formRef = useRef<ElementRef<'form'>>(null);



    const [content, setContent] = useState(data.content);







    const onSubmit = (FormData: FormData) => {
        const content = FormData.get('content') as string;

        execute({
            id: data.id,
            content,
            noteId: "",


        })
    };
    console.log(content, "submit")






    return (
        <form action={onSubmit} ref={formRef} className="flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm ">

            <Star

            />


        </form>
    )
}
