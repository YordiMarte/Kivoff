"use client";
import React, { useEffect, useState } from "react";

// Componente Section reutilizable
export function Section({
  id,
  title,
  desc,
  children,
}: {
  id: string;
  title: string;
  desc: string;
  children: React.ReactNode;
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

// Componente de Input reutilizable
function Input({
  label,
  type = "text",
  placeholder,
  id,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-1">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 rounded-md bg-transparent border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
      />
    </div>
  );
}

// Componente del formulario de autenticación
function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Sign up:", { email, password, repeatPassword });
  };

  return (
    <div className="border border-white/10 rounded-xl p-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] flex justify-center">
      <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 w-full max-w-sm text-white">
        <h3 className="text-lg font-semibold mb-1">Sign up</h3>
        <p className="text-sm text-white/60 mb-6">Create a new account</p>
        
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Input
            label="Repeat Password"
            type="password"
            placeholder="Repeat Password"
            id="repeat-password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          
          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-white text-black font-medium py-2 rounded-md hover:bg-neutral-200 transition"
          >
            Sign up
          </button>
        </div>
        
        <p className="text-sm text-white/60 mt-6 text-center">
          Already have an account?{" "}
          <a href="#" className="text-white underline underline-offset-2">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

// Hook personalizado para el scroll activo
function useActiveSection() {
  const [current, setCurrent] = useState("auth");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let curr = "auth";
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          curr = section.id;
        }
      });
      
      setCurrent(curr);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return current;
}

// Función helper para navegación
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const offset = 96;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

// Componente principal
export default function DocsPage2({ active }: { active: string }) {
  const currentSection = useActiveSection();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <div className="text-white">
      <Section
        id="auth"
        title="Password-Based Authentication"
        desc="Create a new account using email and password with a clean UI block."
      >
        <AuthForm />
      </Section>
    </div>
  );
}