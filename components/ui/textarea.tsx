import * as React from "react"

import { cn } from "@/lib/utils"
import TextareaAutosize from "react-textarea-autosize";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onKeyDown,
    onKeyUp, onClick, onBlur, id, name, defaultValue, placeholder, disabled, required }, ref) => {
    return (
      <TextareaAutosize
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        onBlur={onBlur}
        name={name}
        id={id}
        onKeyDown={onKeyDown}
        onClick={onClick}
        onKeyUp={onKeyUp}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        required={required}

      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };