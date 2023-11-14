import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <AutofitGrid>
        <PricingCard
          isSecondary
          title="Local"
          description="CLI for local use"
          benefits={['Unlimited Seats', 'Local Dashboards']}
        >
          $0
        </PricingCard>
        <PricingCard
          title="Solo"
          description="For the single user"
          benefits={['1 Seat', 'Local CLI', 'Private Deployments', 'Unlimited Dashboard']}
        >
          $5<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Starter"
          description="For a small team"
          benefits={['5 Seats', 'Local CLI', 'Private Deployments', 'Unlimited Dashboards']}
          isOutlined
        >
          $25<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Team"
          description="For a growing organization"
          benefits={['20 Seats', 'Local CLI', 'Private Deployments', 'Unlimited Dashboards']}
        >
          $100<span>/month</span>
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
