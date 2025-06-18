"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/footer/Footer";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import logoIcon from "../../public/assets/logo/logo icon svg.svg"

export default function WelcomePage() {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");

    const options = [
        "1-10 employees",
        "11-100 employees",
        "101-500 employees",
        "501-1000 employees",
        "1001+ employees",
    ];
    return (
        <div className="w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-auto">
            <button 
                onClick={() => router.back()}
                className="text-[#787878] text-[12px] font-sans hover:text-[13px] pt-5 pl-7">
                    &lt;  Back
            </button>
            <div className="relative h-full px-10">
                <div className="relative mx-auto h-full w-full">
                    <div className="flex h-full min-h-[calc(100vh-var(--footer-height))] flex-col pb-14">
                        <div className="flex h-full flex-col justify-between gap-10">
                            <div className="flex h-full flex-col gap-10 justify-center">
                                <div className="mb[-1rem] flex items-center justify-center gap-3 select-none">
                                    <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-4">
                                        <Image
                                            src={logoIcon}
                                            alt="Logo"
                                            height={40}
                                            width={40}
                                        ></Image>
                                    </div>
                                </div>
                                <div className="transition-all w-full will-change-[transform,opacity,filter] duration-450 ease-out translate-x-0 opacity-100 blur-none items-center flex flex-col gap-4">
                                    <h1 className="text-[24px] font-sans">Tell us about your company</h1>
                                    <span className="inline-block">
                                        <p className="text-[13px] text-[#787878] font-sans">This will help us personalize your experience</p>
                                    </span>
                                </div>
                                <div className="transition-all w-full will-change-[transform,opacity,filter] duration-450 ease-out translate-x-0 opacity-100 blur-none">
                                    <form>
                                        <div className="m-auto flex max-w-[296px] flex-col gap-6">
                                            <div className="space-y-4">
                                                <div className="w-full max-w-[296px] mb-4">
                                                    <label
                                                        htmlFor="company-size"
                                                        className="text-[13px] text-[#787878] mb-2 block"
                                                    >
                                                        Company Size
                                                    </label>

                                                    <DropdownMenu.Root>
                                                        <DropdownMenu.Trigger asChild>
                                                        <button
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white flex justify-between items-center hover:bg-gray-50 transition-all focus:outline-none focus:ring-0"
                                                            id="company-size"
                                                        >
                                                            {selectedSize || "Select"}
                                                            <ChevronDown size={16} />
                                                        </button>
                                                        </DropdownMenu.Trigger>

                                                        <DropdownMenu.Content
                                                        align="start"
                                                        className="data-[state=closed]:animate-dropdown-out data-[state=open]:animate-dropdown-in bg-white border border-gray-200 rounded-md shadow-lg max-h-[400px] min-w-52 w-full overflow-y-auto z-50 focus:outline-none focus:ring-0"
                                                        sideOffset={5}
                                                        >
                                                        {options.map((option) => (
                                                            <DropdownMenu.Item
                                                            key={option}
                                                            onSelect={() => setSelectedSize(option)}
                                                            className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer rounded-md transition-colors select-none focus:outline-none focus:ring-0"
                                                            >
                                                            {option}
                                                            </DropdownMenu.Item>
                                                        ))}
                                                        </DropdownMenu.Content>
                                                    </DropdownMenu.Root>
                                                    </div>
                                                <div>
                                                    <label
                                                        htmlFor="is-agency"
                                                        className="h-6 select-none text-[13px] text-[#3D3D3D] rounded-md flex gap-2 w-max items-center cursor-pointer hover:bg-[#F5F5F5] px-1.5 mt-2"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id="is-agency"
                                                            checked={isChecked}
                                                            onChange={() => setIsChecked(!isChecked)}
                                                            className="h-3 w-3 appearance-none flex items-center justify-center outline-none border-[1.5px] border-gray-300 rounded-sm checked:bg-black"
                                                        />
                                                        <span className="flex grow items-center">
                                                            <span className="text-[13px]">I'm an agency</span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => router.push("/geo/intro")}
                                                    className={`
                                                        mx-auto mt-4 w-full overflow-hidden transition-[scale,background-color]
                                                        duration-300 ease-out gap-2 relative outline-none shadow 
                                                        disabled:shadow-none inline-flex justify-center items-center rounded-md 
                                                        min-h-[36px] text-[13px] bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white 
                                                        disabled:cursor-not-allowed disabled:text-[#9A9A9A] disabled:bg-[#EDEDED] px-2.5
                                                    `}
                                                    disabled={!selectedSize}
                                                    >
                                                    <div className="flex items-center justify-center transition-opacity duration-200 ease-out">
                                                        Continue
                                                    </div>
                                                </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}