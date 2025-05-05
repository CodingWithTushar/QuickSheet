"use client";
import { forwardRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/utils/utils";

interface UploadformProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const Uploadform = forwardRef<HTMLFormElement, UploadformProps>(
  ({ onSubmit, isLoading }, ref) => {
    return (
      <form
        ref={ref}
        className="flex items-center justify-center gap-6"
        onSubmit={onSubmit}
      >
        <Input
          type="file"
          name="file"
          id="file"
          accept="application/pdf"
          required
          disabled={isLoading}
          className={cn(
            `w-full flex items-center justify-end font-semibold bg-gradient-to-t from-blue-400 via-blue-300 to-blue-200 hover:bg-gradient-to-b hover:from-blue-400 hover:via-blue-300 hover:to-blue-200 transition-all duration-200 text-white cursor-pointer gap-1.5${
              isLoading && "opacity-50 cursor-not-allowed"
            }`
          )}
        />
        <Button disabled={isLoading} className="cursor-pointer">
          {isLoading ? <></> : "Upload your PDF"}
        </Button>
      </form>
    );
  }
);

Uploadform.displayName = "Uploadform";

export default Uploadform;
