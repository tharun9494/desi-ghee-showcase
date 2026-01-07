import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The ghee from DOODHWALA is exactly like what my grandmother used to make. The aroma and taste are absolutely authentic. My family loves it!",
  },
  {
    name: "Rajesh Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "As a chef, I'm very particular about ingredients. DOODHWALA ghee has elevated my cooking. The quality is consistently excellent.",
  },
  {
    name: "Dr. Meera Iyer",
    location: "Bangalore",
    rating: 5,
    text: "I recommend DOODHWALA to all my patients looking for pure A2 ghee. It's lab-tested, pure, and made the traditional way. Trustworthy brand!",
  },
];

export const Testimonials = () => {
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
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            What Our <span className="text-gradient-gold">Customers</span> Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our happy customers have to
            say about DOODHWALA ghee.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card p-8 rounded-2xl border border-border"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="absolute top-6 right-6 text-primary/10"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif font-bold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
