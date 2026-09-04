import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'RESPECT COLLECTION — Defined by Presence.',description:'Modern luxury, timeless design, quiet confidence.',openGraph:{title:'RESPECT COLLECTION',description:'Defined by Presence.'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="noise">{children}</body></html>}