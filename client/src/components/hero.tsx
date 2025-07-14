import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Download, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="gradient-bg pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Restoring Trust in Charitable Giving
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            SDtec
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Real-Time Impact. Verified Results.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-white/80 mb-12 max-w-3xl mx-auto"
          >
            We don't just tell you where donations went. We show real proof, in real time with 
            evidence letting you know who you helped, how you helped, and measuring long-term 
            impact with verified results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-8 py-4"
              onClick={() => window.open("https://sdtec.io", "_blank")}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started at sdtec.io
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-[#192e4f] hover:bg-white/10 font-semibold text-lg px-8 py-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
