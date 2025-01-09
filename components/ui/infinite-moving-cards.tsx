"use client";

import { cn } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    rating: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: start
            ? `scroll ${speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"} linear infinite ${
                direction === "right" ? "reverse" : ""
              }`
            : "none",
        }}
      >
        {items.map((item, idx) => (
          <li
            key={item.name + idx}
            className="w-[450px] max-w-full relative rounded-2xl border border-white/10 flex-shrink-0 px-8 py-6 md:w-[450px] backdrop-blur-sm bg-white/5"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
            }}
          >
            <div className="relative z-10">
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <IconStarFilled key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              
              <blockquote className="text-lg font-medium text-white/90 mb-6 leading-relaxed">
                "{item.quote}"
              </blockquote>

              <div className="border-t border-white/10 pt-4">
                <cite className="not-italic font-semibold text-white block mb-1">
                  {item.name}
                </cite>
                <div className="text-white/60 text-sm">
                  {item.title}
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5"
            ></div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }
      `}</style>
    </div>
  );
};
