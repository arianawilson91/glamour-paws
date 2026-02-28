import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Heart,
  Users,
  Phone,
  Shield,
  Dog,
  Clock,
  CheckCircle2,
  Baby,
  Armchair,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Doggy Daycare | Glamour Paws",
  description:
    "Cage-free supervised doggy daycare in Cape Coral & Fort Myers. Play groups matched to personality, special puppy & senior programs. Full day $22 or 20-day package $340.",
};

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Cage-Free Supervised Play Groups",
    description:
      "Your dog enjoys a 100% cage-free environment with constant staff supervision throughout the day.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Personality-Matched Groups",
    description:
      "We carefully match dogs into play groups based on size, temperament, and energy level for safe, happy play.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Separation Anxiety Support",
    description:
      "Our handlers are specially trained to comfort dogs with separation anxiety, easing them gently into the daycare routine.",
  },
  {
    icon: <Dog className="h-6 w-6" />,
    title: "Individual Exercise Runs",
    description:
      "Every dog gets time on our oversized individual dog-runs for personal exercise and stimulation.",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Anytime to Check In",
    description:
      "We welcome owners to call at any time during the day to check on their pup. Your peace of mind matters.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Full-Day Schedule",
    description:
      "Drop off during morning hours and pick up by closing. Your dog will be engaged and happy all day long.",
  },
];

const puppyProgram = [
  "Socialization with other puppies and adult dogs",
  "Introduction to grooming tools and handling",
  "Desensitization to sounds, surfaces, and environments",
  "Basic obedience reinforcement throughout the day",
  "Supervised play in age-appropriate groups",
  "Regular potty break schedule",
];

const seniorFeatures = [
  "Dedicated, quieter section away from high-energy play",
  "Gentle handling and mobility assistance",
  "Comfortable rest areas with soft bedding",
  "Adjusted activity levels to match energy and health",
  "Extra attention and monitoring throughout the day",
  "Patient, caring staff experienced with senior dogs",
];

