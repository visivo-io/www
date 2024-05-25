import React from 'react';

import BasicSection from 'components/BasicSection';
import FeatureSectionTitle from 'components/FeatureSectionTitle';
import FeaturesWrapper from 'components/FeaturesWrapper';


export default function DevelopFeatures() {
  return (
    <FeaturesWrapper>
        <FeatureSectionTitle>Data Visualization As Code</FeatureSectionTitle>
        <BasicSection 
            imageUrl="/images/repeatable.svg" 
            title="DAG enables robust development" 
            overTitle="Dependency Management"
            reversed>
        <p>
            Visivo projects are automatically built with a Directed Acyclic Graph (DAG) managing 
            relationships between your components. 
            This ensures that your dashboards are always up-to-date, accurate and easy to debug. 
        </p>
        </BasicSection>
        
        <BasicSection imageUrl="/images/repeatable.svg" title="Build Visualizations Faster" overTitle="DevTools">
        <p>
            VScode linter and auto-complete features make writing YAML configurations a breeze.
        </p>
        </BasicSection>
        <BasicSection 
            imageUrl="/images/invent.svg" 
            title="Utilize The Power of Jinja2 Templating" 
            overTitle="Dynamic Rendering"
            reversed>
        <p>
            Jinja2 templating allows you to dynamically render your dashboards 
            based on dynamic variables, conditional logic, and loops.
        </p>
        </BasicSection>
    </FeaturesWrapper>
  );
}
