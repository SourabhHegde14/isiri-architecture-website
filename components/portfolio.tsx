"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, GraduationCap, Briefcase, Trees, Palette, Package } from "lucide-react"

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects", icon: Building2 },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Briefcase },
    { id: "campus", label: "Campus Planning", icon: GraduationCap },
    { id: "interior", label: "Interior Design", icon: Palette },
    { id: "landscape", label: "Landscape", icon: Trees },
    { id: "product", label: "Product Design", icon: Package },
  ]

  const projects = [
    {
      category: "commercial",
      title: "Urban Commercial Complex",
      description:
        "Modern commercial development featuring rooftop gardens, sustainable design, and integrated urban planning.",
      image: "/commercial/commercial-1.jpg",
      features: ["Rooftop Gardens", "Sustainable Design", "Urban Integration"],
    },
    {
      category: "commercial",
      title: "Mixed-Use Development",
      description:
        "Contemporary commercial architecture with distinctive facade treatments and community-focused design.",
      image: "/commercial/commercial-2.jpg",
      features: ["Distinctive Facade", "Mixed-Use Design", "Community Integration"],
    },
    {
      category: "interior",
      title: "LUXIUM Corporate Interior",
      description:
        "Sophisticated corporate interior design featuring double-height spaces, premium materials, and integrated branding.",
      image: "/interior/interior-1.jpg",
      features: ["Double-Height Design", "Premium Materials", "Brand Integration"],
    },
    {
      category: "interior",
      title: "Executive Conference Room",
      description:
        "Sophisticated boardroom design featuring curved wooden ceiling elements, geometric lighting, and premium finishes.",
      image: "/interior/interior-2.jpg",
      features: ["Curved Ceiling Design", "Geometric Lighting", "Glass Partitions"],
    },
    {
      category: "interior",
      title: "Modern Home Office",
      description:
        "Elegant home office design with textured wall panels, integrated lighting, and sophisticated material palette.",
      image: "/interior/interior-3.jpg",
      features: ["Textured Panels", "Integrated Lighting", "Glass Partitions"],
    },
    {
      category: "interior",
      title: "Corporate Boardroom",
      description:
        "Large-scale conference room with dramatic ceiling design, premium seating, and advanced technology integration.",
      image: "/interior/interior-4.jpg",
      features: ["Dramatic Ceiling", "Premium Seating", "Technology Integration"],
    },
    {
      category: "interior",
      title: "Executive Office Suite",
      description:
        "Luxury executive office featuring glass partitions, custom furniture, and sophisticated material coordination.",
      image: "/interior/interior-5.jpg",
      features: ["Glass Partitions", "Custom Furniture", "Luxury Finishes"],
    },
    {
      category: "interior",
      title: "Corporate Auditorium",
      description:
        "Professional presentation hall with theater-style seating, acoustic design, and dramatic lighting elements.",
      image: "/interior/interior-6.jpg",
      features: ["Theater Seating", "Acoustic Design", "Professional AV"],
    },
    {
      category: "interior",
      title: "Corporate Lobby Design",
      description:
        "Modern reception area with circular ceiling elements, premium materials, and innovative branding integration.",
      image: "/interior/interior-7.jpg",
      features: ["Circular Ceiling", "Premium Materials", "Brand Integration"],
    },
    {
      category: "interior",
      title: "Open Office Workspace",
      description:
        "Contemporary open office design with flexible workstations, collaborative areas, and creative visual elements.",
      image: "/interior/interior-8.jpg",
      features: ["Flexible Workstations", "Collaborative Areas", "Creative Graphics"],
    },
    {
      category: "interior",
      title: "Biophilic Office Design",
      description:
        "Innovative workspace featuring hanging gardens, modular seating, and sustainable design principles.",
      image: "/interior/interior-9.jpg",
      features: ["Hanging Gardens", "Modular Seating", "Biophilic Design"],
    },
    {
      category: "interior",
      title: "Private Office Pods",
      description:
        "Glass-enclosed private offices with consistent design language and integrated technology solutions.",
      image: "/interior/interior-10.jpg",
      features: ["Glass Enclosures", "Consistent Design", "Technology Integration"],
    },
    {
      category: "interior",
      title: "Focus Phone Booths",
      description: "Innovative phone booth pods with acoustic privacy, bold colors, and creative branding elements.",
      image: "/interior/interior-11.jpg",
      features: ["Acoustic Privacy", "Bold Colors", "Creative Branding"],
    },
    {
      category: "campus",
      title: "Modern Educational Campus",
      description:
        "Innovative campus design featuring distinctive triangular roof elements and sustainable architecture.",
      image: "/campus/campus-1.jpg",
      features: ["Integrated Design", "Green Spaces", "Smart Circulation"],
    },
    {
      category: "campus",
      title: "LUXIUM Campus Complex",
      description:
        "Large-scale campus planning with curved architectural elements and comprehensive facility integration.",
      image: "/campus/campus-6.jpg",
      features: ["Mixed-Use Design", "Landscape Integration", "Modern Infrastructure"],
    },
    {
      category: "campus",
      title: "Institutional Learning Center",
      description: "Contemporary campus architecture with geometric facade patterns and elevated structural design.",
      image: "/campus/campus-5.jpg",
      features: ["Geometric Patterns", "Elevated Structure", "Brand Integration"],
    },
    {
      category: "campus",
      title: "Sustainable Campus Design",
      description: "Eco-friendly campus planning with natural materials and integrated landscape architecture.",
      image: "/campus/campus-2.jpg",
      features: ["Natural Materials", "Landscape Integration", "Community Spaces"],
    },
    {
      category: "residential",
      title: "Contemporary Duplex Design",
      description:
        "Modern duplex featuring mixed materials, geometric forms, and sustainable design principles with integrated landscaping.",
      image: "/residential/residential-1.jpg",
      features: ["Mixed Materials", "Geometric Design", "Sustainable Features"],
    },
    {
      category: "residential",
      title: "Minimalist Frame House",
      description:
        "Innovative residential design with distinctive concrete frame structure and contrasting material palette.",
      image: "/residential/residential-2.jpg",
      features: ["Structural Expression", "Material Contrast", "Minimalist Design"],
    },
    {
      category: "residential",
      title: "Multi-Story Urban Home",
      description:
        "Vertical residential design optimizing urban space with brick and concrete elements and integrated greenery.",
      image: "/residential/residential-3.jpg",
      features: ["Vertical Design", "Urban Optimization", "Integrated Greenery"],
    },
    {
      category: "residential",
      title: "Brick & Concrete Villa",
      description:
        "Sophisticated residential architecture combining traditional brick with modern concrete and glass elements.",
      image: "/residential/residential-4.jpg",
      features: ["Brick Screens", "Rooftop Gardens", "Modern Geometry"],
    },
    {
      category: "residential",
      title: "Contemporary Villa",
      description:
        "Modern family home with distinctive brick patterns, wooden screens, and sustainable design integration.",
      image: "/residential/residential-5.jpg",
      features: ["Brick Patterns", "Wooden Screens", "Sustainable Design"],
    },
    {
      category: "residential",
      title: "Horizontal Modern Home",
      description:
        "Sleek single-story design emphasizing horizontal lines, natural materials, and indoor-outdoor living.",
      image: "/residential/residential-6.jpg",
      features: ["Horizontal Lines", "Natural Materials", "Indoor-Outdoor Living"],
    },
    {
      category: "residential",
      title: "Vertical Tower House",
      description:
        "Narrow urban residence maximizing vertical space with integrated planters and distinctive facade treatment.",
      image: "/residential/residential-7.jpg",
      features: ["Vertical Composition", "Integrated Planters", "Urban Design"],
    },
    {
      category: "residential",
      title: "Elevated Modern Villa",
      description:
        "Contemporary home on stilts featuring glass balconies, green walls, and innovative spatial organization.",
      image: "/residential/residential-8.jpg",
      features: ["Elevated Design", "Glass Balconies", "Green Walls"],
    },
    {
      category: "residential",
      title: "Luxury Family Home",
      description:
        "Multi-level residence with sophisticated material palette, integrated landscaping, and distinctive branding elements.",
      image: "/residential/residential-9.jpg",
      features: ["Multi-Level Design", "Luxury Finishes", "Integrated Landscaping"],
    },
    {
      category: "residential",
      title: "Contemporary Narrow House",
      description:
        "Vertical urban home showcasing mixed materials, integrated greenery, and efficient space utilization.",
      image: "/residential/residential-10.jpg",
      features: ["Mixed Materials", "Vertical Greenery", "Space Efficiency"],
    },
    {
      category: "landscape",
      title: "Integrated Residential Landscape",
      description:
        "Comprehensive landscape design featuring curved pathways, tropical plantings, and seamless integration with contemporary architecture.",
      image: "/landscape/landscape-1.jpg",
      features: ["Tropical Plantings", "Curved Pathways", "Integrated Hardscaping"],
    },
    {
      category: "landscape",
      title: "Sustainable Garden Design",
      description:
        "Sophisticated landscape architecture with mature palm trees, varied plant textures, and sustainable design principles.",
      image: "/landscape/landscape-2.jpg",
      features: ["Mature Plantings", "Sustainable Design", "Architectural Integration"],
    },
    {
      category: "product",
      title: "Framed Simplicity",
      description: "",
      image: "/product/product-1.jpg",
      features: [],
    },
    {
      category: "product",
      title: "Brass Tree Handle",
      description: "",
      image: "/product/product-2.jpg",
      features: [],
    },
    {
      category: "product",
      title: "PopBox",
      description: "",
      image: "/product/product-3.jpg",
      features: [],
    },
    {
      category: "product",
      title: "Stria Console",
      description: "",
      image: "/product/product-4.jpg",
      features: [],
    },
    {
      category: "product",
      title: "Cane Console",
      description: "",
      image: "/product/product-5.jpg",
      features: [],
    },
    {
      category: "product",
      title: "The Linear Display",
      description: "",
      image: "/product/product-6.jpg",
      features: [],
    },
    {
      category: "product",
      title: "Sleek Display Console",
      description: "",
      image: "/product/product-7.jpg",
      features: [],
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-900 mb-6">Our Portfolio</h2>
          <div className="w-24 h-1 bg-olive-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of projects that showcase our commitment to innovative design and exceptional
            quality.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id
                  ? "bg-olive-600 hover:bg-olive-700 text-white"
                  : "border-olive-600 text-olive-600 hover:bg-olive-50"
              } transition-all duration-300`}
              onClick={() => setActiveCategory(category.id)}
            >
              <category.icon className="mr-2" size={18} />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-white border-olive-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full transition-transform duration-300 ${
                    project.category === "product"
                      ? "h-auto object-contain group-hover:scale-105"
                      : "h-48 object-cover group-hover:scale-110"
                  }`}
                />
                <div className="absolute inset-0 bg-olive-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-olive-900 mb-3">{project.title}</h3>
                {project.description && <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>}
                {project.features.length > 0 && (
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-olive-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Highlights */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Card className="bg-gradient-to-br from-olive-50 to-olive-100 border-olive-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-olive-900 mb-4">Interior Design</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Interior design is the art of sculpting personal experiences within spatial boundaries. Each design is
                approached with a deep understanding of context, user habits, and spatial intent.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We create spaces that not only look beautiful but also feel intuitive and effortless to live and work
                in, merging aesthetic appeal with practical functionality.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-olive-50 to-olive-100 border-olive-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-olive-900 mb-4">Campus Planning</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Campus planning is the art of orchestrating architecture, landscape, and movement into a seamless
                ecosystem of learning, working, and interaction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our approach prioritizes clarity in spatial organization, human-centered design, and long-term
                adaptability. Green belts, courtyards, and interactive nodes create connected, intuitive environments.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-olive-50 to-olive-100 border-olive-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-olive-900 mb-4">Product Design</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Designing impactful products is as exciting as architecture. Our expertise in product design adds a
                customized, smart touch to projects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From custom furniture to innovative hardware solutions, we create products that seamlessly blend
                function with artistry, enhancing the overall design narrative of every space.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
