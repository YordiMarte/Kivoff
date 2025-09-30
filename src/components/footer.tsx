"use client"

import {Github, Linkedin, Monitor, Moon, Sun, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react";


export default function Footer() {
    const [theme, setTheme] = useState("system")
    const [lang, setLang] = useState("es")

    return (
        <footer className="bg-black text-gray-300 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
                    <div className="flex items-center mb-3">
                        <div className="flex justify-start -mt-80">
                        <img src="KivoffLogo.svg" alt="Kivoff Logo" className="h-10"/>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Products</h4>
                    <ul className="space-y-3">
                        <li><Link href="#">Infera.JS</Link></li>
                        <li><Link href="#">Veftro</Link></li>
                        <li><Link href="#">Oryze</Link></li>
                        <li><Link href="#">Fforve</Link></li>
                        <li><Link href="#">Ky</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Developers</h4>
                    <ul className="space-y-3">
                        <li><Link href="#">Docs</Link></li>
                        <li><Link href="#">Kivoff UI</Link></li>
                        <li><Link href="#">Changelog</Link></li>
                        <li><Link href="#">Support</Link></li>
                        <li><Link href="#">Guides</Link></li>
                        <li><Link href="#">Customers</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Become a Partner</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Events</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Solutions</h4>
                    <ul className="space-y-3">
                        <li><Link href="#">AI Builders</Link></li>
                        <li><Link href="#">No Code</Link></li>
                        <li><Link href="#">Startups</Link></li>
                        <li><Link href="#">Enterprise</Link></li>
                    </ul>
                </div>
            

            <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <ul className="space-y-3">
                    <li><Link href="#">Contact us</Link></li>
                    <li><Link href="#">X (Twitter)</Link></li>
                    <li><Link href="https://do.linkedin.com/company/kivoff">LinkedIn</Link></li>
                    <li><Link href="#">GitHub</Link></li>
                    <li><Link href="#">YouTube</Link></li>
                </ul>
            </div>
        </div>

            <div className="border-t border-gray-800 mt-8">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Kivoff. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/terms2">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            <div>
            </div>
        </div>
</footer>
        );
}

