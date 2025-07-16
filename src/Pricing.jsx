import { useState } from 'react'
import tw from "tailwind-styled-components"
import Faq from "./components/Faq"
import SavingsCalculator from "./components/SavingsCalculator"
const Card = tw.div`
  flex flex-col max-w-xl p-6 text-center bg-white border border-gray-200 rounded-lg shadow xl:max-w-lg dark:border-gray-700 dark:bg-gray-800 xl:p-8
`

const GetStarted = () => {
  return (
    <a href="https://app.visivo.io/register" className="mb-8 rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-600 dark:text-white  dark:hover:bg-gray-500 dark:focus:ring-gray-600">Start 14-Day Free Trial</a>
  )
}

const GetStartedTall = () => {
  return (
    <a href="https://calendly.com/visivo-io/30-minute" className="mb-8 mt-10 rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-600 dark:text-white  dark:hover:bg-gray-500 dark:focus:ring-gray-600">Book a Demo</a>
  )
}
const GetStartedHighlight = () => {
  return (
    <a href="https://app.visivo.io/register" className="mb-8 rounded-lg bg-highlight-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-highlight-700 focus:ring-4 focus:ring-gray-200">Start 14-Day Free Trial</a>
  )
}


const Bullet = ({ children }) => {
  return (
    <li className="flex items-center space-x-3 text-gray-500">
      <svg className="size-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      <span>{children}</span>
    </li>
  )
}

const Title = tw.h3`
  mb-4 text-2xl font-medium text-gray-900 dark:text-white
`

const Price = tw.span`
  text-5xl font-extrabold text-gray-900 dark:text-white
`
const Yearly = tw.p`
  mb-1 mt-4 text-gray-500 dark:text-gray-400 min-h-[2rem]
`

const PlanToggle = ({ isYearly, setIsYearly }) => {
  return (
    <div className="mb-4 flex items-center justify-center space-x-2">
      <span className={`text-sm ${!isYearly ? 'font-medium text-gray-900' : 'text-gray-500'} dark:text-gray-400`}>
        Monthly
      </span>
      <button
        onClick={() => setIsYearly(!isYearly)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${ !isYearly ? 'bg-gray-200 dark:bg-gray-700' : 'bg-highlight-500'}`}
      >
        <span className={`inline-block size-4 rounded-full bg-white transition ${isYearly ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
      <span className={`text-sm ${isYearly ? 'font-medium text-gray-900' : 'text-gray-500'} dark:text-gray-400`}>
        Yearly <span className="text-green-600 dark:text-green-400 font-semibold">(Save 20%)</span>
      </span>
    </div>
  );
};


const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <>
      <SavingsCalculator />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pt-20 sm:pt-24 lg:pt-32">
          <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Start Building Today - No Credit Card Required
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
              Choose the plan that fits your team. Start with our free tier or try our cloud platform risk-free.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center text-sm">
              <span className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                14-day free trial on cloud plans
              </span>
              <span className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Open source forever
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <Title>Free</Title>
              <Price>$0</Price>
              <Yearly>For developers who love open source</Yearly>
              <div className="mb-8 mt-10">
                <a 
                  href="/get-started"
                  className="inline-block rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-600"
                >
                  Get Started
                </a>
              </div>
              <ul role="list" className="space-y-4 text-left text-gray-900 dark:text-gray-400">
                <Bullet>Self host static site</Bullet>
                <Bullet>16 deployments /day</Bullet>
                <Bullet>Community support</Bullet>
                <Bullet>Google Auth</Bullet>
              </ul>
            </Card>
            <Card>
              <Title>Basic</Title>
              {!isYearly && <Price>$15</Price>}
              {isYearly && <Price>$12</Price>}
              <Yearly>For small teams getting started</Yearly>
              <PlanToggle isYearly={isYearly} setIsYearly={setIsYearly} />
              <GetStartedHighlight />
              <ul role="list" className="space-y-4 text-left text-gray-900 dark:text-gray-400">
                <Bullet>All Free features plus:</Bullet>
                <Bullet>256 deployments /day</Bullet>
                <Bullet>1 month time travel</Bullet>
                <Bullet>1 day support SLA</Bullet>
              </ul>
            </Card>
            <Card>
              <Title>Business</Title>
              {!isYearly && <Price>$27</Price>}
              {isYearly && <Price>$22</Price>}
              <Yearly>For growing teams needing collaboration</Yearly>
              <PlanToggle isYearly={isYearly} setIsYearly={setIsYearly} />
              <GetStarted />
              <ul role="list" className="space-y-4 text-left text-gray-900 dark:text-gray-400">
                <Bullet>All Basic features plus:</Bullet>
                <Bullet>4096 deployments /day</Bullet>
                <Bullet>3 months time travel</Bullet>
                <Bullet>Slack support channel</Bullet>
                <Bullet>Access controls</Bullet>
                <Bullet>Priority support</Bullet>
              </ul>
            </Card>
            <Card>
              <Title>Enterprise</Title>
              <Price>Custom</Price>
              <Yearly>For organizations needing advanced features</Yearly>
              <GetStartedTall />
              <ul role="list" className="space-y-4 text-left text-gray-900 dark:text-gray-400">
                <Bullet>Custom seats</Bullet>
                <Bullet>Custom deployments</Bullet>
                <Bullet>Custom time travel</Bullet>
                <Bullet>Dedicated support manager</Bullet>
                <Bullet>Migration assistance</Bullet>
                <Bullet>BYOC (Bring Your Own Cloud)</Bullet>
                <Bullet>Single Sign On</Bullet>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}

export default Pricing;