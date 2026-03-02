import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Let’s create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6 text-blue-400" />,
                title: "Email",
                value: "gautamgupta2606@gmail.com"
              },
              {
                icon: <Phone className="w-6 h-6 text-purple-400" />,
                title: "Phone",
                value: "+91-7701881864"
              },
              {
                icon: <MapPin className="w-6 h-6 text-pink-400" />,
                title: "Location",
                value: "New Delhi, India"
              },
              {
                icon: <Linkedin className="w-6 h-6 text-sky-400" />,
                title: "LinkedIn",
                value: "https://www.linkedin.com/in/gautamgupta13/"
              },
              {
                icon: <Github className="w-6 h-6 text-violet-400" />,
                title: "Github",
                value: "https://github.com/Gautam7701"
              }

              
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-white/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-gray-400 break-all">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Send Message
            </h3>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Name
              </label>
              <Input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:shadow-[0_0_15px_rgba(0,212,255,0.6)]"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Email Address
              </label>
              <Input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:shadow-[0_0_15px_rgba(0,212,255,0.6)]"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <Textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border-white/20 text-white placeholder-gray-500 focus:border-blue-400 focus:shadow-[0_0_15px_rgba(0,212,255,0.6)] min-h-[120px]"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="px-6 py-3 text-base
    sm:px-8 sm:py-4 sm:text-lg
    md:px-12 md:text-xl rounded-lg bg-[#2563eb]/20 border border-[#2563eb] text-[#00d4ff] font-semibold hover:bg-[#2563eb] hover:text-white hover:shadow-[0_0_25px_#2563eb] transition-all"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
