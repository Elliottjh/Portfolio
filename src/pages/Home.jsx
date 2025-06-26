import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Award, Clock, Users, CheckCircle } from 'lucide-react'

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const features = [
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'Every project is executed with precision and attention to detail that exceeds industry standards.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your time and ensure projects are completed within agreed timelines.'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Our experienced professionals bring expertise and dedication to every project.'
    }
  ]

  const recentProjects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'Residential',
      image: '/images/project-1.jpg',
      description: 'Complete home construction with contemporary design elements.'
    },
    {
      id: 2,
      title: 'Commercial Office Space',
      category: 'Commercial',
      image: '/images/project-2.jpg',
      description: 'Modern office renovation with sustainable materials.'
    },
    {
      id: 3,
      title: 'Kitchen Renovation',
      category: 'Renovation',
      image: '/images/project-3.jpg',
      description: 'Complete kitchen transformation with custom cabinetry.'
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Building
                <span className="block text-primary-600">Excellence</span>
                With Care
              </h1>
              <p className="text-lg text-neutral-600 mb-8 max-w-xl">
                We deliver exceptional building and construction services with meticulous 
                attention to detail. Every project reflects our commitment to quality 
                craftsmanship and professional excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary group">
                  View Our Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get Quote
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-neutral-200 rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="/images/hero-image.jpg"
                  alt="Professional construction work"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-medium border border-neutral-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">50+ Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">100% Satisfaction</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 lg:py-32">
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern techniques to deliver 
              exceptional results that stand the test of time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section ref={projectsRef} className="py-20 lg:py-32 bg-neutral-50">
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Take a look at some of our recent work that showcases our commitment 
              to quality and attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group cursor-pointer hover:shadow-medium transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-neutral-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="btn-primary group">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="container section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Let's discuss your vision and create something exceptional together. 
              Contact us for a consultation and detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100">
                Get Started Today
              </Link>
              <Link to="/about" className="btn-secondary border-neutral-600 text-neutral-300 hover:bg-neutral-800">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 