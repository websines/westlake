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
    title: "Backup and Disaster Recovery",
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
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/img01.jpg"
              alt="IT Services Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-black opacity-60" />
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <AnimatedShinyTextDemo />
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              <CoverDemo />
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Empower your business with cutting-edge IT solutions and
              unparalleled expertise
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Link
                  href="/meeting"
                  className="flex flex-row gap-2 items-center justify-center"
                >
                  Book a Call
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-orange-500 hover:bg-orange-100 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">
              <WordPullUpDemo />
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    <service.icon className="h-16 w-16 text-orange-500 mb-6" />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                  <Link
                    href={service.pageLink}
                    className="text-orange-500 hover:text-orange-600 font-medium flex items-center group"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800">
              Our Creative Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <step.icon className="h-16 w-16 text-orange-500 mb-6 mx-auto" />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">
              What Our Clients Say
            </h2>
            <MovingTestimonials />
          </div>
        </section>

        <section className="py-24 px-4 bg-gradient-to-br from-orange-50 to-orange-100 text-black relative overflow-hidden">
          <ShootingStarsAndStarsBackgroundDemo />
          <div className="max-w-4xl mx-auto text-center relative z-10 mt-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to transform your IT infrastructure?
            </h2>
            <p className="text-xl mb-12 leading-relaxed">
              Let's work together to create a tailored solution for your
              business.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-orange-500 hover:bg-orange-100 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link
                href="/meeting"
                className="flex flex-row gap-2 items-center justify-center"
              >
                Book a Call
                <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* <section className="py-24 px-4 bg-gray-50">
          <LetsMakeThingsHappenSection />
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
