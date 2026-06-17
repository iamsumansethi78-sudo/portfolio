import { motion } from "motion/react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export function Education() {
  const educationTimeline = [
    {
      year: "2025",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "BCA Graduate",
      icon: GraduationCap,
      description: "Completed comprehensive computer applications program with focus on software development, database management, and quality assurance.",
      gradient: "from-[#38BDF8] to-[#06B6D4]"
    },
    {
      year: "Completed",
      degree: "Intermediate",
      institution: "Higher Secondary Education",
      icon: BookOpen,
      description: "Successfully completed intermediate studies with strong foundation in sciences and mathematics.",
      gradient: "from-[#8B5CF6] to-[#38BDF8]"
    },
    {
      year: "Completed",
      degree: "10th Class",
      institution: "Secondary Education",
      icon: Award,
      description: "Completed secondary education with excellent academic performance.",
      gradient: "from-[#06B6D4] to-[#8B5CF6]"
    }
  ];

  return (
    <section id="education" className="relative py-24 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#38BDF8] rounded-full blur-[150px] opacity-10 top-0 left-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block mb-4">
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#38BDF8] via-[#8B5CF6] to-[#06B6D4]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="group relative">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                    
                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#38BDF8]/30 transition-all ml-16 md:ml-0">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${item.gradient} mb-4`}>
                        <span className="text-sm font-semibold text-white">
                          {item.year}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-[#38BDF8] font-medium mb-3">
                        {item.institution}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center border-4 border-[#0F172A] group-hover:scale-125 transition-transform shadow-[0_0_30px_rgba(56,189,248,0.5)]`}>
                    <item.icon size={28} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="relative group inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4">
              <p className="text-gray-300">
                Committed to <span className="text-[#38BDF8] font-semibold">continuous learning</span> and{" "}
                <span className="text-[#8B5CF6] font-semibold">professional development</span> in Quality Assurance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
