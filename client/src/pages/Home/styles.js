import styled from 'styled-components';
import {
  Heading as BulmaHeading,
  Button as BulmaButton,
} from 'react-bulma-components';

export const List = styled.ul`
  margin-top: 50px;
  font-size: 20px;
  list-style-type: square;
`;

export const Heading = styled(BulmaHeading)`
  margin-top: 50px;
`;

export const Button = styled(BulmaButton)`
  border-width: 2px;
  margin-top: 50px;
`;
