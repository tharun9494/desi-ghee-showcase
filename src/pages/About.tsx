import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Heart, Target, Eye, Users, Leaf, Award } from "lucide-react";
import farmImage from "@/assets/farm-landscape.jpg";
import bilonaImage from "@/assets/bilona-method.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Purity",
    description: "Every jar of ghee we produce is a labor of love, crafted with dedication to authenticity.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We work with local farmers, supporting traditional methods and sustainable practices.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Rigorous testing ensures every batch meets our uncompromising quality standards.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We empower rural communities by providing fair prices to our partner farmers.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4">
                A Legacy of{" "}
                <span className="text-gradient-gold">Purity & Tradition</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                DOODHWALA was born from a simple vision: to bring the authentic taste
                of pure Desi Cow Ghee to every Indian household, just like our
                grandmothers used to make.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={farmImage}
                    alt="DOODHWALA Farm"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                  <img
                    src={bilonaImage}
                    alt="Traditional Bilona Method"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                  How It All <span className="text-gradient-gold">Began</span>
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    In the heart of rural Rajasthan, where traditions run deep and
                    the land nurtures indigenous Gir cows, a family's passion for
                    pure ghee gave birth to DOODHWALA.
                  </p>
                  <p>
                    For generations, our family has been making ghee the traditional
                    way — using the ancient Bilona method where curd is hand-churned
                    to extract makkhan (butter), which is then slow-cooked to create
                    the purest, most aromatic ghee.
                  </p>
                  <p>
                    In 2018, we decided to share this precious tradition with the
                    world. Today, DOODHWALA serves thousands of families across
                    India, delivering the authentic taste of purity right to their
                    doorsteps.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-cream-dark">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-10 rounded-3xl border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To preserve and promote the ancient tradition of making pure Desi
                  Cow Ghee while empowering rural farming communities. We believe in
                  bringing unadulterated, chemical-free ghee that nourishes both body
                  and soul.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card p-10 rounded-3xl border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted name in authentic dairy products,
                  making pure Desi Ghee accessible to every household while
                  maintaining the highest standards of quality and tradition.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                What Drives Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                Our Core <span className="text-gradient-gold">Values</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Different */}
        <section className="py-24 bg-foreground text-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
                Why <span className="text-gold">DOODHWALA</span> is Different
              </h2>
              <p className="mt-6 text-background/70 text-lg leading-relaxed">
                In a market flooded with adulterated products, we stand apart
                through our unwavering commitment to purity and authenticity.
              </p>

              <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
                  <span className="text-gold font-serif text-4xl font-bold">01</span>
                  <h4 className="font-serif text-xl font-semibold mt-4 mb-2">
                    Single Origin
                  </h4>
                  <p className="text-background/70">
                    All our ghee comes from our own farms and trusted local farmers,
                    ensuring complete traceability.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
                  <span className="text-gold font-serif text-4xl font-bold">02</span>
                  <h4 className="font-serif text-xl font-semibold mt-4 mb-2">
                    A2 Protein Only
                  </h4>
                  <p className="text-background/70">
                    We exclusively use milk from indigenous Gir and Sahiwal cows,
                    rich in A2 beta-casein protein.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
                  <span className="text-gold font-serif text-4xl font-bold">03</span>
                  <h4 className="font-serif text-xl font-semibold mt-4 mb-2">
                    Lab Tested
                  </h4>
                  <p className="text-background/70">
                    Every batch is tested for purity, ensuring zero adulteration and
                    maximum nutritional value.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
