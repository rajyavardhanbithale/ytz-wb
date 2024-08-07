'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import { useState } from 'react'

export default function ImageCarousel(props: { images: string[] }) {
    const [open, setOpen] = useState(false)
    const [url, setUrl] = useState('')

    const images = props.images
    return (
        <>
            <Carousel>
                <CarouselPrevious className="z-50">
                    <span className="sr-only">Previous</span>
                    &lt;
                </CarouselPrevious>
                <CarouselNext className="z-50">
                    <span className="sr-only">Next</span>
                    &gt;
                </CarouselNext>
                <CarouselContent>
                    {images &&
                        images.map((url, index) => (
                            <CarouselItem key={index}>
                                <Image
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    className="w-full h-48 object-contain cursor-pointer"
                                    src={url}
                                    alt={url}
                                    onClick={() => {
                                        setOpen(true)
                                        setUrl(url)
                                    }}
                                />
                            </CarouselItem>
                        ))}

                    {!images && (
                        <Image
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="w-full h-48 object-contain cursor-pointer"
                            src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
                            alt="no image"
                        />
                    )}
                </CarouselContent>
            </Carousel>

            <ImageViewPopUP
                open={open}
                setOpen={setOpen}
                url={url}
            ></ImageViewPopUP>
        </>
    )
}

function ImageViewPopUP(props: any) {
    return (
        <>
            <Dialog open={props.open} onOpenChange={props.setOpen}>
                <DialogTrigger></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Image</DialogTitle>
                    </DialogHeader>

                    <Image
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-full h-full object-cover"
                        src={props.url}
                        alt="image"
                    />
                </DialogContent>
            </Dialog>
        </>
    )
}
