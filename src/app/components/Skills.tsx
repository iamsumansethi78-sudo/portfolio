import { motion } from "motion/react";
import { TestTube, Bug, Database, CheckCircle } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: TestTube,
      title: "Manual Testing",
      gradient: "from-[#38BDF8] to-[#06B6D4]",
      skills: [
        "SDLC",
        "STLC",
        "Test Cases",
        "Test Scenarios",
        "Defect Life Cycle",
        "Regression Testing",
        "Smoke Testing",
        "Sanity Testing"
      ]
    },
    {
      icon: Bug,
      title: "Defect Tracking",
      gradient: "from-[#8B5CF6] to-[#38BDF8]",
      skills: [
        "Jira",
        "Bugzilla",
        "Quality Center"
      ]
    },
    {
      icon: Database,
      title: "SQL",
      gradient: "from-[#06B6D4] to-[#8B5CF6]",
      skills: [
        "CRUD Operations",
        "Joins",
        "Sub Queries",
        "Functions",
        "DDL",
        "DML",
        "TCL",
        "DCL",
        "DQL",
        "Normalization",
        "ER Diagrams"
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#38BDF8] rounded-full blur-[150px] opacity-10 bottom-0 left-0" />
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#38BDF8]/30 transition-all h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * skillIndex }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${category.gradient} group-hover/item:scale-150 transition-transform`} />
                      <span className="text-gray-300 group-hover/item:text-white group-hover/item:translate-x-1 transition-all">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} bg-opacity-20`}>
                  <CheckCircle size={16} className="text-[#38BDF8]" />
                  <span className="text-sm text-gray-300">
                    {category.skills.length} Skills
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="relative group inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4">
              <p className="text-gray-300">
                Continuously learning and expanding expertise in{" "}
                <span className="text-[#38BDF8] font-semibold">Quality Assurance</span> and{" "}
                <span className="text-[#8B5CF6] font-semibold">Software Testing</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
