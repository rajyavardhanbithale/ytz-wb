'use client'
import Image from "next/image";
import React from 'react';

interface ProductImageViewProps {
    image: string[];
}

export default function ProductPageImage({ image }: ProductImageViewProps) {
    const [selectedImage, setSelectedImage] = React.useState(image[0]);

    return (
        <>
            <div className="flex justify-center items-center w-full rounded-3xl mb-4 h-[40vh] bg-slate-50 overflow-hidden">
                <Image
                    height={0}
                    width={0}
                    sizes="100vw"
                    src={selectedImage}
                    alt="Selected Product"
                    className="w-full h-full object-scale-down animate-fade-in object-center"
                />
            </div>

            <div className="flex gap-2 mt-2">
                {image.map((url, idx) => (
                    <div
                        key={idx}
                        className="overflow-hidden cursor-pointer p-2 bg-slate-100 rounded-2xl"
                        onClick={() => setSelectedImage(url)}
                    >
                        <Image
                            height={0}
                            width={0}
                            sizes="100vw"
                            src={url}
                            alt={`Thumbnail ${idx}`}
                            className="w-16 h-16 rounded-lg object-contain hover:scale-105 duration-500"
                        />
                    </div>
                ))}
            </div>

        </>
    );
}
