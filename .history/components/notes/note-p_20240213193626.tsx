import { useRef, useState } from "react";
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
        onSuccess: (updatedData) => {
            toast.success(`Note priority updated to ${updatedData.important ? "important" : "not important"}!`);
            setIsImportant(updatedData.important); // Update component state to reflect the change
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const [isImportant, setIsImportant] = useState(data.important);

    const handleToggleImportant = () => {
        setIsImportant((prevImportant) => !prevImportant);
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            execute({
                id: data.id,
                important: isImportant,
            });
        }}>
            <Star
                onClick={handleToggleImportant}
                type="button"
                className={`${isImportant ? "fill-[#ffff00]" : ""}`}
                size={27}
            />
        </form>
    );
};
