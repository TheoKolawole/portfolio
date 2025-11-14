import '../globals.css';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
	title: {
		default: 'Theophilus Kolawole | Full-Stack Software Developer & Designer',
		template: '%s | Theophilus Kolawole',
	},
	description:
		'Full-stack software developer specializing in React, Node.js, Express, MongoDB, and MySQL. Creator of TeyWeb e-commerce platform and co-founder of Tihaven real estate marketplace. 5+ years of experience building scalable web and mobile applications.',
	keywords: [
		'Theophilus Kolawole',
		'Software Developer',
		'Full-Stack Developer',
		'React Developer',
		'Node.js Developer',
		'Web Developer',
		'Mobile App Developer',
		'TeyWeb',
		'Tihaven',
		'JavaScript Developer',
		'Frontend Developer',
		'Backend Developer',
		'E-commerce Developer',
		'Portfolio',
		'Nigeria Developer',
	],
	authors: [{ name: 'Theophilus Kolawole' }],
	creator: 'Theophilus Kolawole',
	publisher: 'Theophilus Kolawole',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://theokolawole.vercel.app'),
	alternates: {
		canonical: '/',
	},
	icons: {
		icon: '/theophilus_favicon.png',
		shortcut: '/theophilus_favicon.png',
		apple: '/theophilus_favicon.png',
	},
	openGraph: {
		title: 'Theophilus Kolawole | Full-Stack Software Developer & Designer',
		description: 'Full-stack software developer with 5+ years of experience. Creator of TeyWeb and co-founder of Tihaven. Specializing in React, Node.js, and modern web technologies.',
		url: 'https://theokolawole.vercel.app',
		siteName: 'Theophilus Kolawole Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Theophilus Kolawole - Full-Stack Software Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Theophilus Kolawole | Full-Stack Software Developer',
		description: 'Full-stack software developer with 5+ years of experience building scalable web and mobile applications.',
		creator: '@yourtwitterhandle',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
	},
};

export default function RootLayout({ children }) {
	// JSON-LD structured data for better SEO
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Theophilus Kolawole',
		url: 'https://theokolawole.vercel.app',
		image: 'https://theokolawole.vercel.app/theophilus.jpg',
		sameAs: ['https://www.linkedin.com/in/theokolawole', 'https://github.com/TheoKolawole', 'https://x.com/TheoKolawole'],
		jobTitle: 'Full-Stack Software Developer',
		worksFor: {
			'@type': 'Organization',
			name: 'Self-Employed',
		},
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'Kwara State University',
		},
		knowsAbout: ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'JavaScript', 'TypeScript', 'Full-Stack Development', 'Web Development', 'Mobile Development', 'E-commerce'],
		description: 'Full-stack software developer with 5+ years of experience building scalable web and mobile applications. Creator of TeyWeb and co-founder of Tihaven.',
	};

	return (
		<html lang="en">
			<head>
				{/* JSON-LD Structured Data */}
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

				{/* Preconnect to external domains for performance */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			</head>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
