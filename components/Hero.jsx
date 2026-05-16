import { motion } from 'framer-motion';
import { heroContent } from '../data/content';
import {
  GraduationCap,
  BookOpen,
  Rocket,
  Lightbulb
} from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-primary-purple/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight"
            >
              {heroContent.headline}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              {heroContent.subtext}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              {heroContent.ctaButtons.map((button, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector(button.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${button.primary
                      ? 'bg-gradient-primary text-white hover:shadow-xl'
                      : 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
                    }`}
                >
                  {button.text}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-primary rounded-2xl p-6 text-white"
                  >
                    <div className="mb-2">
                      <GraduationCap size={40} />
                    </div>
                    <div className="font-semibold">Graduate</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="mb-2">
                      <BookOpen size={40} />
                    </div>
                    <div className="font-semibold text-gray-800">Learn</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="mb-2">
                      <Rocket size={40} />
                    </div>
                    <div className="font-semibold text-gray-800">Launch</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-primary rounded-2xl p-6 text-white"
                  >
                    <div className="mb-2">
                      <Lightbulb size={40} />
                    </div>
                    <div className="font-semibold">Innovate</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
