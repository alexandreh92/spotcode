import styled from 'styled-components';
import { Section as BulmaSection } from 'react-bulma-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

export const Section = styled(BulmaSection)`
  margin-bottom: 40px;
`;
