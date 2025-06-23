"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Lightbulb, Users, Sparkles } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-olive-50 via-white to-olive-100/50">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-olive-300 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-32 h-32 border-2 border-olive-400 rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 border-2 border-olive-200 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border-2 border-olive-300 rounded-full animate-float delay-1000"></div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-olive-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-gold-500 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Enhanced Hero Title */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              
              <span className="text-olive-600 font-medium text-xl tracking-wider uppercase"></span>
              
            </div>

            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-olive-900 mb-6 leading-none tracking-tight">
              Building
              <span className="block bg-gradient-to-r from-olive-600 via-olive-700 to-gold-600 bg-clip-text text-transparent">
                Dreams
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-olive-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            At <span className="font-semibold text-olive-800">iSiri</span>, we believe that design is a powerful tool
            for creating positive change in the world. We create spaces that are not only beautiful and functional, but
            also sustainable and socially responsible.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-olive-600 to-olive-700 hover:from-olive-700 hover:to-olive-800 text-white px-10 py-5 text-xl font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              Explore Our Work
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-olive-600 text-olive-600 hover:bg-olive-50 px-10 py-5 text-xl font-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Building2, number: "20+", label: "Years of Excellence", color: "text-olive-600" },
              { icon: Lightbulb, number: "500+", label: "Projects Completed", color: "text-gold-600" },
              { icon: Users, number: "500+", label: "Happy Clients", color: "text-olive-700" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="flex flex-col items-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-olive-100">
                  <div className="mb-6 p-4 bg-gradient-to-br from-olive-50 to-olive-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon
                      className={`${stat.color} group-hover:scale-110 transition-transform duration-300`}
                      size={48}
                    />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-olive-900 mb-3">{stat.number}</h3>
                  <p className="text-olive-700 font-medium text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-olive-600 rounded-full flex justify-center p-2">
          <div className="w-2 h-4 bg-gradient-to-b from-olive-600 to-gold-500 rounded-full animate-pulse"></div>
        </div>
        <p className="text-olive-600 text-sm mt-2 font-medium">Scroll to explore</p>
      </div>
    </section>
  )
}
