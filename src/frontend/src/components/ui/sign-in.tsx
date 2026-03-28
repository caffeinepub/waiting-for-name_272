import { Eye, EyeOff, Sparkles } from "lucide-react";
import type React from "react";
import { useState } from "react";

// --- GOOGLE ICON ---

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 48 48"
    aria-label="Google"
    role="img"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z"
    />
  </svg>
);

// --- TYPE DEFINITIONS ---

export interface Testimonial {
  avatarSrc: string;
  name: string;
  handle: string;
  text: string;
}

interface SignInPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  heroImageSrc?: string;
  testimonials?: Testimonial[];
  onSignIn?: (event: React.FormEvent<HTMLFormElement>) => void;
  onGoogleSignIn?: () => void;
  onResetPassword?: () => void;
  onCreateAccount?: () => void;
}

// --- TESTIMONIAL CARD ---

const TestimonialCard = ({
  testimonial,
  delay,
}: { testimonial: Testimonial; delay: string }) => (
  <div
    className={`animate-fade-in-up ${delay} flex items-start gap-3 rounded-2xl p-4 w-60`}
    style={{
      background: "rgba(0,0,0,0.45)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    <img
      src={testimonial.avatarSrc}
      className="h-9 w-9 object-cover rounded-xl flex-shrink-0"
      alt={testimonial.name}
    />
    <div className="text-xs leading-relaxed">
      <p className="font-semibold text-white text-sm">{testimonial.name}</p>
      <p className="text-white/40 text-xs mb-1">{testimonial.handle}</p>
      <p className="text-white/70 text-xs leading-relaxed line-clamp-3">
        {testimonial.text}
      </p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

export const SignInPage: React.FC<SignInPageProps> = ({
  title = "Welcome back",
  description = "Sign in to continue your journey",
  heroImageSrc,
  testimonials = [],
  onSignIn,
  onGoogleSignIn,
  onResetPassword,
  onCreateAccount,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden animate-cinematic"
      style={{ background: "#09090f" }}
    >
      {/* ── Background image layer ── */}
      {heroImageSrc && (
        <img
          src={heroImageSrc}
          alt="Hero background"
          className="animate-hero-zoom absolute inset-0 w-full h-full object-cover object-center"
          style={{ transformOrigin: "60% 50%" }}
        />
      )}

      {/* ── Overlay 1: left-to-right dark gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 25%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.12) 75%, rgba(0,0,0,0.04) 100%)",
        }}
      />

      {/* ── Overlay 2: radial vignette (dark edges) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* ── Overlay 3: bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
        }}
      />

      {/* ── Overlay 4: subtle right-side soft blur ── */}
      <div
        className="absolute inset-y-0 right-0 w-1/2"
        style={{
          backdropFilter: "blur(1.5px)",
          WebkitBackdropFilter: "blur(1.5px)",
        }}
      />

      {/* ── Ambient glow behind form ── */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Sign-in form panel ── */}
      <section
        className="absolute inset-y-0 left-0 flex items-center"
        style={{
          width: "min(480px, 90vw)",
          paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
          paddingRight: "clamp(1rem, 3vw, 2rem)",
        }}
      >
        <div className="w-full animate-slide-in-left">
          {/* Brand mark */}
          <div className="animate-element animate-delay-100 flex items-center gap-2 mb-8">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.22 288), oklch(0.45 0.2 288))",
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-white/80 font-semibold text-sm tracking-wide uppercase">
              StreamVault
            </span>
          </div>

          {/* Title */}
          <h1
            className="animate-element animate-delay-200 text-white font-bold tracking-tight leading-none mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {title}
          </h1>
          <p className="animate-element animate-delay-300 text-white/50 text-sm mb-8 leading-relaxed">
            {description}
          </p>

          {/* Form card */}
          <div
            className="rounded-3xl p-7"
            style={{
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 0 80px rgba(139,92,246,0.12), 0 32px 64px rgba(0,0,0,0.5)",
            }}
          >
            <form className="space-y-4" onSubmit={onSignIn}>
              {/* Email */}
              <div className="animate-element animate-delay-400">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  data-ocid="signin.input"
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border =
                      "1px solid rgba(139,92,246,0.6)";
                    e.currentTarget.style.background = "rgba(139,92,246,0.08)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border =
                      "1px solid rgba(255,255,255,0.1)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  }}
                />
              </div>

              {/* Password */}
              <div className="animate-element animate-delay-500">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    data-ocid="signin.input"
                    className="w-full rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder:text-white/25 focus:outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border =
                        "1px solid rgba(139,92,246,0.6)";
                      e.currentTarget.style.background =
                        "rgba(139,92,246,0.08)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border =
                        "1px solid rgba(255,255,255,0.1)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.06)";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-white/30 hover:text-white/70 transition-colors"
                    data-ocid="signin.toggle"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + forgot */}
              <div className="animate-element animate-delay-600 flex items-center justify-between text-xs">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="custom-checkbox"
                  />
                  <span className="text-white/60">Keep me signed in</span>
                </label>
                <button
                  type="button"
                  onClick={onResetPassword}
                  className="text-violet-400 hover:text-violet-300 transition-colors bg-transparent border-0 p-0 cursor-pointer"
                  data-ocid="signin.button"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                data-ocid="signin.submit_button"
                className="animate-element animate-delay-700 w-full rounded-xl py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.22 288) 0%, oklch(0.48 0.2 288) 100%)",
                  boxShadow: "0 4px 24px rgba(139,92,246,0.4)",
                }}
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="animate-element animate-delay-800 relative flex items-center my-5">
              <div
                className="flex-1"
                style={{ height: "1px", background: "rgba(255,255,255,0.08)" }}
              />
              <span className="px-3 text-xs text-white/30">
                or continue with
              </span>
              <div
                className="flex-1"
                style={{ height: "1px", background: "rgba(255,255,255,0.08)" }}
              />
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={onGoogleSignIn}
              data-ocid="signin.secondary_button"
              className="animate-element animate-delay-900 w-full flex items-center justify-center gap-3 rounded-xl py-3 text-sm text-white/80 hover:text-white transition-all hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </div>

          {/* Create account link */}
          <p className="animate-element animate-delay-1000 text-center text-xs text-white/35 mt-5">
            New here?{" "}
            <button
              type="button"
              onClick={onCreateAccount}
              data-ocid="signin.link"
              className="text-violet-400 hover:text-violet-300 transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              Create an account
            </button>
          </p>
        </div>
      </section>

      {/* ── Testimonial cards — bottom-right of image area ── */}
      {testimonials.length > 0 && (
        <div
          className="absolute bottom-8 right-6 flex flex-col gap-3 max-w-[260px]"
          data-ocid="testimonials.panel"
        >
          <TestimonialCard
            testimonial={testimonials[0]}
            delay="animate-delay-1000"
          />
          {testimonials[1] && (
            <div className="hidden lg:block">
              <TestimonialCard
                testimonial={testimonials[1]}
                delay="animate-delay-1200"
              />
            </div>
          )}
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="absolute bottom-4 left-0 right-0 flex justify-center">
        <p className="text-white/15 text-xs">
          © {new Date().getFullYear()} Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/40 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
};
