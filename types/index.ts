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

    category: string
    tags: string
    imageUrl: string[]
}

export type {
    ProductData
}