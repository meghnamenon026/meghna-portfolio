import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Linkedin, 
  Download, 
  Mail, 
  Calendar, 
  ExternalLink, 
  Award, 
  MapPin, 
  ChevronRight,
  Monitor,
  Presentation,
  Megaphone,
  Briefcase
} from "lucide-react";

const EXPERIENCES = [
  {
    company: "TribeVibe - BookMyShow",
    role: "Brand Solutions Executive",
    period: "Sept '25 - Present",
    description: "Developing sponsorship solutions for brand collaborations with artist-led shows. Supported on-ground client servicing and execution for major live events and digital campaigns.",
    bullets: [
      "Conceptualized sponsorship solutions for brand collaborations with artist-led shows, presenting ideas in client meetings.",
      "Collaborated with brand teams including Hindustan Unilever, Visa, and HDFC Bank to manage approvals and real-time on-site requirements.",
      "Worked on large-scale live properties featuring artists such as Prateek Kuhad, Vir Das, Zakir Khan, and Falguni Pathak.",
      "Single-handedly contributing to creating case studies for BookMyShow's new website - BMSForBrands."
    ],
    logo: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=100&h=100&fit=crop"
  },
  {
    company: "Schbang",
    role: "Business Operations Intern",
    period: "May '25 - Aug '25",
    description: "Led content strategy and social media presence for WA Schbang & Schbang Labs. Created strategic pitch decks and conducted market analysis.",
    bullets: [
      "Built social media presence from scratch, including branding, logo design, and content calendar planning.",
      "Created strategic pitch decks for WA Schbang's internal product (CSAT).",
      "Conducted in-depth client research and market analysis with tailored communication strategies.",
      "Collaborated with internal teams on weekly reporting and executional planning."
    ],
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop"
  },
  {
    company: "Brushez (Startup)",
    role: "Social Media Manager (Freelance)",
    period: "Jun '24 - Mar '25",
    description: "Managed Instagram presence from scratch, driving growth through trend-driven content and community engagement.",
    bullets: [
      "Developed brand identity, content pillars, and post strategy.",
      "Led and executed shoots for reels and visual content.",
      "Boosted engagement through community-focused content."
    ],
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop"
  }
];

const CASE_STUDIES = [
  {
    title: "Visa Takes Centre Stage",
    category: "Brand Integration",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    link: "https://bmsforbrands.com/visa-takes-centre-stage-presenting-visas-first-concert-in-india1/"
  },
  {
    title: "Zakir Khan - Vicks Case Study",
    category: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
    link: "https://bmsforbrands.com/zakir-khich-khiched-vicks-fixed-it/"
  },
  {
    title: "Diageo - Johnnie Walker",
    category: "Strategic Partnerships",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop",
    link: "https://bmsforbrands.com/diageo-johnnie-walker-refreshing-mixer-invests-in-live-entertainment-revolution-in-india1/"
  },
  {
    title: "Zudio Brand Integration",
    category: "Campus Experience",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    link: "https://bmsforbrands.com/turning-a-campus-festival-into-a-fashion-playground-for-gen-z1/"
  }
];

const FEATURED_DECKS = [
  {
    title: 'Pitch Decks',
    description: 'Strategic presentations that translate client objectives into creative brand solutions.',
    image: '/Image/Decks/pitch.jpeg',
    link: 'https://drive.google.com/drive/folders/1ij2XSM2qCa8NwZtSSKto4JTebPyWyMC8?usp=drive_link',
  },
  {
    title: 'Post-Event Evaluations',
    description: 'Comprehensive analysis of event performance, metrics, and key marketing outcomes.',
    image: '/Image/Decks/eval.jpeg',
    link: 'https://drive.google.com/drive/folders/1HymjP-MeHajpXqKT3RjA3dN7kHRuQ1e-?usp=drive_link',
  },
  {
    title: 'Sponsorship Decks',
    description: 'Compelling proposals designed to secure high-value partnerships for premium properties.',
    image: '/Image/Decks/sponsor.jpeg',
    link: 'https://drive.google.com/drive/folders/1dQ8N_Eeej2hMUi3NFv1aQ6AEtvmZFQeE?usp=drive_link',
  },
];

