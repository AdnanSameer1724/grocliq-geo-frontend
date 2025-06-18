import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-t-fill-quaternary bg-bg-base fixed bottom-0 left-0 z-40 flex h-[var(--footer-height,56px)] w-full items-center justify-between px-6 select-none">
            <a
                href="mailto:abdevil1724@gmail.com"
                className="focusable-element-outline rounded-md text-sm text-text-secondary"
            >
                Contact us
            </a>
            <div className="flex items-center gap-4">
                <Link
                    href="https://www.grocliq.com/"
                    target="_blank"
                    className="text-text-quaternary text-sm focusable-element-outline rounded-md"
                >
                    Privacy Policy
                </Link>
                <p className="text-text-quaternary text-sm">© 2025 Grocliq</p>
            </div>
        </footer>
    );
};

export default Footer;