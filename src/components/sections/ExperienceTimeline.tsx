import React from "react";

const ExperienceTimeline = () => {
  const experienceTimeline = [
    {
      time: "7:00 AM",
      title: "Dawn Meditation",
      description:
        "Begin your day with guided meditation as the forest awakens around you.",
      image:
        "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      time: "8:30 AM",
      title: "Farm-to-Table Breakfast",
      description:
        "Savor locally sourced ingredients in our open-air dining pavilion.",
      image:
        "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      time: "10:00 AM",
      title: "Nature Exploration",
      description:
        "Discover hidden trails and pristine lakes with our expert guides.",
      image:
        "https://images.unsplash.com/photo-1564938494116-8438db956ef1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      time: "6:30 PM",
      title: "Sunset Gathering",
      description: "Share stories around the fire as day transitions to night.",
      image:
        "https://images.unsplash.com/photo-1666455317155-1582e9f6ee73?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      time: "9:00 PM",
      title: "Stargazing",
      description: "Marvel at the cosmos from our elevated observation deck.",
      image:
        "https://images.unsplash.com/flagged/photo-1567636948409-45bfd1c905c2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <section id="experience" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Your Perfect Day
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From sunrise meditation to starlit conversations, every moment is
              crafted to reconnect you with nature and yourself.
            </p>
          </div>

          <div className="space-y-16">
            {experienceTimeline.map((experience, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                  />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {experience.time}
                  </div>
                  <h3 className="text-3xl font-serif text-stone-800 mb-4">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceTimeline;