export default function DaycarePage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-lavender py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3ApIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-lavender-light mb-6">
            <Sun className="h-4 w-4" />
            Open Mon&ndash;Sat
          </div>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Doggy Daycare
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Cage-free, supervised play in a safe, fun environment. Your pup will come home happy,
            tired, and ready for cuddles.
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            <Image src="/images/doggie-daycare.jpg" alt="Dogs enjoying daycare at Glamour Paws" width={600} height={300} className="rounded-2xl shadow-lg" />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2392259665"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-pink px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-pink/90 transition-all hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Cape Coral: (239) 225-9665
            </a>
            <a
              href="tel:2392259663"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              <Phone className="h-5 w-5" />
              Fort Myers: (239) 225-9663
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Simple Pricing
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              Daycare Rates
            </h2>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Affordable all-day care with no hidden fees. Save even more with our package deal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Full Day */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark text-center">
              <p className="text-sm font-medium text-warm-gray mb-2">Full Day</p>
              <p className="text-5xl font-bold text-primary">$22</p>
              <p className="text-sm text-warm-gray mt-2">per day</p>
              <div className="mt-6 pt-6 border-t border-cream-dark">
                <p className="text-sm text-charcoal">
                  Drop off in the morning, pick up by closing. Full access to all play groups and activities.
                </p>
              </div>
            </div>

            {/* 20-Day Package */}
            <div className="bg-gradient-to-br from-primary/10 to-lavender-light/50 rounded-2xl p-8 shadow-sm border border-primary/20 text-center relative overflow-hidden">
              <div className="absolute top-3 right-3 text-xs font-semibold bg-pink text-white px-3 py-1 rounded-full">
                Best Value
              </div>
              <p className="text-sm font-medium text-warm-gray mb-2">20-Day Package</p>
              <p className="text-5xl font-bold text-primary">$340</p>
              <p className="text-sm text-warm-gray mt-2">$17/day &mdash; save $5/day</p>
              <div className="mt-6 pt-6 border-t border-primary/10">
                <p className="text-sm text-charcoal">
                  Pre-purchase 20 days and save $100 compared to the daily rate. No expiration on unused days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              What We Offer
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              A Day at Glamour Paws
            </h2>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Every day is packed with enrichment, socialization, and safe supervised fun.
            </p>
          </div>

          <div className="mb-12 max-w-3xl mx-auto">
            <Image src="/images/dog-daycare-2.jpg" alt="Dogs playing together in daycare at Glamour Paws" width={800} height={500} className="rounded-2xl shadow-md w-full h-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-cream rounded-2xl p-8 border border-cream-dark hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{feature.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puppy Program */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-soft px-4 py-1.5 text-sm text-pink font-medium mb-4">
                <Baby className="h-4 w-4" />
                Ages 3&ndash;6 Months
              </div>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark mb-4">
                Special Puppy Program
              </h2>
              <p className="text-warm-gray leading-relaxed mb-8">
                The critical socialization window for puppies is between 3 and 6 months. Our Puppy
                Program is designed to give your young dog the best possible foundation through
                structured socialization, gentle desensitization, and positive obedience reinforcement
                &mdash; all in a safe, supervised environment.
              </p>
              <div className="space-y-3">
                {puppyProgram.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pink flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-charcoal">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-soft to-lavender-light rounded-3xl p-10 text-center">
              <div className="mx-auto w-24 h-24 mb-6 opacity-30">
                <svg viewBox="0 0 200 200" fill="currentColor" className="text-pink">
                  <circle cx="80" cy="60" r="20" />
                  <circle cx="120" cy="50" r="18" />
                  <circle cx="55" cy="95" r="16" />
                  <circle cx="145" cy="85" r="16" />
                  <ellipse cx="100" cy="130" rx="35" ry="45" />
                </svg>
              </div>
              <h3 className="font-[var(--font-display)] text-2xl font-bold text-dark mb-3">
                Give Your Puppy the Best Start
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-6">
                Our structured puppy program builds confidence, social skills, and good manners
                through positive, fun experiences every single day.
              </p>
              <a
                href="tel:2392259665"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink px-6 py-3 text-sm font-semibold text-white hover:bg-pink/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Enroll Your Puppy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Dog Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-lavender-light font-medium mb-4">
                  <Armchair className="h-4 w-4" />
                  Dedicated Senior Section
                </div>
                <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
                  Senior Dog Accommodations
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Older dogs deserve special attention. Our dedicated senior section provides a calmer,
                  quieter space with extra comfort and individualized care tailored to your senior
                  dog&apos;s unique needs.
                </p>
                <a
                  href="tel:2392259665"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-cream transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Ask About Senior Care
                </a>
              </div>
              <div className="space-y-3">
                {seniorFeatures.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-lavender flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thunder Care Teaser */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-dark to-primary-dark rounded-2xl p-8 sm:p-12 text-white max-w-3xl mx-auto text-center">
            <Zap className="h-10 w-10 text-lavender mx-auto mb-4" />
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-3">
              Storm Anxiety? We&apos;ve Got Thunder Care
            </h2>
            <p className="text-white/80 max-w-xl mx-auto leading-relaxed mb-6">
              Our specialized Thunder Care program helps dogs with storm and noise phobias feel
              safe during thunderstorms and fireworks. Available as part of our daycare offering.
            </p>
            <Link
              href="/thunder-care"
              className="inline-flex items-center gap-2 rounded-full bg-lavender px-6 py-3 text-sm font-semibold text-dark hover:bg-lavender-light transition-colors"
            >
              Learn About Thunder Care
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-pink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
            Ready to Give Your Dog the Best Day Ever?
          </h2>
          <p className="mt-3 text-white/80">
            Call today to schedule a daycare visit or ask about our puppy and senior programs.
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
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
