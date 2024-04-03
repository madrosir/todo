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




    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: any) => {
        if (e.key === 'Enter' && field.name === 'tags') {
            e.preventDefault();

            const tagInput = e.target as HTMLInputElement;
            const tagValue = tagInput.value.trim();

            if (tagValue !== '') {
                if (tagValue.length > 15) {
                    return form.setError('tags', {
                        type: 'required',
                        message: 'Tag must be less than 15 characters.'
                    })
                }

                if (!field.value.includes(tagValue as never)) {
                    form.setValue('tags', [...field.value, tagValue]);
                    tagInput.value = ''
                    form.clearErrors('tags');
                }
            } else {
                form.trigger();
            }
        }
    }

    const disableEditing = () => {
        setIsEditing(false);
    };

    const onBlur = () => {
        formRef.current?.requestSubmit();
    };

    if (isEditing) {

        return (
            <form onSubmit={onSubmit} ref={formRef} className="flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm ">
                <FormTextarea
                    id='name'
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




        </div>

    );
};
