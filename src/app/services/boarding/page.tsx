import type { Metadata } from "next";
import Link from "next/link";
import {
  Moon,
  Check,
  Phone,
  ArrowLeft,
  Clock,
  Users,
  Footprints,
  Shield,
  CalendarDays,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Overnight Boarding | Glamour Paws",
  description:
    "24/7, 365-day overnight boarding for dogs. Daytime play groups, regular walks, and secure kennels. Cape Coral & Fort Myers.",
};

const features = [
  {
    icon: Clock,
    title: "Available 24/7/365",
    description:
      "We are open every single day of the year, including holidays. Your pet always has a safe place to stay.",
  },
  {
    icon: MapPin,
    title: "Pick Up & Drop Off During Normal Hours",
    description:
      "Convenient drop off and pick up during our regular business hours at either location.",
  },
  {
    icon: CalendarDays,
    title: "After-Hours by Appointment",
    description:
      "Need to pick up or drop off outside normal hours? We accommodate after-hours visits by appointment.",
  },
  {
    icon: Users,
    title: "Daytime Play Groups",
    description:
      "Boarders are not stuck in kennels all day. They join our supervised daytime play groups for exercise and socialization.",
  },
  {
    icon: Footprints,
    title: "Regular Walks",
    description:
      "Every boarding guest receives regular walks throughout their stay to stay active and comfortable.",
  },
  {
    icon: Shield,
    title: "Secure Kennels",
    description:
      "During rest and overnight hours, your pet sleeps in a clean, secure, and comfortable kennel.",
  },
];

export default function BoardingPage() {
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
              <Moon className="h-7 w-7" />
            </div>
          </div>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white">
            Overnight Boarding
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            A home away from home for your pet. Available around the clock,
            every day of the year, with supervised play and comfortable kennels.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-cream-dark relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-pink" />
              <div className="flex items-start justify-between mb-6 mt-2">
                <div>
                  <h2 className="text-2xl font-bold text-dark">
                    Overnight Stay
                  </h2>
                  <p className="text-sm text-warm-gray mt-1">
                    Available 24/7, 365 days a year
                  </p>
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Call for quote
                </span>
              </div>
              <p className="text-warm-gray leading-relaxed mb-8">
                Whether you are traveling for business, vacation, or just need a
                safe place for your pet overnight, our boarding service provides
                a comfortable, supervised experience. Boarders are not confined
                to kennels all day -- they enjoy daytime play groups, regular
                walks, and plenty of attention from our caring staff.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Pick up & drop off during normal hours",
                  "After-hours available by appointment",
                  "Boarders join daytime play groups",
                  "Regular walks on facility grounds",
                  "Secure kennels during rest hours",
                  "Holiday boarding available",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-charcoal"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-dark">
              What Makes Our Boarding Special
            </h2>
            <p className="mt-3 text-warm-gray max-w-xl mx-auto">
              We treat every boarding guest like family, ensuring they are safe,
              comfortable, and happy throughout their stay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-2xl p-6 border border-cream-dark hover:shadow-md transition-shadow"
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

      {/* Info Banner */}
      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/5 to-pink/5 rounded-2xl p-8 border border-primary/10 max-w-3xl">
            <h3 className="text-lg font-bold text-dark mb-3">
              Before You Board
            </h3>
            <ul className="space-y-2">
              {[
                "All boarding dogs must be up to date on vaccinations",
                "A temperament assessment may be required for first-time boarders",
                "Please bring your pet's regular food to maintain their diet",
                "Favorite toys and blankets from home are welcome",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-charcoal"
                >
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-pink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
            Reserve Your Pet&apos;s Boarding Stay
          </h2>
          <p className="mt-3 text-white/80">
            Call us to get a quote and reserve a spot for your pet. Holiday dates
            fill up quickly, so book early!
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
