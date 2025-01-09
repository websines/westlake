"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/images/img01.jpg",
  "/images/img02.jpg",
  "/images/img03.jpg",
  "/images/img04.jpg",
];

export default function AutoScrollingBackground() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const totalWidth = scrollElement.scrollWidth / 2;
    let currentPosition = 0;

    const animate = () => {
      currentPosition += 0.5;
      if (currentPosition >= totalWidth) {
        currentPosition = 0;
        scrollElement.style.transition = "none";
        scrollElement.style.transform = `translateX(0)`;
        scrollElement.offsetHeight; // Trigger reflow
        scrollElement.style.transition = "transform 40000ms linear";
      }
      scrollElement.style.transform = `translateX(-${currentPosition}px)`;
      requestAnimationFrame(animate);
    };

    scrollElement.style.transition = "transform 40000ms linear";
    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex h-full"
        style={{
          width: `${images.length * 200}%`,
          willChange: "transform",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={`IT Service ${(index % images.length) + 1}`}
              layout="fill"
              objectFit="cover"
              quality={90}
              priority={index < images.length}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60" />
    </div>
  );
}
