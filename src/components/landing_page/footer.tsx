import Link from "next/link"
import { Youtube, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 px-4 md:px-[80px] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Categories Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-gray-800 mb-2">Categories</h3>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              User Interface
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              User Experience
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Digital Media
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Lifestyle
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Programming
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Animation
            </Link>
          </div>

          {/* Product Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-gray-800 mb-2">Product</h3>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Overview
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Browse
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Accessibility
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Five
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Changelog
            </Link>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-gray-800 mb-2">Solutions</h3>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Brainstorming
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ideation
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Wireframing
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Research
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Design
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Concept
            </Link>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-gray-800 mb-2">Resources</h3>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Help Center
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Tutorials
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQs
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Community
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Events
            </Link>
          </div>

          {/* Support Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-gray-800 mb-2">Support</h3>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact Us
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Developers
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Documentation
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Integrations
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Reports
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Webinar
            </Link>
          </div>

          {/* Company Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-gray-800 mb-2">Company</h3>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Press
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Events
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Careers
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Customers
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Partners
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section with Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-bold text-xl text-gray-900">
              break<span className="text-purple-600">io</span>
            </Link>
            <span className="text-gray-500 ml-2 text-sm">@By Faiza Naaz</span>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
