import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Instagram,
    Mail,
    MapPin,
    Phone
} from "lucide-react";

const ContactFAQ = () => {
  const faqItems = [
    {
      question: "What is included in my stay?",
      answer:
        "All accommodations include daily breakfast, access to hiking trails, stargazing deck, meditation areas, and 24/7 concierge service.",
    },
    {
      question: "Do you provide transportation?",
      answer:
        "We offer complimentary shuttle service from the nearest train station. Private transportation can be arranged for an additional fee.",
    },
    {
      question: "What should I pack?",
      answer:
        "We provide all bedding, towels, and basic amenities. Bring comfortable hiking clothes, weather-appropriate layers, and personal items.",
    },
    {
      question: "Is WiFi available?",
      answer:
        "High-speed WiFi is available in all accommodations, though we encourage our guests to disconnect and embrace the natural surroundings.",
    },
  ];

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif text-stone-800 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">Call Us</div>
                    <div className="text-stone-600">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">Email</div>
                    <div className="text-stone-600">hello@willowbrook.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">Location</div>
                    <div className="text-stone-600">
                      Pacific Northwest Forest
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800">
                      Follow Us
                    </div>
                    <div className="text-stone-600">@willowbrook_resort</div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-100 rounded-2xl p-4 h-64">
                <div className="w-full h-full bg-stone-200 rounded-xl flex items-center justify-center text-stone-500">
                  Interactive Map Placeholder
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-serif text-stone-800 mb-8">
                Frequently Asked
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-stone-200 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-medium text-stone-800">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-stone-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFAQ;
