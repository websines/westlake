"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingTestimonials() {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="h-[40rem] flex flex-col antialiased items-center justify-center relative">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="py-20"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Westlake's cybersecurity solutions have transformed our security posture. Their proactive approach and advanced threat detection have kept our systems secure 24/7.",
    name: "Sarah Chen",
    title: "CTO, TechCorp Solutions",
    rating: 5,
  },
  {
    quote:
      "The team's expertise in cloud security is unmatched. They helped us implement a robust security framework that gives us peace of mind as we scale our operations.",
    name: "Michael Rodriguez",
    title: "Head of IT, Global Innovations Inc",
    rating: 5,
  },
  {
    quote:
      "Outstanding service and support. Westlake's incident response team has been crucial in maintaining our security standards and meeting compliance requirements.",
    name: "Emily Thompson",
    title: "Security Director, Enterprise Systems",
    rating: 5,
  },
  {
    quote:
      "The implementation of Westlake's security solutions was seamless. Their team's dedication to our success and 24/7 support has been exceptional.",
    name: "David Park",
    title: "VP of Technology, DataFlow Corp",
    rating: 5,
  },
  {
    quote:
      "Westlake's comprehensive security assessment revealed critical vulnerabilities we weren't aware of. Their remediation strategy has significantly enhanced our security.",
    name: "Lisa Martinez",
    title: "CISO, FinTech Solutions",
    rating: 5,
  },
];
