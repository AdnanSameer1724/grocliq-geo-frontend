"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import DotParticles from "../../components/particles/DotParticles";
import logoIcon from "../../public/assets/logo/logo icon svg.svg";

export default function GeoPage() {
    const [email, setEmail] = useState("");
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const router = useRouter();

    const handleContinue = () => {
        if(isValidEmail) {
            router.push("/geo/welcome");
        }
    };

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen pb-[56px]">
            <div className="relative h-full px-10">
                <div className="relative mx-auto h-full w-full max-w-[440px]">
                    <div className="flex h-full min-h-[calc(100vh-var(--footer-height))] flex-col py-14 justify-between">
                        <div className="flex flex-col gap-10">
                            <h1 className="text-2xl font-bold">
                                <Link
                                href="/dashboard"
                                className="flex items-center gap-1 text-[12px] text-gray-500 hover:text-black transition-colors"
                                >
                                <span className="text-base font-light">&lt;</span>
                                <span className="text-[12px] font-extralight">
                                    Back to Dashboard
                                </span>
                                </Link>
                            </h1>
                            <div className="flex items-center gap-2 h-14">
                                <Image
                                    src={logoIcon}
                                    alt="Grocliq logo"
                                    height={0}
                                    width={0}
                                    className="w-[5%] h-auto"
                                />
                                <span className="text-4xl font-semibold text-black">Grocliq</span>
                            </div>
                            <div className="transition-all w-full duration-[450ms] ease-out translate-x-0 opacity-100 blur-none flex flex-col gap-4">
                                <h2 className="text-2xl font-semibold text-black">
                                    Learn and control how AI is talking about your brand
                                </h2>
                                <span className="inline-block">
                                    <p className="text-sm text-gray-500 font-extralight">Create your account or sign in</p>
                                </span>
                            </div>
                            <div className="w-full max-w-md mx-auto flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Work email
                                </label>
                                <div className="flex items-start gap-2 w-[122%]">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@company.com"
                                        className={`transition-all duration-300 ease-out bg-white border border-gray-300 rounded-md outline-none px-4 py-2 shadow-none focus:shadow-md text-sm font-normal placeholder:font-extralight placeholder:text-gray-400 ${
                                            isValidEmail ? "w-[63%]" : "w-full"
                                        }`}
                                    />
                                    <button
                                        type="submit"
                                        onClick={handleContinue}
                                        disabled={!isValidEmail}
                                        className={`transition-all duration-300 ease-out bg-black text-white px-4 py-2 rounded-md text-sm font-medium shadow ${
                                            isValidEmail
                                                ? "opacity-100 translate-x-0 pointer-events-auto"
                                                : "opacity-0 translate-x-4 pointer-events-none"
                                        }`}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-4 mt-10">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-gray-900">Want a demo?</p>
                                    <p className="text-sm text-gray-600 font-light">
                                        Schedule a call with one of our experts
                                    </p>
                                </div>
                                
                            </div>
                            <button
                                className="mt-6 w-full px-4 py-2 bg-[#18181A] text-white text-sm rounded-md mx-auto block hover:bg-[#2a2a2d] transition-colors duration-300"
                            >
                                Schedule a call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden md:block w-full h-full bg-white">
                <DotParticles />
            </div>
            <Footer />
        </div>
    );
};