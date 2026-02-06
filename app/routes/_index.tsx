import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ângelo Cunha — Software Engineer" },
    { name: "description", content: "Software Engineer with 7+ years of experience crafting elegant digital solutions." },
    { name: "theme-color", content: "#0a0a0a" },
  ];
};

// Typing animation hook
function useTypingEffect(text: string, speed = 40, startDelay = 0) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}

// Intersection Observer hook
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Counter animation hook
function useCounter(end: number, duration = 2000, startOnView = false, isInView = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (hasStarted) return;

    setHasStarted(true);
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, startOnView, isInView, hasStarted]);

  return count;
}

export default function Index() {
  return (
    <div className="min-h-screen bg-platinum-deeper">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-platinum-deeper/90 backdrop-blur-xl border-b border-cream/5" : ""
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 border border-bronze/50 rounded-full flex items-center justify-center group-hover:border-bronze group-hover:shadow-bronze-glow-sm transition-all duration-300">
              <span className="text-bronze font-display font-semibold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-cream text-sm font-medium">Ângelo Cunha</span>
              <div className="h-px w-0 bg-bronze group-hover:w-full transition-all duration-300" />
            </div>
          </a>

          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center gap-8">
              {["About", "Skills", "Experience", "Projects"].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative text-cream/60 text-sm hover:text-cream transition-colors"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="font-mono text-bronze/50 text-xs mr-1">0{i + 1}.</span>
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-bronze group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            <a
              href="https://www.linkedin.com/in/%C3%A2ngelocunha/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 overflow-hidden rounded-full border border-bronze/50 hover:border-bronze transition-all duration-300"
            >
              <span className="relative z-10 text-bronze text-sm font-medium group-hover:text-platinum-deeper transition-colors duration-300">
                Let&apos;s Connect
              </span>
              <div className="absolute inset-0 bg-bronze translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const { displayedText: line1, isComplete: line1Done } = useTypingEffect("Ângelo Cunha", 60, 800);
  const { displayedText: line2, isComplete: line2Done } = useTypingEffect("Software Engineer", 50, 2000);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (line2Done) {
      setTimeout(() => setShowContent(true), 300);
    }
  }, [line2Done]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-bronze/5 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-bronze/3 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(122, 102, 82, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(122, 102, 82, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
          <div>
            {/* Terminal-inspired intro */}
            <div className="glass-card p-6 mb-12 max-w-xl elegant-border animate-fade-up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-bronze/40" />
                <div className="w-3 h-3 rounded-full bg-bronze/30" />
                <div className="w-3 h-3 rounded-full bg-bronze/20" />
                <span className="ml-4 text-xs font-mono text-cream/30">~/portfolio</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-bronze">→</span>
                  <span className="text-cream/50">name:</span>
                  <span className="text-cream">{line1}</span>
                  {!line1Done && <span className="w-2 h-4 bg-bronze animate-typing-cursor" />}
                </div>
                {line1Done && (
                  <div className="flex items-center gap-2">
                    <span className="text-bronze">→</span>
                    <span className="text-cream/50">role:</span>
                    <span className="text-bronze-light">{line2}</span>
                    {!line2Done && <span className="w-2 h-4 bg-bronze animate-typing-cursor" />}
                  </div>
                )}
              </div>
            </div>

            {/* Main headline */}
            <div className={`transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-8">
                Crafting
                <br />
                <span className="bronze-gradient-text">elegant</span> digital
                <br />
                <span className="italic font-light">experiences</span>
              </h1>

              <p className="text-cream/60 text-lg md:text-xl leading-relaxed max-w-lg mb-12">
                7+ years transforming complex challenges into refined, efficient solutions.
                I build software with precision and purpose.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group relative px-8 py-4 bg-bronze text-platinum-deeper font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-bronze-glow"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://github.com/AnxoWedge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 border border-cream/20 text-cream font-medium rounded-full hover:border-bronze/50 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Stats with counters */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <StatsGrid />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col items-center gap-3 animate-float">
            <span className="text-cream/30 text-xs font-mono tracking-widest">SCROLL</span>
            <div className="w-px h-16 bg-gradient-to-b from-bronze/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsGrid() {
  const { ref, isInView } = useInView(0.3);
  const years = useCounter(7, 1500, true, isInView);
  const projects = useCounter(50, 2000, true, isInView);
  const performance = useCounter(43, 1800, true, isInView);

  const stats = [
    { value: `${years}+`, label: "Years of Experience", suffix: "" },
    { value: `${projects}+`, label: "Projects Delivered", suffix: "" },
    { value: `${performance}%`, label: "Avg Performance Gain", suffix: "" },
    { value: "∞", label: "Lines of Code", suffix: "" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`glass-card-hover p-8 elegant-border transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <p className="font-display text-4xl lg:text-5xl text-bronze mb-2">{stat.value}</p>
          <p className="text-cream/50 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function AboutSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-platinum-deeper via-platinum-dark to-platinum-deeper" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="section-label mb-6 block">About</span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-8">
              Engineering with
              <br />
              <span className="italic text-bronze-light">intention</span>
            </h2>

            <div className="w-24 h-px bg-gradient-to-r from-bronze to-transparent mb-8" />

            <p className="text-cream/70 text-lg leading-relaxed mb-6">
              As a software engineer, I explore new approaches daily to advance technology
              through innovative solutions. This mindset has shaped a career centered on
              solving challenges through practical, elegant engineering.
            </p>

            <p className="text-cream/50 leading-relaxed">
              Co-founder of Creative Discovery, where I architect databases, build DevOps
              pipelines, and deploy high-performance applications across Azure, GCP, and Hetzner.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="glass-card p-8 elegant-border">
              <h3 className="text-bronze font-mono text-sm tracking-wider mb-6">CREDENTIALS</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-medium">BSc Systems Management & Computing</p>
                    <p className="text-cream/50 text-sm mt-1">Universidade Atlântica • 2020-2023</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-medium">Azure Fundamentals Certified</p>
                    <p className="text-cream/50 text-sm mt-1">Microsoft • 2022</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-medium">Co-founder, Creative Discovery</p>
                    <p className="text-cream/50 text-sm mt-1">Since 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { ref, isInView } = useInView(0.1);

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "Flask", "FastAPI", "Node.js"],
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    },
    {
      title: "Cloud & DevOps",
      skills: ["Azure", "GCP", "Hetzner", "GitHub Actions", "Docker"],
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    },
    {
      title: "Testing",
      skills: ["Playwright", "Selenium", "Jest", "Pytest"],
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "Design",
      skills: ["Figma", "Photoshop", "Canva", "UI/UX"],
      icon: "M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z",
    },
  ];

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className={`section-label justify-center transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
            Skills
          </span>
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl text-cream mt-6 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Tools of the <span className="italic text-bronze-light">trade</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`glass-card-hover p-8 elegant-border group transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center group-hover:bg-bronze/20 transition-colors">
                  <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={group.icon} />
                  </svg>
                </div>
                <h3 className="text-cream text-xl font-display font-semibold">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-platinum-muted/50 border border-cream/5 rounded-lg text-sm text-cream/70 hover:border-bronze/30 hover:text-cream transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { ref, isInView } = useInView(0.1);

  const experiences = [
    {
      period: "2020 — Present",
      role: "Software Engineer",
      company: "Creative Discovery",
      points: [
        "Architecting databases with PostgreSQL, MySQL, and MS SQL",
        "Building DevOps pipelines with GitHub Actions",
        "Improving web performance by 43% using SSG/ISR",
        "Deploying applications on GCP, Azure, and Hetzner",
      ],
    },
    {
      period: "2018 — 2020",
      role: "Front End Expert",
      company: "Creative Discovery",
      points: [
        "Developing applications with React.js, Node.js, and Python",
        "Building and integrating APIs with WordPress headless",
        "Creating in-house platforms using Django",
        "Engineering server migrations and infrastructure",
      ],
    },
    {
      period: "2017 — 2018",
      role: "Web Developer",
      company: "Creative Discovery",
      points: [
        "Designing static websites for small businesses",
        "Increasing client website traffic by ~30%",
        "Building with HTML, CSS, and JavaScript",
        "SEO optimization and performance tuning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-platinum-deeper via-platinum-dark to-platinum-deeper" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="mb-20">
          <span className={`section-label transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
            Experience
          </span>
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl text-cream mt-6 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            The <span className="italic text-bronze-light">journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-bronze/50 via-bronze/20 to-transparent lg:-translate-x-px" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.period}
                className={`relative transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-1/2 w-4 h-4 bg-platinum-deeper border-2 border-bronze rounded-full -translate-x-[7px] lg:-translate-x-2 mt-2 z-10" />

                  {/* Date */}
                  <div className={`lg:w-1/2 pl-10 lg:pl-0 ${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:pl-16"}`}>
                    <span className="font-mono text-bronze text-sm">{exp.period}</span>
                  </div>

                  {/* Content */}
                  <div className={`lg:w-1/2 pl-10 lg:pl-0 ${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
                    <div className={`glass-card p-8 elegant-border ${index % 2 === 1 ? "lg:ml-auto" : ""}`}>
                      <h3 className="text-cream text-2xl font-display font-semibold mb-1">{exp.role}</h3>
                      <p className="text-bronze mb-6">{exp.company}</p>

                      <ul className={`space-y-3 ${index % 2 === 1 ? "lg:text-left" : ""}`}>
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-cream/60">
                            <span className="text-bronze mt-1.5">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { ref, isInView } = useInView(0.1);

  const projects = [
    {
      title: "Creative Discovery",
      description: "Digital agency website showcasing portfolio and services. Built with modern stack for optimal performance.",
      tags: ["Next.js", "React", "Tailwind"],
      link: "https://creativediscovery.pt/",
      featured: true,
    },
    {
      title: "Koka.pt",
      description: "E-commerce and brand presence website for a Portuguese business with custom WooCommerce functionality.",
      tags: ["WordPress", "PHP", "WooCommerce"],
      link: "https://koka.pt/",
      featured: true,
    },
    {
      title: "AnQR",
      description: "QR Code generator with customization options and export capabilities.",
      tags: ["Python", "Flask"],
      link: "https://github.com/AnxoWedge/AnQR",
    },
    {
      title: "Glasgow Climate AI",
      description: "AI-powered climate analysis tool for environmental data insights.",
      tags: ["Python", "ML", "Data Science"],
      link: "https://github.com/AnxoWedge/glasgowClimateAI",
    },
  ];

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className={`section-label transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
            Projects
          </span>
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl text-cream mt-6 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Selected <span className="italic text-bronze-light">work</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects.filter((p) => p.featured).map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-card-hover p-10 elegant-border block transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-bronze/10 flex items-center justify-center group-hover:bg-bronze group-hover:shadow-bronze-glow-sm transition-all duration-300">
                  <svg className="w-6 h-6 text-bronze group-hover:text-platinum-deeper transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <svg className="w-6 h-6 text-cream/30 group-hover:text-bronze group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7m10 0v10" />
                </svg>
              </div>

              <h3 className="text-cream text-3xl font-display font-semibold mb-4 group-hover:text-bronze transition-colors">
                {project.title}
              </h3>
              <p className="text-cream/50 mb-8 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-bronze/10 border border-bronze/20 text-bronze text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.filter((p) => !p.featured).map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-6 glass-card hover:border-bronze/20 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-bronze/10 flex items-center justify-center group-hover:bg-bronze/20 transition-colors">
                  <svg className="w-5 h-5 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-cream font-medium group-hover:text-bronze transition-colors">{project.title}</h3>
                  <p className="text-cream/40 text-sm">{project.tags.join(" · ")}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-cream/20 group-hover:text-bronze transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7m10 0v10" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-24 relative border-t border-cream/5">
      <div className="absolute inset-0 bg-gradient-to-t from-platinum-deeper to-platinum-dark" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <span className="section-label mb-6 block">Contact</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
              Let&apos;s create
              <br />
              <span className="italic text-bronze-light">together</span>
            </h2>
          </div>

          <div className="lg:text-right">
            <p className="text-cream/50 mb-8 max-w-md lg:ml-auto">
              Open to new opportunities, collaborations, and interesting conversations
              about technology and innovation.
            </p>
            <a
              href="https://www.linkedin.com/in/%C3%A2ngelocunha/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-bronze text-platinum-deeper font-medium rounded-full hover:shadow-bronze-glow transition-all duration-300"
            >
              Get in Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-cream/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-bronze/30 rounded-full flex items-center justify-center">
              <span className="text-bronze font-display">A</span>
            </div>
            <div>
              <p className="text-cream text-sm font-medium">Ângelo Cunha</p>
              <p className="text-cream/40 text-xs">Software Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AnxoWedge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:text-bronze hover:border-bronze/30 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/%C3%A2ngelocunha/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:text-bronze hover:border-bronze/30 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <p className="text-cream/30 text-sm font-mono">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
