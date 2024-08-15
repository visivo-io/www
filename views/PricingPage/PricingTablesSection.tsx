import React from 'react';
import tw from "tailwind-styled-components"
import styled from 'styled-components';
import PricingCard from 'components/PricingCard';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <PriceRow>
        <Description>
          Free options to get you started.
        </Description>
        <PricingCard
          title="Open Source"
          price="$0"
          benefits={[
            "Self hosted",
            "Community support",
            "Static sites"
          ]}>
        </PricingCard>
        <PricingCard
          title="Solo"
          price="$0"
          length="/month"
          benefits={[
            "1 seat included",
            "16 deployments per day",
            "3 active stages",
            "1 project per stage",
            "Limited support"
          ]} />
      </PriceRow>
      <PriceRow>
        <Description>
          Fixed price plans for established companies.
        </Description>
        <PricingCard
          title="Team"
          price="$599"
          length="/month"
          benefits={[
            "10 seats included*",
            "256 deployments /day",
            "9 active stages",
            "Infinite projects /stage",
            "1 month time travel",
            "1 day support SLA"
          ]}
        />
        <PricingCard
          title="Business"
          price="$1999"
          length="/month"
          benefits={[
            "25 seats included*",
            "4096 deployments /day",
            "27 active stages",
            "Infinite projects /stage",
            "3 months time travel",
            "4 hour support SLA",
            "Access controls",
            "Dedicated support manager"
          ]}
        />
      </PriceRow>
      <PriceRow>
        <Description>
          Custom price plans to handle unique needs.
        </Description>
        <PricingCard
          title="Growth"
          benefits={[
            "Custom time travel",
            "Single Sign On",
            "5 hour support SLA",
            "Fractional analytics support"
          ]}
        >
        </PricingCard>
        <PricingCard
          title="Enterprise"
          benefits={[
            "Infinite deployments /day",
            "Infinite projects /stage",
            "Custom time travel",
            "Single Sign On",
            "1 hour support SLA",
          ]}
        >
        </PricingCard>
      </PriceRow>
    </Wrapper>
  );
}

const Description = tw.div`
  grow 
  mb-5 
  font-light 
  text-gray-500 
  text-3xl 
  m-auto
`
const PriceRow = tw.div`
  flex w-full p-6 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
`
const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
