import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Glamour Paws",
  description:
    "Learn about Glamour Paws — a family-oriented, award-winning pet grooming, daycare & boarding business in Southwest Florida since 2014.",
};

const values = [
  {
    title: "Family First",
    description:
      "We treat every pet as an extension of your family. Our team builds genuine relationships with each pet and their owners.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Excellence in Care",
    description:
      "Our staff is trained in animal behavior, canine first aid, and CPR. We never cut corners on the quality of care.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Gentle Approach",
    description:
      "No cage dryers, no loud blowers. We use gentle techniques that keep pets calm and comfortable throughout their visit.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Community Driven",
    description:
      "We partner with Cape Coral Animal Shelter and Gulf Coast Humane Society, giving back to the community we love.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const reviewThemes = [
  "Groomers are talented and genuinely love animals",
  "Staff is friendly, kind, and reassuring",
  "Clean and spacious facility",
  "Dogs come home happy and tired from daycare",
  "Great with senior dogs — dedicated senior section",
  "Gentle handling for sensitive and anxious dogs",
  "Cage-free environment is a major selling point",
  "Good value for the quality of service",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-dark to-primary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink mb-3">
            Our Story
          </p>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white">
            About Glamour Paws
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            A boutique pet care experience in Southwest Florida where every pet is treated like family.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark mb-6">
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

            <div className="space-y-6">
              {/* Timeline */}
              <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-pink mb-3">
              What Drives Us
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{value.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews / Reputation */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-pink mb-3">
              What Pet Parents Say
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              Trusted by the Community
            </h2>
          </div>

          {/* Rating cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-cream-dark">
              <p className="text-4xl font-bold text-primary">4.8</p>
              <div className="flex justify-center gap-0.5 my-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-5 w-5 ${i < 5 ? "text-gold" : "text-cream-dark"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium text-dark">Nicelocal</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-cream-dark">
              <p className="text-4xl font-bold text-primary">3.9</p>
              <div className="flex justify-center gap-0.5 my-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-5 w-5 ${i < 4 ? "text-gold" : "text-cream-dark"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium text-dark">Yelp (19 reviews)</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-cream-dark">
              <div className="flex justify-center gap-1 mb-2">
                <svg className="h-8 w-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-lg font-bold text-dark mb-1">Neighborhood Favorite</p>
              <p className="text-sm text-warm-gray">Nextdoor 2022 &amp; 2023</p>
            </div>
          </div>

          {/* Review themes */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-cream-dark">
            <h3 className="text-lg font-bold text-dark mb-6 text-center">
              What Customers Love About Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reviewThemes.map((theme) => (
                <div key={theme} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal">{theme}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Review links */}
          <div className="mt-8 text-center">
            <p className="text-sm text-warm-gray mb-4">Read our reviews on:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Yelp", url: "https://www.yelp.com/biz/glamour-paws-cape-coral-cape-coral" },
                { name: "Nextdoor", url: "https://nextdoor.com/pages/glamour-paws-cape-coral-cape-coral-fl/" },
                { name: "Facebook", url: "https://www.facebook.com/MyGlamourPaws" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-cream-dark text-sm font-medium text-dark hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  {platform.name}
                  <svg className="h-3.5 w-3.5 text-warm-gray" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-dark to-primary rounded-2xl p-8 sm:p-12 text-white text-center">
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-4">
              Giving Back to Our Community
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              Glamour Paws is proud to partner with the Cape Coral Animal Shelter and Gulf Coast
              Humane Society. During our grand opening events, proceeds from booked appointments
              went directly to local shelters. We believe in supporting the animals and community
              that make Southwest Florida so special.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/10 border-t border-primary/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-dark">
            Come See Why We Are the Neighborhood Favorite
          </h2>
          <p className="mt-3 text-warm-gray">
            Call today to schedule your pet&apos;s first visit. We cannot wait to meet them!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2392259665"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-pink px-8 py-4 text-base font-semibold text-white hover:bg-pink/90 transition-colors"
            >
              Cape Coral: (239) 225-9665
            </a>
            <a
              href="tel:2392259663"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Fort Myers: (239) 225-9663
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
