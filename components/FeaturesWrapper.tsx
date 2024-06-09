import styled from 'styled-components';

const FeaturesWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
    alight-items: center;
    gap 1rem;
  }

  & > *:not(:last-child) {
    margin-bottom: 3rem; /* Add margin bottom to all children except the last one */
  }
`;

export default FeaturesWrapper;
