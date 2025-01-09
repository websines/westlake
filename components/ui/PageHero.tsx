import { LucideIcon } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
    icon: LucideIcon;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    icon: LucideIcon;
  };
  className?: string;
}

export function PageHero({
  icon: Icon,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900", className)}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900/90"></div>
      </div>
      
      {/* Animated Background Blobs */}
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
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-75 transition-opacity"></div>
              <Icon className="h-24 w-24 text-white relative transition-transform group-hover:scale-110" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white bg-clip-text">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-12 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              className="bg-white text-purple-900 hover:bg-purple-50 text-lg py-6 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link href={primaryCTA.href} className="flex items-center gap-2">
                {primaryCTA.text}
                <primaryCTA.icon className="h-5 w-5" />
              </Link>
            </Button>
            
            {secondaryCTA && (
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white/10 text-lg py-6 px-8 rounded-full"
              >
                <Link href={secondaryCTA.href} className="flex items-center gap-2">
                  {secondaryCTA.text}
                  <secondaryCTA.icon className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
