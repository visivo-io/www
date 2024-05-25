import React from 'react';

import BasicSection from 'components/BasicSection';
import FeatureSectionTitle from 'components/FeatureSectionTitle';
import FeaturesWrapper from 'components/FeaturesWrapper';


export default function UxFeatures() {
  return (
    <FeaturesWrapper>
        <FeatureSectionTitle>Craft an unparalleled user experience</FeatureSectionTitle>
        <BasicSection imageUrl="/images/laptop-iphone-asset.png" title="Meet your stakeholders where they are" overTitle="Mobile Optimized">
        <p>
            Deliver your insights to your team on the go and in the office. 
        </p>
        </BasicSection>
        
        <BasicSection imageUrl="/images/repeatable.svg" title="Interactivity without slow load times" overTitle="Interactive" reversed>
        <p>
            Unlike traditional BI tools, Visivo does not need to re-fetch data every time a user interacts your dashboard.
        </p>
        </BasicSection>
        <BasicSection imageUrl="/images/invent.svg" title="Layout & Configurations Options" overTitle="Unblock Creativity">
        <p>
            Visivo leverages the powerful & familiar Plotly charting library. 
            With over 20+ trace types and thousands of configuration options, 
            you can build the perfect dashboard for your stakeholders.
        </p>
        </BasicSection>
    </FeaturesWrapper>
  );
}
