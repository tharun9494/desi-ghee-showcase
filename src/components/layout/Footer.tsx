import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold">
                DOODH<span className="text-gold">WALA</span>
              </span>
            </Link>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Pure Desi Cow Ghee made with traditional Bilona method. From our farms
              to your home, we deliver the authentic taste of purity and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-background/70">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-background/70">hello@doodhwala.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-background/70">
                  Village Khera, Jaipur,<br />
                  Rajasthan, India - 302001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} DOODHWALA. All rights reserved.
            </p>
            <p className="text-background/50 text-sm">
              Made with ❤️ for pure, authentic taste
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
