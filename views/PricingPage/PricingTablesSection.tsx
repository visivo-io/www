import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <AutofitGrid>
        <PricingCard
          title="Open Source"
          benefits={[
            "1 seat included",
            "16 deployments per day",
            "3 active stages",
            "1 project per stage",
            "Limited support"
          ]}        >
          Free
        </PricingCard>
        <PricingCard
          title="Solo"
          benefits={[
            "1 seat included",
            "16 deployments per day",
            "3 active stages",
            "1 project per stage",
            "Limited support"
          ]}        >
          $0<span>/month</span>
        </PricingCard>
      </AutofitGrid>
      <AutofitGrid>
        <PricingCard
          title="Team"
          isOutlined
          benefits={[
            "10 seats included*",
            "256 deployments /day",
            "9 active stages",
            "Infinite projects /stage",
            "1 month time travel",
            "1 day support SLA"
          ]}
        >
          $599<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Business"
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
        >
          $1999<span>/month</span>
        </PricingCard>
      </AutofitGrid>
      <AutofitGrid>
        <PricingCard
          title="Startup"
          benefits={[
            "Infinite deployments /day",
            "Infinite projects /stage",
            "Custom time travel",
            "Single Sign On",
            "1 hour support SLA",
          ]}
        >
          Custom
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
          Custom
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
