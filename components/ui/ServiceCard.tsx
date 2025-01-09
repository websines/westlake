import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  gradient,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-6`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-sm text-gray-600"
            >
              <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${gradient} mr-2`} />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
