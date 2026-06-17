import { motion } from "motion/react";
import { Flower, ShoppingCart, ExternalLink, CheckCircle2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      icon: Flower,
      title: "Flower Classification Using SVM",
      category: "Machine Learning Project",
      description: "Developed a machine learning-based classification system using Support Vector Machine (SVM) algorithm to accurately identify and categorize different flower species based on their features.",
      gradient: "from-[#38BDF8] to-[#06B6D4]",
      tags: ["Machine Learning", "SVM Algorithm", "Classification", "Python"],
      features: [
        "Support Vector Machine Implementation",
        "Multi-class Classification System",
        "Feature Engineering & Selection",
        "Model Training & Optimization"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Online Shopping Website Testing",
      category: "Manual Testing Project",
      description: "Comprehensive manual testing project for an e-commerce platform, including end-to-end test case creation, bug tracking, and quality assurance across all functional modules.",
      gradient: "from-[#8B5CF6] to-[#38BDF8]",
      tags: ["Manual Testing", "Test Cases", "Bug Reporting", "QA"],
      features: [
        "Manual Testing & Test Case Creation",
        "Comprehensive Bug Reporting",
        "Functional Testing Coverage",
        "Integration Testing",
        "Regression Testing Suite",
        "User Acceptance Testing"
      ]
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-10 top-1/2 right-0" />
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#38BDF8]/30 transition-all h-full flex flex-col">
                {/* Icon & Category */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <project.icon size={32} className="text-white" />
                  </div>
                  <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-sm text-gray-300 border border-white/10`}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#38BDF8]" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 * featureIndex }}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${project.gradient} mt-1.5 flex-shrink-0`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-[#38BDF8]/30 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#38BDF8]/30 rounded-full font-medium text-white hover:bg-white/10 hover:border-[#38BDF8]/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all hover:scale-105">
            <span className="flex items-center gap-2">
              View All Projects
              <ExternalLink size={18} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
