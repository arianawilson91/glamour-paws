import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { LOCATIONS, SOCIAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo-alt.png" alt="Glamour Paws" className="h-10 w-auto" />
              <span className="text-xl font-bold">Glamour Paws</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Premium pet grooming, daycare &amp; boarding in Southwest Florida.
              Where your fur babies are treated like family.
            </p>
            <div className="flex gap-4 mt-6">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lavender mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Daycare", href: "/daycare" },
                { label: "Thunder Care", href: "/thunder-care" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cape Coral */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lavender mb-4">
              Cape Coral
            </h3>
            <address className="not-italic text-sm text-white/70 space-y-2">
              <p>{LOCATIONS.capeCoral.address}</p>
              <p>{LOCATIONS.capeCoral.city}</p>
              <p className="pt-1">
                <a href={LOCATIONS.capeCoral.phoneHref} className="hover:text-white transition-colors">
                  {LOCATIONS.capeCoral.phone}
                </a>
              </p>
              <p className="text-xs text-white/50">Mon-Fri 8am-6pm | Sat 8am-3pm</p>
            </address>
          </div>

          {/* Fort Myers */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lavender mb-4">
              Fort Myers
            </h3>
            <address className="not-italic text-sm text-white/70 space-y-2">
              <p>{LOCATIONS.fortMyers.address}</p>
              <p>{LOCATIONS.fortMyers.city}</p>
              <p className="pt-1">
                <a href={LOCATIONS.fortMyers.phoneHref} className="hover:text-white transition-colors">
                  {LOCATIONS.fortMyers.phone}
                </a>
              </p>
              <p className="text-xs text-white/50">Mon-Fri 6am-6pm | Sat 8am-4pm</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Glamour Paws of Florida, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
