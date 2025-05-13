"use client"
import { motion } from "framer-motion"
import { faqItems } from "@/constant/faq"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <h1 className="text-3xl md:text-[56px] font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-tr from-[#C026D3] to-[#701A75]">
        Frequently asked questions
      </h1>
      <p className="text-gray-400 max-w-3xl text-center mx-auto mb-10">
        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus
        maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
      </p>

      <Accordion type="multiple" className="mb-10 w-full space-y-4">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.key}
            value={item.key}
            className="bg-white border w-full border-gray-300 rounded-md hover:bg-gray-100 shadow-md transition-all duration-300"
          >
            <AccordionTrigger className="px-4 py-3 text-left">{item.title}</AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-1 text-gray-800">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}
