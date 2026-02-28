import SignupPage from "@/components/SignupPage";

export default function Signup() {
    return (
        <main className="relative min-h-screen w-full flex justify-center items-center overflow-hidden bg-slate-50">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                {/* Enhanced Animated Moving Mesh Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-rose-300/60 blur-[120px] animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-orange-200/70 blur-[120px] animate-blob [animation-delay:4s] [animation-duration:30s]" />
                <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/60 blur-[100px] animate-blob [animation-delay:8s] [animation-duration:20s]" />
                
                {/* Subtle Noise Texture only */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full flex justify-center items-center p-4 py-10">
                <SignupPage />
            </div>
        </main>
    );
}
