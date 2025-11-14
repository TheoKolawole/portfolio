'use client';

import { useEffect } from 'react';

export default function HeroClient() {
	// This client component does not render duplicate markup.
	// It only attaches behaviors to server-rendered elements.

	useEffect(() => {
		// Fade/slide-in animation: toggle classes on server-rendered containers
		const content = document.getElementById('hero-content');
		const avatar = document.getElementById('hero-avatar');
		const particlesRoot = document.getElementById('hero-particles');

		if (content) {
			// add animation classes
			content.classList.add('transition-all', 'duration-1000', 'transform', 'opacity-100');
		}
		if (avatar) {
			avatar.classList.add('transition-all', 'duration-1000', 'delay-300', 'transform', 'opacity-100');
		}

		// Create floating particles
		if (particlesRoot) {
			const fragments = document.createDocumentFragment();
			for (let i = 0; i < 20; i++) {
				const el = document.createElement('div');
				const size = Math.random() * 10 + 2;
				const opacity = Math.random() * 0.5 + 0.1;
				el.className = 'absolute rounded-full';
				Object.assign(el.style, {
					top: `${Math.random() * 100}%`,
					left: `${Math.random() * 100}%`,
					width: `${size}px`,
					height: `${size}px`,
					backgroundColor: `rgba(255, 255, 255, ${opacity})`,
					animation: `float ${Math.random() * 20 + 15}s infinite linear`,
					animationDelay: `${Math.random() * 5}s`,
					pointerEvents: 'none',
				});
				fragments.appendChild(el);
			}
			particlesRoot.appendChild(fragments);
		}

		// Download handler enhancement: use JS to force download when available
		const resumeBtn = document.getElementById('resume-btn');
		const handleDownload = (e) => {
			// keep default behavior for anchors (fallback), but enhance to force download in browsers
			e.preventDefault();
			const link = document.createElement('a');
			link.href = '/Theophilus_Kolawole_Resume.pdf';
			link.download = 'Theophilus_Kolawole_Resume.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		};
		if (resumeBtn) resumeBtn.addEventListener('click', handleDownload);

		return () => {
			if (resumeBtn) resumeBtn.removeEventListener('click', handleDownload);
			if (particlesRoot) particlesRoot.innerHTML = '';
		};
	}, []);

	return null;
}
