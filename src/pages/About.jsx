import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Calendar, Users, Target } from 'lucide-react'

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Target },
    { number: '15+', label: 'Years Experience', icon: Calendar },
    { number: '100%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Users }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every material, every technique, and every detail is carefully chosen to ensure lasting results.'
    },
    {
      title: 'Honest Communication',
      description: 'Clear, transparent communication throughout every project. We keep you informed and involved at every step.'
    },
    {
      title: 'Professional Excellence',
      description: 'Our team brings decades of combined experience and a commitment to professional standards in every project.'
    },
    {
      title: 'Client Partnership',
      description: 'We work alongside our clients as partners, ensuring your vision becomes reality while respecting your budget and timeline.'
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Building Trust
                <span className="block text-primary-600">Through Quality</span>
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                For over 15 years, we've been dedicated to delivering exceptional 
                building and construction services. Our foundation is built on trust, 
                quality craftsmanship, and unwavering commitment to our clients' vision.
              </p>
              <p className="text-lg text-neutral-600">
                Every project tells a story, and we're honored to be part of yours. 
                From concept to completion, we approach each job with the same level 
                of care and attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-neutral-200 rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="/images/about-hero.jpg"
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32">
        <div className="container section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-neutral-600">
                What started as a passion for quality craftsmanship has grown into 
                a trusted name in construction and building services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-neutral-600">
                  Our journey began with a simple belief: that every structure should 
                  be built with integrity, precision, and care. We started small, 
                  focusing on residential projects where we could work closely with 
                  families to bring their dreams to life.
                </p>
                <p className="text-neutral-600">
                  As word spread about our attention to detail and commitment to quality, 
                  we expanded our services to include commercial projects and renovations. 
                  Each project taught us something new, and we've carried those lessons 
                  forward to benefit every client.
                </p>
                <p className="text-neutral-600">
                  Today, we're proud to have completed over 50 projects, but we approach 
                  each new job with the same enthusiasm and dedication we had on day one. 
                  Your project isn't just another job to us—it's an opportunity to create 
                  something exceptional.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-neutral-200 rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src="/images/about-story.jpg"
                    alt="Construction process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 lg:py-32">
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-soft border border-neutral-200"
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="container section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              We'd love to learn about your project and discuss how we can bring 
              your vision to life with our experience and dedication to quality.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100">
                Start Your Project
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 