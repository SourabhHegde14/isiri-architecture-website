"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-olive-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-900 mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-olive-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to start your dream project? We'd love to hear from you. Let's discuss how we can bring your vision to
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-olive-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-olive-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input className="border-olive-200 focus:border-olive-600" placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input className="border-olive-200 focus:border-olive-600" placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    className="border-olive-200 focus:border-olive-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input type="tel" className="border-olive-200 focus:border-olive-600" placeholder="+91 98452 63497" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full p-3 border border-olive-200 rounded-md focus:border-olive-600 focus:outline-none">
                    <option>Select project type</option>
                    <option>Residential Architecture</option>
                    <option>Commercial Architecture</option>
                    <option>Interior Design</option>
                    <option>Landscape Design</option>
                    <option>Campus Planning</option>
                    <option>Product Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    className="border-olive-200 focus:border-olive-600 min-h-[120px]"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button className="w-full bg-olive-600 hover:bg-olive-700 text-white py-3">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white border-olive-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-olive-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                      <MapPin className="text-olive-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-olive-900 mb-1">Address</h4>
                      <p className="text-gray-700 leading-relaxed">
                        G-14, OASIS RESIDENCY, 5TH PHASE,
                        <br />
                        JP NAGAR PHASE 5, J. P. NAGAR,
                        <br />
                        BENGALURU, KARNATAKA 560078
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                      <Phone className="text-olive-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-olive-900 mb-1">Phone</h4>
                      <p className="text-gray-700">+91 9845263497</p>
                      <p className="text-gray-700">080-48652683</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                      <Mail className="text-olive-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-olive-900 mb-1">Email</h4>
                      <p className="text-gray-700">soumyabhat.isiri@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                      <Clock className="text-olive-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-olive-900 mb-1">Business Hours</h4>
                      <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote Card */}
            <Card className="bg-gradient-to-br from-olive-600 to-olive-700 border-none text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Build Your Dreams?</h3>
                <p className="text-olive-100 mb-6">"Design is where science and art break even." - Mieke Gerritzen</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-olive-600">
                  Schedule a Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
