interface Product {
    id: string;
    timestamp: number;
    productName: string;
    sellerName: string;
    description: string;
    price: number;
    discountPrice: number;
    totalAvailable: number;
    category: string[];
    tags: string[];
    imageUrls: string[] | null;
    inStock: boolean;
}

interface Offers {
    productId: string
    startDate?: number,
    endDate?: number
}


export type { Product, Offers };