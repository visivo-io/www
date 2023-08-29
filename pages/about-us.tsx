import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Who are we?">
      <PrivacyPolicyContainer>
        <RichText>
          <p>We are a (very) small team.  We have deep experience in software development and business analytics (shocker).</p>
          <br />
          <br />
          <p>We want to solve a problem that we know exists.</p>
          <strong>Business intelligence visualizations are too brittle.</strong>
          <br />
          <br />
          <p>We want to solve this problem our way.</p>
          <strong>We are not going to be everything to everybody.</strong>
          <br />
          <br />
          <p>We want to provide clear value</p>
          <strong>Our pricing and policies will strive for clarity and simplicity.</strong>
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
