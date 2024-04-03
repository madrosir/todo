"use client"


import { useState } from "react";
import { toast } from "sonner";


import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { updatecontent } from "@/action/add-content";
import { Star } from "lucide-react";
import { updatePriority } from "@/action/update-priority";
import { preconnect } from "react-dom";
import { Button } from "../ui/button";









interface NotesListProps {
    data: Note;
}

export const UpdatePriority = ({ data }: NotesListProps) => {
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

    function Update() {
        setContent((preconnect) => !preconnect)
    }




    return (
        <form action={onSubmit} className="flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm ">

            <Button>
                <Star
                    onClick={Update}
                    type="button"
                />
            </Button>

        </form>
    )
}
