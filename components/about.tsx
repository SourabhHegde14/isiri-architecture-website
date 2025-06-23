"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Target, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-olive-100 rounded-full mb-6">
            <span className="text-olive-600 font-medium text-sm uppercase tracking-wider px-4 py-1">About Us</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-olive-900 mb-8 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-olive-600 to-gold-600 bg-clip-text text-transparent">iSiri</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-olive-600 to-gold-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-4xl font-bold text-olive-900 mb-6">The Studio</h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-olive-800">At isiri</span>, our journey began in 2004 with a vision to craft spaces that go beyond mere structure — 
                  spaces that breathe, evolve, and resonate with purpose.{" "}
                  <span className="font-semibold text-olive-800">"Uniquity"</span>, a word we are well familiar with here, 
                  make it our sole purpose to bring your project to life, ensuring it is the only one of its kind.
                </p>
                <p>
                  Throughout the years, we have made hundreads of dreams reality and are proud to say that we do it 
                  well,<span className="font-semibold text-olive-800"> by pouring our heart and soul into your project.</span>. 
                  We make it our responisblity to bring you the satisfaction of making your idea a reality in our firm, 
                  prioritizing<span className="font-semibold text-olive-800"> YOU</span> 
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-olive-50 to-olive-100/50 border-olive-200 shadow-lg">
              <CardContent className="p-8">
                <Quote className="text-olive-600 mb-6" size={40} />
                <p className="text-xl font-medium italic text-olive-800 mb-4 leading-relaxed">
                  "She firmly believes that no space is too small to be designed - creativity has no size or limits."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-olive-50 via-white to-olive-100/30 border-olive-200 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-olive-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="text-white" size={32} />
                  </div>
                  <h4 className="font-display text-3xl font-bold text-olive-900">Our Vision</h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  ISIRI constantly evolves to create distinctive spatial experiences by balancing innovation,
                  functionality, and technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-olive-50 via-white to-olive-100/30 border-olive-200 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gold-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h4 className="font-display text-3xl font-bold text-olive-900">Our Mission</h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The firm's mission is to craft sustainable environments that positively impact lives. Through a
                  collaborative approach, ISIRI aims to design spaces that initiate a sense of identity for both the
                  users and the built environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Core Values */}
        <div className="text-center mb-16">
          <h3 className="font-display text-4xl font-bold text-olive-900 mb-4">Core Values</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide every project we undertake
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { value: "Sustainability", icon: "🌱", color: "from-green-500 to-olive-600" },
            { value: "Innovation", icon: "💡", color: "from-yellow-500 to-gold-600" },
            { value: "Collaboration", icon: "🤝", color: "from-blue-500 to-olive-600" },
            { value: "Quality", icon: "⭐", color: "from-purple-500 to-olive-600" },
            { value: "Social Responsibility", icon: "🏛️", color: "from-red-500 to-olive-600" },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-white border-olive-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-olive-900 text-lg mb-2">{item.value}</h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-olive-600 to-gold-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
