'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
  ChevronDown,
  Building2,
  Trophy,
  GraduationCap,
  ExternalLink,
  Sparkles,
  Phone,
  Code2,
  ShieldCheck,
  Cloud,
  X,
  Copy,
  Check,
  Languages,
  Terminal,
  Database,
  Server,
  Workflow,
  Wrench,
  Bot,
  Globe,
  Lock,
  Layers
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
  const profileCardRef = useRef(null);
  const sectionsRef = useRef([]);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  useEffect(() => {
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
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="min-h-screen flex flex-col justify-center pt-20 pb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div ref={headlineRef} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs tracking-wider uppercase font-mono backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                ⚡ Software Engineer & IT Systems Specialist
              </div>

              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-none">
                Mohammed <span className="text-cyan-400">Fahad</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
                Software Engineer with experience in IT support, workstation setup, troubleshooting, software development, and cloud/network infrastructure.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Get in Touch
                </button>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-300 font-medium transition-all backdrop-blur-sm"
                >
                  View Featured Projects
                </a>
              </div>
            </div>

            {/* Profile Frame with Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                ref={profileCardRef}
                className="relative group w-72 sm:w-80 rounded-3xl p-3 bg-gradient-to-b from-cyan-500/20 via-slate-800/40 to-slate-900/80 border border-slate-800 shadow-2xl transition-all duration-500 hover:border-cyan-500/40"
              >
                <div className="relative w-full h-[380px] rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src="/profile.jpeg"
                    alt="Mohammed Fahad"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
                <div className="pt-4 pb-2 px-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" /> BE Computer Science
                  </span>
                  <span>📍 Mangalore, IN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 self-center text-slate-500 animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section
          id="experience"
          ref={addToSections}
          className="py-24 border-t border-slate-800/80"
        >
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-4 hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">IT Executive & Administration</h3>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-1">
                    <Building2 className="w-4 h-4" />
                    Trident Design and Contract | PAN India
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800/80 text-slate-400 w-fit">
                  Sep 2024 – Present
                </span>
              </div>
              <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside leading-relaxed">
                <li>Configured and maintained workstations, printers, and network routers across multiple client sites, applying TCP/IP and DNS fundamentals.</li>
                <li>Set up VPNs, firewalls, and VLANs to secure remote access and segment traffic on LAN/WAN infrastructure.</li>
                <li>Managed user accounts, password resets, and email access for staff across PAN India locations.</li>
                <li>Administered cloud infrastructure in Google Workspace and Microsoft 365, handling domain settings and cloud storage.</li>
                <li>Built and maintained internal web pages with HTML5 and CSS3 to support office documentation and reporting.</li>
                <li>Diagnosed and resolved hardware and software issues on short notice during peak operational periods.</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-4 hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">Software Associate Intern</h3>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-1">
                    <Building2 className="w-4 h-4" />
                    Notion Press | Bangalore
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800/80 text-slate-400 w-fit">
                  Jun 2024 – Aug 2024
                </span>
              </div>
              <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside leading-relaxed">
                <li>Designed and deployed Canvas and Model-driven apps in Microsoft Power Apps to automate internal business workflows.</li>
                <li>Built end-to-end automated processes with Power Automate, removing manual steps from contractual and operational work.</li>
                <li>Ran requirements analysis with cross-functional teams and translated findings into functional digital tools.</li>
                <li>Configured Dataverse and SharePoint connectors to keep data storage secure and reporting accurate across systems.</li>
                <li>Applied UI/UX design principles to refine app interfaces based on user feedback.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          ref={addToSections}
          className="py-24 border-t border-slate-800/80"
        >
          <div className="flex items-center gap-3 mb-12">
            <FolderGit2 className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Projects (Academic & Personal)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white">Muslim Verse 🌙</h3>
                  <a
                    href="https://muslimverse.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-slate-400">
                  An all-encompassing website featuring 114 Surahs, Duas, and essential resources.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300 font-mono">⚡ Netlify App</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">🌐 Web App</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white">Lab Programs 📚</h3>
                  <a
                    href="https://labprograms.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-slate-400">
                  A one-stop platform featuring an extensive collection of lab programs across all semesters for easy student access.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300 font-mono">🎓 Academic Platform</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">💻 Web Development</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white">DEVCOM 🛠️</h3>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-sm text-slate-400">
                  Scalable web application built with Flask & PHP with MySQL backend, search, user auth, and integrated hate-speech recognition function.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300 font-mono">🐍 Flask & PHP</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">🗄️ MySQL Backend</span>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & EDUCATION */}
        <section
          ref={addToSections}
          className="py-24 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Notable Achievements</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-sm text-slate-300">
                🏆 <strong className="text-white">Top 10 Position:</strong> National-level HACK THE METAVERSE hackathon by IIIT Bangalore & IEEE Computer Society.
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-sm text-slate-300">
                🚀 <strong className="text-white">Final Round (25/103 Teams):</strong> Niveus Solutions 24-hour hackathon (NIVHACK 2023).
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-sm text-slate-300">
                💡 <strong className="text-white">Final Round (Out of 124 Teams):</strong> SMART NITTE HACKATHON organized by NMAMIT.
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-sm text-slate-300">
                ⚙️ <strong className="text-white">Final Round Qualifier:</strong> ACCS Design Challenge 2023 (ADC 2023) after semi-finals at Maker's Village, Kochi.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Education & Languages</h2>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <h3 className="text-lg font-bold text-white">Bachelor of Engineering (BE) 🎓</h3>
              <p className="text-cyan-400 text-sm font-mono">Computer Science Engineering</p>
              <p className="text-slate-400 text-sm">Visvesvaraya Technological University (VTU), Karnataka</p>
              <div className="flex justify-between items-center pt-2 text-xs font-mono text-slate-500">
                <span>2020 – 2024</span>
                <span className="text-cyan-400">CGPA: 7.8</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                <Languages className="w-4 h-4" /> 🗣️ Multilingual Proficiency
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: 'English', flag: '🇬🇧' },
                  { lang: 'Hindi', flag: '🇮🇳' },
                  { lang: 'Kannada', flag: '🇮🇳' },
                  { lang: 'Malayalam', flag: '🇮🇳' },
                  { lang: 'Tamil', flag: '🇮🇳' },
                ].map(({ lang, flag }) => (
                  <span key={lang} className="px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <span>{flag}</span> {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS MATRIX */}
        <section
          ref={addToSections}
          className="py-24 border-t border-slate-800/80"
        >
          <div className="flex items-center gap-3 mb-12">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Technical Skills Matrix 🛠️
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Programming & Web */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm border-b border-slate-800 pb-2">
                <Code2 className="w-4 h-4" /> 💻 Programming & Web
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: 'C#', symbol: '♯' },
                  { name: 'Python', symbol: '🐍' },
                  { name: 'JavaScript', symbol: '🟨 JS' },
                  { name: 'SQL', symbol: '🗄️' },
                  { name: 'ASP.NET', symbol: '🌐' },
                  { name: 'React.js', symbol: '⚛️' },
                  { name: 'HTML5', symbol: '🟧' },
                  { name: 'CSS3', symbol: '🟦' },
                  { name: 'SQL Server', symbol: '📊' },
                  { name: 'MySQL', symbol: '🐬' },
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-xs text-slate-300 font-mono flex items-center gap-1"
                  >
                    <span className="text-cyan-400">{skill.symbol}</span> {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Networking */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm border-b border-slate-800 pb-2">
                <ShieldCheck className="w-4 h-4" /> 📡 Networking & Security
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: 'TCP/IP', symbol: '🔌' },
                  { name: 'DNS', symbol: '🌐' },
                  { name: 'VPNs', symbol: '🔒' },
                  { name: 'Firewalls', symbol: '🧱' },
                  { name: 'VLANs', symbol: '🔀' },
                  { name: 'LAN/WAN', symbol: '🕸️' },
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-xs text-slate-300 font-mono flex items-center gap-1"
                  >
                    <span className="text-cyan-400">{skill.symbol}</span> {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm border-b border-slate-800 pb-2">
                <Cloud className="w-4 h-4" /> ☁️ Cloud & DevOps
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: 'AWS', symbol: '☁️' },
                  { name: 'Google Cloud', symbol: '🟡 GCP' },
                  { name: 'Vertex AI', symbol: '🧠' },
                  { name: 'Docker', symbol: '🐳' },
                  { name: 'GitLab', symbol: '🦊' },
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-xs text-slate-300 font-mono flex items-center gap-1"
                  >
                    <span className="text-cyan-400">{skill.symbol}</span> {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Developer Tools */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm border-b border-slate-800 pb-2">
                <Sparkles className="w-4 h-4" /> 🤖 AI & Dev Tools
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: 'Generative AI', symbol: '✨' },
                  { name: 'GitHub Copilot', symbol: '🤖' },
                  { name: 'Gemini CLI', symbol: '💎' },
                  { name: 'Claude', symbol: '🔮' },
                  { name: 'Power Apps', symbol: '⚡' },
                  { name: 'Power Automate', symbol: '🔄' },
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-xs text-slate-300 font-mono flex items-center gap-1"
                  >
                    <span className="text-cyan-400">{skill.symbol}</span> {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          ref={addToSections}
          className="py-24 border-t border-slate-800/80 text-center space-y-6"
        >
          <div className="inline-flex p-3 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 mb-2">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Connect 🤝</h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            Open for Software Engineering, Full-Stack Development, and IT Operations roles.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20"
            >
              Contact Information
            </button>
          </div>

          <p className="text-xs text-slate-600 pt-12 font-mono">
            © {new Date().getFullYear()} Mohammed Fahad. Built with Next.js & GSAP 🚀
          </p>
        </footer>
      </div>

      {/* CONTACT MODAL */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-md p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">Mohammed Fahad 👋</h3>
              <p className="text-xs text-cyan-400 font-mono">Software Developer | 📍 Mangalore, India</p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:fahadshazi12@gmail.com" className="text-sm text-slate-200 hover:underline">
                    fahadshazi12@gmail.com
                  </a>
                </div>
                <button
                  onClick={() => handleCopy('fahadshazi12@gmail.com', 'email')}
                  className="text-slate-400 hover:text-cyan-400"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+918867480897" className="text-sm text-slate-200 hover:underline">
                    +91 8867480897
                  </a>
                </div>
                <button
                  onClick={() => handleCopy('+918867480897', 'phone')}
                  className="text-slate-400 hover:text-cyan-400"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/mohammedfahad12"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" /> LinkedIn
                </a>
                <a
                  href="https://github.com/Coderrok"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}