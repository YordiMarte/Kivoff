"use client";
import { useEffect, useState } from "react";
// Section Component
function Section({ id, title, desc, children }:
  {
    id: string
    title: string
    desc: string
    children: React.ReactNode
  }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-white/60">{desc}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

// Sign Up Form Component
function SignUpForm() {
  const [email, setEmail] = useState("yordymartegacia@gmail.com");
  const [password, setPassword] = useState("password123");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-black border border-white/10 rounded-xl p-8 max-w-md">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Sign up</h3>
          <p className="text-white/60 text-sm">Create a new account</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Repeat Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-full bg-black border border-white/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Repeat Password"
            />
          </div>
        </div>

        <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-white/90 transition">
          Sign up
        </button>

        <p className="text-center text-white/60 text-sm">
          Already have an account?{" "}
          <a href="#" className="text-white hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

// Main DocsPage Component
export default function DocsPage2() {
  const [active, setActive] = useState("auth");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "auth";
      
      // Find which section is currently in view
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if section is in the viewport (with offset for header)
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
      
      setActive(current);
    };

    // Call once on mount to set initial state
    handleScroll();
    
    // Throttle scroll events for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const sections = [
    {
      id: "auth",
      title: "Password-Based Authentication",
      desc: "Create a new account using email and password with a clean, modern UI block.",
    },
    {
      id: "components",
      title: "UI Components",
      desc: "Reusable components for building your application interface.",
    },
    {
      id: "hooks",
      title: "React Hooks",
      desc: "Custom hooks for common functionality and state management.",
    },
    {
      id: "api",
      title: "API Reference",
      desc: "Complete API documentation for all available endpoints.",
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="relative flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-24 h-fit w-52 text-sm">
            <div className="border-l border-white/10 pl-4">
              <ul className="space-y-3">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => handleNavClick(e, sec.id)}
                      className={`block transition-colors ${
                        active === sec.id
                          ? "text-white font-semibold border-l-2 border-blue-500 -ml-[17px] pl-[15px]"
                          : "text-white/60 hover:text-white/80"
                      }`}
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-32 pb-32">
            <Section
              id="auth"
              title="Password-Based Authentication"
              desc="Create a new account using email and password with a clean, modern UI block."
            >
              <SignUpForm />
            </Section>

            <Section
              id="components"
              title="UI Components"
              desc="Reusable components for building your application interface."
            >
              <div className="bg-black/50 border border-white/10 rounded-xl p-8">
                <p className="text-white/80">
                  Component library documentation goes here...
                </p>
              </div>
            </Section>

            <Section
              id="hooks"
              title="React Hooks"
              desc="Custom hooks for common functionality and state management."
            >
              <div className="bg-black/50 border border-white/10 rounded-xl p-8">
                <p className="text-white/80">
                  Hooks documentation goes here...
                </p>
              </div>
            </Section>

            <Section
              id="api"
              title="API Reference"
              desc="Complete API documentation for all available endpoints."
            >
              <div className="bg-black/50 border border-white/10 rounded-xl p-8">
                <p className="text-white/80">
                  API reference documentation goes here...
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}