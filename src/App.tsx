import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Card from './components/Card';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import { content } from './data/content';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {content.hero.name}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              {content.hero.role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance"
            >
              {content.hero.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title={content.about.title}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion
            title="About Me"
            summary={content.about.summary}
            details={content.about.details}
            className="bg-white dark:bg-gray-800"
          />
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" className="bg-gray-50 dark:bg-gray-800/50">
        <div className="space-y-6">
          {content.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion
                title={`${exp.title} @ ${exp.company}`}
                summary={`${exp.period} • ${exp.location}\n\n${exp.summary}`}
                details={exp.details}
                className="bg-white dark:bg-gray-800"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.projects.map((project, index) => (
            <Card key={index} delay={index * 0.1}>
              <Accordion
                title={project.title}
                summary={project.summary}
                details={project.details}
                className="border-0 p-0"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills" className="bg-gray-50 dark:bg-gray-800/50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.skills.map((skillCategory, index) => (
            <Card key={index} delay={index * 0.1}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 dark:text-gray-300 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Leadership Section */}
      <Section id="leadership" title="Leadership">
        <div className="space-y-6">
          {content.leadership.map((leadership, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion
                title={`${leadership.title} @ ${leadership.organization}`}
                summary={`${leadership.period}\n\n${leadership.summary}`}
                details={leadership.details}
                className="bg-white dark:bg-gray-800"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact" className="bg-gray-50 dark:bg-gray-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <Card>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborations, 
              or just having a conversation about engineering and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${content.contact.email}`}
                className="btn-primary"
              >
                Send Email
              </a>
              <a
                href={content.contact.resumeUrl}
                download
                className="btn-secondary"
              >
                Download Resume
              </a>
            </div>
          </Card>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
