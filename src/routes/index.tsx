import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown, ArrowRight, BrainCircuit, Braces, Check, ChevronDown, Code2,
  Cpu, Database, Github, GraduationCap, Layers3, Mail, MapPin, Menu,
  Network, Phone, Rocket, Sparkles, X, type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FloatingParticles,
  ParallaxOrbs,
  ScrollProgress,
  ScrollReveal,
} from "@/components/scroll-effects";
import { useParallax } from "@/hooks/use-scroll-animations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simran — AI/ML Engineer Portfolio" },
      {
        name: "description",
        content:
          "Simran's AI/ML engineering portfolio featuring machine learning, deep learning, NLP, computer vision, and AI applications.",
      },
      { property: "og:title", content: "Simran — AI/ML Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Machine learning, deep learning, NLP, computer vision, and intelligent application projects by Simran.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
const skillGroups: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: "Programming", icon: Code2, items: ["Python", "C++", "C"] },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
  {
    title: "Deep Learning",
    icon: Network,
    items: ["ANN", "CNN", "RNN", "LSTM", "Transfer Learning", "GANs"],
  },
  {
    title: "NLP",
    icon: Braces,
    items: ["Natural Language Processing", "Text Preprocessing", "Tokenization", "Sentiment Analysis"],
  },
  {
    title: "Computer Vision",
    icon: Cpu,
    items: ["Image Classification", "Image Preprocessing", "Transfer Learning"],
  },
  {
    title: "Architectures",
    icon: Layers3,
    items: ["ResNet", "VGGNet", "Inception", "MobileNet", "EfficientNet"],
  },
  {
    title: "Python Libraries & Frameworks",
    icon: Sparkles,
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras"],
  },
  {
    title: "Web & APIs",
    icon: Braces,
    items: ["Flask", "FastAPI", "REST APIs", "Pydantic", "HTML", "CSS"],
  },
  {
    title: "Tools & Deployment",
    icon: Rocket,
    items: ["Git", "GitHub", "Docker", "AWS", "Jupyter Notebook", "Google Colab", "VS Code"],
  },
  { title: "Data & Databases", icon: Database, items: ["SQL", "MySQL", "JSON", "CSV"] },
];

const projects = [
  {
    id: "resume",
    number: "01",
    title: "AI Resume Builder",
    category: "AI / Application Development",
    description: "Developed an AI-based application for generating professional resumes.",
    tech: ["Python", "Web/API technologies"],
    features: [
      "Implemented user input processing and structured resume generation.",
      "Used Python and web/API technologies for application development.",
    ],
    concept: "AI-based application development",
    prominent: true,
  },
  {
    id: "sentiment",
    number: "02",
    title: "Sentiment Analysis",
    category: "NLP / Machine Learning",
    description: "Developed an NLP-based application for classifying text sentiment.",
    tech: ["Python", "NLP", "Machine Learning / Deep Learning"],
    features: [
      "Performed text preprocessing and tokenization.",
      "Applied Machine Learning/Deep Learning techniques for sentiment classification.",
    ],
    concept: "Text preprocessing, tokenization, and sentiment classification",
  },
  {
    id: "calorie",
    number: "03",
    title: "Food Calorie Analyser",
    category: "Web / Data / API",
    description:
      "Developed a web-based application for searching food items and estimating calorie intake.",
    tech: ["Python", "Flask", "HTML", "CSS", "APIs"],
    features: [
      "Processed food datasets and implemented quantity-based calorie calculation.",
      "Built the backend using Flask and developed the interface using HTML and CSS.",
      "Integrated API functionality and a diet-plan feature.",
    ],
    concept: "Data processing and API-backed web application development",
  },
];

