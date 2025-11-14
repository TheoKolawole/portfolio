'use client';

import { useEffect } from 'react';

export default function PortfolioClient() {
	useEffect(() => {
		// Inject animations / keyframes used across the page (same as original)
		const style = document.createElement('style');
		style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px);} to { opacity:1; transform: translateY(0);} }
      .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
      .animate-fadeSlideUp { animation: fadeSlideUp 1s ease-out forwards; }
      .animation-delay-100 { animation-delay: 0.1s; }
      .animation-delay-200 { animation-delay: 0.2s; }
    `;
		document.head.appendChild(style);

		const progressBar = document.getElementById('scroll-progress');
		const navButtons = Array.from(document.querySelectorAll('[data-section]'));
		const mobileMenu = document.getElementById('mobile-menu');
		const mobileToggle = document.getElementById('mobile-menu-toggle');

		const sections = ['home', 'about', 'skills', 'projects', 'testimonials', 'contact'];

		function handleScroll() {
			const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight || 1;
			const currentProgress = window.scrollY / totalScroll;
			if (progressBar) progressBar.style.width = `${currentProgress * 100}%`;

			// update active nav button
			for (const section of sections.slice().reverse()) {
				const el = document.getElementById(section);
				if (el && window.scrollY >= el.offsetTop - 100) {
					navButtons.forEach((btn) => {
						const underline = btn.querySelector('.nav-underline');
						if (btn.dataset.section === section) {
							btn.classList.add('text-blue-600');
							if (underline) underline.style.opacity = '1';
						} else {
							btn.classList.remove('text-blue-600');
							if (underline) underline.style.opacity = '0';
						}
					});
					break;
				}
			}
		}

		// click handler for nav buttons
		function handleNavClick(e) {
			const section = e.currentTarget.dataset.section;
			const target = document.getElementById(section);
			if (target) {
				window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
			}
			if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
				mobileMenu.classList.add('hidden');
			}
		}

		navButtons.forEach((btn) => btn.addEventListener('click', handleNavClick));
		window.addEventListener('scroll', handleScroll);
		// initial call to set progress/active
		handleScroll();

		// mobile toggle
		function handleToggle() {
			if (!mobileMenu) return;
			mobileMenu.classList.toggle('hidden');
			// swap icons visibility
			const openIcon = document.querySelector('.menu-open-icon');
			const closeIcon = document.querySelector('.menu-close-icon');
			if (mobileMenu.classList.contains('hidden')) {
				if (openIcon) openIcon.classList.remove('hidden');
				if (closeIcon) closeIcon.classList.add('hidden');
			} else {
				if (openIcon) openIcon.classList.add('hidden');
				if (closeIcon) closeIcon.classList.remove('hidden');
			}
		}

		if (mobileToggle) mobileToggle.addEventListener('click', handleToggle);

		return () => {
			document.head.removeChild(style);
			navButtons.forEach((btn) => btn.removeEventListener('click', handleNavClick));
			window.removeEventListener('scroll', handleScroll);
			if (mobileToggle) mobileToggle.removeEventListener('click', handleToggle);
		};
	}, []);

	return null; // this component only attaches client behavior
}
