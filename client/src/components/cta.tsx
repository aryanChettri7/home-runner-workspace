import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Search, Users, Smartphone, ArrowRight } from "lucide-react";

export default function CTA() {
  const features = [
    {
      icon: Search,
      title: "Know what your donation really does"
    },
    {
      icon: Users,
      title: "Support causes with verified outcomes"
    },
    {
      icon: Smartphone,
      title: "Download the app and make your impact visible"
    }
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-8 flex items-center justify-center"
          >
            <Rocket className="text-accent mr-3 w-10 h-10" />
            Try SDtec Today
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-10 h-10 text-white mb-4 mx-auto" />
                <p className="text-lg text-white">{feature.title}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 font-semibold text-lg px-8 py-4"
              onClick={() => window.open("https://sdtec.life", "_blank")}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started at sdtec.life
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