const SKILLS = [
  "Strategic Planning", "Project Management", "Brand Solutions", "Tableau Public", 
  "Market Research", "Content Strategy", "Canva", "Microsoft Excel", 
  "Presentation Design", "Social Media Management", "Client Servicing"
];

const GALLERY_DATA: Record<string, string[]> = {
  'Anuv Jain': [
    '/Image/Anuv Jain/p1.jpeg',
    '/Image/Anuv Jain/p2.jpeg',
    '/Image/Anuv Jain/p3.jpeg',
    '/Image/Anuv Jain/p4.jpeg',
  ],
  'Falguni': [
    '/Image/falguni/p1.jpeg',
    '/Image/falguni/p2.jpeg',
  ],
  'McDowells - Prateek Kuhad': [
    '/Image/Mcdowells - Prateek kuhad/p1.jpeg',
  ],
  'VISA - Vishal': [
    '/Image/VISA - Vishal/p1.jpeg',
    '/Image/VISA - Vishal/p2.jpeg',
  ],
  'Credentials': [
    '/Image/credentials/ids.jpeg',
  ],
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl neo-title mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-800 font-medium max-w-2xl border-l-[3px] border-black pl-6"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Sticker = ({ className, rotate, color }: { className: string, rotate: number, color: string }) => (
  <div 
    className={`absolute hidden md:block w-12 h-12 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${color} ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  />
);

const GallerySection = () => {
  const allImages = Object.values(GALLERY_DATA).flat();
  const rotations = [2, -3, 4, -2, 3, -5, 1, -4, 2, -1, 3];

  return (
    <div className="relative pt-10 pb-20">
      {/* Stickers/Tape accents */}
      <div className="absolute top-0 left-10 w-24 h-6 bg-yellow-300 border-2 border-black -rotate-12 z-10 opacity-80" />
      <div className="absolute top-20 right-20 w-8 h-8 rounded-full bg-cyan-400 border-2 border-black z-10" />
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-rose-400 border-2 border-black rotate-45 z-10" />
      
      <div className="flex flex-wrap justify-center gap-y-16 gap-x-4 max-w-7xl mx-auto px-4">
        {allImages.map((img, idx) => {
          const rotation = rotations[idx % rotations.length];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, rotate: rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotation }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 40,
                transition: { duration: 0.2 } 
              }}
              className="relative bg-white p-1 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none transition-all hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -mx-4 md:-mx-2 w-[280px] h-[280px] flex items-center justify-center shrink-0"
            >
              <div className="bg-white w-full h-full overflow-hidden relative group/img flex items-center justify-center">
                <img
                  src={img}
                  alt={`Glimpse ${idx + 1}`}
                  className="w-full h-full object-contain block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-black selection:bg-rose-500 selection:text-white halftone">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-[3px] border-black h-16 sm:h-20 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-black tracking-tight"
          >
            MEGHNA <span className="bg-rose-500 text-white px-2">MENON</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "experience", label: "Experience" },
              { id: "decks", label: "Decks" },
              { id: "work", label: "Works" },
              { id: "gallery", label: "Glimpses" },
              { id: "skills", label: "Expertise" }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-xs font-black uppercase tracking-widest hover:text-rose-600 transition-colors"
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="/resume.pdf"
              download="Meghna_Menon_Resume.pdf"
              className="brutal-btn text-xs"
              id="nav-resume-button"
            >
              <Download size={14} />
              RESUME
            </a>
          </div>

          <div className="md:hidden">
            <a 
              href="/resume.pdf"
              download="Meghna_Menon_Resume.pdf"
              className="brutal-card p-2 bg-rose-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
            >
              <Download size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1.5 bg-cyan-300 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black text-xs font-black uppercase tracking-widest mb-10"
                >
                  BRAND SOLUTIONS • CLIENT SERVICING
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="neo-title mb-10"
                  style={{ 
                    fontSize: 'clamp(2rem, 5vw, 4rem)', 
                    overflowWrap: 'break-word', 
                    lineHeight: 1.1,
                    hyphens: 'none'
                  }}
                >
                  I thrive where <span className="text-white [-webkit-text-stroke:3px_black]">creativity</span> meets <span className="bg-rose-500 text-white px-4">coordination.</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-900 mb-12 leading-tight font-bold max-w-3xl border-l-[6px] border-black pl-8"
                >
                  Whether it's syncing teams, shaping strategy, or bringing ideas to life; I love making things happen behind the scenes. Focused on Brand Solutions and Client Servicing.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                >
                  <a 
                    href="/resume.pdf"
                    download="Meghna_Menon_Resume.pdf"
                    className="brutal-btn brutal-btn-pink text-lg py-5 px-10"
                    id="hero-resume-button"
                  >
                    <Download size={24} />
                    GET MY RESUME
                  </a>
                  <div className="flex items-center gap-6">
                    <a 
                      href="https://www.linkedin.com/in/meghna-menon-653771240/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="brutal-card p-5 hover:bg-black hover:text-white transition-colors"
                      id="linkedin-link"
                    >
                      <Linkedin size={32} />
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 5, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-full lg:justify-self-end"
              >
                <div className="relative aspect-[4/5] max-w-sm mx-auto brutal-card bg-yellow-100 p-4">
                  <div className="relative h-full w-full overflow-hidden border-[3px] border-black">
                    <img 
                      src="/profile.jpeg" 
                      alt="Meghna Menon" 
                      className="w-full h-full object-cover grayscale brightness-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Brutalist accents */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-rose-500 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none rotate-12 z-20 flex items-center justify-center font-display font-black text-white text-center p-2 leading-none">
                    BRAND <br/> EXPERT
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-32 border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="WORK EXPERIENCE" 
              subtitle="Navigating brand solutions and client servicing for industry leaders and high-impact properties."
            />

            <div className="relative mt-20 space-y-16">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="brutal-card p-6 md:p-10 bg-white grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 group max-w-full box-border"
                >
                  <div className="min-w-0">
                    <div className="inline-block px-3 py-1 bg-yellow-300 border-[2px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black uppercase mb-4">
                      {exp.period}
                    </div>
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="w-20 h-20 border-[3px] border-black grayscale mb-4"
                    />
                    <h3 
                      className="font-black font-display uppercase leading-tight mb-2"
                      style={{ 
                        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', 
                        wordBreak: 'normal', 
                        overflowWrap: 'normal', 
                        whiteSpace: 'normal', 
                        hyphens: 'none' 
                      }}
                    >
                      {exp.company}
                    </h3>
                    <p className="text-rose-600 font-black uppercase text-xs tracking-widest break-words">{exp.role}</p>
                  </div>
                  
                  <div className="border-l-0 md:border-l-[3px] border-black pl-0 md:pl-8 min-w-0">
                    <p className="text-xl font-bold mb-8 leading-snug text-gray-900 italic break-words">
                      {exp.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-6">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-4 text-sm font-bold text-gray-800 leading-relaxed break-words">
                          <span className="w-2 h-2 bg-black mt-2 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Decks */}
        <section id="decks" className="py-32 border-t-[3px] border-black bg-cyan-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="A FEW OF MY WORKS" 
              subtitle="A collection of professional pitch decks, sponsorship proposals, and marketing evaluations."
            />

            <div className="grid md:grid-cols-3 gap-10 mt-12">
              {FEATURED_DECKS.map((deck, idx) => (
                <motion.div
                  key={deck.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="brutal-card p-6 flex flex-col h-full bg-white group"
                >
                  <div className="aspect-[16/10] overflow-hidden border-[3px] border-black mb-8">
                    <img 
                      src={deck.image} 
                      alt={deck.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-black font-display mb-4 uppercase leading-none">
                    {deck.title}
                  </h3>
                  <p className="text-sm font-bold text-gray-700 leading-relaxed mb-8 flex-grow">
                    {deck.description}
                  </p>
                  <a 
                    href={deck.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn w-full justify-center group/btn"
                  >
                    VIEW DECK
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Case Studies Grid */}
        <section id="work" className="py-32 border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="LIVE CASE STUDIES" 
              subtitle="Real-world case studies showcasing strategy and creative brand integration."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {CASE_STUDIES.map((work, idx) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="brutal-card p-5 bg-white flex flex-col h-full group"
                  id={`case-study-${idx}`}
                >
                  <div className="aspect-[4/3] overflow-hidden border-[3px] border-black mb-6">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-lg font-black font-display uppercase mb-6 line-clamp-2 leading-tight flex-grow">
                    {work.title}
                  </h3>
                  <div className="mt-auto">
                    <a 
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn brutal-btn-pink w-full justify-center text-[10px] group/btn"
                    >
                      VIEW CASE STUDY
                      <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* On-Ground Glimpses */}
        <section id="gallery" className="py-32 border-t-[3px] border-black bg-pink-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="ON-GROUND GLIMPSES" 
              subtitle="Capturing the energy and coordination behind major live properties and brand executions."
            />

            <GallerySection />
          </div>
        </section>

        {/* Skills & Achievements */}
        <section id="skills" className="py-32 border-t-[3px] border-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <SectionHeader 
                  title="EXPERTISE" 
                  subtitle="A tactical toolkit sharpened through strategic marketing and comprehensive client servicing."
                />
                <div className="flex flex-wrap gap-4 mt-8">
                  {SKILLS.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-6 py-3 border-[3px] border-black bg-white font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="brutal-card p-12 bg-rose-500 text-white relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 opacity-20 rotate-12">
                    <Award size={200} />
                  </div>
                  <div className="relative z-10">
                    <Award className="mb-8 text-white" size={64} />
                    <h3 className="text-4xl font-black font-display uppercase mb-6 leading-none">Academic <br/> Excellence</h3>
                    <p className="text-xl font-bold mb-10 leading-snug">
                      Top-tier performance and strategic thinking throughout my Bachelor of Business Administration.
                    </p>
                    <div className="inline-block px-8 py-5 border-[3px] border-white bg-black/20 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)]">
                      <span className="block text-xs uppercase tracking-[0.2em] font-black text-rose-200 mb-2">RANK HIGHLIGHT</span>
                      <span className="text-2xl font-black uppercase">#1 IN BBA DEPT (2023-2025)</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 border-t-[3px] border-black bg-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl neo-title mb-10 leading-none"
              >
                LET'S <br/> <span className="text-rose-500">WORK.</span>
              </motion.h2>
              <p className="text-2xl font-bold leading-tight mb-16 max-w-2xl border-l-0 md:border-l-[6px] md:border-rose-500 md:pl-8">
                I sync teams and shape strategy, collaborating for high-impact Brand Solutions & Client Servicing.
              </p>
              
              <div className="flex flex-wrap gap-8 md:gap-12 justify-center">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=meghnamenon026@gmail.com&su=Connecting+from+your+Portfolio" target="_blank" 
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', position: 'relative', zIndex: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 border-[3px] border-white bg-rose-500 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] group-hover:shadow-none group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all">
                    <Mail size={32} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase font-black tracking-widest text-gray-400 mb-1">EMAIL ME</span>
                    <span 
                      className="font-black font-display uppercase hover:text-rose-500 transition-colors underline decoration-[3px] underline-offset-8 inline-block"
                      style={{ 
                        fontSize: 'clamp(0.9rem, 1.5vw, 1.25rem)', 
                        wordBreak: 'break-word', 
                        overflowWrap: 'break-word', 
                        hyphens: 'none', 
                        whiteSpace: 'normal' 
                      }}
                    >
                      meghnamenon026@gmail.com
                    </span>
                  </div>
                </a>
                <div className="flex items-center gap-6 group">
                  <a href="https://www.linkedin.com/in/meghna-menon-653771240/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="w-16 h-16 border-[3px] border-white bg-cyan-500 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] group-hover:shadow-none group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all">
                      <Linkedin size={32} />
                    </div>
                  </a>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase font-black tracking-widest text-gray-400 mb-1">LINKEDIN</span>
                    <a href="https://www.linkedin.com/in/meghna-menon-653771240/" target="_blank" rel="noopener noreferrer" className="text-2xl font-black font-display uppercase hover:text-rose-500 transition-colors underline decoration-[3px] underline-offset-8">
                      Meghna Menon
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-32 pt-16 border-t-[3px] border-white/20 flex flex-col md:flex-row items-center justify-between gap-10 text-gray-500">
              <p className="text-xs font-black uppercase tracking-widest">© {new Date().getFullYear()} MEGHNA MENON • BRAND SOLUTIONS & SERVICING</p>
              <div className="flex gap-12 text-xs font-black uppercase tracking-widest">
                <a href="#" className="hover:text-rose-500 transition-all hover:scale-110">LINKEDIN</a>
                <a href="#" className="hover:text-rose-500 transition-all hover:scale-110">INSTAGRAM</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
