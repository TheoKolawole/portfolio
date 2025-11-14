import { ArrowRight, ChevronRight } from 'lucide-react';

const Projects = () => {
	const projects = [
		{
			title: 'Teyweb Stores',
			description: 'A hosted e-commerce platform for building and managing online stores.',
			tags: ['React', 'Node.js', 'Next.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
			image: 'teyweb.png',
			link: 'https://demo.preview.teyweb.com',
			features: ['Custom storefronts', 'Multi-store support', 'Payment gateway integrations'],
		},
		{
			title: 'Herald Web',
			description: 'Website platform for schools and institutions with content and admin tools.',
			tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
			image: 'hweb.png',
			link: 'https://hweb.com.ng',
			features: ['CMS-driven pages', 'Result generation system', 'Attendance tracking'],
		},
		{
			title: 'Brandware Digital Marketing',
			description: 'A digital marketing agency site showcasing services and case studies.',
			tags: ['React', 'Next.js', 'Marketing'],
			image: 'brandware-services.png',
			link: 'https://www.brandware.com.ng',
			features: ['Campaign case studies', 'Service listings', 'Contact and lead capture'],
		},
		{
			title: 'Issach Health Foundation',
			description: 'Non-profit foundation focused on health outreach and programs.',
			tags: ['Next.js', 'Tailwind CSS', 'Healthcare', 'Non-profit'],
			image: 'issach-health-foundation.png',
			link: 'https://issachhealthfoundation.com',
			features: ['Program listings', 'Volunteer sign-ups', 'Donation integrations'],
		},
		{
			title: 'Opeyemi Okeowo & Co.',
			description: 'Professional services firm showcasing practice areas and contact information.',
			tags: ['Next.js', 'Tailwind CSS'],
			image: 'opeyemi-okeowo.png',
			link: 'https://opeyemiokeowo.com.ng',
			features: ['Service descriptions', 'Attorney profiles', 'Contact and consultations'],
		},
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
							<div className="h-48 relative overflow-hidden bg-slate-100 dark:bg-slate-700">
								{/* Render image from public/projects if provided, otherwise fall back to gradient initial */}
								{project.image ? (
									<img src={`/projects/${project.image}`} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
								) : (
									<div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600">{project.title.charAt(0)}</div>
								)}
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
								<a href={project.link} className="group inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
									View Project
									<ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
								</a>
							</div>
						</div>
					))}
				</div>

				{/* <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition"
          >
            See All Projects
            <ChevronRight size={18} className="ml-1" />
          </a>
        </div> */}
			</div>
		</section>
	);
};

export default Projects;
