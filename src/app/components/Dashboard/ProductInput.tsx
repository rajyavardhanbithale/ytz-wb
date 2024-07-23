'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import UploadImage from "./UploadImage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { ProductImageView } from "./ProductImageView";
import { resetImageSource, saveProduct } from "@/lib/store/dashboard/productData";


const formSchema = z.object({
    productName: z.string().min(2, {
        message: "Product name must be at least 2 characters.",
    }),
    sellerName: z.string().min(2, {
        message: "Seller name must be at least 2 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    price: z.coerce.number().gte(-1, 'Price must be greater than -1'),
    discountPrice: z.coerce.number().gte(-1, 'Discount price must be greater than -1'),
    totalAvailable: z.coerce.number().gte(-1, 'Total available be greater than -1'),

    category: z.string().min(2, {
        message: "Category name must be at least 2 characters.",
    }),
    tags: z.string().min(2, {
        message: "tags name must be at least 2 characters.",
    }),
    inStock: z.boolean(),
});

export default function AddProductDialog() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productName: "",
            sellerName: "",
            description: "",
            price: 0,
            discountPrice: 0,
            dateAdded: new Date(),
            totalAvailable: 0,
            inStock: true,
            tags: "",
            category: ""
        },
    });

    const imageURL = useSelector((state: RootState) => state.productData.imageURL)
    const status = useSelector((state: RootState) => state.productData.status)

    const dispatch = useDispatch<AppDispatch>()
    const onSubmit = (data: any) => {
        dispatch(saveProduct({productData: data, imageData: imageURL}))
    };

    console.log(status);
    

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Product</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Add Product</DialogTitle>
                        <DialogDescription>
                            Fill out the below fields to add a new product.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">

                            <FormField
                                control={form.control}
                                name="productName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Product Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Product Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="sellerName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Seller Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Seller Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Description" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-5">
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Price</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Price" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="discountPrice"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Discount Price</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    placeholder="Discount Price"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>

                            <FormField
                                control={form.control}
                                name="totalAvailable"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Total Available</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Total Available" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex">
                                <FormField
                                    control={form.control}
                                    name="tags"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tags</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="Tags separated with comma ," {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="Category" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex mt-5 w-full">
                                <UploadImage />

                                <div className="flex my-4 mx-3 rounded-xl">
                                    {imageURL && imageURL.map((url, idx) => (
                                        // <img src={url} key={idx} className="w-12 h-12" />
                                        <ProductImageView image={url} />
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-5">

                                <Button type="submit">Submit</Button>
                                <Button
                                    onClick={() => {
                                        form.reset();
                                        dispatch(resetImageSource())
                                    }}
                                    type="reset">Reset</Button>
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>

        </>
    );
}
