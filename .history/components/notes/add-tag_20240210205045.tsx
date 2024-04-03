"use client"


import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";


import { Tag } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { addTags } from "@/action/add-tags";
import { Input } from "../ui/input";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";







interface NotesListProps {
    data?: Tag;

}
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})
export const AddTags = ({ data, }: NotesListProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
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
