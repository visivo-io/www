import React from 'react';

import BasicSection from 'components/BasicSection';
import FeatureSectionTitle from 'components/FeatureSectionTitle';
import FeaturesWrapper from 'components/FeaturesWrapper';


export default function DevOpsFeatures() {
  return (
    <FeaturesWrapper>
        <FeatureSectionTitle>Simple to Deploy & Collaborate</FeatureSectionTitle>
        <BasicSection imageUrl="/images/pull-request.png" title="Keep your HEAD clear & commit to git" overTitle="Version Control">
        <p>
            Collaborate with your team, 
            track changes, and maintain your dashboards with the same tools you use for the rest of your code.
        </p>
        </BasicSection>
        
        <BasicSection imageUrl="/images/repeatable.svg" title="Deployments that mirror your workflow" overTitle="CI/CD" reversed>
        <p>
            Create a CI/CD pipeline that deploys dashboards to all of the environments that you need them in.
        </p>
        </BasicSection>
        <BasicSection imageUrl="/images/invent.svg" title="Goodbye broken dashboards" overTitle="Testable">
        <p>
            Test your code before it goes live & on every deployment. Get alerts when your dashboards are broken before 
            your stakeholders are impacted.
        </p>
        </BasicSection>
    </FeaturesWrapper>
  );
}
