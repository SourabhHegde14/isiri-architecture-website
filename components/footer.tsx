"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-olive-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="iSiri Architecture + Design"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">iSiri</h3>
                <p className="text-xs text-olive-200 uppercase tracking-wider">Architecture + Design</p>
              </div>
            </div>
            <p className="text-olive-200 leading-relaxed">
              Building dreams since 2004. We create spaces that are not only beautiful and functional, but also
              sustainable and socially responsible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-olive-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-olive-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-olive-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-olive-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-olive-200">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Urban Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Product Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-olive-200">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-olive-200">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p className="text-sm">
                  G-14, OASIS RESIDENCY, 5TH PHASE,
                  <br />
                  JP NAGAR PHASE 5, BENGALURU
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <p className="text-sm">+91 9845263497</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <p className="text-sm">soumyabhat.isiri@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-olive-700 mt-8 pt-8 text-center">
          <p className="text-olive-200 text-sm">
            © {new Date().getFullYear()} iSiri Architecture + Design. All rights reserved. |
            <Link href="#" className="hover:text-white transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-white transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
