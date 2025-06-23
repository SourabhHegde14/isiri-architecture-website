"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Smitha Madhu",
      role: "Delivery Manager, Infosys",
      content:
        "Soumya took the time to understand my needs, expectations, and aspirations for the new kitchen through multiple site visits. Her thoughtful design approach turned those ideas into a beautiful and highly functional space, with convenience as the top priority. I'm truly delighted with the final outcome.",
      rating: 5,
    },
    {
      name: "Ganesh Pai",
      role: "Founder, Flanxsights Consulting",
      content:
        "Remodelling our home with ISIRI, led by Ar. Soumya Bhat, was an amazing experience. The team designed a space that reflected our family's needs—beautiful, functional, and thoughtful. Every room balanced elegance and comfort, making daily life easier and more enjoyable.",
      rating: 5,
    },
    {
      name: "Anand Rajendran",
      role: "Senior International Faculties, The Art Of Living",
      content:
        "Choosing Soumya ji as our architect was the best decision. Her design skills, attention to detail, and dedication made the entire process smooth and reassuring. She handled the team with grace and efficiency, keeping everything on track. Even a year later, we're still in awe of the thoughtful execution.",
      rating: 5,
    },
    {
      name: "Vishal Desai",
      role: "Supply Chain Program Manager, Cisco Systems",
      content:
        "Choosing Soumya Madam and the ISIRI team was the best decision for our dream home. Their end-to-end service, from design to execution, was seamless and tailored to our needs. We're extremely happy with our duplex and highly recommend ISIRI for quality, style, and reliability.",
      rating: 5,
    },
    {
      name: "Sachin Herwade",
      role: "Senior Manager, Societe Generale",
      content:
        "It was a smooth and wonderful journey throughout. Your attention to detail has been commendable and is appreciated by everyone visiting our home. The interior design and execution were creative, sensitive, and highly professional. It was a great experience, and I can't stop recommending you to friends and family.",
      rating: 5,
    },
    {
      name: "Anand Swaminathan",
      role: "SVP and Global Delivery Leader, Infogain",
      content:
        "We got our interiors done by ISIRI and couldn't be happier. With our busy schedules, we needed someone dependable—and Sowmya ji handled everything effortlessly. The result is a minimalistic, elegant home that fits us perfectly. Highly recommend ISIRI for anyone seeking classy, practical interiors.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-900 mb-6">Client Testimonials</h2>
          <div className="w-24 h-1 bg-olive-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            iSiri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-olive-50 to-white border-olive-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="text-olive-600 mr-2" size={24} />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                <div className="border-t border-olive-200 pt-4">
                  <h4 className="font-semibold text-olive-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-olive-600 to-olive-700 border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Dream Project?</h3>
              <p className="text-olive-100 mb-6 max-w-2xl mx-auto">
                Join our growing list of satisfied clients and let us bring your architectural vision to life.
              </p>
              <button className="bg-white text-olive-600 px-8 py-3 rounded-lg font-semibold hover:bg-olive-50 transition-colors duration-300">
                Get Your Free Consultation
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
