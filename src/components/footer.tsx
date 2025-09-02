"use client"

import {Github, Linkedin, Monitor, Moon, Sun, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react";


export default function Footer() {
    const [theme, setTheme] = useState("system")
    const [lang, setLang] = useState("es")

    return (
        <footer className="bg-black text-gray-300 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="md:col-span-1">
                    <div className="flex items-center mb-3">
                        <img src="KivoffLogo.svg" alt="Kivoff Logo" className="h-10" />
                    </div>
                    <div className="social-links flex gap-2 mt-3">
                        <a className="social-link" title="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a className="social-link" title="Twitter" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z"/>
                            </svg>
                        </a>
                        <a className="social-link" title="YouTube" href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.24 3.5 12 3.5 12 3.5s-7.24 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.338 0 12 0 12s0 3.662.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.76 20.5 12 20.5 12 20.5s7.24 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.662 24 12 24 12s0-3.662-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                        <a className="social-link" title="Email" href="mailto:info@kivoff.com">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Products</h4>
                    <p className="text-sm text-gray-400 mb-4"></p>
                    <ul className="space-y-3">
                        <li><Link href="#">Infera.JS</Link></li>
                        <li><Link href="#">Veftro</Link></li>
                        <li><Link href="#">Oryza</Link></li>
                        <li><Link href="#">Fforve</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Developers</h4>
                    <p className="text-sm text-gray-400 mb-2"></p>
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
                    <p className="text-sm text-gray-400 mb-2"></p>
                    <ul className="space-y-3">
                        <li><Link href="#">AI Builders</Link></li>
                        <li><Link href="#">No Code</Link></li>
                        <li><Link href="#">Startups</Link></li>
                        <li><Link href="#">Enterprise</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Kivoff. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms</Link>
                        <Link href="#">Security</Link>
                    </div>
                </div>
                <div>
                    </div>
                </div>
        </footer>
    );
}