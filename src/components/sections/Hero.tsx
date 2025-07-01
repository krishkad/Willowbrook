"use client"

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const router = useRouter();
  const heroImages = [
    "https://plus.unsplash.com/premium_photo-1686090450574-214118216bdc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1686090449928-ecccb85fb0e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 animate-fade-in">
              Nature Meets Comfort
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto opacity-90">
              Escape to luxury camping where pristine wilderness meets
              thoughtful hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-full text-lg transition-all duration-300" onClick={() => router.push("/#camps")}>
                View Accommodations
              </Button>
              <Button className="bg-emerald-600/90 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300" onClick={() => router.push("/#booking")}>
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>
    </>
  );
};

export default Hero;
