'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function adminAuth(props: { email: string; password: string }) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({
        email: props.email,
        password: props.password,
    })

    if (error) {
        redirect('/admin/login?error=Could not authenticate user')
    }

    console.log(error)

    return redirect('/admin')
}
