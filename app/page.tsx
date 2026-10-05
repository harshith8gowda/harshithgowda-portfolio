'use client';

import { useState, useEffect } from 'react';

const projects = [
  {
    id: 'opencrawl',
    title: 'OpenClaw',
    subtitle: 'Autonomous AI Agent System',
    description: 'Fully autonomous AI agent system on Kimi K2.5 (via Fireworks API) with filesystem access, browser automation, scheduled tasks, and persistent cross-session memory. Multi-agent orchestration coordinating Claude, DeepSeek V3, and Kimi K2.5 with intelligent task routing, optimizing for cost and reasoning quality.',
    tech: ['TypeScript', 'Python', 'Kimi K2.5', 'Fireworks API', 'Claude', 'DeepSeek V3', 'MCP', 'Browser Automation'],
    highlights: ['Filesystem access & browser automation', 'Scheduled tasks & persistent memory', 'Multi-agent orchestration (Claude, DeepSeek, Kimi)', 'Intelligent task routing for cost/quality', 'Cross-session learning'],
    status: 'Active Development',
    github: 'https://github.com/harshith8gowda',
    demo: '#',
  },
  {
    id: 'clawtrader',
    title: 'ClawTrader / ClawBinance',
    subtitle: 'Agentic Crypto Trading System',
    description: 'Agentic crypto trading system with Z-Score signal generation, live Binance API integration, and a React dashboard for real-time PnL tracking. 10+ strategies, automated backtesting, live signal generation.',
    tech: ['Python', 'Binance API', 'React', 'TypeScript', 'TA-Lib', 'Pandas', 'WebSocket', 'PostgreSQL'],
    highlights: ['Z-Score mean reversion signals', 'Live Binance Futures/Spot integration', 'Real-time React PnL dashboard', '10+ trading strategies', 'Automated backtesting engine (500K+ records)', 'Dynamic risk controls'],
    status: 'Live Trading',
    github: 'https://github.com/harshith8gowda',
    demo: '#',
  },
  {
    id: 'doc-intel',
    title: 'Document Intelligence Pipeline',
    subtitle: 'Production ML Pipeline',
    description: 'End-to-end document processing system handling 10K+ records/week using LLM-assisted extraction. Reduced manual effort by 75% and deployed as a REST API handling 1K+ requests/hour.',
    tech: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'Docker', 'LLM Extraction', 'REST API'],
    highlights: ['10K+ documents/week throughput', 'LLM-assisted extraction pipeline', '75% manual effort reduction', 'REST API: 1K+ req/hour', 'Production deployed'],
    status: 'Production',
    github: '#',
    demo: '#',
  },
  {
    id: 'fin-llm',
    title: 'Financial LLM Fine-tuning',
    subtitle: 'Domain-Adapted Models',
    description: 'Fine-tuned LLaMA-2 and GPT-3.5 on financial domain data, achieving 92% accuracy on sentiment analysis and 35% improvement in summarization quality vs baseline.',
    tech: ['PyTorch', 'LLaMA-2', 'GPT-3.5', 'LoRA/QLoRA', 'Financial NLP', 'HuggingFace'],
    highlights: ['92% accuracy on financial sentiment', '35% summarization quality improvement', 'LoRA/QLoRA parameter-efficient tuning', 'Financial domain adaptation'],
    status: 'Research Complete',
    github: '#',
    demo: '#',
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    subtitle: 'MSc Dissertation (72% Merit)',
    description: 'Ensemble fraud detection system on 2M+ credit card transactions — Random Forest, AdaBoost, SGDClassifier, KNN, Soft Voting Ensemble — achieving F1: 0.88, Recall: 0.83. Applied SMOTE and threshold tuning for severe class imbalance.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE', 'Ensemble ML', 'Pandas'],
    highlights: ['F1: 0.88, Recall: 0.83 on 2M+ transactions', 'Ensemble outperformed single classifiers by 12%', 'SMOTE + threshold tuning for imbalance', '40% improvement in minority class detection', 'Grade: 72% (Merit)'],
    status: 'Completed',
    github: '#',
    demo: '#',
  },
  {
    id: 'quant-research',
    title: 'Quantitative Research Platform',
    subtitle: 'Strategy Research & Backtesting',
    description: 'Designed and backtested 15+ systematic trading strategies across Forex and crypto; built an automated backtesting engine processing 500K+ historical price records with dynamic risk controls.',
    tech: ['Python', 'Pandas', 'NumPy', 'TA-Lib', 'VectorBT', 'Forex', 'Crypto'],
    highlights: ['15+ strategies researched & backtested', '500K+ market data records processed', 'Automated backtesting engine', 'Dynamic risk controls', 'Forex & crypto coverage'],
    status: 'Active Research',
    github: '#',
    demo: '#',
  },
];

