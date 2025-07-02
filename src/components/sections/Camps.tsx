"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Bed, Car, Star, Wifi } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Camps = () => {
//   const [selectedCamp, setSelectedCamp] = useState("luxury-tent");
  const router = useRouter();
  const campTypes = [
    {
      id: "luxury-tent",
      name: "Luxury Canvas Tents",
      description:
        "Spacious safari-style tents with king beds, private bathrooms, and panoramic forest views.",
      price: "$189/night",
        images: [
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop'
      ],
      amenities: ["King Bed", "Private Bath", "WiFi", "Heating"],
      icons: [Bed, Wifi, Car, Star],
      href: "/#booking"
    },
    {
      id: "dome",
      name: "Geodesic Domes",
      description:
        "Modern geometric domes featuring skylight views, premium furnishings, and climate control.",
      price: "$259/night",
       images: [
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1520637836862-4d197d17c0a4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      ],
      amenities: ["Skylight", "Climate Control", "Kitchenette", "Deck"],
      icons: [Star, Wifi, Bed, Car],
      href: "/#booking"
    },
    {
      id: "cottage",
      name: "Forest Cottages",
      description:
        "Charming wooden cottages with full kitchens, living areas, and private hot tubs.",
      price: "$349/night",
        images: [
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop'
      ],
      amenities: ["Full Kitchen", "Hot Tub", "Fireplace", "Parking"],
      icons: [Bed, Wifi, Car, Star],
      href: "/#booking"
    },
  ];
  return (
    <>
      <section id="camps" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Choose Your Sanctuary
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Each accommodation is thoughtfully designed to immerse you in
              nature while providing modern comfort and luxury.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campTypes.map((camp) => (
              <Card
                key={camp.id}
                className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-0"
              >
                <div className="relative overflow-hidden">
                  <Carousel
                    className="w-full h-full"
                    opts={{ align: "start", loop: true }}
                  >
                    <CarouselContent className="h-full">
                      {camp.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex} className="h-full">
                          <div className="relative h-full">
                            <img
                              src={image}
                              alt={`${camp.name} - Image ${
                                imageIndex + 1
                              }`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Carousel Navigation */}
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />

                    {/* Dot Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1  transition-opacity duration-300">
                      {camp.images.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                        />
                      ))}
                    </div>
                  </Carousel>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-emerald-600 font-semibold px-3 py-1 rounded-full">
                    {camp.price}
                  </div>
                </div>
                <CardContent className="p-6 pt-0">
                  <h3 className="text-2xl font-serif text-stone-800 mb-3">
                    {camp.name}
                  </h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    {camp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {camp.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors" onClick={() => router.push(camp.href)}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Camps;
