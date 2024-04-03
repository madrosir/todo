import { useState } from "react";
import { toast } from "sonner";
import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { Star } from "lucide-react";
import { updatePriority } from "@/action/update-priority";
import { Button } from "../ui/button";

interface NotesListProps {
    data: Note;
}

export const UpdatePriority = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatePriority, {
        onSuccess: (data) => {
            toast.success(`Content "${data.important}" updated!`);
        },
    });

    const handleToggle = () => {
        execute({
            id: data.id,
            important: !data.important,
        });
    };

    return (
        <form className="flex text-start h-full xl:text-lg lg:text-sm md:text-sm">
            <Star
                onClick={handleToggle}
                className={`${data.important ? "fill-[#ffff00]" : ""}`}
                size={27}
                role="button"

            />
        </form>
    );
};
