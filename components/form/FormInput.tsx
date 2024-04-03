'use client'

import { RefObject, forwardRef } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

import { FormErrors } from "./FormErrors";

interface FormInputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[] | undefined>;
    className?: string;
    defaultValue?: string;
    ref: RefObject<HTMLInputElement>;
    onBlur?: () => void;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
    id,
    label,
    type,
    placeholder,
    required,
    disabled,
    errors,
    className,
    defaultValue = '',
    onBlur,
    ...props
}, ref) => {
    const { pending } = useFormStatus();

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                {label ? (
                    <Label
                        htmlFor={id}
                        className="text-md font-semibold text-neutral-700"

                    >
                        {label}
                    </Label>
                ) : null}
                <Input
                    onBlur={onBlur}
                    defaultValue={defaultValue}
                    ref={ref}
                    required={required}
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled || pending}
                    className={cn('text-sm px-2 h-7 ',
                        className
                    )}
                    aria-describedby={`${id}-error`}
                />

            </div>
            <FormErrors
                id={id}
                errors={errors}
            />
        </div>
    )
})
FormInput.displayName = 'FormInput'