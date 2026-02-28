import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Check,
  Star,
  Phone,
  Wind,
  Heart,
  Scissors,
  User,
  PawPrint,
  Stethoscope,
  ArrowLeft,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dog Grooming Services | Glamour Paws",
  description:
    "Full groom, bath & touch up, and a la carte dog grooming services. Hand blow dry, gentle approach, all breeds welcome. Cape Coral & Fort Myers.",
};

const differentiators = [
  {
    icon: Wind,
    title: "Hand Blow Dry",
    description:
      "We never use cage dryers or loud torpedo blowers. Every pet is hand dried for a gentle, stress-free experience.",
  },
  {
    icon: Heart,
    title: "Gentle Approach",
    description:
      "We take the time to make your dog feel comfortable and safe. Patient, calm handling from start to finish.",
  },
  {
    icon: Scissors,
    title: "Creative Cuts",
    description:
      "Our groomers specialize in creative cuts that highlight each pet's unique attributes and personality.",
  },
  {
    icon: User,
    title: "Personalized Grooming",
    description:
      "Every groom is tailored to your dog's individual needs, coat type, and your preferences.",
  },
  {
    icon: PawPrint,
    title: "All Breeds Welcome",
    description:
      "From tiny Yorkies to giant Great Danes, we have the experience and equipment for every breed and size.",
  },
  {
    icon: Stethoscope,
    title: "Health Check Included",
    description:
      "Every grooming session includes a complimentary health check to spot potential issues early.",
  },
];

export default function DogGroomingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white/90 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lavender">
              <Sparkles className="h-7 w-7" />
            </div>
          </div>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white">
            Dog Grooming
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            The complete pampering experience for your pup. From a refreshing
            bath to a styled haircut, we make every dog look and feel their best.
          </p>
        </div>
      </section>

      {/* Full Groom & Bath */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Groom */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-pink" />
              <div className="flex items-start justify-between mb-4 mt-2">
                <div>
                  <h2 className="text-2xl font-bold text-dark">Full Groom</h2>
                  <p className="text-sm text-warm-gray mt-1">
                    Our signature grooming experience
                  </p>
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Call for quote
                </span>
              </div>
              <p className="text-sm text-warm-gray mb-6">
                The complete pampering package. Your dog will leave looking and
                smelling amazing, with a haircut styled to your preferences.
              </p>
              <ul className="space-y-3">
                {[
                  "Bath with premium shampoo & conditioner",
                  "Hand blow dry (no cage dryers ever)",
                  "Nails trimmed & filed",
                  "Ears cleaned",
                  "Anal glands expression",
                  "Full haircut & styling",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-charcoal"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bath & Touch Up */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-primary-light" />
              <div className="flex items-start justify-between mb-4 mt-2">
                <div>
                  <h2 className="text-2xl font-bold text-dark">
                    Bath &amp; Touch Up
                  </h2>
                  <p className="text-sm text-warm-gray mt-1">
                    A freshen-up between full grooms
                  </p>
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Call for quote
                </span>
              </div>
              <p className="text-sm text-warm-gray mb-6">
                Keep your pup looking fresh between full grooming appointments.
                Includes all the essentials plus a light tidy-up.
              </p>
              <ul className="space-y-3">
                {[
                  "Bath with premium shampoo",
                  "Hand blow dry",
                  "Nails trimmed",
                  "Ears cleaned",
                  "Anal glands expression",
                  "Tighten up body hair",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-charcoal"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-lavender/30">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* A La Carte */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="h-5 w-5 text-primary" />
              <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-dark">
                A La Carte Pricing
              </h2>
            </div>
            <p className="text-warm-gray mb-8">
              Need just one service? We offer individual grooming services at
              affordable prices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  service: "Nail Trim Only",
                  price: "$20",
                },
                {
                  service: "Anal Glands Expression",
                  price: "$15",
                },
                {
                  service: "Nails & Glands Combo",
                  price: "$30",
                },
              ].map((item) => (
                <div
                  key={item.service}
                  className="bg-cream rounded-xl px-6 py-5 border border-cream-dark text-center"
                >
                  <p className="text-sm font-medium text-warm-gray mb-1">
                    {item.service}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-3">
              <Star className="h-5 w-5 text-gold" />
            </div>
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-dark">
              The Glamour Paws Grooming Difference
            </h2>
            <p className="mt-3 text-warm-gray max-w-xl mx-auto">
              We go above and beyond to make every grooming session a
              comfortable, enjoyable experience for your dog.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-cream-dark hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-pink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
            Book Your Dog&apos;s Grooming Session
          </h2>
          <p className="mt-3 text-white/80">
            Call us today for a personalized quote based on your dog&apos;s
            breed, size, and coat condition.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2392259665"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-cream transition-colors"
            >
              <Phone className="h-5 w-5" />
              Cape Coral: (239) 225-9665
            </a>
            <a
              href="tel:2392259663"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Fort Myers: (239) 225-9663
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
