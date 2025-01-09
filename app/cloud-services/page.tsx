import Image from "next/image";
import Link from "next/link";
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
  ArrowUpCircle,
  CloudCog,
  CloudRain,
  CloudSun,
  Network,
  Gauge
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col w-full overflow-hidden theme-cloud-services">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 via-purple-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-blue-900/90"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container mx-auto h-full relative">
            <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <Cloud className="h-24 w-24 text-white relative" />
              </div>
            </div>
            <h1 className="text-7xl font-bold mb-8 text-white">
              Cloud Solutions
            </h1>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Scalable, secure, and efficient cloud services to power your business growth
            </p>
            <div className="flex justify-center gap-6">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg py-6 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/meeting" className="flex items-center gap-2">
                  Get Started
                  <ArrowUpCircle className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg py-6 px-8 rounded-full">
                <Link href="#services" className="flex items-center gap-2">
                  View Services
                  <Cloud className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Solutions Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Enterprise Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cloud services designed to optimize your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CloudCog,
                title: "Cloud Infrastructure",
                description: "Scalable and reliable cloud infrastructure solutions",
                features: ["Auto-scaling", "Load Balancing", "High Availability"],
                gradient: "from-blue-500 to-purple-500"
              },
              {
                icon: Database,
                title: "Cloud Storage",
                description: "Secure and efficient data storage solutions",
                features: ["Data Backup", "File Sharing", "Data Recovery"],
                gradient: "from-purple-500 to-blue-600"
              },
              {
                icon: Shield,
                title: "Cloud Security",
                description: "Advanced security measures for cloud environments",
                features: ["Encryption", "Access Control", "Threat Detection"],
                gradient: "from-blue-600 to-purple-500"
              },
              {
                icon: CloudSun,
                title: "Cloud Migration",
                description: "Seamless transition to cloud infrastructure",
                features: ["Assessment", "Planning", "Implementation"],
                gradient: "from-purple-600 to-blue-500"
              },
              {
                icon: Network,
                title: "Cloud Networking",
                description: "Optimized network solutions for cloud systems",
                features: ["VPN", "CDN", "DNS Management"],
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: CloudRain,
                title: "Cloud Management",
                description: "Comprehensive cloud resource management",
                features: ["Monitoring", "Optimization", "Cost Control"],
                gradient: "from-purple-500 to-blue-500"
              }
            ].map((service, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="mr-3 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                          <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "99.99%", label: "Uptime Guarantee", icon: Gauge },
              { number: "24/7", label: "Support", icon: HeadsetIcon },
              { number: "1000+", label: "Cloud Projects", icon: Cloud },
              { number: "50+", label: "Data Centers", icon: Database }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 text-center hover:transform hover:scale-[1.02] transition-all duration-300">
                  <stat.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "What are cloud services?",
                  answer: "Cloud services are computing resources and applications delivered over the internet. They include storage, servers, databases, networking, software, and analytics that can be quickly provisioned with minimal management effort."
                },
                {
                  question: "How can cloud services benefit my business?",
                  answer: "Cloud services offer numerous benefits including cost savings, scalability, flexibility, automatic updates, disaster recovery, and enhanced collaboration. They allow businesses to focus on core operations while reducing IT infrastructure management overhead."
                },
                {
                  question: "Is cloud computing secure?",
                  answer: "Yes, modern cloud services implement robust security measures including encryption, access controls, and regular security updates. We follow industry best practices and compliance standards to ensure your data remains secure in the cloud."
                },
                {
                  question: "How do you handle cloud migration?",
                  answer: "Our cloud migration process is carefully planned and executed to minimize disruption. We assess your current infrastructure, develop a migration strategy, perform the migration in phases, and provide comprehensive testing to ensure everything works as expected."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i + 1}`} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-300 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-blue-100">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Start your cloud journey today with our expert solutions and support
          </p>
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <Button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-xl py-8 px-16 rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-300">
              <Link href="/meeting" className="flex items-center gap-3 font-bold">
                Start Your Cloud Journey
                <Cloud className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
