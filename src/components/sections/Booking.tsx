import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Booking = () => {
  return (
    <>
      <section id="booking" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                Reserve Your Escape
              </h2>
              <p className="text-xl text-stone-600 mb-8">
                Ready to disconnect from the everyday and reconnect with what
                matters? Let us craft your perfect wilderness retreat.
              </p>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="rounded-xl border-stone-200"
                  />
                  <Input
                    placeholder="Last Name"
                    className="rounded-xl border-stone-200"
                  />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="rounded-xl border-stone-200"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="rounded-xl border-stone-200"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Check-in Date"
                    type="date"
                    className="rounded-xl border-stone-200"
                  />
                  <Input
                    placeholder="Guests"
                    type="number"
                    min="1"
                    className="rounded-xl border-stone-200"
                  />
                </div>
                <select className="w-full p-3 rounded-xl border border-stone-200 bg-white">
                  <option>Select Accommodation</option>
                  <option>Luxury Canvas Tent</option>
                  <option>Geodesic Dome</option>
                  <option>Forest Cottage</option>
                </select>
                <Textarea
                  placeholder="Special requests or questions..."
                  className="rounded-xl border-stone-200 h-32"
                />
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl text-lg">
                  Send Booking Request
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1685239218538-11d65c8baaa1?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Booking"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
