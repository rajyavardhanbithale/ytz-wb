'use client'

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


export function ProductImageView(props: { image: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <img src={props.image} alt="image" className="w-12 h-12 cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>View Image</DialogTitle>
                   
                </DialogHeader>

                <img src={props.image} alt="image" className="w-full cursor-pointer" />
               
            </DialogContent>
        </Dialog>
    )
}
