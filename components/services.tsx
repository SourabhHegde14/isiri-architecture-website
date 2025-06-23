"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, Home, Trees, Briefcase, Palette } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Architectural Design and Consultation",
      description:
        "Our architectural services cover conceptual design, schematic planning, development, construction documentation, and project administration.",
      features: ["Conceptual Design", "Schematic Planning", "Construction Documentation", "Project Administration"],
    },
    {
      icon: Briefcase,
      title: "Architectural Project Management",
      description:
        "Project management ensures quality outcomes, covering all phases from initiation to completion and final handover.",
      features: ["Project Initiation", "Quality Control", "Timeline Management", "Final Handover"],
    },
    {
      icon: Home,
      title: "Interior Design Services",
      description:
        "We design people-centric spaces that enhance well-being, brand identity, and technology integration, shaping the future to meet client visions.",
      features: ["Space Planning", "Material Selection", "Lighting Design", "Turnkey Projects"],
    },
    {
      icon: Trees,
      title: "Landscape Design Services",
      description:
        "Our landscape architecture focuses on planning, design, and sustainability, enhancing human and environmental well-being.",
      features: ["Site Planning", "Native Vegetation", "Sustainable Design", "Environmental Impact"],
    },
    {
      icon: Palette,
      title: "Product Design",
      description:
        "Designing impactful products is as exciting as architecture. Our expertise in product design adds a customized, smart touch to projects.",
      features: ["Custom Furniture", "Smart Solutions", "Material Innovation", "Functional Design"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-olive-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-900 mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-olive-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We believe that every project is unique in style, design, need and budget, thus requires a personalised
            approach. This knowledge is strongly embedded in firm's creative ability and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-olive-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-olive-100 rounded-full mb-6 group-hover:bg-olive-600 transition-colors duration-300">
                  <service.icon
                    className="text-olive-600 group-hover:text-white transition-colors duration-300"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-olive-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-olive-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Work Methodology */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-olive-900 mb-6">Work Methodology</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              ISIRI's approach to design involves four basic steps that ensure quality and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Understanding the requirement of the client",
              "Detailed development of the design",
              "Integration of design with the engineering principles",
              "Project supervision and efficient execution",
            ].map((step, index) => (
              <Card
                key={index}
                className="bg-white border-olive-200 text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-olive-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
