"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    subItems: [
      { name: "IT Consulting", href: "/it-consulting" },
      { name: "Cybersecurity", href: "/cybersecurity" },
      { name: "Cloud Services", href: "/cloud-services" },
      { name: "Backup & Recovery", href: "/backup-and-disaster-recovery" },
    ],
  },
  { name: "Contact", href: "/meeting" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <Image
                  src="/logos/logo.webp"
                  alt="Company Logo"
                  width={45}
                  height={45}
                  className="h-10 w-auto relative transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="ml-2 text-xl font-bold tracking-tight text-white transition-colors duration-300">
                WestLake
              </span>
            </Link>
          </div>

          <div className="hidden sm:ml-8 sm:flex sm:items-center sm:space-x-1">
            {navItems.map((item) =>
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-900/95 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-2 animate-in fade-in-80 slide-in-from-top-5">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.name}
                        className="focus:bg-white/10"
                      >
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white/90 hover:text-white transition-colors duration-200 rounded-lg"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10"
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="ml-6">
              <Button
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-purple-900 rounded-full transition-all duration-300"
              >
                <Link href="/meeting" className="flex items-center gap-2">
                  Get Started
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) =>
            item.subItems ? (
              <div key={item.name} className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-white/90">
                  {item.name}
                </div>
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            )
          )}
          <div className="pt-4">
            <Button
              className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-purple-900 rounded-full transition-all duration-300"
            >
              <Link href="/meeting" className="flex items-center justify-center gap-2">
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
