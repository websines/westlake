"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3 group">
              <Image
                src="/logos/logo.webp"
                alt="Company Logo"
                width={45}
                height={45}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className={`ml-2 text-xl font-bold tracking-tight ${
                scrolled ? "text-gray-900" : "text-white"
              } transition-colors duration-300`}>
                WestLake
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-8 sm:flex sm:items-center sm:space-x-8">
            {navItems.map((item) =>
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                    scrolled 
                      ? "text-gray-700 hover:text-blue-600" 
                      : "text-white/90 hover:text-white"
                  } transition-colors duration-300`}>
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/95 backdrop-blur-md border-none shadow-lg rounded-xl p-2 animate-in fade-in-80 slide-in-from-top-5">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} className="focus:bg-gray-100/80">
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg"
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
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                    scrolled 
                      ? "text-gray-700 hover:text-blue-600" 
                      : "text-white/90 hover:text-white"
                  } transition-colors duration-300`}
                >
                  {item.name}
                </Link>
              )
            )}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300 ml-4">
              Book a Call
            </Button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-lg ${
                scrolled 
                  ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100/50" 
                  : "text-white hover:text-white/80"
              } focus:outline-none transition-colors duration-300`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md shadow-lg px-4 pt-2 pb-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <>
                    <div className="px-3 py-2 text-base font-medium text-gray-900">
                      {item.name}
                    </div>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block pl-6 pr-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50/50 rounded-lg transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50/50 rounded-lg transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200/70">
            <div className="mt-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
