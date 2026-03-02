import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import Brainee from "../assets/project1.png"
import dashboardImage from "../assets/project2.png";
import socialImage from "../assets/project3.png";
import promptspot from "../assets/P4.png"
import irada from "../assets/image.png"
import nikeshoes from "../assets/P5.png"
import moviemate from "../assets/Project7.png"
import hyrstack from "../assets/hyrstack.png"
import connectree from "../assets/connectree.png"
import vera from "../assets/vera.png"

const projects = [
  {
  title: "Vera – Shopify E-Commerce Store",
  description:
    "Built and optimized a production-ready Shopify e-commerce store from scratch, improving product visibility by 35%, scaling listings from 10+ to 50+, and implementing a referral system that increased sales by 20%.",
  image: vera, // import your screenshot
  technologies: [
    "Shopify",
    "Liquid",
    "HTML",
    "CSS",
    "JavaScript",
    "Razorpay",
    "E-commerce Optimization"
  ],
  liveUrl: "https://veraindia.co.in/",
  featured: true,
},
 {
  title: "HyrStack – AI Career & Interview Preparation Platform",
  description:
    "Hyrstack is an AI-powered full-stack career platform built with Next.js and Node.js that generates mock interviews, career insights, and AI-assisted resumes. Features secure authentication, role-based access, performance dashboards, scheduled AI insights, and PDF resume export.",
  image: hyrstack, // make sure you import the image
  technologies: [
    "Next.js",
    "React.js",
    "Node.js",
    "Shadcn UI",
    "REST APIs",
    "PostgreSQL",
    "Prisma ORM",
    "Inngest",
    "Clerk Authentication",
    "Tailwind CSS",
  ],
  liveUrl: "https://hyrstack.vercel.app/", // replace if deployed
  githubUrl: "https://github.com/Gautam7701/HyrStack", // replace with actual repo
  featured: true,
},
  {
    title: "Brainee – AI-Powered Learning Platform",
    description:
      "Brainee is an AI-powered React.js platform featuring a chatbot, image generation, voice-to-text decoding, code generation, and text summarization, with a modern dark/light theme, responsive design, and secure Clerk authentication",
    image: Brainee,
    technologies: ["React", "Node.js", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://brainee-theta.vercel.app/",
    githubUrl: "https://github.com/Gautam7701/Brainee",
    featured: true,
  },
 {
  title: "Connectr.ee – Personal Link Portfolio Platform",
  description:
    "A full-stack link-in-bio platform built with Next.js that lets users create personalized pages to manage and showcase multiple links with secure authentication and optimized performance.",
  image: connectree, // make sure you import image
  technologies: [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "Authentication",
    "Protected Routes",
    "Vercel",
    "CI/CD"
  ],
  liveUrl: "https://connectr.ee/",
  githubUrl: "https://github.com/jaseemuddinn/connectree.git",
  featured: true,
},
  {
    title: "ShobhaDubai – Luxury Properties & Real Estate in Dubai",
    description:
      "ShobhaDubai showcases premium properties and architectural masterpieces across Dubai. From high-end apartments to iconic buildings, the platform offers an elegant and immersive viewing experience, highlighting the city’s finest real estate developments.",
    image: dashboardImage,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "JSX", "Redux"],
    liveUrl: "https://shobhadubai.vercel.app/",
    githubUrl: "https://github.com/Gautam7701/ShobhaDubai",
    featured: true,
  },
  {
    title: "E-Commerce Website",
    description:
      "Jewelanaire is a visually stunning and fully responsive jewellery e-commerce website designed for a freelancer client. It features a modern, luxurious UI and product-focused layouts to showcase jewellery collections beautifully, ensuring an engaging and premium shopping experience.",
    image: socialImage,
    technologies: ["HTML", "Shopify", "RazorPay", "CSS", "UI/UX"],
    liveUrl: "https://jewelanaire.com/",
    featured: false,
  },
  {
    title: "PromptSpot: Discover Creative Prompts",
    description:
      "PromptSpot is an open-source, AI-driven platform for discovering, creating, and sharing creative prompts. It empowers users to explore new ideas and fuel their creative projects.",
    image: promptspot,
    technologies: ["React.JS", "Next.JS", "MongoDB", "Node.js", "Redux"],
    liveUrl: "https://promptspots.vercel.app/",
    githubUrl: "https://github.com/Gautam7701/Promptspot",
    featured: false,
  },
  {
    title: "IRADA-Youth Engagement in Environmental Issues",
    description:
      "Developed a user-friendly website for the Youth Environmental Summit, enhancing participant engagement.",
    image: irada,
    technologies: ["React.Js", "Tailwind", "Javascript", "UI/UX", "JSX"],
    liveUrl: "https://iraada.vercel.app/",
    githubUrl: "https://github.com/Gautam7701/irada/",
    featured: false,
  },
  {
    title: "Nike Shoes: Style in Every Step",
    description:
      "Nike Shoes is a front-end e-commerce platform featuring stylish footwear, customer reviews, offers, and a seamless shopping experience.",
    image: nikeshoes,
    technologies: ["React.Js", "JSX", "Redux", "JavaScript", "Tailwind"],
    liveUrl: "https://nikefusion.netlify.app/",
    githubUrl: "https://github.com/Gautam7701/Nike",
    featured: false,
  },
  {
    title: "MOVIEMATE- Discover Your Next Favourite Film",
    description:
      "A responsive movie platform built with React and Tailwind CSS, featuring real-time data fetching and personalized recommendations.",
    image: moviemate,
    technologies: ["React.Js", "Tailwind", "JavaScript", "Redux", "API"],
    liveUrl: "https://filmmate.netlify.app/",
    githubUrl: "https://github.com/Gautam7701/MovieMate",
    featured: false,
  },
  
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 relative  bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#00d4ff] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group rounded-xl border border-white/10 backdrop-blur-md bg-white/5 shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] animate-fade-in stagger-${index + 1}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/50 hover:bg-[#2563eb] hover:shadow-[0_0_15px_#2563eb] transition"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800/60 border border-gray-600 hover:bg-gray-700 hover:shadow-[0_0_15px_#00d4ff] transition"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-[#2563eb]/10 text-[#00d4ff] rounded-full border border-[#2563eb]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="px-5 py-2 rounded-lg bg-[#2563eb]/20 border border-[#2563eb] text-[#00d4ff] font-medium hover:bg-[#2563eb] hover:text-white hover:shadow-[0_0_15px_#2563eb] transition-all"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank">
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="px-5 py-2 rounded-lg bg-gray-700/30 border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-[0_0_15px_#00d4ff] transition-all"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank">
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button
            size="lg"
            className="px-8 py-4 text-lg rounded-lg bg-[#2563eb]/20 border border-[#2563eb] text-[#00d4ff] font-semibold hover:bg-[#2563eb] hover:text-white hover:shadow-[0_0_25px_#2563eb] transition-all"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
