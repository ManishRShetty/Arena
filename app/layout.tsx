import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
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
            <body className={`${inter.className} bg-black text-white`}>
                {children}
            </body>
        </html>
    );
}
