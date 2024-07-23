'use client'

import { UploadDropzone } from "@bytescale/upload-widget-react";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { getImageUrl } from "@/lib/store/dashboard/productData";
import { useState } from "react";


const options = {
    apiKey: process.env.NEXT_PUBLIC_BYTESCALE_API || '',
    maxFileCount: 1,
    showFinishButton: true,
    styles: {
        colors: {
            primary: "#377dff"
        }
    }
};

export default function UploadImage() {
    const [open, setOpen] = useState<boolean>(false)

    const dispatch = useDispatch<AppDispatch>()

    const image = (data:any) => {
        dispatch(getImageUrl(data.toString()))
        setOpen(false)
    }

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="my-5">Upload Image</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[825px]">
                    <DialogHeader>
                        <DialogTitle>Upload Image</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <UploadDropzone options={options}
                        onComplete={files => image(files.map(x => x.fileUrl).join("\n"))}
                        width="800px"
                        height="500px" />
                   
                </DialogContent>
            </Dialog>
        </>
    )
}

