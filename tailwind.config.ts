import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
            colors: {
                apple: {
                    bg: '#000000',
                    card: '#1C1C1E',
                    gray: '#8E8E93',
                    blue: '#0A84FF',
                    text: '#FFFFFF',
                }
            }
        },
    },
    plugins: [],
};
export default config;
