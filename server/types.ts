interface Product {
    id: string;
    timestamp: number;
    productName: string;
    sellerName: string;
    description: string;
    price: number;
    discountPrice: number;
    totalAvailable: number;
    category: string;
    tags: string[];
    imageUrls: string[];
    inStock: boolean;
}


export type { Product };