import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Glamour Paws",
  description:
    "See photos of our happy grooming clients, cozy facility, daycare playtime, and amazing before & after transformations at Glamour Paws.",
};

const galleryPhotos = [
  { src: "/images/dog-grooming-shop.jpg", alt: "Our beautiful Fort Myers facility", caption: "Fort Myers Reception" },
  { src: "/images/fort-myers-location.jpg", alt: "Glamour Paws Fort Myers storefront", caption: "Fort Myers Storefront" },
  { src: "/images/cape-coral-location.jpg", alt: "Glamour Paws Cape Coral", caption: "Cape Coral Location" },
  { src: "/images/doggie-daycare.jpg", alt: "Happy dogs in daycare", caption: "Daycare Fun" },
  { src: "/images/dog-grooming-bath.jpg", alt: "Dog bath time", caption: "Bath Time" },
  { src: "/images/fort-myers-grooming.jpg", alt: "Beautifully groomed Shelties", caption: "Groomed & Gorgeous" },
  { src: "/images/dog-daycare-2.jpg", alt: "Dogs playing in daycare", caption: "Daycare Play Group" },
  { src: "/images/cat-grooming.png", alt: "Cat grooming clients", caption: "Our Feline Friends" },
  { src: "/images/cat-photo.jpg", alt: "Creative cat lion cut", caption: "Feline Lion Cut" },
  { src: "/images/about-glamour-paws.jpg", alt: "Styled pup with hat", caption: "Looking Fancy" },
  { src: "/images/services-overview.jpg", alt: "Holiday fun at Glamour Paws", caption: "Holiday Spirit" },
  { src: "/images/dog-daycare-1.jpeg", alt: "Dogs relaxing", caption: "Relaxation Time" },
];

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

      {/* Photo Gallery Grid */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.caption}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm sm:text-base font-semibold text-white drop-shadow-md">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Follow us on social media */}
          <div className="mt-12 bg-white rounded-2xl p-8 sm:p-10 border border-cream-dark text-center max-w-2xl mx-auto">
            <Camera className="h-10 w-10 text-lavender mx-auto mb-4" />
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-dark mb-3">
              Follow Us for More Photos
            </h2>
            <p className="text-warm-gray leading-relaxed mb-6">
              We share new photos of our happy clients, adorable transformations, and daily daycare fun
              on social media. Follow us to see even more of what we do at Glamour Paws!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/MyGlamourPaws"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
              <a
                href="https://www.instagram.com/glamourpawssalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Dental Showcase */}
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

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-cream-dark shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src="/images/grooming-detail-1.png"
                    alt="Dog teeth before dental cleaning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/50 px-3 py-1 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/images/dental-after.jpg"
                    alt="Clean dog teeth after dental cleaning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-primary/70 px-3 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>
              <div className="bg-white p-5 text-center">
                <p className="text-base font-semibold text-dark">Dental Cleaning Transformation</p>
                <p className="text-sm text-warm-gray mt-1">Professional dental care makes all the difference</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
