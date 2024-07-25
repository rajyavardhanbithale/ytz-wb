import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/lib/store/StroreProvider'
import Navbar from '@/app/components/Navbar'

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
                <body className={inter.className}>
                    <div className="relative w-full flex items-center justify-center">
                        <Navbar />
                    </div>

                    <div className="mt-24">
                        {children}

                    </div>
                </body>
            </html>
        </StoreProvider>
    )
}
