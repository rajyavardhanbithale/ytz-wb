'use client'

import { useParams } from 'next/navigation'

export default function DemoParam() {
    const productId = useParams()

    return <>{productId.id}</>
}
