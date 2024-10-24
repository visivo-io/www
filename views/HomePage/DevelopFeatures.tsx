import React from 'react';

import BasicSection from 'components/BasicSection';
import FeatureSectionTitle from 'components/FeatureSectionTitle';
import FeaturesWrapper from 'components/FeaturesWrapper';


export default function DevelopFeatures() {
  return (
    <FeaturesWrapper>
        <FeatureSectionTitle>Data Visualization As Code</FeatureSectionTitle>
        <BasicSection 
            imageUrl="/images/object-flow-chart.webp" 
            title="DAG enables robust development" 
            overTitle="Dependency Management"
            reversed>
        <p>
            Visivo projects are automatically built with a Directed Acyclic Graph (DAG) that 
            manages relationships between your components. This ensures that your dashboards
            are always up-to-date, accurate and easy to debug. 
        </p>
        </BasicSection>
        
        <BasicSection imageUrl="/gifs/webp/auto-complete.webp" title="Build visualizations faster" overTitle="DevTools">
        <p>
            VScode linter and auto-complete features make writing YAML configurations a breeze.
        </p>
        </BasicSection>
        <BasicSection 
            imageUrl="/images/jinja-for-loop.webp" 
            title="Jinja2 templating for dynamic rendering" 
            overTitle="Dynamic Rendering"
            reversed>
        <p>
            Jinja2 templating allows you to dynamically render your dashboards 
            based on environment variables, conditional logic, and loops.
        </p>
        </BasicSection>
    </FeaturesWrapper>
  );
}
