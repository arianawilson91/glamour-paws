import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Cat,
  ShieldCheck,
  Moon,
  Phone,
  Check,
  DollarSign,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing | Glamour Paws",
  description:
    "Full grooming, bath & touch up, cat grooming, dental cleaning, boarding, and more. View our complete service menu and pricing.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-light mb-3">
            Our Services
          </p>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white">
            Services &amp; Pricing
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            From full grooming to overnight boarding, we offer a complete range
            of premium pet care services.
          </p>
        </div>
      </section>

      {/* Dog Grooming */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="font-[var(--font-display)] text-3xl font-bold text-dark">
                Dog Grooming
              </h2>
            </div>
            <Link
              href="/services/dog-grooming"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Groom */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-dark">Full Groom</h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Call for quote
                </span>
              </div>
              <p className="text-sm text-warm-gray mb-4">
                The complete pampering experience for your pup.
              </p>
              <ul className="space-y-2">
                {[
                  "Bath with premium shampoo",
                  "Hand blow dry (no cage dryers)",
                  "Nails trimmed",
                  "Ears cleaned",
                  "Anal glands expression",
                  "Hair cut & styled",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-charcoal"
                  >
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bath & Touch Up */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-dark">
                  Bath &amp; Touch Up
                </h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Call for quote
                </span>
              </div>
              <p className="text-sm text-warm-gray mb-4">
                A freshen-up between full grooming appointments.
              </p>
              <ul className="space-y-2">
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
                    className="flex items-center gap-2 text-sm text-charcoal"
                  >
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* A La Carte */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-cream-dark">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-dark">
                A La Carte Services
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { service: "Nail Trim Only", price: "$20" },
                { service: "Anal Glands Expression", price: "$15" },
                { service: "Nails & Glands Combo", price: "$30" },
              ].map((item) => (
                <div
                  key={item.service}
                  className="flex items-center justify-between bg-lavender-light/50 rounded-xl px-6 py-4"
                >
                  <span className="text-sm font-medium text-charcoal">
                    {item.service}
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/services/dog-grooming"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View Full Dog Grooming Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cat Grooming */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink/10 text-pink">
                <Cat className="h-6 w-6" />
              </div>
              <h2 className="font-[var(--font-display)] text-3xl font-bold text-dark">
                Cat Grooming
              </h2>
            </div>
            <Link
              href="/services/cat-grooming"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
            <div className="bg-cream rounded-2xl p-8 border border-cream-dark">
              <h3 className="text-xl font-bold text-dark mb-2">
                Feline Lion Cut
              </h3>
              <p className="text-3xl font-bold text-primary mb-2">$130</p>
              <p className="text-sm text-warm-gray">
                Available for both long and short haired cats.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-8 border border-cream-dark">
              <h3 className="text-xl font-bold text-dark mb-2">Feline Bath</h3>
              <p className="text-3xl font-bold text-primary mb-2">From $115</p>
              <p className="text-sm text-warm-gray">
                Full bath service for your feline friend.
              </p>
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/services/cat-grooming"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View Full Cat Grooming Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dental */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="font-[var(--font-display)] text-3xl font-bold text-dark">
              Non-Anesthetic Dental Cleaning
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark max-w-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-dark">
                  Complete Dental Cleaning
                </h3>
                <p className="text-sm text-warm-gray mt-1">
                  Performed by a certified canine dental hygienist
                </p>
              </div>
              <span className="text-3xl font-bold text-primary">$350</span>
            </div>
            <ul className="space-y-2 mt-6">
              {[
                "Full teeth cleaning",
                "Plaque removal",
                "Polish",
                "No anesthesia required — safe and stress-free",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-charcoal"
                >
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Boarding */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dark/10 text-dark">
                <Moon className="h-6 w-6" />
              </div>
              <h2 className="font-[var(--font-display)] text-3xl font-bold text-dark">
                Overnight Boarding
              </h2>
            </div>
            <Link
              href="/services/boarding"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bg-cream rounded-2xl p-8 border border-cream-dark max-w-3xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-dark">Overnight Stay</h3>
                <p className="text-sm text-warm-gray mt-1">
                  Available 24/7, 365 days a year
                </p>
              </div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Call for quote
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Pick up & drop off during normal hours",
                "After-hours available by appointment",
                "Boarders join daytime play groups",
                "Regular walks on facility grounds",
                "Secure kennels during off hours",
                "Holiday boarding available (call for details)",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-charcoal"
                >
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/services/boarding"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View Full Boarding Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-pink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
            Ready to Book?
          </h2>
          <p className="mt-3 text-white/80">
            Call us to schedule an appointment or get a personalized quote for
            your pet.
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
