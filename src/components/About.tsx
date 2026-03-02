import { Code, Database, Globe, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
    color: "text-blue-400",
    shadow: "hover:shadow-blue-500/30"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    color: "text-purple-400",
    shadow: "hover:shadow-purple-500/30"
  },
  {
    icon: Globe,
    title: "Full Stack Integration",
    description: "REST APIs, GraphQL, Microservices",
    color: "text-cyan-400",
    shadow: "hover:shadow-cyan-500/30"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Progressive Web Apps",
    color: "text-pink-400",
    shadow: "hover:shadow-pink-500/30"
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 1+ years of experience
            building scalable web applications. I love turning complex problems
            into simple, beautiful solutions that users enjoy.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`
                p-6 rounded-xl 
                bg-white/10 backdrop-blur-lg border border-white/20 
                hover:border-white/40 hover:shadow-lg ${skill.shadow}
                transition-all duration-300 group
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>


        <div
          className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-8 
             hover:border-white/40 
             hover:shadow-[0_0_25px_rgba(37,99,235,0.3)]
             transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">20+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">1+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">99.99%</h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
