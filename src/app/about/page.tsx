import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Glamour Paws",
  description:
    "Learn about Glamour Paws — a family-oriented, award-winning pet grooming, daycare & boarding business in Southwest Florida since 2014.",
};

const teamMembers = [
  {
    name: "The Grooming Team",
    role: "Certified Pet Stylists",
    description:
      "Our groomers specialize in breed-specific cuts, creative styling, and gentle handling for anxious or senior pets.",
    image: "/images/fort-myers-grooming.jpg",
  },
  {
    name: "The Daycare Crew",
    role: "Canine Behavior Specialists",
    description:
      "Trained in animal behavior, first aid, and CPR — they keep your dogs safe, happy, and socialized all day long.",
    image: "/images/doggie-daycare.jpg",
  },
];

const testimonials = [
  {
    quote:
      "My golden retriever has never looked so good! The groomers truly know their craft. I would not trust anyone else with my fur baby.",
    name: "Jessica M.",
    detail: "Golden Retriever Owner",
  },
  {
    quote:
      "We use the daycare three days a week and our dog absolutely loves it. He gets so excited when we pull into the parking lot.",
    name: "Linda T.",
    detail: "Daycare Regular",
  },
  {
    quote:
      "The staff is incredibly friendly and genuinely loves animals. Every time we pick up our poodle, she smells amazing and is so happy.",
    name: "Carlos & Maria R.",
    detail: "Grooming Clients",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* =============================================================
          HERO - Full-width with emotional headline and CTA
      ============================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark via-primary-dark to-primary py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3ApIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold mb-6">
                <StarIcon className="h-4 w-4" />
                Neighborhood Favorite 2022 &amp; 2023
              </span>
              <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Where Every Pet{" "}
                <span className="text-lavender">Is Family</span>
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-xl leading-relaxed">
                Since 2014, Glamour Paws has been Southwest Florida&apos;s trusted
                destination for premium pet grooming, cage-free daycare, and
                overnight boarding. Two locations, one mission — happy, healthy pets.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:2392259665"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-pink px-7 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-pink/90 transition-all hover:shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  Book an Appointment
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/images/dog-grooming-bath.jpg"
                alt="Dog enjoying bath time at Glamour Paws"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-primary font-bold text-lg">10+</p>
                <p className="text-warm-gray text-xs">Years of Love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================
          OUR STORY + TIMELINE
      ============================================================= */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-pink mb-2">
                Our Story
              </p>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark mb-5">
                Committed to Excellence Since 2014
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Glamour Paws was founded with a simple mission: to provide the highest quality
                  pet grooming, daycare, and boarding services in Southwest Florida. What started
                  as a single location in Fort Myers has grown into two thriving facilities
                  serving pet parents across Lee County.
                </p>
                <p>
                  Our Cape Coral location opened in May 2019, bringing the same upscale,
                  boutique experience to the Cape Coral Parkway corridor. Both locations reflect
                  our commitment to 100% customer satisfaction through attention to detail,
                  professionalism, and genuine love for animals.
                </p>
                <p>
                  We act as an extended part of your family — your pets are our pets. That
                  means we never rush, never cut corners, and always put the comfort and safety
                  of your fur babies first.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-6">
              <div className="relative">
                <div className="absolute -left-[25px] top-0 h-4 w-4 rounded-full bg-primary" />
                <p className="text-sm font-semibold text-primary">2014</p>
                <p className="font-semibold text-dark mt-1">Fort Myers Location Opens</p>
                <p className="text-sm text-warm-gray mt-1">
                  Our original 3,200 sq ft facility in the Shoppes at Plantation Plaza.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-0 h-4 w-4 rounded-full bg-primary" />
                <p className="text-sm font-semibold text-primary">May 2019</p>
                <p className="font-semibold text-dark mt-1">Cape Coral Location Opens</p>
                <p className="text-sm text-warm-gray mt-1">
                  Expanded to the Lobster Lady Plaza on Cape Coral Parkway West.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-0 h-4 w-4 rounded-full bg-primary" />
                <p className="text-sm font-semibold text-primary">2022</p>
                <p className="font-semibold text-dark mt-1">Nextdoor Neighborhood Favorite</p>
                <p className="text-sm text-warm-gray mt-1">
                  Voted favorite in Southwest Cape and Surfside neighborhoods.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-0 h-4 w-4 rounded-full bg-primary" />
                <p className="text-sm font-semibold text-primary">2023</p>
                <p className="font-semibold text-dark mt-1">Back-to-Back Winner</p>
                <p className="text-sm text-warm-gray mt-1">
                  Earned Nextdoor Neighborhood Favorite for the second consecutive year.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-0 h-4 w-4 rounded-full bg-gold" />
                <p className="text-sm font-semibold text-gold">2025</p>
                <p className="font-semibold text-dark mt-1">Continuing to Grow</p>
                <p className="text-sm text-warm-gray mt-1">
                  Over a decade of trusted pet care with thousands of happy clients across Lee County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================
          MEET THE TEAM - photos with bios
      ============================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-pink mb-2">
              The People Behind the Paws
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              Meet Our Team
            </h2>
            <p className="mt-3 text-warm-gray leading-relaxed">
              Every team member is trained in animal behavior, canine first aid, and CPR.
              Your pets are in expert, caring hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-cream rounded-2xl overflow-hidden border border-cream-dark">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-warm-gray leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Values row - concise, below team */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Hand Blow Dry Only", sublabel: "No cage dryers ever" },
              { label: "100% Cage-Free", sublabel: "Supervised play groups" },
              { label: "Certified & Trained", sublabel: "First aid & CPR" },
              { label: "Senior Specialists", sublabel: "Gentle, patient care" },
            ].map((v) => (
              <div key={v.label} className="text-center bg-primary/5 rounded-xl p-4">
                <p className="text-sm font-bold text-dark">{v.label}</p>
                <p className="text-xs text-warm-gray mt-1">{v.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================
          SOCIAL PROOF - Nextdoor award prominent + real quotes
      ============================================================= */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Nextdoor Award - HERO of this section */}
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-10 text-center text-white mb-10">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-7 w-7 text-gold" />
              ))}
            </div>
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-2">
              Nextdoor Neighborhood Favorite
            </h2>
            <p className="text-white/80 text-lg">
              2022 &amp; 2023 &mdash; Voted by real neighbors in Southwest Florida
            </p>
            <p className="mt-3 text-white/60 text-sm">
              The only pet groomer in Cape Coral to earn this award two years running.
            </p>
          </div>

          {/* Real testimonials */}
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-pink mb-2">
              Real Reviews
            </p>
            <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-dark">
              What Pet Parents Are Saying
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-gold" />
                  ))}
                </div>
                <p className="text-charcoal text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 pt-3 border-t border-cream-dark">
                  <p className="text-sm font-semibold text-dark">{t.name}</p>
                  <p className="text-xs text-warm-gray">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional rating + review links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-2.5 border border-cream-dark">
              <span className="text-lg font-bold text-primary">4.8</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-gold" />
                ))}
              </div>
              <span className="text-sm text-warm-gray">Nicelocal</span>
            </div>
            <div className="flex gap-3">
              {[
                { name: "Yelp", url: "https://www.yelp.com/biz/glamour-paws-cape-coral-cape-coral" },
                { name: "Facebook", url: "https://www.facebook.com/MyGlamourPaws" },
                { name: "Nextdoor", url: "https://nextdoor.com/pages/glamour-paws-cape-coral-cape-coral-fl/" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-cream-dark text-xs font-medium text-dark hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  {platform.name}
                  <svg className="h-3 w-3 text-warm-gray" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================
          COMMUNITY - Updated with ongoing involvement
      ============================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-pink mb-2">
                Giving Back
              </p>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark mb-4">
                Part of the Community
              </h2>
              <div className="space-y-3 text-warm-gray leading-relaxed">
                <p>
                  Glamour Paws is proud to partner with the Cape Coral Animal Shelter
                  and Gulf Coast Humane Society. We regularly donate grooming services
                  for shelter animals to help them find forever homes faster.
                </p>
                <p>
                  Whether it&apos;s sponsoring local pet adoption events, providing
                  free nail trims at community gatherings, or supporting pet rescue
                  organizations across Lee County — giving back is at the heart of
                  who we are.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-medium">
                  Cape Coral Animal Shelter
                </span>
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-medium">
                  Gulf Coast Humane Society
                </span>
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-medium">
                  Local Adoption Events
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/doggie-daycare.jpg"
                alt="Happy dogs at Glamour Paws daycare"
                width={500}
                height={350}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================
          CTA - Styled card with buttons + Book Online
      ============================================================= */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pink via-pink to-primary rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-3">
              Come See Why We&apos;re the Neighborhood Favorite
            </h2>
            <p className="text-white/90 max-w-lg mx-auto mb-8">
              Schedule your pet&apos;s first visit today. Call either location or book online — we can&apos;t wait to meet your fur baby!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <a
                href="tel:2392259665"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-pink hover:bg-cream transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Cape Coral: (239) 225-9665
              </a>
              <a
                href="tel:2392259663"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Fort Myers: (239) 225-9663
              </a>
            </div>
            <a
              href="https://booking.moego.pet/ol/GlamourPawsDogGrooming/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              Or book online
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
