import styled from 'styled-components';
import { media } from 'utils/media';

const FeatureSectionTitle = styled.h1`
font-size: 5.2rem;
font-weight: bold;
font-family: serif;
line-height: 1.1;
max-width: 700px;
text-align: center;
margin-bottom: 8rem;
letter-spacing: -0.03em;
margin: 0 auto; /* Ensure the title itself is centered */

${media('<=tablet')} {
  font-size: 4.6rem;
  margin-bottom: 2rem;
}

&amp;::after {
  content: '';
  display: block;
  width: 40%; /* Adjust the width of the line */
  height: 5px; /* Thickness of the line */
  background-color: #713B57; /* Color of the line */
  margin: 10px auto 0 auto; /* Center the line and add margin for spacing */
  margin-bottom: 8rem;
}
`;

export default FeatureSectionTitle;