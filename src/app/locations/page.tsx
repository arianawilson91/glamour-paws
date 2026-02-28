import type { Metadata } from "next";
import { DAYS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locations & Hours | Glamour Paws",
  description:
    "Visit Glamour Paws in Cape Coral or Fort Myers. Find our addresses, hours of operation, phone numbers, and directions.",
};

const capeCoralHours: Record<string, string> = {
  Monday: "8:00 AM - 6:00 PM",
  Tuesday: "8:00 AM - 6:00 PM",
  Wednesday: "8:00 AM - 6:00 PM",
  Thursday: "8:00 AM - 6:00 PM",
  Friday: "8:00 AM - 6:00 PM",
  Saturday: "8:00 AM - 3:00 PM",
  Sunday: "Closed",
};

const fortMyersHours: Record<string, string> = {
  Monday: "6:00 AM - 6:00 PM",
  Tuesday: "6:00 AM - 6:00 PM",
  Wednesday: "6:00 AM - 6:00 PM",
  Thursday: "6:00 AM - 6:00 PM",
  Friday: "6:00 AM - 6:00 PM",
  Saturday: "8:00 AM - 4:00 PM",
  Sunday: "Closed",
};

export default function LocationsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-dark to-dark-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink mb-3">
            Find Us
          </p>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white">
            Locations &amp; Hours
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Two convenient locations serving Southwest Florida. Stop by or call to schedule your visit.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Cape Coral */}
            <div className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden">
              <div className="bg-gradient-to-r from-pink to-pink-light p-6">
                <h2 className="text-2xl font-bold text-white">Cape Coral</h2>
                <p className="text-sm text-white/80 mt-1">Primary Location</p>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink/10">
                        <svg className="h-5 w-5 text-pink" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Address</p>
                      <address className="not-italic text-sm text-warm-gray mt-1">
                        1715 Cape Coral Pkwy W, #17<br />
                        Cape Coral, FL 33914
                      </address>
                      <p className="text-xs text-warm-gray/70 mt-1">
                        In the Lobster Lady Plaza at Chiquita Blvd &amp; Cape Coral Pkwy W
                      </p>
                      <a
                        href="https://goo.gl/maps/a8GT3BunkBA2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-pink font-medium mt-2 hover:text-pink/80 transition-colors"
                      >
                        Get Directions
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink/10">
                        <svg className="h-5 w-5 text-pink" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Phone</p>
                      <a href="tel:2392259665" className="text-lg font-bold text-pink hover:text-pink/80 transition-colors">
                        (239) 225-9665
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink/10">
                        <svg className="h-5 w-5 text-pink" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-dark mb-3">Hours</p>
                      <div className="space-y-1.5">
                        {DAYS.map((day) => (
                          <div key={day} className="flex justify-between text-sm">
                            <span className={`${day === "Sunday" ? "text-warm-gray/60" : "text-charcoal"}`}>
                              {day}
                            </span>
                            <span className={`font-medium ${day === "Sunday" ? "text-warm-gray/60" : "text-dark"}`}>
                              {capeCoralHours[day]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fort Myers */}
            <div className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                <h2 className="text-2xl font-bold text-white">Fort Myers</h2>
                <p className="text-sm text-white/80 mt-1">Original Location &mdash; Est. 2014</p>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Address</p>
                      <address className="not-italic text-sm text-warm-gray mt-1">
                        6810 Shoppes at Plantation Dr, #10<br />
                        Fort Myers, FL 33912
                      </address>
                      <p className="text-xs text-warm-gray/70 mt-1">
                        Shoppes at Plantation Plaza on Daniels Pkwy
                      </p>
                      <a
                        href="https://goo.gl/maps/gX8MKNL2nybEU9tNA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-2 hover:text-primary-dark transition-colors"
                      >
                        Get Directions
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Phone</p>
                      <a href="tel:2392259663" className="text-lg font-bold text-primary hover:text-primary-dark transition-colors">
                        (239) 225-9663
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-dark mb-3">Hours</p>
                      <div className="space-y-1.5">
                        {DAYS.map((day) => (
                          <div key={day} className="flex justify-between text-sm">
                            <span className={`${day === "Sunday" ? "text-warm-gray/60" : "text-charcoal"}`}>
                              {day}
                            </span>
                            <span className={`font-medium ${day === "Sunday" ? "text-warm-gray/60" : "text-dark"}`}>
                              {fortMyersHours[day]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Facility */}
                  <div className="bg-cream rounded-xl p-4 mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">
                      Facility Features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["3,200 sq ft", "Fire alarm & sprinkler", "24hr security", "Video surveillance"].map(
                        (feature) => (
                          <span
                            key={feature}
                            className="text-xs font-medium bg-white text-dark px-3 py-1.5 rounded-full border border-cream-dark"
                          >
                            {feature}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-dark mb-4">
            Serving All of Lee County
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto mb-10">
            Conveniently located in Cape Coral and Fort Myers, we serve pet parents across Southwest Florida
            including Lehigh Acres, Bonita Springs, Estero, and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://goo.gl/maps/a8GT3BunkBA2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-cream rounded-xl px-6 py-5 border border-cream-dark hover:border-pink/30 hover:shadow-md transition-all group"
            >
              <svg className="h-6 w-6 text-pink" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <div className="text-left">
                <p className="font-semibold text-dark group-hover:text-pink transition-colors">
                  Cape Coral Map
                </p>
                <p className="text-xs text-warm-gray">Open in Google Maps</p>
              </div>
            </a>
            <a
              href="https://goo.gl/maps/gX8MKNL2nybEU9tNA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-cream rounded-xl px-6 py-5 border border-cream-dark hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <div className="text-left">
                <p className="font-semibold text-dark group-hover:text-primary transition-colors">
                  Fort Myers Map
                </p>
                <p className="text-xs text-warm-gray">Open in Google Maps</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dark to-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
            Questions? Give Us a Call!
          </h2>
          <p className="mt-3 text-white/80">
            Our friendly staff is ready to help you schedule an appointment or answer any questions.
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              Fort Myers: (239) 225-9663
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
