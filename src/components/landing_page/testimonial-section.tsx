"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { testimonials } from "@/constant/testimonial"

// Sample testimonial data
export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative w-full py-16 px-4 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/bg_textimonial.png" alt="Background" fill priority  />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h1 className="text-3xl md:text-[56px] font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#C026D3] to-[#701A75]">What other users say</h1>

        <div className=" relative flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 md:left-4 z-10 rounded-full bg-white hover:bg-gray-100 shadow-md"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl mx-auto"
          >
            <Card className="p-8 md:p-12 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl md:text-[3xl] font-bold mb-4">{currentTestimonial.title}</h3>
                <p className="text-gray-800 font-semibold mb-8 max-w-2xl mx-auto">{currentTestimonial.content}</p>

                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3">
                    <Image
                      src={currentTestimonial.avatar || "/placeholder.svg"}
                      alt={currentTestimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg">{currentTestimonial.author}</h4>
                  <p className="text-gray-600">{currentTestimonial.position}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 md:right-4 z-10 rounded-full bg-white hover:bg-gray-100 shadow-md"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
