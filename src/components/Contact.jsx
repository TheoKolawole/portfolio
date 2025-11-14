'use client';

import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
	// Form state management
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	// Form status states
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({
		success: false,
		error: false,
		message: '',
	});

	// Validation state
	const [errors, setErrors] = useState({});

	// Handle input changes
	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});

		// Clear error for this field when user starts typing
		if (errors[id]) {
			setErrors({
				...errors,
				[id]: '',
			});
		}
	};

	// Validate form data
	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
		}

		if (!formData.subject.trim()) {
			newErrors.subject = 'Subject is required';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Reset status
		setSubmitStatus({
			success: false,
			error: false,
			message: '',
		});

		// Validate form
		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		try {
			// Use Formspree - replace YOUR_FORM_ID with the actual ID you get when creating a form
			const response = await fetch('https://formspree.io/f/xvgarpdo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				// Successfully submitted
				setSubmitStatus({
					success: true,
					error: false,
					message: 'Your message has been sent successfully!',
				});

				// Reset form
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
				});
			} else {
				// Server error
				throw new Error('Failed to submit the form. Please try again.');
			}
		} catch (error) {
			setSubmitStatus({
				success: false,
				error: true,
				message: error.message || 'Failed to send message. Please try again later.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-24 bg-white dark:bg-slate-900 relative">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-col items-center mb-16">
					<span className="text-blue-600 dark:text-blue-400 font-medium">Get In Touch</span>
					<h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-center dark:text-white">Contact Me</h2>
					<div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
					<div className="md:col-span-2 space-y-6">
						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition group">
							<div className="flex items-start">
								<div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
									<Mail size={20} />
								</div>
								<div>
									<h3 className="font-semibold text-lg mb-1 dark:text-white">Email</h3>
									<p className="text-slate-600 dark:text-slate-300">theophiluskolawole19@gmail.com</p>
									<a
										href="mailto:theophiluskolawole19@gmail.com"
										className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center mt-2 text-sm hover:text-blue-800 dark:hover:text-blue-300">
										Send Email
										<ArrowRight size={14} className="ml-1" />
									</a>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition group">
							<div className="flex items-start">
								<div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-lg mb-1 dark:text-white">Location</h3>
									<p className="text-slate-600 dark:text-slate-300">Ilorin, Nigeria</p>
									<a
										href="https://maps.google.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center mt-2 text-sm hover:text-blue-800 dark:hover:text-blue-300">
										View on Map
										<ArrowRight size={14} className="ml-1" />
									</a>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition group">
							<div className="flex items-start">
								<div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
										/>
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-lg mb-1 dark:text-white">Social Profiles</h3>
									<div className="flex space-x-3 mt-3">
										<a
											href="https://github.com/TheoKolawole"
											className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition">
											<Github size={18} />
										</a>
										<a
											href="https://www.linkedin.com/in/theokolawole"
											className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition">
											<Linkedin size={18} />
										</a>
										<a
											href="https://x.com/TheoKolawole"
											className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition">
											<Twitter size={18} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="md:col-span-3">
						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700">
							<h3 className="font-semibold text-xl mb-6 dark:text-white">Send Me a Message</h3>

							{/* Status messages */}
							{submitStatus.success && (
								<div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg text-green-700 dark:text-green-400">{submitStatus.message}</div>
							)}

							{submitStatus.error && (
								<div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg text-red-700 dark:text-red-400">{submitStatus.message}</div>
							)}

							<form className="space-y-5" onSubmit={handleSubmit}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
											Your Name
										</label>
										<input
											type="text"
											id="name"
											value={formData.name}
											onChange={handleChange}
											className={`block w-full rounded-lg border ${
												errors.name ? 'border-red-500 dark:border-red-500' : 'border-slate-200 dark:border-slate-700'
											} bg-white dark:bg-slate-900 px-4 py-3 text-slate-700 dark:text-slate-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder:text-slate-500`}
											placeholder="John Doe"
										/>
										{errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
											Your Email
										</label>
										<input
											type="email"
											id="email"
											value={formData.email}
											onChange={handleChange}
											className={`block w-full rounded-lg border ${
												errors.email ? 'border-red-500 dark:border-red-500' : 'border-slate-200 dark:border-slate-700'
											} bg-white dark:bg-slate-900 px-4 py-3 text-slate-700 dark:text-slate-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder:text-slate-500`}
											placeholder="john@example.com"
										/>
										{errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
									</div>
								</div>
								<div>
									<label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
										Subject
									</label>
									<input
										type="text"
										id="subject"
										value={formData.subject}
										onChange={handleChange}
										className={`block w-full rounded-lg border ${
											errors.subject ? 'border-red-500 dark:border-red-500' : 'border-slate-200 dark:border-slate-700'
										} bg-white dark:bg-slate-900 px-4 py-3 text-slate-700 dark:text-slate-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder:text-slate-500`}
										placeholder="Project Inquiry"
									/>
									{errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}
								</div>
								<div>
									<label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
										Message
									</label>
									<textarea
										id="message"
										rows="5"
										value={formData.message}
										onChange={handleChange}
										className={`block w-full rounded-lg border ${
											errors.message ? 'border-red-500 dark:border-red-500' : 'border-slate-200 dark:border-slate-700'
										} bg-white dark:bg-slate-900 px-4 py-3 text-slate-700 dark:text-slate-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder:text-slate-500`}
										placeholder="Your message here..."></textarea>
									{errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
								</div>
								<div>
									<button
										type="submit"
										disabled={isSubmitting}
										className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition shadow-lg shadow-blue-600/20 dark:shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-600/30 dark:hover:shadow-blue-700/30 disabled:opacity-70 disabled:cursor-not-allowed">
										{isSubmitting ? 'Sending...' : 'Send Message'}
										{!isSubmitting && <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
