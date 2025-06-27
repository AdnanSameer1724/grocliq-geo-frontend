"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import logoIcon from "../../public/assets/logo/logo icon svg.svg";
import Footer from "../../components/footer/Footer";

export default function IntroPage () {
    const router = useRouter();
    const emailID = localStorage.getItem("emailID");

    const [url, setUrl] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValidUrl = (() => {
            try {
                const u = new URL(url);
                return u.protocol === "http:" || u.protocol === "https:";
            } catch (_) {
                return false;
            }
        })();
    
        const valid = emailID && firstName && lastName && password.length >= 8 && isValidUrl;
        setIsFormValid(valid);
    }, [emailID, firstName, lastName, password, url]);

    const handleContinue = () => {
        localStorage.setItem("companyURL", url);
        router.push("/geo/companyAnalysis");
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-start">
            <div className="relative h-full px-10">
                <div className="relative mx-auto h-full w-full max-w-[440px]">
                    <div className="flex h-full min-h-[calc(100vh-var(--footer-height))] flex-col py-14">
                        <div className="flex h-full flex-col justify-between gap-10">
                            <div className="flex h-full flex-col gap-10">
                                <div className="flex items-center gap-3 select-none">
                                    <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-4">
                                        <Image
                                            src={logoIcon}
                                            alt="logo"
                                            height={24}
                                            width={24}
                                        ></Image>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-[14px] leading-[16px] text-[#828282]">grocliq.com</p>
                                    </div>
                                </div>
                                <div className="transition-all w-full will-change-[transform,opacity,filter] duration-450 ease-out translate-x-0 opacity-100 blur-none flex flex-col gap-4">
                                    <h1 className="text-[24px] will-change-[filter] font-bold">
                                        Create your account to get started with Profound
                                    </h1>
                                    <span className="inline-block will-change-[filter]">
                                        <p className="text-[13px] text-[#787878]">
                                            Sign up to start tracking your brand's visibility.
                                        </p>
                                    </span>
                                </div>
                                <div className="transition-all w-full will-change-[transform,opacity,filter] duration-450 ease-out translate-x-0 opacity-100 blur-none">
                                    <form>
                                        <div className="flex flex-col gap-8">
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between gap-2">
                                                    <p className="text-[13px] w-max">Work email</p>
                                                </div>
                                                <div className="relative h-full w-full">
                                                    <input 
                                                        className="w-full h-full bg-bg-primary px-4 py-2 transition-all duration-300 ease-out border-[1.5px] border-border-primary rounded-lg outline-none placeholder:select-none placeholder:font-normal text-body-small-medium placeholder:text-text-tertiary shadow-flat focus:shadow-focus focus:border-border-focus not-focus-visible:hover:bg-control-hover"
                                                        required
                                                        placeholder="name@company.com"
                                                        id="email"
                                                        autoComplete="on"
                                                        autoCorrect="off"
                                                        spellCheck="false"
                                                        type="email"
                                                        name="email"
                                                        value={ emailID }
                                                        readOnly
                                                    />      
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex justify-between gap-2">
                                                        <p className="text-[13px] text-[#18181A] ">First name</p>
                                                    </div>
                                                    <div className="relative h-full w-full">
                                                        <input
                                                            className="w-full h-full bg-bg-primary px-4 py-2 transition-all duration-300 ease-out border-[1.5px] border-border-primary rounded-lg outline-none placeholder:select-none placeholder:font-normal text-body-small-medium placeholder:text-text-tertiary shadow-flat focus:shadow-focus focus:border-border-focus not-focus-visible:hover:bg-control-hover"
                                                            required
                                                            placeholder="First name"
                                                            id="first-name"
                                                            autoComplete="on"
                                                            autoCorrect="off"
                                                            spellCheck="false"
                                                            type="text"
                                                            name="firstName"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex justify-between gap-2">
                                                        <p className="text-[13px] text-[#18181A]">Last name</p>
                                                    </div>
                                                    <div className="relative w-full h-full">
                                                        <input
                                                            className="w-full h-full bg-bg-primary px-4 py-2 transition-all duration-300 ease-out border-[1.5px] border-border-primary rounded-lg outline-none placeholder:select-none placeholder:font-normal text-body-small-medium placeholder:text-text-tertiary shadow-flat focus:shadow-focus focus:border-border-focus not-focus-visible:hover:bg-control-hover"
                                                            required
                                                            placeholder="Last name"
                                                            id="last-name"
                                                            autoComplete="on"
                                                            autoCorrect="off"
                                                            spellCheck="false"
                                                            type="text"
                                                            name="lastName"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between gap-2">
                                                    <p className="text-[13px] text-[#18181A]">Password</p>
                                                </div>
                                                <div className="relative h-full w-full">
                                                    <input
                                                        className="w-full h-full bg-bg-primary px-4 py-2 transition-all duration-300 ease-out border-[1.5px] border-border-primary rounded-lg outline-none placeholder:select-none placeholder:font-normal text-body-small-medium placeholder:text-text-tertiary shadow-flat focus:shadow-focus focus:border-border-focus not-focus-visible:hover:bg-control-hover"
                                                        required
                                                        placeholder="Password"
                                                        id="password"
                                                        autoComplete="on"
                                                        autoCorrect="off"
                                                        spellCheck="false"
                                                        type="password"
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                <span className="text-[13px] text-[#969696]">
                                                    Password must be at least 8 characters
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between gap-2">
                                                    <p className="text-[13px] text-[#18181A]">Company Website URL</p>
                                                </div>
                                                <div className="relative h-full w-full">
                                                    <input
                                                        className="w-full h-full bg-bg-primary px-4 py-2 transition-all duration-300 ease-out border-[1.5px] border-border-primary rounded-lg outline-none placeholder:select-none placeholder:font-normal text-body-small-medium placeholder:text-text-tertiary shadow-flat focus:shadow-focus focus:border-border-focus not-focus-visible:hover:bg-control-hover"
                                                        required
                                                        placeholder="https://example.com"
                                                        id="website-url"
                                                        autoComplete="on"
                                                        autoCorrect="off"
                                                        spellCheck="false"
                                                        type="url"
                                                        name="url"
                                                        value={url}
                                                        onChange={(e) => setUrl(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                disabled={!isFormValid}
                                                onClick={handleContinue}
                                                className={`
                                                    mx-auto mt-4 w-full overflow-hidden transition-[scale,background-color]
                                                    duration-300 ease-out gap-2 relative outline-none shadow 
                                                    disabled:shadow-none inline-flex justify-center items-center rounded-md 
                                                    min-h-[36px] text-[13px] bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white 
                                                    disabled:cursor-not-allowed disabled:text-[#9A9A9A] disabled:bg-[#EDEDED] px-2.5
                                                `}
                                            >
                                                <div className="flex items-center justify-center transition-opacity duration-200 ease-out">
                                                    Create Account
                                                </div>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-greyl-100 md:block"></div>
            <Footer />
        </div>
    )
}
