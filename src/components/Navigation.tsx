"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
              GP
            </div>
            <div>
              <span className="font-[var(--font-display)] text-xl font-bold text-dark">
                Glamour Paws
              </span>
              <p className="text-xs text-warm-gray -mt-0.5">
                Paws down ~ the best in town!
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-charcoal hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-charcoal hover:text-primary transition-colors">
              About
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-primary transition-colors">
                Services
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-cream-dark py-2">
                  <Link href="/services" className="block px-4 py-2 text-sm text-charcoal hover:bg-lavender-light hover:text-primary transition-colors">
                    All Services
                  </Link>
                  <Link href="/services/dog-grooming" className="block px-4 py-2 text-sm text-charcoal hover:bg-lavender-light hover:text-primary transition-colors">
                    Dog Grooming
                  </Link>
                  <Link href="/services/cat-grooming" className="block px-4 py-2 text-sm text-charcoal hover:bg-lavender-light hover:text-primary transition-colors">
                    Cat Grooming
                  </Link>
                  <Link href="/services/boarding" className="block px-4 py-2 text-sm text-charcoal hover:bg-lavender-light hover:text-primary transition-colors">
                    Boarding
                  </Link>
                </div>
              )}
            </div>

            <Link href="/daycare" className="text-sm font-medium text-charcoal hover:text-primary transition-colors">
              Daycare
            </Link>
            <Link href="/locations" className="text-sm font-medium text-charcoal hover:text-primary transition-colors">
              Locations
            </Link>
            <Link href="/contact" className="text-sm font-medium text-charcoal hover:text-primary transition-colors">
              Contact
            </Link>
            <a
              href="tel:2392259665"
              className="inline-flex items-center gap-2 rounded-full bg-pink px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-pink/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-cream-dark bg-white">
          <div className="flex flex-col px-4 py-4 gap-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-charcoal hover:bg-lavender-light rounded-lg">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-charcoal hover:bg-lavender-light rounded-lg">About</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-charcoal hover:bg-lavender-light rounded-lg">Services</Link>
            <Link href="/services/dog-grooming" onClick={() => setMobileOpen(false)} className="px-4 py-3 pl-8 text-sm text-warm-gray hover:bg-lavender-light rounded-lg">Dog Grooming</Link>
            <Link href="/services/cat-grooming" onClick={() => setMobileOpen(false)} className="px-4 py-3 pl-8 text-sm text-warm-gray hover:bg-lavender-light rounded-lg">Cat Grooming</Link>
            <Link href="/services/boarding" onClick={() => setMobileOpen(false)} className="px-4 py-3 pl-8 text-sm text-warm-gray hover:bg-lavender-light rounded-lg">Boarding</Link>
            <Link href="/daycare" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-charcoal hover:bg-lavender-light rounded-lg">Daycare</Link>
            <Link href="/locations" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-charcoal hover:bg-lavender-light rounded-lg">Locations</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-charcoal hover:bg-lavender-light rounded-lg">Contact</Link>
            <a
              href="tel:2392259665"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-pink px-6 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              (239) 225-9665
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
