'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
  ChevronDown,
  MapPin,
  Building2,
  Terminal,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const profileCardRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Smooth scrolling setup with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      // Hero Text Entrance
      gsap.fromTo(
        headlineRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Hero Profile Card Entrance
      if (profileCardRef.current) {
        gsap.fromTo(
          profileCardRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.4,
          }
        );
      }

      // ScrollReveal Animations for Sections
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, heroRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  const addToSections = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950 font-sans overflow-x-hidden">
      {/* Background Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="min-h-screen flex flex-col justify-center pt-24 pb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Content */}
            <div ref={headlineRef} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs tracking-wider uppercase font-mono backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                IT Engineer & Site Operations Executive
              </div>

              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-none">
                Mohammed <span className="text-cyan-400">Fahad</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
                Integrating modern web software engineering with commercial site operations. Experienced across full-stack development, IT infrastructure, and major project management.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-300 font-medium transition-all backdrop-blur-sm"
                >
                  View Works
                </a>
              </div>
            </div>

            {/* Profile Photo Spotlight */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                ref={profileCardRef}
                className="relative group w-72 sm:w-80 rounded-3xl p-3 bg-gradient-to-b from-cyan-500/20 via-slate-800/40 to-slate-900/80 border border-slate-800 shadow-2xl transition-all duration-500 hover:border-cyan-500/40"
              >
                <div className="relative w-full h-[380px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/profile.jpg"
                    alt="Mohammed Fahad"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="pt-4 pb-2 px-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" /> Site & Tech
                  </span>
                  <span>Hyderabad, IN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 self-center text-slate-500 animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          ref={addToSections}
          className="py-24 border-t border-slate-800/80"
        >
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-4 hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">IT Executive & Admin</h3>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-1">
                    <Building2 className="w-4 h-4" />
                    Trident Design & Contract
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800/80 text-slate-400 w-fit">
                  2025 – 2026
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Spearheaded company digital infrastructure deployment, website optimization, and IT management. Managed executive communications, administrative operations, and internal technology systems.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-4 hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">Site Supervisor</h3>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-1">
                    <MapPin className="w-4 h-4" />
                    Commercial, Hospitality & Civil Projects
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800/80 text-slate-400 w-fit">
                  3 Years Experience
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Supervised on-site construction and interior developments across multi-million dollar hospitality and commercial ventures. Ensured adherence to technical plans, safety compliance, structural timelines, and vendor orchestration.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          ref={addToSections}
          className="py-24 border-t border-slate-800/80"
        >
          <div className="flex items-center gap-3 mb-12">
            <FolderGit2 className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Key Projects & Operational Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold text-white">Encalm Privé Lounge</h3>
              <p className="text-xs text-cyan-400 font-mono">Rajiv Gandhi International Airport (RGIA)</p>
              <p className="text-sm text-slate-400">
                Site supervision and administrative management for high-end international airport lounge interior construction.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300">Hospitality</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300">RGIA</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold text-white">Gilini Avenue</h3>
              <p className="text-xs text-cyan-400 font-mono">Vagator, Goa</p>
              <p className="text-sm text-slate-400">
                On-site execution management for luxury coastal architectural and interior hospitality developments.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300">Coastal Architecture</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300">Execution</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold text-white">Marriott Hotel</h3>
              <p className="text-xs text-cyan-400 font-mono">Vashi, Mumbai</p>
              <p className="text-sm text-slate-400">
                Supervised structural civil work and fine interior completion for star-category commercial hotel space.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300">Commercial Hotel</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300">Civil & Interior</span>
              </div>
            </div>
          </div>
        </section>

        {/* TECH & SKILLS */}
        <section
          ref={addToSections}
          className="py-24 border-t border-slate-800/80"
        >
          <div className="flex items-center gap-3 mb-12">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Tech Stack & Operational Skills
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              'Next.js 16 (App Router)',
              'React.js',
              'Java',
              'LAMP Stack',
              'MERN Stack',
              'Tailwind CSS',
              'GSAP Animations',
              'Lenis Smooth Scroll',
              'IT Administration',
              'Site Supervision',
              'Git & GitHub',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* FOOTER & CONTACT */}
        <footer
          id="contact"
          ref={addToSections}
          className="py-24 border-t border-slate-800/80 text-center space-y-6"
        >
          <div className="inline-flex p-3 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 mb-2">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Connect</h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            Open for software development, IT management, and technical project execution roles.
          </p>

          <div className="flex justify-center items-center gap-6 pt-4">
            <a
              href="https://github.com/Coderrok"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>

          <p className="text-xs text-slate-600 pt-12">
            © {new Date().getFullYear()} Mohammed Fahad. Built with Next.js & GSAP.
          </p>
        </footer>
      </div>
    </main>
  );
}