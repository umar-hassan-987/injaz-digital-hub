import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Ecommerce',
    description: 'Enhance your ecommerce operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.'
  },
  {
    title: 'Finance',
    description: 'Get scalable custom solutions that enhance operational efficiency, boost data security, and streamline your financial services seamlessly.'
  },
  {
    title: 'Real Estate',
    description: 'Our custom real estate solutions simplify property management and sales, streamline operations, and enhance customer experience effectively.'
  },
  {
    title: 'Hospitality',
    description: 'Get user-friendly hospitality solutions that enhance guest experiences, boost satisfaction, and streamline hotel operations for better service delivery.'
  },
  {
    title: 'Education',
    description: 'Revolutionize ed-tech with innovative solutions that increase student engagement, simplify learning, and support personalized education.'
  },
  {
    title: 'Healthcare',
    description: 'Our healthcare solutions streamline operations, reduce administrative tasks, and improve patient care for more efficient and responsive medical services.'
  }
];

const Industries = () => {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24 xl:px-40">
        
        {/* Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-display tracking-tight mb-6">
            Industries we serve
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
            With a wide range of services and proven experience across major industries, we 
            understand your challenges and deliver tailored solutions that overcome them 
            and drive meaningful impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
              className="p-8 sm:p-10 rounded-[2rem] bg-white border border-gray-100 flex flex-col h-full hover:border-accent/30 hover:shadow-xl hover:shadow-gray-200/30 transition-all duration-500 group"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-display mb-6 group-hover:text-accent transition-colors">
                {industry.title}
              </h3>
              <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
