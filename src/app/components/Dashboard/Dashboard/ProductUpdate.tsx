'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'

import { ProductData } from "../../../../../types"
import { IoPencilOutline, IoTrashBinOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/lib/store"
import { deleteProduct, updateProduct } from "@/lib/store/dashboard/productData"

const formSchema = z.object({
    productName: z.string().min(2, {
        message: 'Product name must be at least 2 characters.',
    }),
    sellerName: z.string().min(2, {
        message: 'Seller name must be at least 2 characters.',
    }),
    description: z.string().min(1, {
        message: 'Description must be at least 10 characters.',
    }),
    price: z.coerce.number().gte(-1, 'Price must be greater than -1'),
    discountPrice: z.coerce
        .number()
        .gte(-1, 'Discount price must be greater than -1'),
    totalAvailable: z.coerce
        .number()
        .gte(-1, 'Total available be greater than -1'),

    category: z.string().min(2, {
        message: 'Category name must be at least 2 characters.',
    }),
    tags: z.string().min(2, {
        message: 'tags name must be at least 2 characters.',
    }),
    inStock: z.boolean(),
})

function ProductUpdate(props: { productData: ProductData }) {
    const productData = props.productData
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productName: productData.productName,
            sellerName: productData.sellerName,
            description: productData.description,
            price: productData.price,
            discountPrice: productData.discountPrice,
            totalAvailable: productData.totalAvailable,
            inStock: productData.inStock,
            tags: Array.isArray(productData.tags)
                ? productData.tags.join(', ')
                : '',
            category: Array.isArray(productData.category)
                ? productData.category.join(', ')
                : '',
        },
    })

    const dispatch = useDispatch<AppDispatch>()
    const onSubmit = (data: any) => {
        dispatch(updateProduct({ productData: data, id: productData.id }))
    }


    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="flex items-center text-base bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-colors duration-300">
                        <IoPencilOutline className="mr-2" /> Update
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Update Product</DialogTitle>
                        <DialogDescription>
                            Fill out the below fields to update a product.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-1"
                        >
                            <FormField
                                control={form.control}
                                name="productName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Product Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Product Name"
                                                {...field}
                                            />
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
                                            <Input
                                                placeholder="Seller Name"
                                                {...field}
                                            />
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
                                            <Input
                                                placeholder="Description"
                                                {...field}
                                            />
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
                                                <Input
                                                    type="number"
                                                    placeholder="Price"
                                                    {...field}
                                                />
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
                                            <FormLabel>
                                                Discount Price
                                            </FormLabel>
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
                                            <Input
                                                type="number"
                                                placeholder="Total Available"
                                                {...field}
                                            />
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
                                                <Input
                                                    type="text"
                                                    placeholder="Tags separated with comma ,"
                                                    {...field}
                                                />
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
                                                <Input
                                                    type="text"
                                                    placeholder="Category"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>




                            <div className="flex gap-5">
                                <Button type="submit">Submit</Button>
                                <Button
                                    onClick={() => {
                                        form.reset()
                                    }}
                                    type="reset"
                                >
                                    Reset
                                </Button>
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}


function ProductDelete(props: { productID: string }) {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <button className="flex items-center text-base bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700 transition-colors duration-300">
                        <IoTrashBinOutline className="mr-2" /> Delete
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete the product
                            and remove data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <button
                        onClick={() => {
                            dispatch(deleteProduct(props.productID))
                        }}
                        className="w-fit mt-5 flex items-center text-base bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700 transition-colors duration-300">
                        <IoTrashBinOutline className="mr-2" /> Delete
                    </button>
                </DialogContent>
            </Dialog>
        </>
    )

}

export { ProductUpdate, ProductDelete }
