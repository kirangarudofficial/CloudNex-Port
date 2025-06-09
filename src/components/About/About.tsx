import React from 'react';
import { Award, Target, Zap, Users, TrendingUp, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    'AWS', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions',
    'Linux', 'Python', 'Bash', 'CloudFormation', 'Ansible', 'Prometheus',
    'Grafana', 'ELK Stack', 'CI/CD', 'Infrastructure as Code', 'Monitoring',
    'Security', 'Cost Optimization', 'Multi-cloud'
  ];

  const highlights = [
    {
      icon: Target,
      title: 'Strategic Innovation',
      description: 'Pioneering the integration of AI technologies with traditional DevOps practices to create next-generation infrastructure solutions',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Accelerated learning methodology enabling mastery of cutting-edge cloud technologies and AI-enhanced automation workflows',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Successfully architected and deployed 20+ enterprise-grade solutions using modern cloud-native approaches and best practices',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Future-Ready',
      description: 'Bringing fresh perspectives and innovative methodologies to transform traditional infrastructure into intelligent, self-managing systems',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-6"
          >
            <Globe className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">About CloudNex</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Redefining Cloud
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Infrastructure Excellence
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Where innovation meets infrastructure. We're pioneering the future of DevOps 
            through AI-enhanced automation and next-generation cloud architectures.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                CloudNex represents a paradigm shift in how organizations approach cloud infrastructure. 
                Born from the intersection of traditional DevOps excellence and cutting-edge AI innovation, 
                we're not just adapting to the future—we're creating it.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Our unique approach combines battle-tested cloud engineering principles with revolutionary 
                AI-powered automation, delivering infrastructure solutions that are not only scalable and 
                secure but also intelligent and self-optimizing.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                With over 20 successfully deployed enterprise solutions, we've proven that innovation 
                and reliability aren't mutually exclusive. We're ready to transform your infrastructure 
                into a competitive advantage.
              </p>
            </motion.div>

            {/* Company Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  50%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Cost Reduction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className={`relative w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-4`}>
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  color: "#06b6d4"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;