import { GameLibrary } from '@/components/GameLibrary';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-[#000000] text-white selection:bg-[#0A84FF] selection:text-white">
            <main className="w-full h-full">
                <GameLibrary />
                <Footer />
            </main>
        </div>
    );
}
