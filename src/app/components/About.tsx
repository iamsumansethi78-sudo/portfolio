import { motion } from "motion/react";
import { GraduationCap, TestTube, Database, TrendingUp } from "lucide-react";

export function About() {
  const features = [
    {
      icon: GraduationCap,
      title: "BCA Graduate",
      description: "Strong foundation in computer applications and software development",
      gradient: "from-[#38BDF8] to-[#06B6D4]"
    },
    {
      icon: TestTube,
      title: "Passionate Tester",
      description: "Dedicated to ensuring quality and reliability in every project",
      gradient: "from-[#8B5CF6] to-[#38BDF8]"
    },
    {
      icon: Database,
      title: "SQL Expert",
      description: "Proficient in database testing and complex query optimization",
      gradient: "from-[#06B6D4] to-[#8B5CF6]"
    },
    {
      icon: TrendingUp,
      title: "SDLC & STLC",
      description: "Deep understanding of software development and testing lifecycles",
      gradient: "from-[#38BDF8] to-[#8B5CF6]"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-10 top-0 right-0" />
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative group">
            {/* Glass Card */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/20 to-[#8B5CF6]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#38BDF8]/30 transition-all">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As a <span className="text-[#38BDF8] font-semibold">BCA Graduate</span> with a passion for 
                software testing, I specialize in ensuring the highest quality standards for software applications. 
                My expertise lies in <span className="text-[#8B5CF6] font-semibold">Manual Testing</span> and{" "}
                <span className="text-[#06B6D4] font-semibold">Database Testing</span>, where I meticulously 
                design test cases and validate software functionality.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a strong understanding of <span className="text-[#38BDF8] font-semibold">SDLC</span> and{" "}
                <span className="text-[#8B5CF6] font-semibold">STLC</span> methodologies, I approach testing 
                systematically to identify defects early and ensure smooth software releases. I'm enthusiastic 
                about contributing to teams that value quality, precision, and continuous improvement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#38BDF8]/30 transition-all h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
