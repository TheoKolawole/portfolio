import { ArrowRight, ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TeyWeb",
      description: "An e-commerce platform builder that enables businesses to create custom online stores with ease.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "teyweb",
      link: "#",
      features: [
        "Hybrid architecture with MySQL and MongoDB",
        "Dynamic subdomains for stores",
        "Multi-vendor support with admin dashboard",
        "Custom theming and layout options"
      ]
    },
    {
      title: "Tihaven",
      description: "A real estate marketplace connecting Nigerians with trusted housing opportunities nationwide.",
      tags: ["React Native", "Express", "MongoDB", "Google Maps API"],
      image: "tihaven",
      link: "#",
      features: [
        "Property verification system",
        "In-app messaging between agents and clients",
        "Advanced search with geolocation features",
        "Virtual tours integration"
      ]
    },
    {
      title: "Fintech Dashboard",
      description: "A comprehensive financial analytics dashboard for tracking investments and expenses.",
      tags: ["React", "Chart.js", "Tailwind CSS", "Firebase"],
      image: "fintech",
      link: "#",
      features: [
        "Real-time data visualization",
        "Expense categorization with AI",
        "Portfolio performance tracking",
        "Budget planning tools"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-medium">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-center dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition group">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featIdx) => (
                      <li key={featIdx} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={project.link} 
                  className="group inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project
                  <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition"
          >
            See All Projects
            <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;