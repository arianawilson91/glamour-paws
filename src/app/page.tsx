"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Scissors,
  Sun,
  Moon,
  ShieldCheck,
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
  Award,
  Heart,
  Clock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "2", label: "Convenient Locations" },
  { value: "100%", label: "Cage-Free Daycare" },
  { value: "24/7", label: "Boarding Available" },
];

const services = [
  {
    title: "Full Grooming",
    description:
      "Bath, hand blow dry, nail trim, ear cleaning, and a haircut styled to perfection. All breeds welcome.",
    icon: Scissors,
    href: "/services",
  },
  {
    title: "Doggy Daycare",
    description:
      "Cage-free supervised play groups matched to your dog's personality. Special puppy and senior programs.",
    icon: Sun,
    href: "/daycare",
  },
  {
    title: "Overnight Boarding",
    description:
      "24/7 care, 365 days a year. Your pet joins daytime play groups and rests in secure, comfortable kennels.",
    icon: Moon,
    href: "/services/boarding",
  },
  {
    title: "Dental Cleaning",
    description:
      "Non-anesthetic dental cleaning by a certified canine dental hygienist. Safe, thorough, and stress-free.",
    icon: ShieldCheck,
    href: "/services",
  },
];

const benefits = [
  {
    title: "Hand Blow Dry Only",
    desc: "No cage dryers or loud torpedo blowers. We use gentle hand drying for a stress-free experience.",
  },
  {
    title: "Cage-Free Environment",
    desc: "Our daycare is 100% cage-free. Dogs play in supervised groups matched to their personality.",
  },
  {
    title: "Trained & Certified Staff",
    desc: "Every team member is trained in animal behavior, canine first aid, and CPR.",
  },
  {
    title: "Senior Dog Specialists",
    desc: "Dedicated senior section with mobility assistance and gentle, patient handling.",
  },
];

