import { Carousel } from 'flowbite-react';
import { TESTIMONIALS } from './Testimonials';

export default function TestimonialCarousel() {
  return (
    <div className="h-[400px] w-full  bg-gray-100 dark:bg-gray-800">
      <Carousel 
        pauseOnHover
        leftControl={
          <button className="group" type="button">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg className="h-4 w-4 text-primary-500 backgroundprimary-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
            </span>
          </button>
        }
        rightControl={
          <button className="group" type="button">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg className="h-4 w-4 text-primary-500 background-secondary " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
            </span>
          </button>
        }
        indicators={true}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="flex h-full items-center justify-center px-12">
            <div className="max-w-screen-xl text-center">
              <figure className="mx-auto max-w-screen-md">
                <img 
                  src={testimonial.companyLogoUrl} 
                  alt={`${testimonial.author.name}'s company logo`}
                  className="mx-auto mb-4 h-7 "
                />
                <blockquote>
                  <p className="text-xl font-medium text-gray-900 dark:text-white md:text-2xl">
                    "{testimonial.content}"
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <img 
                    className="h-10 w-10 rounded-full"
                    src={testimonial.author.avatarUrl}
                    alt={testimonial.author.name}
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {testimonial.author.name}
                    </div>
                    <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.author.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
