'use client'


import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/store'
import { getImageUrl } from '@/lib/store/dashboard/productData'
import { useState } from 'react'



export default function UploadImage() {
    const [open, setOpen] = useState<boolean>(false)

    const dispatch = useDispatch<AppDispatch>()

    const image = (data: any) => {
        dispatch(getImageUrl(data.toString()))
        setOpen(false)
    }

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="my-5">
                        Upload Image
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[825px]">
                    <DialogHeader>
                        <DialogTitle>Upload Image</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                   
                   {/* 
                        image upload here
                   */}
                </DialogContent>
            </Dialog>
        </>
    )
}
