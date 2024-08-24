import React from 'react';
import tw from "tailwind-styled-components"
import styled from 'styled-components';
import PricingCard from 'components/PricingCard';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <PriceRow>
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
        <PricingCard
          title="Enterprise"
          price="Custom"
          benefits={[
            "Infinite deployments /day",
            "Infinite projects /stage",
            "Custom time travel",
            "Single Sign On",
            "1 hour support SLA",
          ]}
        />
      </PriceRow>
    </Wrapper >
  );
}

const PriceRow = tw.div`
  p-6 
  flex
  flex-wrap
`
const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
