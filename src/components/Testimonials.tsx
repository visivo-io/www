const TESTIMONIALS = [
  {
    companyLogoUrl: '/images/rwx_logo_dark.svg',
    content: `The ease of 
              developing and maintaining dashboards has resulted in our team 
              quickly building a much higher degree of visibility into our 
              data. It's a huge improvement in security over 
              giving a tool unfettered access to databases.`,
    author: {
      name: 'Dan Manges',
      title: 'Co-Founder & CEO - RWX',
      avatarUrl: '/images/dan.webp',
    },
  },

];

export default function Testimonials() {
  return (
    <section className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:py-24">
        <div id="testimonial-carousel" className="relative text-center" data-carousel="slide">
          <div className="relative mx-auto h-52 max-w-screen-md overflow-x-hidden overflow-y-visible rounded-lg sm:h-48">
            {TESTIMONIALS.map((singleTestimonial) => (
              <figure className="mx-auto w-full max-w-screen-md" data-carousel-item>
                <blockquote>
                  <p className="text-lg font-medium text-gray-900 sm:text-2xl dark:text-white">{singleTestimonial.content}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <img className="size-6 rounded-full"
                    src={singleTestimonial.author.avatarUrl}
                    alt="profile picture" />
                  <div className="flex items-center divide-x-2 divide-gray-200 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">{singleTestimonial.author.name}</div>
                    <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">{singleTestimonial.author.title}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* TODO: When more testimonials are added, add the carousel controls */}

          {/* <div className="flex items-center justify-center">
            <button type="button"
              className="group mr-4 flex h-full cursor-pointer items-center justify-center focus:outline-none"
              data-carousel-prev>
              <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg className="size-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"></path>
                </svg>
                <span className="hidden">Previous</span>
              </span>
            </button>
            <button type="button" className="group flex h-full cursor-pointer items-center justify-center focus:outline-none"
              data-carousel-next>
              <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg className="size-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
                <span className="hidden">Next</span>
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

