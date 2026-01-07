import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-ghee.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--gold) / 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, hsl(var(--gold) / 0.08) 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Leaf size={16} />
              <span className="text-sm font-medium">100% Pure & Natural</span>
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Pure Desi Ghee,
              <br />
              <span className="text-gradient-gold">From Our Farms</span>
              <br />
              to Your Home
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the authentic taste of tradition with our handcrafted Desi Cow
              Ghee, made using the ancient Bilona method. Pure, natural, and full of
              goodness.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Shield size={18} className="text-primary" />
                <span>No Preservatives</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Heart size={18} className="text-primary" />
                <span>Bilona Method</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Leaf size={18} className="text-primary" />
                <span>Farm Fresh</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Order Now
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-square max-w-lg mx-auto">
              {/* Decorative circle */}
              <div className="absolute inset-4 lg:inset-8 rounded-full bg-primary/10 blur-3xl" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Pure Desi Cow Ghee in traditional brass bowl"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 lg:left-auto lg:-right-4 bg-card p-4 rounded-2xl shadow-medium"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🐄</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">A2 Desi Cow</p>
                    <p className="text-sm text-muted-foreground">Grass-fed & healthy</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
