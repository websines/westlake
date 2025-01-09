import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
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
import { motion } from "framer-motion";

const services = [
  {
    icon: Lock,
    title: "Network Security",
    description: "Protect your network from unauthorized access and threats",
    features: ["Firewall Protection", "Intrusion Detection", "VPN Solutions"],
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "24/7 monitoring of your systems for potential security threats",
    features: ["Real-time Alerts", "Threat Analysis", "Incident Response"],
    gradient: "from-violet-500 to-fuchsia-500"
  },
  {
    icon: Shield,
    title: "Endpoint Protection",
    description: "Secure all devices connected to your network",
    features: ["Anti-malware", "Device Control", "Data Encryption"],
    gradient: "from-fuchsia-500 to-pink-500"
  },
  {
    icon: UserCheck,
    title: "Access Management",
    description: "Control and monitor access to your systems",
    features: ["Identity Verification", "Role-based Access", "SSO Integration"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Database,
    title: "Data Security",
    description: "Protect your sensitive data from breaches",
    features: ["Data Encryption", "Backup Solutions", "Recovery Plans"],
    gradient: "from-rose-500 to-red-500"
  },
  {
    icon: Scan,
    title: "Vulnerability Assessment",
    description: "Identify and address security vulnerabilities",
    features: ["Security Audits", "Penetration Testing", "Risk Assessment"],
    gradient: "from-red-500 to-orange-500"
  }
];

export default function Page() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />

      <main className="flex-grow">
        <PageHero
          icon={Shield}
          title="Cybersecurity Services"
          description="Advanced protection for your digital assets and infrastructure"
          primaryCTA={{
            text: "Get Protected",
            href: "/meeting",
            icon: ArrowUpCircle
          }}
          secondaryCTA={{
            text: "Our Solutions",
            href: "#services",
            icon: Shield
          }}
        />

        {/* Services Section */}
        <section id="services" className="py-24 px-4 bg-gradient-to-br from-gray-50 via-purple-50 to-violet-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Protect your business with our advanced cybersecurity services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 bg-white relative overflow-hidden">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
                Why Choose Our Security Services?
              </h2>
              <p className="text-xl text-gray-600">
                Industry-leading protection with proven results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: ShieldCheck,
                  title: "Proactive Protection",
                  description: "Stop threats before they become problems"
                },
                {
                  icon: Workflow,
                  title: "Seamless Integration",
                  description: "Works with your existing infrastructure"
                },
                {
                  icon: Building2,
                  title: "Enterprise-Grade",
                  description: "Built for businesses of all sizes"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
