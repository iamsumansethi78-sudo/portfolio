import { motion } from "motion/react";
import { Heart, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/suman-sethi-659886413",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:iamsumansethi78@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+917735239951",
      label: "Phone"
    }
  ];

  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#38BDF8] rounded-full blur-[150px] opacity-5 bottom-0 left-1/4" />
        <div className="absolute w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-5 bottom-0 right-1/4" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
              Suman Sethi
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Manual Tester | SQL Developer | QA Engineer
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Designed for Software Testing & QA Opportunities
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#38BDF8] transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.icon === Linkedin ? "_blank" : undefined}
                  rel={social.icon === Linkedin ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#38BDF8] hover:to-[#8B5CF6] hover:border-transparent transition-all hover:scale-110"
                >
                  <social.icon size={18} className="text-white" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Open to opportunities in Manual Testing, QA Engineering, and SQL Development
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Suman Sethi. Crafted with{" "}
            <Heart size={14} className="inline text-[#38BDF8]" /> for Quality Assurance Excellence
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-[#38BDF8] hover:to-[#8B5CF6] hover:border-transparent transition-all hover:scale-105"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">Available for hire</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
