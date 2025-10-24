import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-accent-500 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Education
              </h3>
              <div className="space-y-4">
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-400">Annamacharya Institute of Technology and Science</p>
                  <p className="text-gray-500">2022 – 2025 | Tirupati, India</p>
                </div>
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">Diploma in Computer Science and Engineering</h4>
                  <p className="text-gray-400">Sri Venkateshwara Polytechnic College</p>
                  <p className="text-gray-500">2015 – 2022 | Tirupati, India</p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-accent-500 flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Experience
              </h3>
              <div className="space-y-4">

                {/* GreatHire Experience */}
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">
                    Software Developer & Team Lead Intern
                  </h4>
                  <p className="text-gray-400">
                    <a
                      href="https://greathire.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-accent-400"
                    >
                      GreatHire (Tech Startup)
                    </a>
                  </p>
                  <p className="text-gray-500">January 2025 – June 2025 | Hyderabad, India</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    <li>Led and delivered AI-powered projects, managing teams of interns and developers with Agile sprints and daily stand-ups.</li>
                    <li>Built and deployed full-stack applications using Java, Go, Python, Node.js, and AWS, integrating AI/ML for automation and decision-making.</li>
                    <li>Increased team productivity by 70% and reduced vulnerabilities by 75% using Git, CI/CD pipelines, SonarQube, and security audits (SAST/DAST).</li>
                  </ul>
                </div>

                {/* AI Researcher Experience */}
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">AI Researcher</h4>
                  <p className="text-gray-400">TensorZeroAI & Atlas Research.io</p>
                  <p className="text-gray-500">May 2024 – Present | Remote</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    <li>Developed AI-driven tools for automation, recruitment, and decision-making systems.</li>
                    <li>Worked with Supabase, OpenAI APIs, and n8n to build scalable AI workflows.</li>
                    <li>Implemented prompt-engineering and LLM-based data analysis modules.</li>
                  </ul>
                </div>

                {/* Cyber Security Analyst Intern */}
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">Cyber Security Analyst Intern</h4>
                  <p className="text-gray-400">Center for Cyber Security Studies And Research</p>
                  <p className="text-gray-500">April 2024 – July 2024 | Jaipur, India</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    <li>Performed vulnerability assessments and penetration testing on web applications.</li>
                    <li>Utilized SonarQube and OWASP methodologies for code security audits.</li>
                    <li>Assisted in improving secure coding practices and defensive development.</li>
                  </ul>
                </div>

                {/* Security Analyst Intern */}
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">Security Analyst Intern</h4>
                  <p className="text-gray-400">Cyberfort Digisec Solutions</p>
                  <p className="text-gray-500">January 2022 – May 2022 | Chennai, India</p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    <li>Conducted manual and automated security testing for client web platforms.</li>
                    <li>Identified and remediated 20+ security vulnerabilities in source code.</li>
                    <li>Collaborated with developers to implement code sanitization and secure deployment practices.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
