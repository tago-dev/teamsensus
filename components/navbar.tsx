"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Roster", href: "#roster" },
    { name: "Matches", href: "#matches" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a3a] bg-[#0a0a0f]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#ff4655] to-[#ff6b77] flex items-center justify-center font-bold text-white text-xl">
              TS
            </div>
            <span className="text-xl font-bold text-white">
              Team <span className="text-[#ff4655]">Sensus</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-[#ff4655]"
              >
                {item.name}
              </Link>
            ))}
            <button className="rounded-lg bg-[#ff4655] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#ff6b77] hover:shadow-lg hover:shadow-[#ff4655]/20">
              Join Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-[#1a1a24] hover:text-white md:hidden"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 border-t border-[#2a2a3a] bg-[#0a0a0f] px-4 pb-3 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-[#1a1a24] hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="mt-2 w-full rounded-lg bg-[#ff4655] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#ff6b77]">
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
}
