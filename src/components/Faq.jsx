import tw from "tailwind-styled-components"

const Section = tw.div`
  mb-10
`
const Heading = tw.h3`
  mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-gray-300
`

const Answer = tw.p`
  text-gray-800 dark:text-gray-200
`

const QuestionMark = () => {
  return (
    <svg className="mr-2 size-5 shrink-0 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
  )
}

const Faq = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">Frequently asked questions</h2>
        <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-1 md:gap-16">
          <div>
            <Section>
              <Heading>
                <QuestionMark />
                How do I use the Open Source tool?
              </Heading>
              <Answer>The open source CLI is used for local development with every plan.  It can also be used on its own to create dashboards you wish to host internally. Checkout our documentation for more information.</Answer>
            </Section>
            <Section>
              <Heading>
                <QuestionMark />
                I want to use the Open Source tool to deploy internally, but would like support.  What do you offer?
              </Heading>
              <Answer>We can provide a support contract to ensure your success.  Reach out to sales@visivo.io!</Answer>
            </Section>
            <Section>
              <Heading>
                <QuestionMark />
                Do you offer a yearly discount?
              </Heading>
              <Answer>Yes! We give a 20% discount for yearly plans.</Answer>
            </Section>
          </div>
        </div >
      </div >
    </section >
  );
}

export default Faq;