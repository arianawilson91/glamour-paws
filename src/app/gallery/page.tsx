import type { Metadata } from "next";
import { Camera, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Glamour Paws",
  description:
    "See photos of our happy grooming clients, cozy facility, daycare playtime, and amazing before & after transformations at Glamour Paws.",
};

const galleryItems = [
  {
    label: "Happy grooming client",
    gradient: "from-lavender to-lavender-light",
    iconColor: "text-primary",
  },
  {
    label: "Our cozy facility",
    gradient: "from-primary/10 to-lavender-light",
    iconColor: "text-primary-dark",
  },
  {
    label: "Daycare playtime",
    gradient: "from-pink-light to-pink-soft",
    iconColor: "text-pink",
  },
  {
    label: "Before & after",
    gradient: "from-lavender-light to-cream-dark",
    iconColor: "text-primary",
  },
  {
    label: "Happy pups",
    gradient: "from-pink-soft to-lavender-light",
    iconColor: "text-pink",
  },
  {
    label: "Our team at work",
    gradient: "from-primary/10 to-cream-dark",
    iconColor: "text-primary-dark",
  },
  {
    label: "Puppy program fun",
    gradient: "from-lavender to-pink-light",
    iconColor: "text-primary",
  },
  {
    label: "Spa day pampering",
    gradient: "from-pink-light to-lavender",
    iconColor: "text-pink",
  },
  {
    label: "Senior dog love",
    gradient: "from-cream-dark to-lavender-light",
    iconColor: "text-primary-dark",
  },
  {
    label: "Cape Coral location",
    gradient: "from-primary/10 to-lavender",
    iconColor: "text-primary",
  },
  {
    label: "Fort Myers location",
    gradient: "from-lavender-light to-primary/10",
    iconColor: "text-primary-dark",
  },
  {
    label: "Tail-wagging results",
    gradient: "from-pink-soft to-pink-light",
    iconColor: "text-pink",
  },
];

function PawPrintIcon({ className }: { className?: string }) {
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

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-lavender py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3ApIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-lavender-light mb-6">
            <Camera className="h-4 w-4" />
            Photo Gallery
          </div>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Our Gallery
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            A peek inside Glamour Paws &mdash; happy pups, beautiful grooms, and our warm, welcoming facilities.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.label}
                className={`group relative aspect-square rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/50 overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer`}
              >
                {/* Paw print decoration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <PawPrintIcon className={`h-16 w-16 sm:h-20 sm:w-20 ${item.iconColor} opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>

                {/* Camera icon overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-sm">
                    <Camera className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3 sm:p-4">
                  <p className="text-xs sm:text-sm font-medium text-white drop-shadow-sm">
                    {item.label}
                  </p>
                </div>

                {/* Number badge */}
                <div className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/60 text-xs font-bold text-primary">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="mt-12 bg-white rounded-2xl p-8 sm:p-10 border border-cream-dark text-center max-w-2xl mx-auto">
            <Camera className="h-10 w-10 text-lavender mx-auto mb-4" />
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-dark mb-3">
              More Photos Coming Soon
            </h2>
            <p className="text-warm-gray leading-relaxed mb-6">
              We are currently updating our gallery with fresh photos of our happy clients, beautiful
              facility, and amazing transformations. In the meantime, feel free to reach out to see
              examples of our work or follow us on social media for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2392259665"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call for Photos: (239) 225-9665
              </a>
              <a
                href="https://www.facebook.com/MyGlamourPaws"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Follow Us on Facebook
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Showcase Placeholder */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Transformations
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              Before &amp; After
            </h2>
            <p className="mt-4 text-warm-gray leading-relaxed">
              See the Glamour Paws difference. Our groomers are artists who bring out the best in every pet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { before: "from-cream-dark to-lavender-light/50", after: "from-lavender to-primary/20", label: "Poodle Transformation" },
              { before: "from-cream-dark to-pink-soft/50", after: "from-pink-light to-pink-soft", label: "Shih Tzu Makeover" },
              { before: "from-cream-dark to-lavender-light/50", after: "from-primary/10 to-lavender-light", label: "Doodle Glow-Up" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl overflow-hidden border border-cream-dark">
                <div className="grid grid-cols-2">
                  <div className={`aspect-square bg-gradient-to-br ${item.before} flex items-center justify-center relative`}>
                    <PawPrintIcon className="h-12 w-12 text-warm-gray/20" />
                    <span className="absolute bottom-2 left-2 text-xs font-medium text-warm-gray bg-white/70 px-2 py-0.5 rounded-full">
                      Before
                    </span>
                  </div>
                  <div className={`aspect-square bg-gradient-to-br ${item.after} flex items-center justify-center relative`}>
                    <PawPrintIcon className="h-12 w-12 text-primary/20" />
                    <span className="absolute bottom-2 right-2 text-xs font-medium text-primary bg-white/70 px-2 py-0.5 rounded-full">
                      After
                    </span>
                  </div>
                </div>
                <div className="bg-white p-4 text-center">
                  <p className="text-sm font-semibold text-dark">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for real photos */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-pink rounded-2xl p-8 sm:p-12 text-white text-center">
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-3">
              Want to See More of Our Work?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto leading-relaxed mb-8">
              Contact us to see examples of specific breeds, styles, or transformations. We love
              showing off our talented groomers&apos; work!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </>
  );
}
