import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10 backdrop-blur-md bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Gautam Gupta
            </h3>
            <p className="text-white/70 dark:text-white/60 leading-relaxed">
              Full Stack Developer passionate about creating innovative
              solutions and beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() =>
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-white/60 hover:text-white transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/Gautam7701" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gautamgupta13/" },
                { icon: Mail, href: "mailto:gautamgupta2606@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60">
            © {currentYear} Gautam Gupta. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
