"use client"

import { ElementRef, useRef, useState } from "react";
import { Note } from "@prisma/client";



import { toast } from "sonner";
import { useAction } from "@/hooks/useAction";
import { updateNote } from "@/action/update-notes";
import { FormInput } from "../form/FormInput";

interface NotesListProps {
    data: Note;
}

export const NoteEdit = ({ data }: NotesListProps) => {
    const { execute } = useAction(updateNote, {
        onSuccess: (data) => {
            toast.success(`Board "${data.title}" updated!`);
            setTitle(data.title);
            disableEditing();
        },
        onError: (error) => {
            toast.error(error);
        }

    })

    const formRef = useRef<ElementRef<'form'>>(null);
    const inputRef = useRef<ElementRef<'input'>>(null);

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(data.title);

    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.select();
        })
    };

    const onSubmit = (FormData: FormData) => {
        const title = FormData.get('title') as string;
        console.log("I am submitting", title);

        execute({

            id: data.id,
            title
        })
    };

    const disableEditing = () => {
        setIsEditing(false);
    };

    const onBlur = () => {
        formRef.current?.requestSubmit();
    };
    if (isEditing) {
        return (
            <form action={onSubmit} ref={formRef} className="flex items-center gap-x-2">
                <FormInput

                    id='title'
                    onBlur={onBlur}
                    defaultValue={title}
                    ref={inputRef}
                    className=" font-bold px-[7px] py-1 h-7 bg-transparent
                    text-center ring-none border-none"
                />
            </form>
        )
    }


    return (
        <button
            onClick={enableEditing}

            className="font-bold text-lg h-auto w-auto">
            {title}
        </button>
    );
};