import {DM_Serif_Display, Inter} from 'next/font/google'

export const inter = Inter({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-sans'
})

export const serif = DM_Serif_Display({
    weight: '400',
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-serif'
})

