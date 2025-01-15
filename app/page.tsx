'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Users, BarChart3, Database, Lightbulb, Target, Shield, ArrowRight } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Transform Education Through Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive platform for designing, managing, and evolving educational curricula
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 justify-center"
            >
              <Link href="/register" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md text-lg font-medium inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md text-lg font-medium">
                View Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Solution</h2>
            <p className="text-gray-600">
              Our platform provides all the tools needed for modern curriculum design and management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Database className="h-8 w-8" />}
              title="Resource Management"
              description="Centralized database for all educational materials including e-textbooks and video content"
              gradient="from-blue-500 to-cyan-500"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Collaboration Tools"
              description="Work together with educators and experts to create and refine curricula"
              gradient="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={<Target className="h-8 w-8" />}
              title="Learning Outcomes"
              description="Define and track course objectives and program outcomes effectively"
              gradient="from-orange-500 to-red-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Simple and efficient curriculum design process</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "1",
                title: "Register",
                description: "Create your institutional account"
              },
              {
                step: "2",
                title: "Design",
                description: "Use our dynamic curriculum design tools"
              },
              {
                step: "3",
                title: "Collaborate",
                description: "Work with other educators"
              },
              {
                step: "4",
                title: "Submit",
                description: "Get AICTE acknowledgment"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-gray-400"
                  >
                    <ArrowRight className="w-full h-full" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Institution?</h2>
                <p className="text-gray-600 mb-6">
                  Join hundreds of institutions already using our platform to enhance their educational programs.
                </p>
                <Link href="/register" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md text-lg font-medium">
                  Get Started Now
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 md:p-8 text-white flex items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      AICTE Compliant
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Collaborative Platform
                    </li>
                    <li className="flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      Resource Library
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Analytics Dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  gradient 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  gradient: string 
}) {
  return (
    <motion.div variants={fadeInUp}>
      <div className="relative overflow-hidden group hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity"
          style={{
            background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`
          }}
        />
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className={`mb-4 inline-block p-3 rounded-lg text-white bg-gradient-to-br ${gradient}`}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

