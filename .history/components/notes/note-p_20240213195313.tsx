import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";
import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { Star } from "lucide-react";
import { updatePriority } from "@/action/update-priority";

interface NotesListProps {
    data: Note;
}

export const UpdatePriority = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatePriority, {
        onSuccess: (data) => {
            toast.success(`Content "${data.important}" updated!`);
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const [isImportant, setIsImportant] = useState(false);
    const [selected, isSelected] = useState(false)
    const onSubmit = () => {

        execute({
            id: data.id,
            important: selected,
        });
    };
    console.log(data.important);
    function update() {
        setIsImportant((prevIsImportant) => !prevIsImportant);
    }


    console.log(data.important, "submit");

    return (
        <form action={onSubmit} className="flex text-start h-full xl:text-lg lg:text-sm md:text-sm">
            <Star
                onClick={update}
                type="button"
                className={`${isImportant ? "fill-[#ffff00]" : ""}`}
                size={27}
            />
        </form>
    );
};
