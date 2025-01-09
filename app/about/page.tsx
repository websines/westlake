import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Users, Zap, Award, Target, Lightbulb, CheckCircle2, ChartBar, Building2 } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "99.9%", label: "Uptime Guaranteed" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/90" />
            
            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
              <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
            </div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-30 animate-pulse" />
                <h1 className="relative text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
                  About WestLake
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Empowering businesses through innovative technology solutions and unparalleled expertise in IT services and cybersecurity.
              </p>

              {/* Stats with enhanced design */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mt-16">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300 blur-xl" />
                    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-blue-100 font-medium group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-8 h-14 rounded-full border-2 border-blue-200/30 flex items-center justify-center">
                  <div className="w-1 h-3 bg-blue-200/50 rounded-full animate-scroll" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-10 blur-2xl" />
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-mission.jpg"
                    alt="Team working on IT solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                  Our Mission
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        Excellence in Service
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Providing robust, scalable, and secure IT solutions that drive growth 
                        and enhance productivity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <ChartBar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        Business Growth
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Empowering organizations with technology that drives innovation 
                        and competitive advantage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        Trusted Partnership
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Building long-term relationships through transparency, reliability, 
                        and exceptional support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gray-50 relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide our actions and shape our approach to delivering 
                exceptional IT services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Integrity",
                  description:
                    "We uphold the highest standards of honesty and ethical conduct in all our dealings.",
                  color: "blue",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "We believe in the power of teamwork and partnership with our clients.",
                  color: "indigo",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description:
                    "We continuously seek new and improved ways to deliver value to our clients.",
                  color: "purple",
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description:
                    "We strive for excellence in every aspect of our service delivery.",
                  color: "blue",
                },
                {
                  icon: Zap,
                  title: "Responsiveness",
                  description:
                    "We are committed to swift and effective responses to our clients' needs.",
                  color: "indigo",
                },
                {
                  icon: Award,
                  title: "Expertise",
                  description:
                    "We invest in our team's skills and knowledge to stay at the forefront of IT.",
                  color: "purple",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="p-8 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${value.color}-100 flex items-center justify-center mb-6`}>
                    <value.icon className={`w-6 h-6 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help your business thrive with our comprehensive IT solutions.
            </p>
            <Button
              asChild
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-6"
            >
              <Link href="/meeting">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
