import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Smartphone, Eye, Zap } from "lucide-react";

export default function Solution() {
  const solutions = [
    {
      icon: TrendingUp,
      title: "Track outcomes as they happen",
      description: "Real-time impact monitoring",
      color: "text-secondary"
    },
    {
      icon: Smartphone,
      title: "User-friendly mobile app",
      description: "Access anywhere, anytime",
      color: "text-secondary"
    },
    {
      icon: Eye,
      title: "Instant, visual impact reports",
      description: "See results immediately",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Easy integration",
      description: "Works with existing systems",
      color: "text-secondary"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center"
          >
            <CheckCircle className="text-secondary mr-3 w-10 h-10" />
            The Solution: Real-Time Proof of Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            <span className="font-bold text-secondary">SDtec</span> gives donors, charities, and 
            corporate funders <span className="font-bold">real-time visibility</span> into how every 
            dollar is used on the ground, where it matters.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl card-shadow hover-lift"
            >
              <div className="text-center">
                <solution.icon className={`w-12 h-12 ${solution.color} mb-4 mx-auto`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-700">
            Whether it's feeding children, paying school fees, or building wells
            <span className="font-bold text-secondary"> you'll see the proof.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
