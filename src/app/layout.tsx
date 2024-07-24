import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/lib/store/StroreProvider'

const inter = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: 'Yash Tech Zone',
    description: 'Welcome To Yash Tech Zone',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <StoreProvider>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </StoreProvider>
    )
}