const experience = [
  {
    role: 'AI Engineer & Independent Builder',
    company: 'Self-Employed',
    period: '2024 — Present',
    location: 'Bangalore, India',
    bullets: [
      'Architected OpenClaw: fully autonomous AI agent system on Kimi K2.5 with filesystem access, browser automation, scheduled tasks, and persistent cross-session memory',
      'Built multi-agent orchestration system coordinating Claude, DeepSeek V3, and Kimi K2.5 with intelligent task routing optimizing for cost and reasoning quality',
      'Developed document intelligence pipeline processing 10K+ records/week using LLM-assisted extraction; reduced manual effort by 75%; deployed as REST API handling 1K+ requests/hour',
      'Fine-tuned LLaMA-2 and GPT-3.5 on financial domain data, achieving 92% accuracy on sentiment analysis and 35% improvement in summarization quality vs baseline',
      'Engineered ClawTrader/ClawBinance: agentic crypto trading system with Z-Score signal generation, live Binance API integration, and React dashboard for real-time PnL tracking',
    ],
  },
  {
    role: 'ERP Support Consultant (Odoo)',
    company: 'Globcom',
    period: 'Feb 2026 — Apr 2026',
    location: 'Bangalore, India / Muscat, Oman',
    bullets: [
      'Delivered ERP migration support (Odoo 10 → 19) for Daleel Petroleum Industries in Muscat, Oman, across procurement and inventory modules',
      'Supported enterprise ERP implementation for manufacturing clients',
    ],
  },
  {
    role: 'Research Intern — AI & Machine Learning',
    company: 'Bournemouth University, UK',
    period: 'Sep 2022 — Apr 2023',
    location: 'Bournemouth, UK',
    bullets: [
      'MSc Dissertation (Grade: 72% — Merit): built ensemble fraud detection system on 2M+ credit card transactions achieving F1: 0.88, Recall: 0.83',
      'Applied SMOTE and threshold tuning to handle severe class imbalance, improving minority class detection by 40% over baseline',
    ],
  },
  {
    role: 'Quantitative Researcher',
    company: 'Self-Employed',
    period: '2021 — 2023',
    location: 'Remote',
    bullets: [
      'Designed and backtested 15+ systematic trading strategies across Forex and crypto',
      'Built automated backtesting engine processing 500K+ historical price records with dynamic risk controls',
    ],
  },
];

const education = [
  {
    degree: 'MSc Data Science & AI',
    school: 'Bournemouth University, UK',
    period: '2022 — 2023 · 2:1 Upper Second',
    details: 'Dissertation: Credit Card Fraud Detection on 2M+ Transactions (F1: 0.88, Grade: 72% Merit). Coursework: Deep Learning, NLP, Reinforcement Learning, MLOps, Bayesian Methods.',
  },
  {
    degree: 'BSc Computer Science',
    school: 'University of Hertfordshire, UK',
    period: '2017 — 2020 · 2:2 Lower Second',
    details: 'Core: Algorithms, Data Structures, Databases, Software Engineering, Computer Networks.',
  },
];

const skills = {
  'AI/ML': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Transformers', 'LoRA/QLoRA', 'RAG', 'LangChain', 'ChromaDB', 'Multi-Agent Systems'],
  'LLM Engineering': ['GPT-4', 'Claude', 'LLaMA-2', 'Kimi K2.5', 'DeepSeek V3', 'Fine-tuning', 'Prompt Engineering', 'MCP', 'Function Calling', 'Structured Outputs'],
  'Trading/Quant': ['Binance API', 'TA-Lib', 'Z-Score Signals', 'Mean Reversion', 'Statistical Arbitrage', 'Backtesting (500K+ records)', 'Risk Management', 'Forex', 'Crypto'],
  'Backend': ['Python', 'FastAPI', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Docker', 'SQL', 'R'],
  'Data & Viz': ['Pandas', 'NumPy', 'Power BI', 'Tableau', 'Feature Engineering', 'Time Series', 'SMOTE', 'Ensemble Methods'],
  'Tools': ['Git', 'Linux', 'CI/CD', 'Fireworks API', 'Browser Automation', 'Scheduled Tasks'],
};

const contact = {
  email: 'harshith13gowda@gmail.com',
  phone: '+91 776 097 9162',
  github: 'https://github.com/harshith8gowda',
  linkedin: 'https://linkedin.com/in/harshith-gowda',
  twitter: 'https://x.com/agentgowda',
  location: 'Bangalore, India',
  availability: 'Immediate • Open to remote/hybrid • Bangalore · Europe (not UK)',
};

function SkillCategory({ category, items }: { category: string; items: string[] }) {
  return (
    <div className="dark:bg-dark-900/50 p-6 rounded-xl border border-dark-700 transition-all hover:border-primary-500/50">
      <h3 className="font-mono text-xs font-medium text-primary-400 uppercase tracking-wider mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span key={skill} className="px-3 py-1.5 text-sm bg-dark-800/50 border border-dark-600 rounded-lg text-gray-200 hover:bg-primary-500/10 hover:border-primary-500/30 transition-all">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <article className="group dark:bg-dark-900/50 p-6 rounded-xl border border-dark-700 transition-all hover:border-primary-500/50 hover:shadow-[0_0_40px_rgba(14,165,233,0.1)]">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-1">{project.title}</h3>
          <p className="text-primary-500 text-sm font-medium">{project.subtitle}</p>
        </div>
        <span className="px-2.5 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded-full shrink-0">
          {project.status}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="px-2.5 py-1 text-xs font-mono bg-dark-800/50 border border-dark-600 rounded text-gray-400">
            {t}
          </span>
        ))}
      </div>
      <ul className="space-y-2 mb-5">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-primary-400 shrink-0 mt-0.5">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 pt-4 border-t border-dark-700">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 text-sm font-medium text-primary-500 hover:text-primary-400 border border-primary-500/30 rounded-lg transition-colors">
          Code
        </a>
        <a href={project.demo} className="flex-1 text-center py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 border border-dark-600 rounded-lg transition-colors">
          Demo
        </a>
      </div>
    </article>
  );
}

