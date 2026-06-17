import { motion } from "motion/react";
import { Download, Mail, FolderOpen, TestTube2, Bug, Database, GitHub } from "lucide-react";

export function Hero() {
  const resumePath = "/assets/resume.pdf";
  const handleDownloadResume = () => {
    // Open resume if present in public/assets
    window.open(resumePath, "_blank");
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#38BDF8] rounded-full blur-[120px] opacity-20 -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-[#8B5CF6] rounded-full blur-[120px] opacity-20 top-40 right-20 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute w-96 h-96 bg-[#06B6D4] rounded-full blur-[120px] opacity-20 bottom-20 left-1/3 animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Floating Icons */}
        {[TestTube2, Bug, Database].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-[#38BDF8] opacity-10"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 5 + index,
              repeat: Infinity,
              delay: index * 0.5
            }}
            style={{
              top: `${20 + index * 25}%`,
              left: `${10 + index * 30}%`,
            }}
          >
            <Icon size={60} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#38BDF8]/20 to-[#8B5CF6]/20 border border-[#38BDF8]/30 backdrop-blur-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] bg-clip-text text-transparent">
                QA Engineer & SQL Developer
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <img
              src="/assets/photo.jpeg"
              alt="Suman Sethi"
              className="w-28 h-28 rounded-full object-cover border-2 border-white/10 shadow-lg"
            />
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
            >
              <span className="block text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#38BDF8] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent mb-2">
                Suman Sethi
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            Manual Tester | SQL Developer | QA Engineer
          </motion.p>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about ensuring software quality through meticulous manual testing, 
            comprehensive test case design, and robust database validation. Committed to 
            delivering bug-free applications and exceptional user experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] rounded-full font-medium text-white overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <button
              onClick={handleContactClick}
              className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#38BDF8]/30 rounded-full font-medium text-white hover:bg-white/10 hover:border-[#38BDF8]/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </span>
            </button>

            <button
              onClick={handleProjectsClick}
              className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#06B6D4]/30 rounded-full font-medium text-white hover:bg-white/10 hover:border-[#06B6D4]/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <FolderOpen size={20} />
                View Projects
              </span>
            </button>

            <a
              href="https://github.com/iamsumansethi78-sudo"
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#06B6D4]/30 rounded-full font-medium text-white hover:bg-white/10 hover:border-[#06B6D4]/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all hover:scale-105 flex items-center gap-2"
            >
              <GitHub size={20} />
              View GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#38BDF8]/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
