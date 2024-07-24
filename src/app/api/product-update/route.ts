import { NextRequest, NextResponse } from 'next/server'
import { ProductData } from '../../../../types'
import { createClient } from '@/utils/supabase/server'

export async function POST(req: NextRequest) {
    const body: ProductData = await req.json()

    const supabase = createClient()

    const bodyRemovedId: any = { ...body };
    delete bodyRemovedId.id;

    const { error } = await supabase
        .from('product-data')
        .update(bodyRemovedId)
        .eq('id', body.id)


    console.log(error);


    if (error){
        return NextResponse.json(
            {
                message: 'internal server error',
            },
            {
                status: 500,
            }
        )
    }

    return NextResponse.json(
        {
            message: 'data updated',
        },
        {
            status: 200,
        }
    )
}
