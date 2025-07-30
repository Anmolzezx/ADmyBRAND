import React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow p-6", className)} {...props} />
  );
}
