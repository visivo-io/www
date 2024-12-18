import styled from 'styled-components';

export default function FaqSection() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">Frequently asked questions</h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-1">
          <div>
            <div className="mb-10 text-2xl">
              <h3 className="flex items-center mb-4 text-3xl font-medium text-gray-900 ">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                Can I get more seats on a given plan? *
              </h3>
              <p className="text-gray-500 ">Yes, additional seats are available on our paid plans for $15/month.</p>
            </div>
            <div className="mb-10 text-2xl">
              <h3 className="flex items-center mb-4 text-3xl font-medium text-gray-900 ">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                What do I do if I am more than a Solo and Less than a Team?
              </h3>
              <p className="text-gray-500 ">We can work with you on custom pricing if you are in a growing organization and need fewer than 10 seats.  Contact us at sales@visivo.io.</p>
            </div>
            <div className="mb-10 text-2xl">
              <h3 className="flex items-center mb-4 text-3xl font-medium text-gray-900 ">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                How do I use the Open Source tool?
              </h3>
              <p className="text-gray-500 ">The open source CLI is used for local development with every plan.  It can also be used on its own to create dashboards you wish to host internally. Checkout our documentation for more information.</p>
            </div>
            <div className="mb-10 text-2xl">
              <h3 className="flex items-center mb-4 text-3xl font-medium text-gray-900 ">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                I want to use the Open Source tool to deploy internally, but would like support.  What do you offer?
              </h3>
              <p className="text-gray-500 ">We can provide a support contract to ensure your success.  Reach out to sales@visivo.io!</p>
            </div>
            <div className="mb-10 text-2xl">
              <h3 className="flex items-center mb-4 text-3xl font-medium text-gray-900 ">
                <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                Do you offer a yearly discount?
              </h3>
              <p className="text-gray-500 ">Yes! We give a 20% discount for yearly plans.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
