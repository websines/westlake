import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  Laptop,
  Shield,
  Settings,
  BarChart,
  Network,
  LineChart,
  Workflow,
  Building2,
  Zap,
  ArrowUpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ITConsulting() {
  return (
    <>
    <main className="theme-it-consulting">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-800 via-purple-900 to-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-indigo-900/90"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container mx-auto h-full relative">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <Users className="h-24 w-24 text-white relative" />
              </div>
            </div>
            <h1 className="text-7xl font-bold mb-8 text-white">
              IT Consulting Services
            </h1>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Strategic technology solutions to drive your business forward
            </p>
            <div className="flex justify-center gap-6">
              <Button className="bg-white text-indigo-900 hover:bg-blue-50 text-lg py-6 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/meeting" className="flex items-center gap-2">
                  Schedule Consultation
                  <ArrowUpCircle className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg py-6 px-8 rounded-full">
                <Link href="#services" className="flex items-center gap-2">
                  Our Services
                  <Users className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Comprehensive IT Consulting Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Expert guidance and strategic solutions to optimize your technology infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Planning",
                description: "Align IT initiatives with business objectives",
                features: ["Business Analysis", "Technology Roadmap", "Risk Assessment"],
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: TrendingUp,
                title: "Digital Transformation",
                description: "Modernize your business with cutting-edge technology",
                features: ["Process Automation", "Cloud Migration", "Digital Solutions"],
                gradient: "from-purple-500 to-blue-600"
              },
              {
                icon: Lightbulb,
                title: "Innovation Strategy",
                description: "Drive growth through technological innovation",
                features: ["Emerging Tech", "Innovation Workshops", "Proof of Concept"],
                gradient: "from-blue-600 to-indigo-500"
              },
              {
                icon: Network,
                title: "Infrastructure Planning",
                description: "Optimize your IT infrastructure for performance",
                features: ["Network Design", "System Architecture", "Scalability Planning"],
                gradient: "from-indigo-600 to-purple-500"
              },
              {
                icon: Settings,
                title: "Process Optimization",
                description: "Streamline operations with efficient IT processes",
                features: ["Workflow Analysis", "Process Automation", "Efficiency Metrics"],
                gradient: "from-purple-500 to-blue-500"
              },
              {
                icon: Shield,
                title: "Security Assessment",
                description: "Protect your business with robust security measures",
                features: ["Risk Analysis", "Security Audits", "Compliance Review"],
                gradient: "from-blue-500 to-indigo-500"
              }
            ].map((service, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="mr-3 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center">
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

      {/* Process Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our Consulting Process
            </h2>
            <p className="text-xl text-indigo-100">
              A systematic approach to transforming your IT infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Laptop,
                title: "Discovery",
                description: "Understanding your business needs and challenges"
              },
              {
                icon: Target,
                title: "Analysis",
                description: "Evaluating current systems and identifying opportunities"
              },
              {
                icon: LineChart,
                title: "Strategy",
                description: "Developing a comprehensive technology roadmap"
              },
              {
                icon: Zap,
                title: "Implementation",
                description: "Executing solutions with measurable results"
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-50"></div>
                    <step.icon className="h-12 w-12 text-white relative" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-indigo-100">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients Served", icon: Building2 },
              { number: "95%", label: "Client Satisfaction", icon: Target },
              { number: "20+", label: "Years Experience", icon: Users },
              { number: "100+", label: "IT Experts", icon: Workflow }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 text-center hover:transform hover:scale-[1.02] transition-all duration-300">
                  <stat.icon className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
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
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Let's work together to optimize your IT infrastructure and drive business growth
          </p>
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <Button className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 text-xl py-8 px-16 rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(99,_102,_241,_0.7)] transition-all duration-300">
              <Link href="/meeting" className="flex items-center gap-3 font-bold">
                Schedule Your Consultation
                <ArrowUpCircle className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
