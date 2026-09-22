'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
  ExternalLink,
  ChevronDown,
  MapPin,
  Building2,
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

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);

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

    // Hero GSAP Entrance Animation
    const ctx = gsap.context(() => {
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
    }, heroRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Background Subtle Gradient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="min-h-screen flex flex-col justify-center items-start pt-20 pb-12"
        >
          <div ref={headlineRef} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs tracking-wider uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              IT Engineer & Site Supervisor
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-none">
              Mohammed <span className="text-cyan-400">Fahad</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
              Bridging modern digital infrastructure with large-scale site operations. Experiencing tech leadership, site execution, and technical administration.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-300 font-medium transition-all"
              >
                View Works
              </a>
            </div>
          </div>

          <div className="mt-20 self-center text-slate-500 animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 border-t border-slate-800/80">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm space-y-4 hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">IT Executive & Admin</h3>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-1">
                    <Building2 className="w-4 h-4" />
                    Trident Design & Contract
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-400 w-fit">
                  2025 – 2026
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Managed digital infrastructure, website optimization, and administrative workflow integrations. Handled IT operational overhead and executive communications.
              </p>
            </div>

            {/* Experience Item 2 */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm space-y-4 hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">Site Supervisor</h3>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-1">
                    <MapPin className="w-4 h-4" />
                    Commercial & Hospitality Projects
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-400 w-fit">
                  3 Years Experience
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Supervised site operations across major projects including the Encalm Privé International Lounge (RGIA Airport), Gilini Avenue (Vagator, Goa), and Marriott Hotel (Vashi, Mumbai). Managed on-site teams, compliance, and multi-disciplinary timelines.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="py-24 border-t border-slate-800/80">
          <div className="flex items-center gap-3 mb-12">
            <FolderGit2 className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Key Projects & Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3 hover:border-cyan-500/40 transition-all">
              <h3 className="text-lg font-bold text-white">Encalm Privé Lounge</h3>
              <p className="text-sm text-slate-400">
                Rajiv Gandhi International Airport (RGIA). Premium lounge construction & interior administrative supervisor.
              </p>
              <div className="flex gap-2 pt-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300">Hospitality</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300">Site Management</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3 hover:border-cyan-500/40 transition-all">
              <h3 className="text-lg font-bold text-white">Gilini Avenue</h3>
              <p className="text-sm text-slate-400">
                Vagator, Goa. Site management for coastal luxury hospitality architectural works.
              </p>
              <div className="flex gap-2 pt-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300">Coastal Architecture</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300">Execution</span>
              </div>
            </div>
          </div>
        </section>

        {/* TECH & SKILLS */}
        <section className="py-24 border-t border-slate-800/80">
          <div className="flex items-center gap-3 mb-12">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Core Technical Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              'Next.js (App Router)',
              'React.js',
              'Java',
              'Tailwind CSS',
              'GSAP Animations',
              'Lenis Smooth Scroll',
              'IT Administration',
              'Site Supervision',
              'Web Development',
              'Git / GitHub',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:border-slate-700 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* FOOTER & CONTACT */}
        <footer id="contact" className="py-24 border-t border-slate-800/80 text-center space-y-6">
          <div className="inline-flex p-3 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 mb-2">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Connect</h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            Open for opportunities in IT Engineering, Web Development, and Technical Operations.
          </p>

          <div className="flex justify-center items-center gap-6 pt-4">
            <a
              href="https://github.com/Coderrok"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
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