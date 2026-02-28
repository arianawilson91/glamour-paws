import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Shield,
  Phone,
  Heart,
  CheckCircle2,
  CloudLightning,
  Volume2,
  Users,
  BookOpen,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Thunder Care | Glamour Paws",
  description:
    "Specialized Thunder Care for dogs with storm and noise phobias. Safe, comfortable environment during thunderstorms and fireworks. Staff trained in anxiety management.",
};

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safe, Calming Environment",
    description:
      "A specially designed space that muffles outside noise and provides a secure, den-like atmosphere where anxious dogs can feel protected.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Trained Staff on Hand",
    description:
      "Every team member is trained in recognizing and managing storm anxiety symptoms, using calming techniques that actually work.",
  },
  {
    icon: <Volume2 className="h-6 w-6" />,
    title: "Noise Desensitization",
    description:
      "Gradual, positive exposure to sounds like thunder, fireworks, and other triggers to help reduce your dog's fear response over time.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Owner Guidance & Education",
    description:
      "We provide take-home desensitization tips and guidance so you can continue supporting your dog's progress between visits.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Part of Our Daycare Program",
    description:
      "Thunder Care integrates seamlessly with our regular daycare offering, so your dog also gets socialization and supervised play.",
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Comfort-First Approach",
    description:
      "Soft bedding, low lighting, soothing music, and one-on-one attention during severe weather events to keep your dog as calm as possible.",
  },
];

const signs = [
  "Excessive panting, drooling, or trembling during storms",
  "Hiding under furniture or in closets when it thunders",
  "Destructive behavior during fireworks or loud noises",
  "Pacing, whining, or barking at storm sounds",
  "Trying to escape or run away during severe weather",
  "Refusal to go outside when it looks like rain",
];

const tips = [
  {
    title: "Create a Safe Space at Home",
    description:
      "Set up a comfortable, enclosed area (like a crate covered with a blanket) where your dog can retreat during storms.",
  },
  {
    title: "Use Background Noise",
    description:
      "Play calming music or white noise to help mask the sound of thunder and fireworks.",
  },
  {
    title: "Stay Calm Yourself",
    description:
      "Dogs pick up on our emotions. Act normal and relaxed during storms to signal that there is nothing to fear.",
  },
  {
    title: "Try Gradual Exposure",
    description:
      "Play recordings of storm sounds at low volume while doing fun activities, gradually increasing over weeks.",
  },
];

export default function ThunderCarePage() {
  return (
    <>
      {/* Hero with Lightning Theme */}
      <section className="bg-gradient-to-br from-dark via-primary-dark to-primary py-20 sm:py-28 relative overflow-hidden">
        {/* Decorative lightning bolt shapes */}
        <div className="absolute top-10 right-10 opacity-5">
          <Zap className="h-64 w-64 text-white" strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-5">
          <CloudLightning className="h-48 w-48 text-white" strokeWidth={0.5} />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3ApIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-lavender/20 px-4 py-1.5 text-sm text-lavender mb-6">
            <Zap className="h-4 w-4" />
            Specialized Storm Anxiety Care
          </div>
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Thunder Care
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            A safe, comfortable haven for dogs who suffer from storm and noise phobias.
            Because no pup should have to weather the storm alone.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <Image src="/images/about-glamour-paws.jpg" alt="Happy dog at Glamour Paws" width={400} height={300} className="rounded-2xl shadow-lg" />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2392259665"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lavender px-8 py-4 text-base font-semibold text-dark shadow-lg hover:bg-lavender-light transition-all hover:shadow-xl"
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

      {/* What is Thunder Care */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                About the Program
              </p>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark mb-6">
                What is Thunder Care?
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Living in Southwest Florida means dealing with frequent thunderstorms, especially
                  during the summer months. For many dogs, the sound of thunder, lightning flashes,
                  and changes in barometric pressure can trigger intense anxiety and fear.
                </p>
                <p>
                  Thunder Care is our specialized daycare program designed specifically for dogs with
                  storm and noise phobias. Instead of leaving your anxious pup home alone during a
                  storm, bring them to Glamour Paws where our trained staff can provide comfort,
                  reassurance, and professional anxiety management.
                </p>
                <p>
                  The program also extends to fireworks season (July 4th, New Year&apos;s Eve) and any
                  other noise-related anxiety triggers. Thunder Care is available as part of our
                  regular daycare program at no additional charge.
                </p>
              </div>
            </div>

            {/* Visual card */}
            <div className="bg-gradient-to-br from-primary/5 to-lavender-light rounded-3xl p-10 text-center border border-primary/10">
              <div className="mx-auto mb-6">
                <div className="relative inline-block">
                  <CloudLightning className="h-20 w-20 text-primary/30" />
                  <Shield className="h-10 w-10 text-pink absolute -bottom-1 -right-1" />
                </div>
              </div>
              <h3 className="font-[var(--font-display)] text-2xl font-bold text-dark mb-3">
                Protection from the Storm
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">
                Our facility provides a buffered environment with sound dampening, calming
                music, and trained handlers ready to comfort your dog at the first rumble.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <CheckCircle2 className="h-4 w-4" />
                Included with daycare at no extra cost
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
              How We Help
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              Our Thunder Care Approach
            </h2>
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

      {/* Signs Your Dog Needs Thunder Care */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-dark to-primary-dark rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Zap className="h-8 w-8 text-lavender mb-4" />
                <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold mb-4">
                  Does Your Dog Need Thunder Care?
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Storm anxiety affects more dogs than you might think. Look for these common signs
                  that your pup could benefit from our Thunder Care program.
                </p>
              </div>
              <div className="space-y-3">
                {signs.map((sign) => (
                  <div key={sign} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-lavender flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/90">{sign}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Owners */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              For Pet Owners
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-dark">
              Desensitization Tips for Home
            </h2>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Thunder Care does not stop at our doors. Here are some tips to help your dog cope
              with noise anxiety at home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {tips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-cream rounded-2xl p-8 border border-cream-dark"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{tip.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link to Daycare */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Part of Our Daycare
          </p>
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-dark mb-4">
            Thunder Care is Included with Daycare
          </h2>
          <p className="text-warm-gray leading-relaxed mb-8">
            Thunder Care is not a separate service &mdash; it is a built-in benefit of our
            daycare program. When your dog attends daycare at Glamour Paws, they automatically
            have access to Thunder Care during storms at no additional cost.
          </p>
          <Link
            href="/daycare"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            View Daycare Details &amp; Pricing
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dark to-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-10 w-10 text-lavender mx-auto mb-4" />
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
            Do Not Let Your Dog Face the Storm Alone
          </h2>
          <p className="mt-3 text-white/80">
            Call today to learn more about Thunder Care and schedule a daycare visit for your anxious pup.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2392259665"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lavender px-8 py-4 text-base font-semibold text-dark hover:bg-lavender-light transition-colors"
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
