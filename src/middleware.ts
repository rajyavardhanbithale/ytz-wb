import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from "./utils/supabase/server"


export default async function Middleware(request: NextRequest) {

    const path = request.nextUrl.pathname
    const supabase = createClient()

    if (path === '/admin') {
        const { data: { user }, error } = await supabase.auth.getUser()
        if (user === null) {
            return NextResponse.redirect(new URL('/admin/login', request.nextUrl))

        }
    }

    if (path === '/admin/login') {
        const { data: { user }, error } = await supabase.auth.getUser()
        if (user !== null) {
            return NextResponse.redirect(new URL('/admin', request.nextUrl))
        }

    }

}

export const config = {
    matcher: ['/admin', '/admin/login'],
}
