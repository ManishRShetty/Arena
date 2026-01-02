import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
    src: "./fonts/satoshi/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2",
    variable: "--font-satoshi",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Games Library - Arena by Manish Shetty",
    description: "A curated collection of interactive experiences and technical experiments pushing the boundaries of web gaming.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="antialiased">
            <body className={`${satoshi.className} bg-black text-white`}>
                {children}
            </body>
        </html>
    );
}
