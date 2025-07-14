import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Have questions?
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <Mail className="w-6 h-6 text-primary mr-3" />
              <a 
                href="mailto:info@sdtec.io" 
                className="text-xl text-primary hover:text-primary/80 transition-colors"
              >
                info@sdtec.io
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <Phone className="w-6 h-6 text-primary mr-3" />
              <a 
                href="tel:+919045006859" 
                className="text-xl text-primary hover:text-primary/80 transition-colors"
              >
                +91 90450 06859
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
