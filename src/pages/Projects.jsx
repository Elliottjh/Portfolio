import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const categories = ['All', 'Residential', 'Commercial', 'Renovation']

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'Residential',
      year: '2023',
      location: 'Suburban District',
      image: './images/project-1.jpg',
      images: ['./images/project-1.jpg', './images/project-1-2.jpg', './images/project-1-3.jpg'],
      description: 'A contemporary family home featuring clean lines, open-plan living, and sustainable materials. This project showcased our expertise in modern residential construction.',
      features: ['4 Bedrooms', '3 Bathrooms', 'Open Kitchen', 'Solar Panels', 'Smart Home System']
    },
    {
      id: 2,
      title: 'Commercial Office Complex',
      category: 'Commercial',
      year: '2023',
      location: 'Business District',
      image: './images/project-2.jpg',
      images: ['./images/project-2.jpg', './images/project-2-2.jpg', './images/project-2-3.jpg'],
      description: 'A state-of-the-art office building designed for maximum efficiency and employee comfort. Features include flexible workspaces and green building standards.',
      features: ['10,000 sq ft', 'LEED Certified', 'Modern HVAC', 'Flexible Layouts', 'Parking Garage']
    },
    {
      id: 3,
      title: 'Historic Home Renovation',
      category: 'Renovation',
      year: '2022',
      location: 'Historic Quarter',
      image: './images/project-3.jpg',
      images: ['./images/project-3.jpg', './images/project-3-2.jpg', './images/project-3-3.jpg'],
      description: 'Careful restoration of a 1920s home, preserving original character while adding modern amenities. This project required specialized restoration techniques.',
      features: ['Period Restoration', 'Modern Kitchen', 'Updated Electrical', 'Preserved Details', 'New Addition']
    },
    {
      id: 4,
      title: 'Luxury Townhouse',
      category: 'Residential',
      year: '2022',
      location: 'Premium District',
      image: './images/project-4.jpg',
      images: ['./images/project-4.jpg', './images/project-4-2.jpg', './images/project-4-3.jpg'],
      description: 'An elegant townhouse combining traditional architecture with contemporary interior design. High-end finishes throughout.',
      features: ['3 Stories', 'Rooftop Terrace', 'Premium Finishes', 'Wine Cellar', 'Home Theater']
    },
    {
      id: 5,
      title: 'Retail Space Conversion',
      category: 'Commercial',
      year: '2022',
      location: 'Shopping District',
      image: './images/project-5.jpg',
      images: ['./images/project-5.jpg', './images/project-5-2.jpg', './images/project-5-3.jpg'],
      description: 'Transformation of an old warehouse into modern retail spaces. The project required innovative solutions for lighting and accessibility.',
      features: ['Multiple Tenants', 'Modern Storefronts', 'Accessibility Features', 'Energy Efficient', 'Parking Solutions']
    },
    {
      id: 6,
      title: 'Kitchen & Bath Remodel',
      category: 'Renovation',
      year: '2021',
      location: 'Residential Area',
      image: './images/project-6.jpg',
      images: ['./images/project-6.jpg', './images/project-6-2.jpg', './images/project-6-3.jpg'],
      description: 'Complete transformation of outdated kitchen and bathrooms into modern, functional spaces with custom cabinetry and premium fixtures.',
      features: ['Custom Cabinets', 'Quartz Countertops', 'Luxury Fixtures', 'Heated Floors', 'Smart Lighting']
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
              <span className="block text-primary-600">Portfolio</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Explore our recent projects that showcase our commitment to quality 
              craftsmanship and attention to detail. Each project represents our 
              dedication to bringing our clients' visions to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-neutral-200">
        <div className="container section-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-32">
        <div className="container section-padding">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card overflow-hidden hover:shadow-medium transition-all duration-300">
                    <div className="aspect-[4/3] bg-neutral-200 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="p-3 bg-white rounded-full shadow-lg">
                            <ExternalLink className="w-5 h-5 text-neutral-900" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-primary-600 font-medium mb-2">
                        {project.category}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-neutral-600 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-neutral-900">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 3 && (
                            <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full">
                              +{project.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-neutral-900 text-white">
        <div className="container section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Whether it's a new build, renovation, or commercial project, 
              we'd love to discuss how we can bring your vision to life.
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

export default Projects 