import { NextRequest, NextResponse } from "next/server";
import { ProductData } from "../../../../types";
import { createClient } from "@/utils/supabase/server";



export async function GET(req: NextRequest) {

    const supabase = createClient()

    const { data, error } = await supabase
        .from('product-data')
        .select('*')


    return NextResponse.json({
        data
    }, {
        status: 200
    })
}