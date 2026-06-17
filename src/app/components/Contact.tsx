import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7735239951",
      href: "tel:+917735239951",
      gradient: "from-[#38BDF8] to-[#06B6D4]"
    },
    {
      icon: Mail,
      label: "Email",
      value: "iamsumansethi78@gmail.com",
      href: "mailto:iamsumansethi78@gmail.com",
      gradient: "from-[#8B5CF6] to-[#38BDF8]"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Suman Sethi",
      href: "https://www.linkedin.com/in/suman-sethi-659886413",
      gradient: "from-[#06B6D4] to-[#8B5CF6]"
    }
  ];

  return (
    <section id="contact" className="relative py-24 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-10 bottom-0 right-0" />
        <div className="absolute w-96 h-96 bg-[#38BDF8] rounded-full blur-[150px] opacity-10 top-0 left-0" />
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
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities in Software Testing and QA Engineering. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/20 to-[#8B5CF6]/20 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target={item.icon === Linkedin ? "_blank" : undefined}
                      rel={item.icon === Linkedin ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                        <p className="text-white font-medium group-hover/item:text-[#38BDF8] transition-colors break-all">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Location Badge */}
                <div className="mt-8 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <MapPin size={20} className="text-[#38BDF8]" />
                  <div>
                    <p className="text-sm text-gray-400">Available for</p>
                    <p className="text-white font-medium">Remote & On-site Opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-[#06B6D4]/20 rounded-3xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-2 focus:ring-[#38BDF8]/20 transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group/btn relative px-8 py-4 bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] rounded-xl font-medium text-white overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={20} />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
