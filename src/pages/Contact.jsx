import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@buildcraft.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Your City, State',
      description: 'Serving surrounding areas'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 8AM-6PM',
      description: 'Emergency calls anytime'
    }
  ]

  const projectTypes = [
    'New Construction',
    'Renovation',
    'Commercial Project',
    'Custom Carpentry',
    'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You would typically send this to your backend or email service
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    })
  }

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
              Let's Build
              <span className="block text-primary-600">Together</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Ready to start your project? We'd love to discuss your vision and 
              provide you with a detailed quote. Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-32">
        <div className="container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-soft border border-neutral-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                  <info.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-neutral-900 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-neutral-600">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200"
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, budget considerations, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary group"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Ready to Start?
                </h2>
                <p className="text-neutral-600 mb-6">
                  We're here to help bring your construction and building projects 
                  to life. Whether you're planning a new home, renovation, or 
                  commercial project, our team is ready to work with you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-medium text-neutral-900">Free Consultation</h3>
                      <p className="text-sm text-neutral-600">
                        We offer complimentary project consultations to discuss your needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-medium text-neutral-900">Detailed Estimates</h3>
                      <p className="text-sm text-neutral-600">
                        Transparent, detailed quotes with no hidden costs or surprises.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-medium text-neutral-900">Professional Team</h3>
                      <p className="text-sm text-neutral-600">
                        Licensed, insured, and experienced professionals on every project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-medium text-neutral-900">Quality Guarantee</h3>
                      <p className="text-sm text-neutral-600">
                        We stand behind our work with comprehensive warranties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary-50 rounded-xl border border-primary-200">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Emergency Services
                </h3>
                <p className="text-primary-700 text-sm mb-4">
                  Need immediate assistance? We're available for emergency 
                  construction and repair services.
                </p>
                <a 
                  href="tel:+15551234567" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: (555) 123-4567
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 