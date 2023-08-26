import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for agile teams</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Solo"
          description="Give us a try for free"
          benefits={['1 seat', '1 active project', 'Ulimited viewers', '10 blocks']}
        >
          $5<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Starter"
          description="Best for individual desginers"
          benefits={['1 seat', '3 active project', 'Ulimited viewers', '100 blocks', 'CSV Downloader', 'Password protection']}
          isOutlined
        >
          $25<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Team"
          description="Get your team together"
          benefits={[
            '20 seat',
            'Ulimited viewers',
            'Unlimited blocks',
            'CSV Downloader',
            'Password protection',
            'Customization',
          ]}
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
