"use client"


import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";


import { Tag } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { FormTextarea } from "../form/FormTextarea";
import { addTags } from "@/action/add-tags";









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
    const textareaRef = useRef<ElementRef<'textarea'>>(null);

    const [isEditing, setIsEditing] = useState(false);



    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            textareaRef.current?.focus();
            textareaRef.current?.select();
        })
    };




    const onSubmit = (FormData: FormData) => {
        const name = FormData.get('name') as string;

        execute({
            id: data!.name,
            name,


        })
        preventDefault()
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
            <form onSubmit={onSubmit} ref={formRef} className="flex text-start h-full xl:text-lg lg:text-sm md:text-sm">
                <FormTextarea
                    id="name"
                    onBlur={onBlur}
                    required
                    ref={textareaRef}
                    className="px-[7px] py-1 bg-transparent text-start break-all h-full flex"
                />
                <button type="submit" className="submitButton">
                    Update
                </button>
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