function ExperienceCard({ exp }: { exp: typeof experience[0] }) {
  return (
    <article className="dark:bg-dark-900/50 p-6 rounded-xl border border-dark-700 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-500/50"></div>
      <div className="relative pl-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{exp.role}</h3>
            <p className="text-primary-500 text-sm font-medium mt-0.5">{exp.company}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{exp.period}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">{exp.location}</p>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 leading-relaxed">
              <span className="text-primary-400 shrink-0 mt-0.5">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-950 flex items-center justify-center">
        <div className="animate-pulse text-primary-500 text-2xl font-mono">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 20
          ? 'bg-white/90 dark:bg-dark-950/90 backdrop-blur-md border-b border-gray-200/50 dark:border-dark-800/50'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-mono text-xl font-semibold text-gray-900 dark:text-gray-50">HG</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Projects</a>
            <a href="#experience" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Experience</a>
            <a href="#skills" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Skills</a>
            <a href="#contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="Twitter/X">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={`mailto:${contact.email}`} className="text-gray-500 hover:text-primary-500 transition-colors" aria-label="Email">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent dark:from-primary-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%230ea5e9\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in animate-slide-up">
            <p className="font-mono text-primary-500 text-sm uppercase tracking-wider mb-4">AI Engineer & Independent Builder</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-6 text-balance">
              Building Autonomous Systems
              <br />
              <span className="text-primary-500">That Learn & Execute</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
              MSc Data Science & AI (Bournemouth, UK). Building OpenClaw (multi-agent orchestration),
              ClawTrader (live algorithmic trading), and production ML pipelines.
              Seeking AI/ML Engineer roles in Bangalore & Europe.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25">
                View GitHub
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 border-2 border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:border-primary-500 hover:text-primary-500 transition-all">
                Get In Touch
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
              <span>📍 {contact.location}</span>
              <span>•</span>
              <span>{contact.availability}</span>
            </div>
          </div>

          <div className="relative animate-fade-in animate-slide-up animate-delay-200">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-dark-950 rounded-3xl border border-dark-700 p-6 overflow-hidden">
                <div className="font-mono text-xs text-primary-400 mb-4">$ clawtrader --live --strategy zscore</div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>BTCUSDT</span>
                    <span className="text-green-400">+2.34%</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>ETHUSDT</span>
                    <span className="text-green-400">+1.87%</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>SOLUSDT</span>
                    <span className="text-red-400">-0.45%</span>
                  </div>
                  <div className="flex justify-between text-gray-400 pt-2 border-t border-dark-700">
                    <span className="font-medium">Total PnL</span>
                    <span className="text-green-400 font-medium">+12.7%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-dark-700">
                    <div>
                      <div className="text-2xl font-bold text-gray-50">10+</div>
                      <div className="text-xs text-gray-500">Strategies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-50">500K+</div>
                      <div className="text-xs text-gray-500">Records</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-50">1.8+</div>
                      <div className="text-xs text-gray-500">Sharpe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-primary-500 text-sm uppercase tracking-wider mb-2">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Systems Built in Production
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              End-to-end ML systems, autonomous agents, and trading infrastructure — from research to live deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white dark:bg-dark-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-primary-500 text-sm uppercase tracking-wider mb-2">Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6 text-center">Education</h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="dark:bg-dark-900/50 p-6 rounded-xl border border-dark-700 text-center">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-1">{edu.degree}</h4>
                  <p className="text-primary-500 font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-3">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-primary-500 text-sm uppercase tracking-wider mb-2">Tech Stack</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Technologies & Frameworks
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <SkillCategory key={category} category={category} items={items} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white dark:bg-dark-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Let&apos;s Build Something
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Open to AI/ML Engineer roles in Bangalore and Europe (not UK).
            Also open to freelance projects involving LLMs, agents, or trading systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`mailto:${contact.email}`} className="px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25">
              Email Me
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:border-primary-500 hover:text-primary-500 transition-all">
              LinkedIn
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 font-mono">
            <a href={`mailto:${contact.email}`} className="hover:text-primary-500 transition-colors">{contact.email}</a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">GitHub</a>
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">@agentgowda</a>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 font-mono">
            {contact.location} • {contact.availability}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-dark-800 bg-gray-50/50 dark:bg-dark-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">HG</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js, TypeScript, and Tailwind. Deployed on Vercel.
          </p>
          <div className="flex gap-6">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors text-sm">GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors text-sm">LinkedIn</a>
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors text-sm">X/Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}