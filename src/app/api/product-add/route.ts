import { NextRequest, NextResponse } from 'next/server'
import { ProductData } from '../../../types'
import { createClient } from '@/utils/supabase/server'

export async function POST(req: NextRequest) {
    const body: ProductData = await req.json()

    const supabase = createClient()

    const { error } = await supabase.from('product-data').insert(body)

    return NextResponse.json(
        {
            message: 'data inserted',
        },
        {
            status: 200,
        }
    )
}
