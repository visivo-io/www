import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <AutofitGrid>
        <PricingCard
          title="Solo"
          description="For the single user"
          benefits={['1 Seat', 'Unlimited Dashboards']}
        >
          $5<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Starter"
          description="For a small team"
          benefits={['5 Seats', 'Unlimited Dashboards']}
          isOutlined
        >
          $25<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Team"
          description="For a growing organization"
          benefits={['20 Seats', 'Unlimited Dashboards']}
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