const testimonials = [
  {
    name: "Jessica M.",
    quote:
      "My golden retriever has never looked so good! The groomers at Glamour Paws truly know their craft. I would not trust anyone else with my fur baby.",
    stars: 5,
  },
  {
    name: "Carlos & Maria R.",
    quote:
      "The staff is incredibly friendly and genuinely loves animals. Every time we pick up our poodle, she smells amazing and is so happy. Five stars all around!",
    stars: 5,
  },
  {
    name: "Linda T.",
    quote:
      "We use the daycare three days a week and our dog absolutely loves it. He gets so excited when we pull into the parking lot. The cage-free environment makes all the difference.",
    stars: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Decorative Paw SVG                                                 */
/* ------------------------------------------------------------------ */

function PawPrint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" className={className}>
      <circle cx="80" cy="60" r="20" />
      <circle cx="120" cy="50" r="18" />
      <circle cx="55" cy="95" r="16" />
      <circle cx="145" cy="85" r="16" />
      <ellipse cx="100" cy="130" rx="35" ry="45" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Star Rating                                                        */
/* ------------------------------------------------------------------ */

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* =============================================================
          HERO
      ============================================================= */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative overflow-hidden bg-gradient-to-br from-dark via-primary-dark to-primary min-h-[90vh] flex items-center"
      >
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3ApIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div variants={fadeInUp} custom={0}>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-8">
                  <Award className="h-4 w-4" />
                  Neighborhood Favorite 2022 &amp; 2023
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="font-[var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Fort Myers &amp; Cape Coral&rsquo;s Most Trusted{" "}
                <span className="text-lavender">Pet Groomer</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed"
              >
                Where every pet gets the royal treatment. Premium grooming,
                cage-free daycare, and overnight boarding in Southwest Florida.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeInUp}
                custom={3}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="tel:2392259665"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-pink px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-pink/90 transition-all hover:shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  Book an Appointment
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
                >
                  View Our Services
                </Link>
              </motion.div>

              {/* Phone number */}
              <motion.p
                variants={fadeInUp}
                custom={4}
                className="mt-6 flex items-center gap-2 text-white/60 text-sm"
              >
                <Phone className="h-4 w-4" />
                Call now: (239) 225-9665
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} custom={3} className="hidden lg:block">
              <div className="relative">
                <Image src="/images/dog-grooming-shop.jpg" alt="Glamour Paws grooming facility" width={600} height={450} className="rounded-3xl shadow-2xl" />
                <div className="absolute -bottom-4 -left-4 bg-pink rounded-2xl px-6 py-3 shadow-lg">
                  <p className="text-white font-semibold text-sm">Since 2014</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative paw */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.04]">
          <PawPrint />
        </div>
      </motion.section>

      {/* =============================================================
          STATS BAR
      ============================================================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="bg-white border-b border-cream-dark"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream-dark">
            {stats.map((item) => (
              <div key={item.label} className="py-8 sm:py-10 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-warm-gray">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =============================================================
          SERVICES GRID
      ============================================================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-20 sm:py-28 bg-cream"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              What We Offer
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              Our Premium Services
            </h2>
            <p className="mt-4 text-warm-gray leading-relaxed">
              From head-to-tail grooming to all-day play, we provide everything
              your pet needs to look and feel their absolute best.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={fadeInUp} custom={i}>
                  <Link
                    href={service.href}
                    className="group block bg-white rounded-2xl p-8 shadow-sm border border-cream-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Services &amp; Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* =============================================================
          WHY CHOOSE US
      ============================================================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-20 sm:py-28 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - benefits */}
            <motion.div variants={fadeInUp}>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Why Choose Us
              </p>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
                The Glamour Paws Difference
              </h2>
              <p className="mt-4 text-warm-gray leading-relaxed">
                We are not just another grooming shop. We are a boutique pet
                care experience where every detail matters and every pet is
                treated like family.
              </p>

              <div className="mt-10 space-y-6">
                {benefits.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">{item.title}</h3>
                      <p className="text-sm text-warm-gray mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right column - photo with quote overlay */}
            <motion.div variants={fadeInUp} custom={2} className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <Image src="/images/doggie-daycare.jpg" alt="Happy dogs at Glamour Paws daycare" width={600} height={400} className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-8">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="font-[var(--font-display)] text-xl text-white italic">
                    &ldquo;Paws down ~ the best in town!&rdquo;
                  </blockquote>
                  <p className="mt-2 text-sm text-white/70">Voted Nextdoor Neighborhood Favorite</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =============================================================
          TESTIMONIALS
      ============================================================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-20 sm:py-28 bg-lavender-light"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Testimonials
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              What Pet Parents Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                custom={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-lavender/30"
              >
                <Stars count={t.stars} />
                <p className="mt-4 text-warm-gray leading-relaxed text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 font-semibold text-dark text-sm">
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =============================================================
          BOOKING CTA
      ============================================================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-20 bg-pink"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-white">
            Ready to Pamper Your Pet?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Call today to schedule a grooming appointment, daycare visit, or
            boarding stay. Walk-ins may be available!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2392259665"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-pink shadow-lg hover:bg-cream transition-all"
            >
              <Phone className="h-5 w-5" />
              Cape Coral: (239) 225-9665
            </a>
            <a
              href="tel:2392259663"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              <Phone className="h-5 w-5" />
              Fort Myers: (239) 225-9663
            </a>
          </div>
        </div>
      </motion.section>

      {/* =============================================================
          LOCATIONS PREVIEW
      ============================================================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-20 sm:py-28 bg-cream"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Visit Us
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              Two Convenient Locations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cape Coral */}
            <motion.div
              variants={fadeInUp}
              custom={0}
              className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden"
            >
              <Image src="/images/cape-coral-location.jpg" alt="Glamour Paws Cape Coral" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Cape Coral</h3>
                </div>
                <address className="not-italic text-warm-gray space-y-2 text-sm">
                  <p>1715 Cape Coral Pkwy W, #17</p>
                  <p>Cape Coral, FL 33914</p>
                  <p className="text-xs text-warm-gray/70">
                    In the Lobster Lady Plaza
                  </p>
                </address>
                <div className="mt-4 pt-4 border-t border-cream-dark">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-dark">Hours</p>
                  </div>
                  <p className="text-sm text-warm-gray">Mon-Fri: 8am - 6pm</p>
                  <p className="text-sm text-warm-gray">
                    Sat: 8am - 3pm | Sun: Closed
                  </p>
                </div>
                <a
                  href="tel:2392259665"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (239) 225-9665
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Fort Myers */}
            <motion.div
              variants={fadeInUp}
              custom={1}
              className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden"
            >
              <Image src="/images/fort-myers-location.jpg" alt="Glamour Paws Fort Myers" width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Fort Myers</h3>
                </div>
                <address className="not-italic text-warm-gray space-y-2 text-sm">
                  <p>6810 Shoppes at Plantation Dr, #10</p>
                  <p>Fort Myers, FL 33912</p>
                  <p className="text-xs text-warm-gray/70">
                    Shoppes at Plantation Plaza
                  </p>
                </address>
                <div className="mt-4 pt-4 border-t border-cream-dark">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium text-dark">Hours</p>
                  </div>
                  <p className="text-sm text-warm-gray">Mon-Fri: 6am - 6pm</p>
                  <p className="text-sm text-warm-gray">
                    Sat: 8am - 4pm | Sun: Closed
                  </p>
                </div>
                <a
                  href="tel:2392259663"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (239) 225-9663
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Get Directions &amp; Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
