import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <>
      <footer className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-serif font-bold mb-4">
                Willowbrook
              </div>
              <p className="text-stone-300 leading-relaxed">
                Where luxury meets wilderness, creating unforgettable
                experiences in nature&apos;s embrace.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#camps"
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Accommodations
                </a>
                <a
                  href="#experience"
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#gallery"
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Policies</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Booking Policy
                </a>
                <a
                  href="#"
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Cancellation
                </a>
                <a
                  href="#"
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-stone-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-stone-300 mb-4">
                Stay updated on special offers and seasonal experiences.
              </p>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  className="rounded-l-xl border-stone-600 bg-stone-700 text-white placeholder-stone-400"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-r-xl rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8 text-center">
            <p className="text-stone-400">
              © 2025 Willowbrook Resort. All rights reserved. | Crafted with
              care for nature lovers.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
