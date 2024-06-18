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
        
        <BasicSection imageUrl="/images/git-workflow.png" title="Deployments that mirror your workflow" overTitle="CI/CD" reversed>
        <p>
            Super charge your development cycle with seamless local development and a CI/CD pipeline that deploys projects to all of your environments.
        </p>
        </BasicSection>
        <BasicSection imageUrl="/images/continuous-testing.png" title="Goodbye broken dashboards" overTitle="Testable">
        <p>
            Test new charts, tables and dashboards before they go live in production. 
            Ensure your tests are passing before data refresh. 
            Get alerts when your dashboards are broken before your stakeholders are impacted.
        </p>
        </BasicSection>
    </FeaturesWrapper>
  );
}
