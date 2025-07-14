import { motion } from "framer-motion";
import { BarChart, Smartphone, AlertTriangle, CheckCircle } from "lucide-react";

export default function WhyItMatters() {
  const points = [
    {
      icon: Smartphone,
      title: "Digital donations are rising—but donor confidence is falling.",
      color: "text-gray-700"
    },
    {
      icon: AlertTriangle,
      title: "Fraud and unverifiable claims are hurting the sector.",
      color: "text-yellow-500"
    },
    {
      icon: CheckCircle,
      title: "Transparency isn't a bonus anymore—it's a requirement.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center"
          >
            <BarChart className="text-destructive mr-3 w-10 h-10" />
            Why It Matters
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <point.icon className={`w-10 h-10 ${point.color} mb-4 mx-auto`} />
              <p className="text-lg text-gray-700">{point.title}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-2xl font-semibold text-primary">
            SDtec bridges this gap, bringing clarity to giving and confidence to action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
