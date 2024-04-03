"use client"


import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";


import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { updatecontent } from "@/action/add-content";
import { FormTextarea } from "../form/FormTextarea";









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
    const textareaRef = useRef<ElementRef<'textarea'>>(null);

    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(data.content);


    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            textareaRef.current?.focus();
            textareaRef.current?.select();
        })
    };




    const onSubmit = (FormData: FormData) => {
        const content = FormData.get('content') as string;

        execute({
            id: data.id,
            content,
            noteId: "",

        })
    };
    console.log(content, "submit")

    const disableEditing = () => {
        setIsEditing(false);
    };

    const onBlur = () => {
        formRef.current?.requestSubmit();
    };

    if (isEditing) {

        return (
            <form action={onSubmit} ref={formRef} className="flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm ">
                <FormTextarea
                    id='content'
                    onBlur={onBlur}
                    defaultValue={content as string}
                    required
                    ref={textareaRef}
                    className="  px-[7px] py-1  bg-transparent
                    text-start  break-all h-full flex "

                />


            </form>
        )
    }


    return (
        <div
            onClick={enableEditing}
            role="button"
            className=" break-all  flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm px-[7px] py-1 min-h-[100px]"
        >
            {data.content || "Add a more detailed description"}



        </div>

    );
};
