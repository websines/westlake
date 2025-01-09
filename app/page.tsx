"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Shield,
  Cloud,
  Database,
  Wifi,
  Zap,
  BarChart,
  BookOpen,
  HeadsetIcon,
  Lock,
  Clock,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { AnimatedShinyTextDemo } from "@/components/AnimatedShinyText";
import { CoverDemo } from "@/components/Cover";
import { WordPullUpDemo } from "@/components/ui/wordpullup";
import { MovingTestimonials } from "@/components/MovingTestimonials";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/ShootingStars";

const services = [
  {
    icon: Shield,
    title: "IT Consulting",
    description:
      "Strategic guidance to align your IT infrastructure with business goals",
    pageLink: "/it-consulting",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Robust protection against evolving digital threats and vulnerabilities",
    pageLink: "/cybersecurity",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable and flexible cloud solutions for modern businesses",
    pageLink: "/cloud-services",
  },
  {
    icon: BarChart,
    title: "Backup & Recovery",
    description:
      "Ensure business continuity with reliable data backup and recovery solutions",
    pageLink: "/backup-and-disaster-recovery",
  },
];

const process = [
  {
    title: "Consultation",
    description:
      "We start by understanding your unique business needs and challenges.",
    icon: HeadsetIcon,
  },
  {
    title: "Strategy Development",
    description:
      "Our experts craft a tailored IT strategy aligned with your goals.",
    icon: BookOpen,
  },
  {
    title: "Implementation",
    description:
      "We deploy cutting-edge solutions to enhance your IT infrastructure.",
    icon: Zap,
  },
  {
    title: "Ongoing Support",
    description:
      "Our team provides continuous monitoring and support to ensure optimal performance.",
    icon: Clock,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/80"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-pulse delay-75"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-violet-500/30 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-pulse delay-150"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-gradient">
                Transform Your Business with Next-Gen IT Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Empower your organization with cutting-edge technology solutions designed for the modern digital landscape
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-purple-900 text-lg py-6 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Link href="/meeting" className="flex items-center gap-2">
                    Schedule a Consultation
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-lg py-6 px-8 rounded-full">
                  <Link href="#services" className="text-black hover:text-white flex items-center gap-2">
                    Explore Services
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-purple-900 relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                Comprehensive IT Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Tailored services to meet your organization's unique technology needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <Link href={service.pageLink} key={i} className="group">
                  <div className="relative">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300">
                      <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-white/70">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-purple-900 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-purple-500/5 to-transparent"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-violet-500/5 to-transparent"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                Our Process
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A systematic approach to delivering exceptional IT solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:transform hover:scale-[1.02] transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 p-4 rounded-2xl w-16 h-16 mb-6">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/70">
                      {step.description}
                    </p>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-purple-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-purple-500/5 to-transparent"></div>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-violet-500/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                See what our clients say about our solutions and dedication to their success
              </p>
            </div>
          </div>
          <MovingTestimonials />
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-purple-900 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Let's discuss how our IT solutions can help you achieve your business goals
              </p>
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <Button className="relative bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 text-xl py-8 px-16 rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(139,_92,_246,_0.5)] transition-all duration-300">
                  <Link href="/meeting" className="flex items-center gap-3 font-bold">
                    Schedule a Consultation
                    <ArrowUpRight className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
