"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"

interface TaskEmptyPlaceholderProps {
  onCreateTask: (newTask: any) => void; // Adjust the type accordingly
}

export function TaskEmptyPlaceholder({ onCreateTask }: TaskEmptyPlaceholderProps) {
    const [date, setDate] = React.useState<Date>()
    const { toast } = useToast()
    const handleSave = () => {
      const newTask = {
        name: "drfvhpojp",
        description: "zrxtycvh;o",
        slug:"ther",
      };
      onCreateTask(newTask);
      toast({
        title: 'The task has been added!',
      });
    };
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed dark:">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
        <h3 className="mt-4 text-lg font-semibold text-slate-100">No task added</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground text-gray-300">
          You have not added any tasks. Add one below.
        </p>
        
        <Dialog >
          <DialogTrigger asChild>
            <Button size="sm" className="relative bg-black">
              Add Tasks
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-gray-900">Add Tasks </DialogTitle>
              <DialogDescription className="text-gray-500">
                please provide your task title and description
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Title</Label>
                <Input id="url" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="url"> Task Description</Label>
                <Input id="url" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="url">set your deadline</Label>
                <Popover>
         <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 " />
          {date ? format(date, "PPP") : <span className="text-gray-500">Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
              </div>
            </div>
            <DialogFooter>
            <Button className="rounded-lg border bg-black " onClick={handleSave}>
        Save
      </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        
      </div>
    </div>
  )
}