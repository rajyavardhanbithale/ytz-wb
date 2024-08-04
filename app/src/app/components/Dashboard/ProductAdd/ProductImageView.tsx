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
import Image from 'next/image'

export function ProductImageView(props: { image: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    src={props.image}
                    alt="image"
                    className="w-12 h-12 cursor-pointer"
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>View Image</DialogTitle>
                </DialogHeader>

                <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    src={props.image}
                    alt="image"
                    className="w-full cursor-pointer"
                />
            </DialogContent>
        </Dialog>
    )
}
