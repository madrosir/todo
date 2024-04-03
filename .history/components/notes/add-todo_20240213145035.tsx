"use client"


import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";


import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { updatecontent } from "@/action/add-content";
import { FormTextarea } from "../form/FormTextarea";
import { updatetodo } from "@/action/add-todo";
import { Input } from "postcss";









interface NotesListProps {
    data: Note;
}

export const NoteTodo = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatetodo, {
        onSuccess: (data) => {
            toast.success(`content "${data.todo}" updated!`);
            setContent(data.todo);
            disableEditing();
        },
        onError: (error) => {
            toast.error(error);
        }

    })

    const formRef = useRef<ElementRef<'form'>>(null);
    const InputRef = useRef<ElementRef<'input'>>(null);

    const [isEditing, setIsEditing] = useState(false);
    const [todo, SetTodo] = useState(data.todo);


    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            textareaRef.current?.focus();
            textareaRef.current?.select();
        })
    };




    const onSubmit = (FormData: FormData) => {


        execute({
            id: data.id,
            todo,
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
                <Input
                    id='todo'
                    onBlur={onBlur}

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
            {data.todo || "Add a more detailed description"}



        </div>

    );
};
