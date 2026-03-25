import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../../src/assets/heroimage.png";
import { motion } from "framer-motion";


const textVariant = (delay = 0)=> ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
}) as const;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Brainee Logo"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          variants={textVariant(0.1)}
          initial="hidden"
          animate="visible"
          className="text-gray-400 text-2xl mb-3"
        >
          Hello, I’m
        </motion.p>

        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-4 tracking-tight leading-snug"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Gautam Gupta
          </span>
        </motion.h1>

        <motion.h2
          variants={textVariant(0.5)}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6 tracking-tight"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={textVariant(0.7)}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Turning ideas into powerful digital experiences. I’m a Full Stack Developer who designs, builds, and optimizes web applications that are fast, scalable, and user-focused
        </motion.p>

        {/* Buttons */}

        <motion.div
  variants={textVariant(0.9)}
  initial="hidden"
  animate="visible"
  className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
>
  <Button
    size="lg"
    className="px-8 py-4 text-lg rounded-lg 
      bg-[rgba(37,99,235,0.15)] 
      border border-[#2563eb] 
      backdrop-blur-md 
      text-[#2563eb] font-semibold 
      shadow-[0_0_18px_rgba(37,99,235,0.35)] 
      transition-all duration-300 
      hover:bg-[rgba(37,99,235,0.3)] 
      hover:shadow-[0_0_28px_rgba(37,99,235,0.65)] 
      hover:text-white"
    onClick={() =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    View My Work
  </Button>

  <Button
    variant="outline"
    size="lg"
    className="px-8 py-4 text-lg rounded-lg 
      bg-[rgba(37,99,235,0.15)] 
      border border-[#2563eb] 
      backdrop-blur-md 
      text-[#2563eb] font-semibold 
      shadow-[0_0_18px_rgba(37,99,235,0.35)] 
      transition-all duration-300 
      hover:bg-[rgba(37,99,235,0.3)] 
      hover:shadow-[0_0_28px_rgba(37,99,235,0.65)] 
      hover:text-white"
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    Get In Touch
  </Button>
</motion.div>


        {/* Social Icons */}
        <motion.div
          variants={textVariant(1.1)}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-6 mb-8"
        >
          {[
            { icon: <Github className="w-6 h-6" />, link: "https://github.com/Gautam7701" },
            {
              icon: <Linkedin className="w-6 h-6" />,
              link: "https://www.linkedin.com/in/gautamgupta13/",
            },
            {
              icon: <Mail className="w-6 h-6" />,
              link: "mailto:gautamgupta2606@gmail.com",
              newTab:false,
            },
          ].map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-black text-white backdrop-blur-md transition transform hover:-translate-y-2 hover:shadow-[0_0_15px_#00d4ff] hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          variants={textVariant(1.3)}
          initial="hidden"
          animate="visible"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white/5 border border-black text-white hover:bg-white/15 backdrop-blur-md transition animate-[float_2s_ease-in-out_infinite] z-50 hover:shadow-[0_0_15px_#00d4ff]"
        >
          <ArrowDown className="w-6 h-6 text-gray-300" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
