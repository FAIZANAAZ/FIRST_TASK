"use client";
import { features } from "@/constant/toolsdata";
import { motion } from "framer-motion";
import Image from "next/image";


interface FeatureCardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex flex-col items-start text-start p-6 md:p-8"
    >
      <div className="text-purple-500 mb-4 text-3xl">
        {typeof icon === "string" ? (
          <Image src={icon} alt="icon" width={36} height={36} />
        ) : (
          icon
        )}
      </div>
      <h3 className="text-black  text-start text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </motion.div>
  );
};

const Tools = () => {
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-[56px] font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-tr from-[#C026D3] to-[#701A75]">
            Your favourite tools
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            In risus nec molestie at in pulvinar tellus. At integer id condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit faucibus. Sollicitudin elit gravida tellus mattis porttitor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
