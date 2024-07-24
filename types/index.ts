interface ProductData {
    id: string
    productName: string
    sellerName: string
    description: string
    price: number
    discountPrice: number
    timestamp: number
    totalAvailable: number
    inStock: boolean

    category: string[] | string
    tags: string[] | string
    imageURL: string[]
}

export type { ProductData }
