"use client"


import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";


import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { updatecontent } from "@/action/add-content";
import { FormTextarea } from "../form/FormTextarea";
import { updatetodo } from "@/action/add-todo";
import { FormInput } from "../form/FormInput";
import { TagsInput } from "react-tag-input-component";
import { todo } from "node:test";









interface NotesListProps {
    data: Note;
}

export const NoteTodo = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatetodo, {
        onSuccess: (data) => {
            toast.success(`content "${data.todo}" updated!`);

            disableEditing();
        },
        onError: (error) => {
            toast.error(error);
        }

    })

    const formRef = useRef<ElementRef<'form'>>(null);
    const InputRef = useRef<ElementRef<'input'>>(null);

    const [isEditing, setIsEditing] = useState(false);

    const [selected, setSelected] = useState([
    ]);
    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            InputRef.current?.focus();
            InputRef.current?.select();
        })
    };




    const onSubmit = (FormData: FormData) => {


        execute({
            id: data.id,
            todo: selected,
            noteId: "",


        })
    };
    console.log(todo, "submit")

    const disableEditing = () => {
        setIsEditing(false);
    };

    const onBlur = () => {
        formRef.current?.requestSubmit();
    };

    if (isEditing) {

        return (
            <form action={onSubmit} ref={formRef} className="flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm ">



            </form>
        )
    }


