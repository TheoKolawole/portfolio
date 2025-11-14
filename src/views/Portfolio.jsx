import { Download, Mail, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import ThemeToggle from '../components/ThemeToggle';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import PortfolioClient from './Portfolio.client';

export default function Portfolio() {
	// Server-rendered: no hooks here. Interactive behaviors are attached on the client by `Portfolio.client.jsx`.
	return (
		<div className={`min-h-screen bg-slate-50 text-slate-800 font-sans dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300`}>
			{/* Progress Bar (client will control inner width) */}
			<div className="fixed top-0 left-0 right-0 h-1 bg-blue-100 dark:bg-blue-900/40 z-50">
				<div id="scroll-progress" className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out" style={{ width: `0%` }}></div>
			</div>

			{/* Navigation */}
			<nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
				<div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
					<div className="font-bold text-2xl">
						<span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">Theophilus Kolawole</span>
					</div>

					{/* Desktop Navigation (static markup; client will handle active state) */}
					<div className="hidden md:flex space-x-8 items-center">
						{['home', 'about', 'skills', 'projects', 'testimonials', 'contact'].map((section) => (
							<button key={section} data-section={section} className={`relative hover:text-blue-600 dark:hover:text-blue-400 transition py-1 dark:text-slate-300`}>
								{section.charAt(0).toUpperCase() + section.slice(1)}
								<span className="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded opacity-0"></span>
							</button>
						))}

						{/* Theme Toggle (component will render client-side behavior itself) */}
						<ThemeToggle />
					</div>

					{/* Mobile Menu Button and Theme Toggle (client toggles menu visibility) */}
					<div className="md:hidden flex items-center space-x-4">
						<ThemeToggle />
						<button id="mobile-menu-toggle" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
							<Menu size={24} className="menu-open-icon" />
							<X size={24} className="menu-close-icon hidden" />
						</button>
					</div>
				</div>

				{/* Mobile Menu (rendered hidden by default; client shows/hides) */}
				<div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-md py-4 px-4 z-40 hidden">
					<div className="flex flex-col space-y-4">
						{['home', 'about', 'skills', 'projects', 'testimonials', 'contact'].map((section) => (
							<button key={section} data-section={section} className={`text-left py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition dark:text-slate-300`}>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</button>
						))}
					</div>
				</div>
			</nav>

			{/* Sections (server-rendered textual content) */}
			<section id="home">
				<Hero />
			</section>

			<section id="about">
				<AboutMe />
			</section>

			<section id="skills">
				<Skills />
			</section>

			<section id="projects">
				<Projects />
			</section>

			<section id="testimonials">
				<Testimonials />
			</section>

			<section id="contact">
				<Contact />
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 text-white py-12">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-6 md:mb-0">
							<div className="font-bold text-2xl mb-2">
								<span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Theophilus Kolawole</span>
							</div>
							<p className="text-slate-400 max-w-md">Crafting powerful digital experiences with clean code and creative solutions.</p>
						</div>
						<div className="flex space-x-4">
							<a
								href="https://github.com/TheoKolawole"
								className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-900/50 hover:text-blue-400 transition">
								<Github size={18} />
							</a>
							<a
								href="www.linkedin.com/in/theokolawole"
								className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-900/50 hover:text-blue-400 transition">
								<Linkedin size={18} />
							</a>
							<a href="https://x.com/TheoKolawole" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-900/50 hover:text-blue-400 transition">
								<Twitter size={18} />
							</a>
							<a
								href="mailto:theophiluskolawole19@gmail.com"
								className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-900/50 hover:text-blue-400 transition">
								<Mail size={18} />
							</a>
						</div>
					</div>
					<div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-slate-400 mb-4 md:mb-0">© {new Date().getFullYear()} Theophilus Kolawole. All rights reserved.</p>
						<div className="flex space-x-6"></div>
					</div>
				</div>
			</footer>

			{/* Client enhancer that attaches hooks and DOM behaviors (runs on the client) */}
			<PortfolioClient />
		</div>
	);
}
