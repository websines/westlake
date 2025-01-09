import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  FileWarning,
  Server,
  Network,
  Fingerprint,
  Key,
  Database,
  Scan,
  ShieldCheck,
  ArrowUpCircle,
  UserCheck,
  Laptop,
  Workflow,
  Building2,
} from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900/90"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="container mx-auto h-full relative">
              <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-40 right-10 w-32 h-32 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <Shield className="h-24 w-24 text-white relative" />
                </div>
              </div>
              <h1 className="text-7xl font-bold mb-8 text-white">
                Cybersecurity Services
              </h1>
              <p className="text-2xl text-purple-100 mb-12 leading-relaxed">
                Advanced protection for your digital assets and infrastructure
              </p>
              <div className="flex justify-center gap-6">
                <Button className="bg-white text-purple-900 hover:bg-purple-50 text-lg py-6 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Link href="/meeting" className="flex items-center gap-2">
                    Get Protected
                    <ArrowUpCircle className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="text-black border-white hover:bg-white/10 text-lg py-6 px-8 rounded-full">
                  <Link href="#services" className="flex items-center gap-2">
                    Our Solutions
                    <Shield className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 bg-gradient-to-br from-gray-50 via-purple-50 to-violet-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Protect your business with our advanced cybersecurity services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "Network Security",
                  description: "Protect your network from unauthorized access",
                  features: ["Firewall Protection", "Intrusion Detection", "VPN Solutions"],
                  gradient: "from-purple-500 to-violet-500"
                },
                {
                  icon: Eye,
                  title: "Threat Detection",
                  description: "Early identification of potential security threats",
                  features: ["24/7 Monitoring", "Threat Analysis", "Incident Response"],
                  gradient: "from-violet-500 to-purple-600"
                },
                {
                  icon: Shield,
                  title: "Data Protection",
                  description: "Secure your sensitive business information",
                  features: ["Encryption", "Access Control", "Data Backup"],
                  gradient: "from-purple-600 to-violet-500"
                },
                {
                  icon: Scan,
                  title: "Security Assessment",
                  description: "Comprehensive evaluation of security posture",
                  features: ["Vulnerability Scanning", "Risk Assessment", "Compliance Audit"],
                  gradient: "from-violet-600 to-purple-500"
                },
                {
                  icon: UserCheck,
                  title: "Identity Management",
                  description: "Secure access control and authentication",
                  features: ["Multi-factor Auth", "Single Sign-On", "Access Management"],
                  gradient: "from-purple-500 to-violet-600"
                },
                {
                  icon: AlertTriangle,
                  title: "Incident Response",
                  description: "Rapid response to security incidents",
                  features: ["24/7 Support", "Breach Management", "Recovery Planning"],
                  gradient: "from-violet-500 to-purple-500"
                }
              ].map((service, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-3xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300">
                    <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="mr-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-violet-400 flex items-center justify-center">
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

        {/* Security Process Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our Security Process
              </h2>
              <p className="text-xl text-purple-100">
                A comprehensive approach to protecting your business
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Scan,
                  title: "Assessment",
                  description: "Evaluate current security posture"
                },
                {
                  icon: Shield,
                  title: "Protection",
                  description: "Implement security measures"
                },
                {
                  icon: Eye,
                  title: "Monitoring",
                  description: "Continuous threat detection"
                },
                {
                  icon: Key,
                  title: "Response",
                  description: "Rapid incident management"
                }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl blur opacity-50"></div>
                      <step.icon className="h-12 w-12 text-white relative" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-purple-100">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "99.9%", label: "Threat Detection", icon: Eye },
                { number: "24/7", label: "Monitoring", icon: Shield },
                { number: "1000+", label: "Threats Blocked", icon: Lock },
                { number: "100%", label: "Client Protection", icon: ShieldCheck }
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-8 text-center hover:transform hover:scale-[1.02] transition-all duration-300">
                    <stat.icon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-purple-50 to-violet-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions.
            </p>
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <Button className="relative bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 text-xl py-8 px-16 rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(147,_51,_234,_0.7)] transition-all duration-300">
                <Link href="/meeting" className="flex items-center gap-3 font-bold">
                  Get Protected Now
                  <Shield className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  question: "What is NIST-powered cybersecurity?",
                  answer: "NIST-powered cybersecurity refers to security practices and frameworks based on guidelines set by the National Institute of Standards and Technology. It provides a comprehensive approach to managing and reducing cybersecurity risks."
                },
                {
                  question: "How can managed security services benefit my business?",
                  answer: "Managed security services provide expert monitoring, threat detection, and response capabilities. They can help reduce the risk of cyber attacks, ensure compliance with regulations, and allow your team to focus on core business activities."
                },
                {
                  question: "What types of businesses do you serve?",
                  answer: "We serve businesses of all sizes across various industries. Our solutions are scalable and can be tailored to meet the specific needs of small startups, mid-sized companies, and large enterprises."
                },
                {
                  question: "How do you ensure 24/7 protection?",
                  answer: "Our team of security experts works around the clock, utilizing advanced monitoring tools and automated systems to provide continuous protection. We have multiple layers of redundancy to ensure uninterrupted service."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md">
                  <h3 className="text-2xl font-bold mb-4">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
