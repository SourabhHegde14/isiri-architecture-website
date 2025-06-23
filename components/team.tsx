"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Team() {
  const teamMembers = [
    { name: "SOUMYA", role: "Architect", photo: "/team/soumya.png" },
    { name: "DEEPTHI", role: "Senior Architect", photo: "/team/deepthi.png" },
    { name: "NANDITHA", role: "Interior Designer", photo: "/team/nanditha.png" },
    { name: "SAI DARSHAN", role: "Project Manager", photo: "/team/sai-darshan.png" },
    { name: "HIMASHREE", role: "Landscape Architect", photo: "/team/himashree.png" },
    { name: "SUNDARESH", role: "Structural Engineer", photo: "/team/sundaresh.png" },
    { name: "MANASA", role: "Interior Designer", photo: "/team/manasa.png" },
    { name: "BHAARGAV", role: "Architect", photo: "/team/bhaargav.png" },
    { name: "ROHAN", role: "Junior Architect", photo: "/team/rohan.png" },
    { name: "POORNIMA", role: "Design Coordinator", photo: "/team/poornima.png" },
    { name: "TASKIN", role: "CAD Specialist", photo: "/team/taskin.png" },
    { name: "SAMARTH", role: "Project Assistant", photo: "/team/samarth.png" },
    { name: "DARSHAN", role: "Site Supervisor", photo: "/team/darshan.png" },
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-olive-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-900 mb-6">Meet the Team</h2>
          <div className="w-24 h-1 bg-olive-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-olive-900 mb-6">Our Philosophy</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At iSiri Architecture+Design, we take pride in our ability to blend innovation, tradition, and
              contemporary design principles. Each project is a reflection of our team's dedication to quality,
              sustainability, and meaningful design.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Led by a shared commitment to excellence, the architects at iSiri are not just professionals but
              storytellers, weaving narratives through their designs. Their collective expertise transforms visions into
              tangible, awe-inspiring structures that leave a lasting impact.
            </p>

            <Card className="bg-white border-olive-200">
              <CardContent className="p-6">
                <Quote className="text-olive-600 mb-4" size={32} />
                <p className="text-lg italic text-olive-800 mb-4">
                  "We shape our buildings: thereafter they shape us."
                </p>
                <p className="text-sm text-gray-600">- Winston Churchill</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white border-olive-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  {member.photo ? (
                    <div className="w-36 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gray-50">
                      <img
                        src={member.photo || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="w-36 h-48 bg-olive-100 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <span className="text-olive-600 font-bold text-3xl">{member.name.charAt(0)}</span>
                    </div>
                  )}
                  <h4 className="font-semibold text-olive-900 text-base mb-2">{member.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Founder Spotlight */}
        <Card className="bg-gradient-to-r from-olive-100 to-olive-50 border-olive-200">
  <CardContent className="p-8 md:p-12">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
      <div className="lg:col-span-1">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-md">
          <img
            src="/team/soumya-hr.png"
            alt="Soumya HR"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-olive-900 text-center mb-2">Ar. Soumya HR</h3>
        <p className="text-olive-700 text-center font-medium">Founder & Principal Architect</p>
      </div>

      <div className="lg:col-span-2">
        <h4 className="text-xl font-bold text-olive-900 mb-4">Founder's Profile</h4>
        <p className="text-gray-700 mb-4 leading-relaxed">
          A graduate of BVBCET, Hubli, Ar. Soumya HR began her career working with leading architectural firms
          in Bengaluru. Over the past 20+ years, she has contributed to diverse projects in architecture,
          interior design, project management, and landscape architecture.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Her passion for experimental techniques and a deep understanding of design aesthetics led to the
          establishment of ISIRI in 2004. As a skilled artist, she brings an exceptional aesthetic sensibility,
          a keen focus on detailing, and a commitment to customized creativity.
        </p>
      </div>
    </div>
  </CardContent>
</Card>

      </div>
    </section>
  )
}
