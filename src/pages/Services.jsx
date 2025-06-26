import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, Building, Wrench, Hammer, CheckCircle, ArrowRight } from 'lucide-react'

const Services = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const mainServices = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom home building and residential construction services with attention to every detail.',
      features: [
        'New Home Construction',
        'Custom Design Build',
        'Foundation & Framing',
        'Electrical & Plumbing',
        'Finishing & Trim Work'
      ],
      image: './images/residential-service.jpg'
    },
    {
      icon: Building,
      title: 'Commercial Building',
      description: 'Professional commercial construction services for businesses and organizations.',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Warehouses',
        'Mixed-Use Projects',
        'Tenant Improvements'
      ],
      image: './images/commercial-service.jpg'
    },
    {
      icon: Wrench,
      title: 'Renovations & Remodeling',
      description: 'Transform your existing space with our comprehensive renovation services.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovation',
        'Basement Finishing',
        'Room Additions',
        'Whole House Renovations'
      ],
      image: './images/renovation-service.jpg'
    },
    {
      icon: Hammer,
      title: 'Custom Carpentry',
      description: 'Expert craftsmanship for custom woodwork and specialty carpentry projects.',
      features: [
        'Built-in Cabinetry',
        'Custom Millwork',
        'Staircases & Railings',
        'Outdoor Structures',
        'Furniture & Fixtures'
      ],
      image: './images/carpentry-service.jpg'
    }
  ]

  const additionalServices = [
    'Project Management',
    'Design Consultation',
    'Permit Assistance',
    'Material Procurement',
    'Quality Inspections',
    'Warranty Support'
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision, requirements, and budget to understand your project goals.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and specifications tailored to your needs.'
    },
    {
      step: '03',
      title: 'Project Execution',
      description: 'We bring your project to life with skilled craftsmanship and attention to detail.'
    },
    {
      step: '04',
      title: 'Quality Completion',
      description: 'Final inspections and handover ensure everything meets our high standards.'
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Our
              <span className="block text-primary-600">Services</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              From concept to completion, we provide comprehensive building and 
              construction services tailored to your unique needs and vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={servicesRef} className="py-20 lg:py-32">
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We offer a full range of construction and building services, 
              each delivered with the same commitment to quality and excellence.
            </p>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary group">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] bg-neutral-200 rounded-2xl overflow-hidden shadow-medium">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Beyond our core construction services, we provide comprehensive 
              support to ensure your project's success from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-soft border border-neutral-200 text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-medium text-neutral-900">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is delivered 
              on time, on budget, and to your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-neutral-300 mx-auto" />
                  </div>
                )}
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Contact us today to discuss your project and learn how our 
              services can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100">
                Get Free Quote
              </a>
              <a href="/projects" className="btn-secondary border-neutral-600 text-neutral-300 hover:bg-neutral-800">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 