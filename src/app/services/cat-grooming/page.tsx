import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cat,
  Check,
  Phone,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cat Grooming Services | Glamour Paws",
  description:
    "Professional cat grooming including lion cuts and full bath services. Available for long and short haired cats. Cape Coral & Fort Myers.",
};

export default function CatGroomingPage() {
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
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-pink-light">
              <Cat className="h-7 w-7" />
            </div>
          </div>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white">
            Cat Grooming
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Professional feline grooming services in a calm, stress-free
            environment. Your cat deserves to look and feel fabulous too.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Image src="/images/cat-grooming.png" alt="Cat grooming at Glamour Paws" width={300} height={200} className="rounded-2xl shadow-lg" />
            <Image src="/images/cat-photo.jpg" alt="Cat with lion cut" width={200} height={200} className="rounded-2xl shadow-lg hidden sm:block object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Lion Cut */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-pink" />
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink/10 text-pink">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-dark">
                    Feline Lion Cut
                  </h2>
                  <p className="text-sm text-warm-gray">
                    Our most popular cat grooming service
                  </p>
                </div>
              </div>
              <p className="text-4xl font-bold text-primary mb-4">$130</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Full body clip in the lion cut style",
                  "Available for long haired cats",
                  "Available for short haired cats",
                  "Gentle, patient handling",
                  "Reduces matting and shedding",
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

            {/* Feline Bath */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-primary-light" />
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender/30 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-dark">Feline Bath</h2>
                  <p className="text-sm text-warm-gray">
                    A refreshing bath for your cat
                  </p>
                </div>
              </div>
              <p className="text-4xl font-bold text-primary mb-4">From $115</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Full bath with cat-safe shampoo",
                  "Gentle hand drying",
                  "Available for long haired cats",
                  "Available for short haired cats",
                  "Clean, fresh, and soft coat",
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

      {/* Why Groom Your Cat */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-5 w-5 text-pink" />
              <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-dark">
                Why Professional Cat Grooming?
              </h2>
            </div>
            <p className="text-warm-gray mb-8 leading-relaxed">
              While cats are excellent self-groomers, professional grooming
              provides benefits that go beyond what they can do on their own.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Reduces matting and tangles in long-haired breeds",
                "Significantly decreases shedding around your home",
                "Helps prevent hairballs",
                "Allows early detection of skin conditions",
                "Keeps nails at a comfortable, safe length",
                "Provides a thorough clean that self-grooming cannot match",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-cream rounded-xl p-4 border border-cream-dark"
                >
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-pink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
            Book Your Cat&apos;s Grooming Session
          </h2>
          <p className="mt-3 text-white/80">
            Call us today to schedule a grooming appointment for your feline
            friend.
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
