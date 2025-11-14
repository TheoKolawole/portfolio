import React from 'react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-medium">Client Feedback</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-center dark:text-white">Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sunday Abel",
              position: "CEO, Herald Web",
              text: "Theophilus built our Herald Web platform from the ground up. His attention to detail and commitment to quality made all the difference. We couldn't be happier with the results!",
              rating: 5
            },
            {
              name: "Israel Winoh",
              position: "Co-Founder, Tihaven",
              text: "Working with Theophilus on our Tihaven application was a pleasure. He understood our vision perfectly and delivered a product that exceeded our expectations. Highly recommended!",
              rating: 5
            },
            {
              name: "Yomi Kings Daniel",
              position: "CEO, YKD Concepts",
              text: "Theophilus is a true professional. He took our ideas and turned them into a stunning website that has received rave reviews from our clients. His work speaks for itself.",
              rating: 4
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition group">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-slate-300 dark:text-slate-600'}`}
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <div className="mb-6">
                <p className="text-slate-600 dark:text-slate-300 italic">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
