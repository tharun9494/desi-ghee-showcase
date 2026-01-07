import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import farmImage from "@/assets/farm-landscape.jpg";

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={farmImage}
          alt="DOODHWALA Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-gold-light text-sm font-medium mb-6">
            Experience Purity Today
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-background leading-tight">
            Ready to Taste the{" "}
            <span className="text-gold">Authentic Difference?</span>
          </h2>
          
          <p className="mt-6 text-background/80 text-lg max-w-2xl mx-auto">
            Join thousands of happy families who have made the switch to pure,
            traditional Desi Cow Ghee. Order now and experience the DOODHWALA
            difference.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Order Now
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-background/30 text-background hover:bg-background/10 hover:text-background"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone size={20} />
                Call Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
