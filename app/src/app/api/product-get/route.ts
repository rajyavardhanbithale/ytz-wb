export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(req: NextRequest) {
    const supabase = createClient()

    const productId = req.nextUrl.searchParams.get('id')

    if (productId) {
        const { data, error } = await supabase
            .from('ytz-product-data')
            .select('*')
            .eq('id', productId)
            .single()

        return NextResponse.json(data, { status: 200 })
    }

    const { data, error } = await supabase.from('ytz-product-data').select('*')

    return NextResponse.json(
        {
            data,
        },
        {
            status: 200,
        }
    )
}
