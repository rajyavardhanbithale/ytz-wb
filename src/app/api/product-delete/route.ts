import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(req: NextRequest) {
   
    const productID = req.nextUrl.searchParams.get('productID');


    if (!productID) {
        return NextResponse.json(
            { message: 'Product ID is required' },
            { status: 400 }
        );
    }

    const supabase = createClient();


    const { data, error } = await supabase
        .from('product-data')
        .delete()
        .eq('id', productID);

    
    if (error) {
        console.error('Error deleting product:', error);
        return NextResponse.json(
            { message: 'Error deleting product' },
            { status: 500 } 
        );
    }



    return NextResponse.json(
        { message: 'Product successfully deleted' },
        { status: 200 } 
    );
}
