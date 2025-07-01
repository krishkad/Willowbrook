import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {


      const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      text: "The perfect blend of luxury and nature. Every detail was thoughtfully curated.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Sarah",
    },
    {
      name: "Marcus Johnson",
      location: "Denver, CO",
      text: "An unforgettable experience. The dome was spectacular and the service impeccable.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Marcus",
    },
    {
      name: "Elena Rodriguez",
      location: "Austin, TX",
      text: "Exceeded all expectations. The perfect romantic getaway surrounded by nature.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Elena",
    },
  ];
  return (
    <>
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Guest Stories
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Hear from fellow travelers who discovered their perfect escape at
              Willowbrook.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-6 text-lg italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-stone-800">
                        {testimonial.name}
                      </div>
                      <div className="text-stone-500 text-sm">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
