"use client";
import { Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-40 sm:pb-24">
      {/* Background effects */}
      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full 
            bg-cmpt_primary/10 border border-cmpt_primary/20 animate-fade-in"
          >
            <Zap className="w-4 h-4 text-cmpt_primary" />
            <span className="text-sm font-medium text-cmpt_primary">
              Lightning-fast deployment
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Deploy Cloud Servers Instantly
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl text-cmpt_muted-foreground max-w-5xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Scalable, secure, and blazing-fast cloud infrastructure. 
            Choose from our flexible plans and deploy in seconds with enterprise-grade reliability.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            {/* Primary Button */}
            <button
              className="inline-block px-7 py-3 bg-black/70 text-white font-medium rounded-full  shadow-[0_0_12px_rgba(192,192,192,0.6)] hover:shadow-[0_0_24px_rgba(192,192,192,1)] text-lg"
            >
              Get Started
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-cmpt_border/50 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-cmpt_foreground mb-1">99.99%</div>
              <div className="text-sm text-cmpt_muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-cmpt_foreground mb-1">50+</div>
              <div className="text-sm text-cmpt_muted-foreground">Global Locations</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-cmpt_foreground mb-1">&lt;30s</div>
              <div className="text-sm text-cmpt_muted-foreground">Deploy Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}