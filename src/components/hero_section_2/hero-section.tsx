"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SecondHeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const featureCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#050A14]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero_Second_Bg/bg.png"
          alt="VR technology background"
          fill
          priority
          className="object-cover opacity-80"
        />
        
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full">
        <div className="container mx-auto px-4 py-20 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div className="max-w-2xl" initial="hidden" animate="visible" variants={containerVariants}>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                variants={itemVariants}
              >
                DESIGN THE <br /> FUTURE
              </motion.h1>

              <motion.p className="text-lg text-gray-300 mb-8 max-w-lg" variants={itemVariants}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel
                aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non dui.
                aliquam sit vulputate. Faucibus nec gravida ipsum 

              </motion.p>

              <motion.div variants={itemVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  className="rounded-[10px] px-8 py-6 text-lg font-medium bg-white text-black hover:bg-white/90"
                  asChild
                >
                  <Link href="/get-started">Get started</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side is empty to match the layout in the image */}
            <div className="hidden lg:block"></div>
          </div>

          {/* Feature Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 md:mt-24"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ delayChildren: 0.6, staggerChildren: 0.2 }}
          >
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                className="bg-[#D9D9D9]/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
                variants={featureCardVariants}
                whileHover="hover"
              >
                <h2 className="text-3xl  text-white mb-4">{num.toString().padStart(2, "0")}</h2>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus

                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
