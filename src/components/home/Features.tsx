import { motion } from "framer-motion";
import { Droplets, Flame, Award, Truck, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "100% Pure",
    description:
      "Made from fresh A2 cow milk, our ghee contains no additives, preservatives, or artificial colors.",
  },
  {
    icon: Flame,
    title: "Bilona Method",
    description:
      "Traditional hand-churned process that preserves nutrients and gives our ghee its distinctive aroma.",
  },
  {
    icon: Leaf,
    title: "Grass-Fed Cows",
    description:
      "Our cows graze on natural pastures, ensuring the highest quality milk for premium ghee.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Lab-tested for purity and quality. Every batch meets strict quality standards.",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description:
      "Rich in vitamins A, D, E, K and essential fatty acids for better digestion and immunity.",
  },
  {
    icon: Truck,
    title: "Farm Fresh Delivery",
    description:
      "Directly from our farms to your doorstep, ensuring maximum freshness and purity.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            The <span className="text-gradient-gold">DOODHWALA</span> Promise
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We're committed to bringing you the purest, most authentic Desi Cow Ghee
            with every jar we craft.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={28} className="text-primary" />
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
