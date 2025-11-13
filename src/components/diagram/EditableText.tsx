import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
  onEditingChange: (editing: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  fontStyle?: "normal" | "italic";
  color?: string;
  textAlign?: "left" | "center" | "right";
}

export const EditableText = ({
  value,
  onChange,
  isEditing,
  onEditingChange,
  className,
  style,
  fontSize = 14,
  fontWeight = "normal",
  fontStyle = "normal",
  color = "currentColor",
  textAlign = "center",
}: EditableTextProps) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Select all text
      const range = document.createRange();
      range.selectNodeContents(inputRef.current);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [isEditing]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    onEditingChange(false);
    onChange(localValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      inputRef.current?.blur();
    } else if (e.key === "Escape") {
      setLocalValue(value);
      onEditingChange(false);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setLocalValue(e.currentTarget.textContent || "");
  };

  if (isEditing) {
    return (
      <div
        ref={inputRef}
        contentEditable
        suppressContentEditableWarning
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        className={cn(
          "outline-none border-2 border-primary rounded px-2 py-1 min-w-[50px] bg-background/80",
          className
        )}
        style={{
          fontSize: `${fontSize}px`,
          fontWeight,
          fontStyle,
          color,
          textAlign,
          ...style,
        }}
      >
        {localValue}
      </div>
    );
  }

  return (
    <div
      className={cn("cursor-text px-2 py-1", className)}
      style={{
        fontSize: `${fontSize}px`,
        fontWeight,
        fontStyle,
        color,
        textAlign,
        ...style,
      }}
    >
      {value || "Double-click to edit"}
    </div>
  );
};
