import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "button",
        variant === "primary" ? "bg-purple-gradient text-white" : "bg-white text-purple-700 border border-purple-200",
        className
      )}
      {...props}
    />
  );
}
