"use client"


import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";


import { Tag } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { addTags } from "@/action/add-tags";
import { Input } from "../ui/input";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"







interface NotesListProps {
    data?: Tag;

}

export const AddTags = ({ data, }: NotesListProps) => {
    const { execute } = useAction(addTags, {
        onSuccess: (data) => {
            toast.success(`content "${data.name}" updated!`);

            disableEditing();
        },
        onError: (error) => {
            toast.error(error);
        }

    })

    const formRef = useRef<ElementRef<'form'>>(null);
    const inputRef = useRef<ElementRef<'input'>>(null);

    const [isEditing, setIsEditing] = useState(false);



    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.select();
        })
    };




    const onSubmit = (FormData: FormData) => {
        const name = FormData.get('name') as string;

        execute({
            id: data!.name,
            name,


        })
    };
    console.log("submit")

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
                    id='name'
                    onBlur={onBlur}

                    required
                    ref={inputRef}
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




        </div>

    );
};
