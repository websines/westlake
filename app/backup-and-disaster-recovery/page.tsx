import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Server,
  Users,
  Lock,
  Clock,
  Zap,
  BarChart,
  BookOpen,
  HeadsetIcon,
  Cloud,
  Database,
  Wifi,
  HardDrive,
  RefreshCw,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />

      <main className="flex-grow">
        <header className="relative h-[70vh] bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="max-w-3xl text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-6">
                Backup & Disaster Recovery Solutions
              </h1>
              <p className="text-xl mb-8">
                Protect your data and ensure business continuity with our comprehensive backup and recovery services
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
                <Link
                  className="flex flex-row gap-2 items-center"
                  href={"/meeting"}
                >
                  Get Started
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6 text-gray-800">
              Complete Data Protection
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Secure your business data with our enterprise-grade backup solutions and rapid recovery capabilities
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: HardDrive, label: "Data Backup" },
                { icon: RefreshCw, label: "Quick Recovery" },
                { icon: Shield, label: "Data Security" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <item.icon className="h-16 w-16 text-blue-500 mb-4" />
                  <span className="text-lg font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">
              Our Backup & Recovery Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: HardDrive, 
                  label: "Automated Backups",
                  description: "Regular automated backups of your critical data"
                },
                { 
                  icon: RefreshCw, 
                  label: "Rapid Recovery",
                  description: "Quick data recovery to minimize downtime"
                },
                { 
                  icon: Cloud, 
                  label: "Cloud Backup",
                  description: "Secure cloud-based backup solutions"
                },
                { 
                  icon: Shield, 
                  label: "Data Protection",
                  description: "Advanced encryption and security measures"
                },
                { 
                  icon: HeadsetIcon, 
                  label: "24/7 Support",
                  description: "Round-the-clock technical assistance"
                },
                { 
                  icon: BarChart, 
                  label: "Business Continuity",
                  description: "Comprehensive disaster recovery planning"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <item.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.label}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">
              Protect Your Business Data Today
            </h2>
            <p className="text-xl mb-8">
              Don't wait for a disaster to strike. Ensure your business continuity with our comprehensive backup and recovery solutions.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
              <Link
                className="flex flex-row gap-2 items-center"
                href={"/meeting"}
              >
                Schedule a Consultation
                <HeadsetIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Why do I need backup and disaster recovery?
                </AccordionTrigger>
                <AccordionContent>
                  Backup and disaster recovery solutions protect your business from data loss due to hardware failure, cyber attacks, natural disasters, or human error. They ensure business continuity and minimize downtime in case of emergencies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How often should I backup my data?
                </AccordionTrigger>
                <AccordionContent>
                  The frequency of backups depends on your business needs. We typically recommend daily backups for critical data, with some businesses requiring real-time backup solutions for maximum protection.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What types of backup do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  We offer various backup solutions including on-site backups, cloud backups, hybrid solutions, and automated backup systems. Our team will help you choose the best option based on your specific needs and requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How quickly can you restore our data?
                </AccordionTrigger>
                <AccordionContent>
                  Our recovery times vary depending on the amount of data and the type of backup solution. We prioritize critical systems and can often restore essential services within hours, with complete recovery typically completed within an agreed-upon timeframe.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
