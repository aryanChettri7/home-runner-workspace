import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Handshake, Building, Users } from "lucide-react";

export default function WhoWeHelp() {
  const groups = [
    {
      icon: Heart,
      title: "Individual Donors",
      quote: "80% say they'd give more if they could see the results.",
      description: "SDtec delivers the transparency they're asking for.",
      color: "text-red-500"
    },
    {
      icon: Handshake,
      title: "Charities & NGOs",
      quote: "Over 10 million NGOs worldwide struggle with donor trust.",
      description: "We make reporting effortless and credible.",
      color: "text-blue-500"
    },
    {
      icon: Building,
      title: "Corporate CSR Programs",
      quote: "$21B donated annually, with rising pressure for ESG accountability.",
      description: "SDtec ensures your impact is measured, reported, and trusted.",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center"
          >
            <Users className="text-primary mr-3 w-10 h-10" />
            Who We Help
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white card-shadow hover-lift h-full">
                <CardContent className="p-8 text-center">
                  <group.icon className={`w-12 h-12 ${group.color} mb-6 mx-auto`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{group.title}</h3>
                  <blockquote className="text-lg text-gray-600 italic mb-4">
                    "{group.quote}"
                  </blockquote>
                  <p className="text-gray-700">{group.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
