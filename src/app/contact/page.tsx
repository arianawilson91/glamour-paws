"use client";

import { useState, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const services = [
  "Dog Grooming",
  "Cat Grooming",
  "Daycare",
  "Boarding",
  "Dental Cleaning",
  "Thunder Care",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  petName: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    petName: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    const subject = encodeURIComponent(
      `Contact Form: ${formData.service} inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPet Name: ${formData.petName || "Not provided"}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:info@glamourpaws.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  function handleChange(
    field: keyof FormData,
    value: string
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-pink py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3ApIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-pink-light mb-6">
            <Mail className="h-4 w-4" />
            Get in Touch
          </div>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to book? Reach out and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-cream-dark">
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-dark mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-warm-gray mb-8">
                Fill out the form below and we will be in touch. For faster service, give us a call!
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-dark mb-2">
                    Message Ready to Send
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-6">
                    Your email client should have opened with your message. If it did not, please
                    call us directly or try again.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        petName: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-1.5">
                      Name <span className="text-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full rounded-xl border ${
                        errors.name ? "border-pink" : "border-cream-dark"
                      } bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-pink">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-1.5">
                      Email <span className="text-pink">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full rounded-xl border ${
                        errors.email ? "border-pink" : "border-cream-dark"
                      } bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-pink">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1.5">
                      Phone <span className="text-pink">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`w-full rounded-xl border ${
                        errors.phone ? "border-pink" : "border-cream-dark"
                      } bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
                      placeholder="(239) 555-0000"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-pink">{errors.phone}</p>
                    )}
                  </div>

                  {/* Pet Name */}
                  <div>
                    <label htmlFor="petName" className="block text-sm font-medium text-dark mb-1.5">
                      Pet Name
                    </label>
                    <input
                      type="text"
                      id="petName"
                      value={formData.petName}
                      onChange={(e) => handleChange("petName", e.target.value)}
                      className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Your pet's name"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark mb-1.5">
                      Service Interested In <span className="text-pink">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className={`w-full rounded-xl border ${
                        errors.service ? "border-pink" : "border-cream-dark"
                      } bg-cream px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-pink">{errors.service}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-1.5">
                      Message <span className="text-pink">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`w-full rounded-xl border ${
                        errors.message ? "border-pink" : "border-cream-dark"
                      } bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none`}
                      placeholder="Tell us about your pet and what you're looking for..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-pink">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-pink px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-pink/90 transition-colors focus:outline-none focus:ring-2 focus:ring-pink/30 focus:ring-offset-2"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right: Location Info */}
            <div className="space-y-8">
              {/* Cape Coral */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Cape Coral</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <address className="not-italic text-sm text-charcoal">
                        1715 Cape Coral Pkwy W, #17<br />
                        Cape Coral, FL 33914
                      </address>
                      <p className="text-xs text-warm-gray mt-1">In the Lobster Lady Plaza</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a
                      href="tel:2392259665"
                      className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      (239) 225-9665
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-charcoal">
                      <p>Mon&ndash;Fri: 8am &ndash; 6pm</p>
                      <p>Sat: 8am &ndash; 3pm</p>
                      <p className="text-warm-gray">Sun: Closed</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://goo.gl/maps/a8GT3BunkBA2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Get Directions on Google Maps
                </a>
              </div>

              {/* Fort Myers */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink/10">
                    <MapPin className="h-5 w-5 text-pink" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Fort Myers</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-pink flex-shrink-0 mt-1" />
                    <div>
                      <address className="not-italic text-sm text-charcoal">
                        6810 Shoppes at Plantation Dr, #10<br />
                        Fort Myers, FL 33912
                      </address>
                      <p className="text-xs text-warm-gray mt-1">Shoppes at Plantation Plaza</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-pink flex-shrink-0" />
                    <a
                      href="tel:2392259663"
                      className="text-sm font-semibold text-pink hover:text-pink/80 transition-colors"
                    >
                      (239) 225-9663
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-pink flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-charcoal">
                      <p>Mon&ndash;Fri: 6am &ndash; 6pm</p>
                      <p>Sat: 8am &ndash; 4pm</p>
                      <p className="text-warm-gray">Sun: Closed</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://goo.gl/maps/gX8MKNL2nybEU9tNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink/10 px-5 py-2.5 text-sm font-semibold text-pink hover:bg-pink/20 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Get Directions on Google Maps
                </a>
              </div>

              {/* Quick Call Card */}
              <div className="bg-gradient-to-r from-primary to-pink rounded-2xl p-8 text-white text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-white/80" />
                <h3 className="font-[var(--font-display)] text-xl font-bold mb-2">
                  Prefer to Call?
                </h3>
                <p className="text-sm text-white/80 mb-5">
                  Our friendly staff is ready to help you schedule an appointment or answer any questions.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:2392259665"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-cream transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Cape Coral: (239) 225-9665
                  </a>
                  <a
                    href="tel:2392259663"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    Fort Myers: (239) 225-9663
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-pink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
            We Cannot Wait to Meet Your Pet!
          </h2>
          <p className="mt-3 text-white/80">
            Whether you are looking for grooming, daycare, boarding, or just have a question &mdash;
            we are here to help. Reach out today!
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
