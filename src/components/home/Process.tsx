import { motion } from "framer-motion";
import bilonaImage from "@/assets/bilona-method.jpg";

const steps = [
  {
    number: "01",
    title: "Farm Fresh Milk",
    description: "Collected daily from our grass-fed A2 Desi cows",
  },
  {
    number: "02",
    title: "Natural Curdling",
    description: "Milk is set into curd using traditional clay pots",
  },
  {
    number: "03",
    title: "Bilona Churning",
    description: "Hand-churned to separate butter from buttermilk",
  },
  {
    number: "04",
    title: "Slow Simmering",
    description: "Butter is heated slowly to create pure golden ghee",
  },
];

export const Process = () => {
  return (
    <section className="py-24 bg-cream-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={bilonaImage}
                alt="Traditional Bilona churning method"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-medium max-w-[200px]"
            >
              <p className="font-serif text-4xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground mt-1">Years of tradition</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              The Ancient Art of{" "}
              <span className="text-gradient-gold">Bilona Method</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              We follow the time-honored Vedic tradition of making ghee, ensuring
              every drop is rich in nutrients and authentic flavor.
            </p>

            {/* Steps */}
            <div className="mt-10 space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
