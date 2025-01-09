import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "IT Consulting", href: "/it-consulting" },
  { name: "Cybersecurity", href: "/cybersecurity" },
  { name: "Cloud Services", href: "/cloud-services" },
  { name: "Backup & Recovery", href: "/backup-and-disaster-recovery" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src="/logos/logo-white.png"
              alt="Company Logo"
              width={150}
              height={40}
              className="h-10"
            />
            <p className="text-gray-400 text-base">
              Empowering businesses with cutting-edge IT solutions and
              unparalleled expertise.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                Services
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-400 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Contact Us
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <Phone className="h-6 w-6 text-orange-500 mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-6 w-6 text-orange-500 mr-2" />
                    <a
                      href="mailto:info@itservices.com"
                      className="hover:text-white"
                    >
                      info@itservices.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-6 w-6 text-orange-500 mr-2" />
                    <span>123 Tech Street, IT City, 12345</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} IT Services Company. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
