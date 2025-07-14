import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Building, Heart, Coins } from "lucide-react";

export default function Pricing() {
  const charityFeatures = [
    "Automated impact tracking",
    "Branded donor dashboards",
    "Compliance-ready reports",
    "Mobile access for field teams"
  ];

  const donorFeatures = [
    "Personalized impact feed",
    "Real-time photo & video updates",
    "Chat with beneficiaries",
    "Donation history dashboard"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center"
          >
            <Coins className="text-accent mr-3 w-10 h-10" />
            Our Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Transparent pricing for transparent impact. Choose the plan that fits your needs.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Charities & NGOs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-50 h-full">
              <CardHeader className="text-center pb-8">
                <Building className="w-12 h-12 text-primary mb-4 mx-auto" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Charities & NGOs
                </CardTitle>
                <p className="text-gray-600">Subscription Access</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Standard Plan</h4>
                    <p className="text-gray-600 mb-4">For small-to-mid-sized NGOs</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg flex flex-col justify-center min-h-[80px]">
                        <div className="text-xl font-bold text-primary">$250/month</div>
                        <div className="text-sm text-gray-600 mt-1">Monthly billing</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg border-2 border-primary flex flex-col justify-center min-h-[80px]">
                        <div className="text-xl font-bold text-primary">$2,500/year</div>
                        <div className="text-sm text-gray-600 mt-1">Save 2 months</div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-sm">
                      {charityFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-4 h-4 text-secondary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Plan</h4>
                    <div className="text-3xl font-bold text-primary mb-4">Custom Pricing</div>
                    <p className="text-gray-600">For larger charities with full analytics and verification tools</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Individual Donors */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-50 h-full">
              <CardHeader className="text-center pb-8">
                <Heart className="w-12 h-12 text-accent mb-4 mx-auto" />
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Individual Donors
                </CardTitle>
                <p className="text-gray-600">Mobile Premium</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Plan</h4>
                    <div className="text-3xl font-bold text-primary mb-4">$0</div>
                    <p className="text-gray-600">Browse campaigns, make donations, receive basic updates</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Impact+ Plan</h4>
                    <div className="text-3xl font-bold text-primary mb-4">$10/month or $99/year</div>
                    <ul className="space-y-2 text-sm">
                      {donorFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-4 h-4 text-secondary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700">
            All data is securely stored and transparently managed so you never have to wonder where your donation went.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
