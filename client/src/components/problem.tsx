import { motion } from "framer-motion";
import { XCircle, Frown, Building, Briefcase, TrendingDown } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: Frown,
      title: "Donors are left in the dark",
      description: "No visibility into impact",
      color: "text-yellow-500"
    },
    {
      icon: Building,
      title: "Nonprofits struggle to prove results",
      description: "Complex reporting requirements",
      color: "text-gray-500"
    },
    {
      icon: Briefcase,
      title: "Companies face scrutiny",
      description: "Unverified impact claims",
      color: "text-orange-500"
    },
    {
      icon: TrendingDown,
      title: "Trust gap is widening",
      description: "Generosity is declining",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center"
          >
            <XCircle className="text-destructive mr-3 w-10 h-10" />
            The Problem: "Where Did My Donation Go?"
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            Every year, over <span className="font-bold text-destructive">$800 billion</span> flows 
            into charities globally. Yet, most donors never see how—or if—their money truly helps.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl card-shadow hover-lift"
            >
              <div className="text-center">
                <problem.icon className={`w-12 h-12 ${problem.color} mb-4 mx-auto`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
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
          <p className="text-2xl font-semibold text-destructive">It's time to fix that.</p>
        </motion.div>
      </div>
    </section>
  );
}
