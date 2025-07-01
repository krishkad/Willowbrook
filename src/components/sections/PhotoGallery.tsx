import { Play } from "lucide-react";
import React from "react";

const PhotoGallery = () => {
 const galleryImages = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop", // Mountain Sunrise
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop", // River Valley
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop", // Forest Cabin
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop", // Ancient Forest
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop", // Filtered Light
  "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop", // Lake Reflection
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop", // Aerial Vista
  "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop", // Mountain Lodge
];

  return (
    <>
      {" "}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Captured Moments
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Glimpses of the beauty, serenity, and luxury that await you at
              Willowbrook.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;
