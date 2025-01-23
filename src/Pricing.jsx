import { useState } from 'react'
import tw from "tailwind-styled-components"
import Faq from "./components/Faq"
const Card = tw.div`
  flex flex-col max-w-xl p-6 mx-auto text-center bg-white border border-gray-200 rounded-lg shadow xl:max-w-lg dark:border-gray-700 dark:bg-gray-800 xl:p-8
`

const GetStarted = () => {
  return (
    <a href="https://app.visivo.io/register" className="my-8 rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-600 dark:text-white  dark:hover:bg-gray-500 dark:focus:ring-gray-600">Get started</a>
  )
}

const GetStartedHighlight = () => {
  return (
    <a href="https://app.visivo.io/register" className="my-8 rounded-lg bg-highlight-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-highlight-700 focus:ring-4 focus:ring-gray-200">Get started</a>
  )
}


const Bullet = ({ children }) => {
  return (
    <li className="flex items-center space-x-3 text-gray-500">
      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
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
  mb-1 mt-4 text-gray-500 dark:text-gray-400 min-h-[3rem]
`

const PlanToggle = ({ isEnterprise, setIsEnterprise }) => {
  return (
    <div className="flex items-center justify-center space-x-2 mb-4">
      <span className={`text-sm ${!isEnterprise ? 'text-gray-900 font-medium' : 'text-gray-500'} dark:text-gray-400`}>
        Growth
      </span>
      <button
        onClick={() => setIsEnterprise(!isEnterprise)}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isEnterprise ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
      <span className={`text-sm ${isEnterprise ? 'text-gray-900 font-medium' : 'text-gray-500'} dark:text-gray-400`}>
        Enterprise
      </span>
    </div>
  );
};

const EnterpriseGrowthCard = () => {
  const [isEnterprise, setIsEnterprise] = useState(false);
  
  return (
    <div className="flex flex-col">  
      <Card>
        <Title>{isEnterprise ? 'Enterprise' : 'Growth'}</Title>
        <Price>Custom</Price>
        <Yearly>
          {isEnterprise 
            ? "Designed to meet your team's needs"
            : "We love helping growing companies. Let's work together."}
        </Yearly>
        <GetStarted />
        <ul role="list" className="space-y-4 text-left text-gray-900 dark:text-gray-400">
          <Bullet>Custom seats</Bullet>
          <Bullet>Custom deployments</Bullet>
          <Bullet>Custom time travel</Bullet>
          {isEnterprise ? (
            <>
              <Bullet>1 hour support SLA</Bullet>
              <Bullet>Single Sign On</Bullet>
            </>
          ) : (
            <Bullet>Analytics consulting</Bullet>
          )}
        </ul>
      </Card>
      <div className="mt-auto mb-0">
        <PlanToggle isEnterprise={isEnterprise} setIsEnterprise={setIsEnterprise} />
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pt-20 sm:pt-24 lg:pt-32">
          <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Pricing options to fit any organization.
            </h2>
            <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
              Free options to get you started, fixed pricing for the established business, and custom pricing for more unique situations.
            </p>
          </div>

          <div className="mt-8 grid gap-8 sm:mt-12 xl:grid-cols-4 xl:gap-3">
            <Card>
              <Title>Solo</Title>
              <Price>$0</Price>
              <Yearly>Get started for free</Yearly>
              <GetStarted />
              <ul role="list" className="space-y-4 text-left text-gray-900 dark:text-gray-400">
                <Bullet>1 seat included</Bullet>
                <Bullet>16 deployments per day</Bullet>
                <Bullet>Limited support</Bullet>
              </ul>
            </Card>
            <Card>
              <Title>Team</Title>
              <Price>$599</Price>
              <Yearly>per month, 20% discount if paid annually</Yearly>
              <GetStartedHighlight />
              <ul role="list" className="space-y-4 text-left text-gray-900 dark:text-gray-400">
                <Bullet>10 seats included *</Bullet>
                <Bullet>256 deployments /day</Bullet>
                <Bullet>1 month time travel</Bullet>
                <Bullet>1 day support SLA</Bullet>
              </ul>
            </Card>
            <Card>
              <Title>Business</Title>
              <Price>$1999</Price>
              <Yearly>per month, 20% discount if paid annually</Yearly>
              <GetStarted />
              <ul role="list" className="space-y-4 text-left text-gray-900 dark:text-gray-400">
                <Bullet>100 seats </Bullet>
                <Bullet>4096 deployments /day</Bullet>
                <Bullet>3 months time travel</Bullet>
                <Bullet>2 hour support SLA</Bullet>
                <Bullet>Access controls</Bullet>
                <Bullet>Dedicated support manager</Bullet>
              </ul>
            </Card>
            <EnterpriseGrowthCard />
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}

export default Pricing;