const knowledge = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Data Analysis",
  "Generative AI Fundamentals",
  "Transfer Learning",
  "Model Training & Evaluation",
  "REST APIs",
  "Docker",
  "Cloud Deployment",
];
const careers = [
  "AI/ML Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Deep Learning Engineer",
  "NLP Engineer",
  "AI/ML Intern",
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = navItems
        .slice()
        .reverse()
        .find((item) => {
          const el = document.getElementById(item.toLowerCase());
          return el ? window.scrollY + 180 >= el.offsetTop : false;
        });
      if (current) setActive(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const goTo = (item: string) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <ScrollProgress />
      <ParallaxOrbs />
      <FloatingParticles />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border/70 bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_oklch(0.07_0.03_265/30%)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-10"
          aria-label="Main navigation"
        >
          <button
            onClick={() => goTo("Home")}
            className="flex min-w-0 items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span className="grid size-9 shrink-0 place-items-center border border-primary/50 bg-primary/10 font-display text-sm font-bold text-cyan transition-all duration-300 hover:rotate-6 hover:shadow-[var(--shadow-glow)]">
              S
            </span>
            <span className="truncate font-display text-base font-bold tracking-[0.16em]">
              SIMRAN
            </span>
          </button>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => goTo(item)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  active === item ? "text-cyan" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-px bg-cyan transition-transform duration-300 ${
                    active === item ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
            <Button variant="hero" size="default" asChild>
              <a href="mailto:simransundwal@gmail.com">
                Let's Talk <ArrowRight />
              </a>
            </Button>
          </div>
          <Button
            variant="glass"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-background/95 px-5 py-5 backdrop-blur-xl md:hidden">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => goTo(item)}
                className="block w-full border-b border-border/50 py-3 text-left font-display text-lg transition-colors hover:text-cyan"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10">
        <HeroSection goTo={goTo} />

        <Section id="about" eyebrow="01 / Profile" title="About Me">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
            <ScrollReveal variant="left">
              <div>
                <p className="max-w-3xl font-display text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
                  A BCA student specializing in{" "}
                  <span className="text-cyan">Artificial Intelligence and Machine Learning</span>,
                  focused on turning AI/ML concepts into useful real-world applications.
                </p>
                <p className="mt-6 max-w-2xl leading-8 text-muted-foreground">
                  Motivated BCA student specializing in Artificial Intelligence and Machine
                  Learning with hands-on knowledge of Python, Machine Learning, Deep Learning, NLP,
                  APIs, and AI-based application development. Seeking an entry-level AI/ML
                  opportunity to apply my technical skills, work on real-world problems, and grow
                  as an AI/ML professional.
                </p>
                <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {["AI/ML", "Deep Learning", "NLP", "Computer Vision"].map((x, i) => (
                    <div
                      key={x}
                      className="card-hover-glow border-l-2 border-primary bg-card/40 px-4 py-4 font-display text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan hover:bg-card/70"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={150}>
              <div className="glass-panel project-glow relative overflow-hidden p-7">
                <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-cyan to-transparent" />
                <GraduationCap className="mb-8 size-9 text-cyan" />
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Education
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Bachelor of Computer Applications (BCA) – Artificial Intelligence & Machine
                  Learning
                </h3>
                <p className="mt-5 text-primary">Shoolini University</p>
                <p className="mt-2 font-mono text-sm text-muted-foreground">2024 – 2027</p>
              </div>
            </ScrollReveal>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 / Capabilities" title="Technical Skills" dark>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, items }, index) => (
              <ScrollReveal
                key={title}
                variant="up"
                delay={(index % 3) * 100}
                className={index === 1 ? "lg:col-span-2" : ""}
              >
                <article className="card-hover-glow group h-full border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:bg-card/70 hover:shadow-[var(--shadow-glow)]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid size-10 place-items-center border border-primary/40 bg-primary/10 text-cyan transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[var(--shadow-glow)]">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="border border-border/70 bg-background/40 px-2.5 py-1.5 text-xs text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section id="ai-stack" eyebrow="03 / Workflow" title="AI Stack">
          <ScrollReveal variant="fade">
            <p className="-mt-8 mb-10 max-w-2xl text-muted-foreground">
              A visual overview of the AI/ML workflow and concepts I understand—from raw data to
              deployed applications.
            </p>
          </ScrollReveal>
          <div className="relative grid gap-3 md:grid-cols-6">
            {["Data", "Preprocessing", "Machine Learning", "Deep Learning", "NLP / Computer Vision", "Deployment"].map(
              (step, i) => (
                <ScrollReveal key={step} variant="up" delay={i * 100}>
                  <div className="card-hover-glow relative flex min-h-28 items-center justify-center border border-border bg-card/50 p-4 text-center font-display text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:bg-card/80 hover:shadow-[var(--shadow-glow)]">
                    <span className="absolute left-3 top-3 font-mono text-[10px] text-cyan">
                      0{i + 1}
                    </span>
                    {step}
                    {i < 5 && (
                      <ArrowRight className="absolute -bottom-5 left-1/2 z-10 size-4 -translate-x-1/2 rotate-90 text-primary md:-right-2.5 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:rotate-0" />
                    )}
                  </div>
                </ScrollReveal>
              ),
            )}
          </div>
        </Section>

        <Section id="projects" eyebrow="04 / Selected Work" title="Featured Projects" dark>
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, i) => (
              <ScrollReveal
                key={project.id}
                variant={project.prominent ? "scale" : "up"}
                delay={i * 120}
                className={project.prominent ? "lg:col-span-2" : ""}
              >
                <ProjectCard project={project} index={i} onOpen={() => setSelectedProject(project)} />
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section id="knowledge" eyebrow="05 / Knowledge" title="What I Work With">
          <div className="flex flex-wrap gap-3">
            {knowledge.map((item, i) => (
              <ScrollReveal key={item} variant="scale" delay={(i % 6) * 80}>
                <span className="block animate-[float-soft_5s_ease-in-out_infinite] border border-border bg-card/60 px-4 py-3 text-sm text-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:text-cyan hover:shadow-[var(--shadow-glow)]" style={{ animationDelay: `${(i % 6) * 180}ms` }}>
                  {item}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section id="career" eyebrow="06 / Direction" title="Career Interests" dark>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <ScrollReveal variant="left">
              <p className="max-w-md font-display text-2xl leading-relaxed">
                Open to opportunities where I can{" "}
                <span className="text-gradient">learn, build and solve</span> real-world problems
                with AI.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={150}>
              <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {careers.map((career, i) => (
                  <div
                    key={career}
                    className="group flex items-center justify-between bg-background p-5 transition-all duration-300 hover:bg-accent hover:pl-7"
                  >
                    <span className="font-medium">{career}</span>
                    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-cyan">
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Section>

        <section
          id="contact"
          className="technical-grid section-glow relative border-y border-border px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal variant="up">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                07 / Contact
              </p>
            </ScrollReveal>
            <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr]">
              <ScrollReveal variant="left">
                <div>
                  <h2 className="max-w-4xl text-4xl font-bold sm:text-6xl">
                    Let's Build Something <span className="text-gradient">Intelligent.</span>
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                    Interested in AI, Machine Learning or intelligent applications? Let's connect.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button variant="hero" size="lg" asChild>
                      <a href="mailto:simransundwal@gmail.com">
                        <Mail /> Send Email
                      </a>
                    </Button>
                    <Button variant="glass" size="lg" asChild>
                      <a href="tel:8580884379">
                        <Phone /> Call Me
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="right" delay={150}>
                <address className="not-italic">
                  <ContactLine
                    icon={Mail}
                    label="Email"
                    value="simransundwal@gmail.com"
                    href="mailto:simransundwal@gmail.com"
                  />
                  <ContactLine
                    icon={Phone}
                    label="Phone"
                    value="8580884379"
                    href="tel:8580884379"
                  />
                  <ContactLine icon={MapPin} label="Location" value="Mohali, Punjab" />
                </address>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-border pb-10 md:grid-cols-[1fr_auto_auto]">
          <div>
            <p className="font-display text-xl font-bold tracking-[0.16em]">SIMRAN</p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              AI/ML Engineer | Machine Learning • Deep Learning • NLP
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Quick Links
            </p>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => goTo(item)}
                className="mr-4 text-sm transition-colors hover:text-cyan"
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </p>
            <p className="text-sm text-muted-foreground">
              simransundwal@gmail.com
              <br />
              8580884379
              <br />
              Mohali, Punjab
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between pt-6 text-xs text-muted-foreground">
          <p>© 2026 Simran. All rights reserved.</p>
          <p className="font-mono text-cyan">AI / ML</p>
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

function HeroSection({ goTo }: { goTo: (item: string) => void }) {
  const parallaxY = useParallax(0.15);

  return (
    <section
      id="home"
      className="technical-grid section-glow relative flex min-h-[100svh] items-center overflow-hidden border-b border-border/60 px-5 pb-16 pt-28 sm:px-8 lg:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxY}px)` }}
        aria-hidden="true"
      >
        <div className="absolute left-[10%] top-[20%] size-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-[15%] right-[12%] size-80 rounded-full bg-violet/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <div className="hero-entrance hero-entrance-delay-1 mb-6 inline-flex items-center gap-2 border border-cyan/30 bg-cyan/5 px-3 py-2 font-mono text-[11px] font-semibold tracking-[0.18em] text-cyan">
            <span className="size-1.5 animate-pulse rounded-full bg-cyan" /> AI/ML ENGINEER
          </div>
          <h1 className="hero-entrance hero-entrance-delay-2 max-w-4xl font-display text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
            Hi, I'm Simran.
            <br />
            <span className="text-gradient">I Build Intelligent Solutions.</span>
          </h1>
          <p className="hero-entrance hero-entrance-delay-3 mt-7 max-w-2xl text-lg font-medium leading-relaxed text-foreground/85 sm:text-xl">
            AI/ML Engineer specializing in Machine Learning, Deep Learning and NLP.
          </p>
          <p className="hero-entrance hero-entrance-delay-3 mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Motivated BCA student focused on applying AI and machine learning to real-world problems
            through thoughtful, practical applications.
          </p>
          <div className="hero-entrance hero-entrance-delay-4 mt-9 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" onClick={() => goTo("Projects")}>
              View My Projects <ArrowDown />
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="mailto:simransundwal@gmail.com">
                Let's Connect <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="hero-entrance hero-entrance-delay-4 mt-7 flex items-center gap-3">
            <span className="mr-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Connect
            </span>
            <span className="group relative">
              <Button variant="glass" size="icon" aria-label="GitHub coming soon" disabled>
                <Github />
              </Button>
              <span className="pointer-events-none absolute left-1/2 top-12 z-20 -translate-x-1/2 whitespace-nowrap border border-border bg-popover px-2 py-1 text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Coming soon
              </span>
            </span>
            <Button variant="glass" size="icon" asChild>
              <a href="mailto:simransundwal@gmail.com" aria-label="Email Simran">
                <Mail />
              </a>
            </Button>
            <Button variant="glass" size="icon" asChild>
              <a href="tel:8580884379" aria-label="Call Simran">
                <Phone />
              </a>
            </Button>
          </div>
        </div>
        <div className="hero-entrance hero-entrance-delay-3">
          <NeuralVisual />
        </div>
      </div>
      <button
        onClick={() => goTo("About")}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-cyan lg:flex"
      >
        Explore
        <ChevronDown className="size-4" style={{ animation: "scroll-indicator 1.8s ease-in-out infinite" }} />
      </button>
    </section>
  );
}

function NeuralVisual() {
  const nodes = [
    { x: 50, y: 12 },
    { x: 23, y: 29 },
    { x: 77, y: 28 },
    { x: 14, y: 58 },
    { x: 50, y: 48 },
    { x: 86, y: 56 },
    { x: 30, y: 78 },
    { x: 69, y: 80 },
    { x: 50, y: 94 },
  ];
  const lines = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 8], [7, 8],
  ];
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[560px] animate-scale-in"
      aria-label="Animated neural network visualization"
    >
      <div className="absolute inset-[8%] rounded-full border border-primary/20 [animation:orbit_40s_linear_infinite]">
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_18px_var(--cyan)]" />
      </div>
      <div className="absolute inset-[17%] rounded-full border border-dashed border-violet/25 [animation:orbit_28s_linear_infinite_reverse]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
        {lines.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a]!.x}
            y1={nodes[a]!.y}
            x2={nodes[b]!.x}
            y2={nodes[b]!.y}
            stroke="currentColor"
            strokeWidth=".22"
            className="text-primary/40"
            style={{ animation: `line-pulse ${2 + (i % 4)}s ease-in-out ${i * 0.15}s infinite` }}
          />
        ))}
      </svg>
      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan/50 bg-background/90 shadow-[0_0_25px_color-mix(in_oklab,var(--cyan)_30%,transparent)]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: i === 4 ? 72 : 30,
            height: i === 4 ? 72 : 30,
            animation: `neural-pulse ${3 + (i % 3)}s ease-in-out ${i * 0.2}s infinite`,
          }}
        >
          {i === 4 ? (
            <BrainCircuit className="size-8 text-cyan" />
          ) : (
            <span className="size-1.5 rounded-full bg-cyan" />
          )}
        </div>
      ))}
      <div className="absolute left-[6%] top-[18%] border border-border bg-card/70 px-3 py-2 font-mono text-[10px] text-cyan backdrop-blur-md">
        model.fit()
      </div>
      <div className="absolute bottom-[14%] right-[2%] border border-border bg-card/70 px-3 py-2 font-mono text-[10px] text-violet backdrop-blur-md">
        {`{ intelligence: true }`}
      </div>
      <div className="pointer-events-none absolute inset-x-[12%] top-1/4 h-px bg-gradient-to-r from-transparent via-cyan to-transparent [animation:scan_6s_ease-in-out_infinite]" />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  dark = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32 ${
        dark ? "bg-surface/60" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal variant="up">
          <div className="mb-12 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                {eyebrow}
              </p>
              <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
            </div>
            <div className="hidden h-px bg-gradient-to-r from-border to-transparent sm:block" />
          </div>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: (typeof projects)[number];
  index: number;
  onOpen: () => void;
}) {
  return (
    <article
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      role="button"
      tabIndex={0}
      className={`group project-glow card-hover-glow relative h-full cursor-pointer overflow-hidden border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/70 hover:bg-card/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-9 ${
        project.prominent
          ? "lg:col-span-2 lg:grid lg:grid-cols-[1.2fr_.8fr] lg:gap-12"
          : ""
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan via-primary to-violet opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      <div>
        <div className="flex items-start justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">
            {project.category}
          </p>
          <span className="font-display text-4xl text-foreground/10 transition-colors duration-300 group-hover:text-foreground/20">
            {project.number}
          </span>
        </div>
        <h3 className="mt-7 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-border px-2.5 py-1 font-mono text-[11px] text-foreground/70 transition-colors group-hover:border-primary/40"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`${project.prominent ? "mt-8 border-t border-border pt-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" : "mt-8"}`}
      >
        <ul className="space-y-3">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <Check className="mt-1 size-4 shrink-0 text-cyan" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-cyan">
          Project Details{" "}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
        </div>
      </div>
    </article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-background/85 p-4 backdrop-blur-md"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="glass-panel project-glow max-h-[88vh] w-full max-w-2xl overflow-y-auto p-6 animate-scale-in sm:p-9"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">
              {project.category}
            </p>
            <h2 id="project-title" className="mt-3 text-3xl font-bold">
              {project.title}
            </h2>
          </div>
          <Button variant="glass" size="icon" onClick={onClose} aria-label="Close project details">
            <X />
          </Button>
        </div>
        <div className="mt-8 space-y-7">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Project overview
            </h3>
            <p className="mt-3 leading-7">{project.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              What was built
            </h3>
            <ul className="mt-3 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-6">
                  <Check className="mt-1 size-4 shrink-0 text-cyan" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Technologies used
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="border border-primary/30 bg-primary/5 px-3 py-2 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Relevant AI/ML concept
            </h3>
            <p className="mt-3 text-muted-foreground">{project.concept}</p>
          </div>
          <div className="border-t border-border pt-6">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Rocket className="size-4" /> Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="grid size-10 shrink-0 place-items-center border border-primary/40 bg-primary/10 text-cyan transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-glow)]">
        <Icon className="size-4" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
        <p className="mt-1 break-all text-sm font-medium sm:text-base">{value}</p>
      </div>
    </>
  );
  return href ? (
    <a
      href={href}
      className="mb-3 flex items-center gap-4 border border-border bg-card/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-card/80"
    >
      {content}
    </a>
  ) : (
    <div className="mb-3 flex items-center gap-4 border border-border bg-card/50 p-4">{content}</div>
  );
}
