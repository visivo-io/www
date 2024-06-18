import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Who are we?">
      <PrivacyPolicyContainer>
        <RichText>
          <p>We are a small team that is passionate about building great tools for analytics. 
             We have deep experience in software development and business analytics.</p>
          <br />
          <br />
          <p>We want to solve a problem that we have personally experienced.</p>
          <strong>Business intelligence visualizations are too brittle.</strong>
          <br />
          <br />
          <p>We may not be the right fit for your company, but reach out and we'll be happy to make tooling recommendations.</p>
          <strong>We're the best solution for technical teams or companies with in-house analytics. </strong>
          <br />
          <br />
          <p>We want to provide clear value.</p>
          <strong>Our pricing & solutions will strive for clarity and simplicity.</strong>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
