import React from 'react';
import { Container as BulmaContainer } from 'react-bulma-components';

import { Container, Section } from './styles';

import Navbar from '~/layouts/shared/Navbar';
import Footer from '~/layouts/shared/Footer';

export default function Default({ children }) {
  return (
    <Container>
      <Navbar />
      <Section>
        <BulmaContainer>{children}</BulmaContainer>
      </Section>
      <Footer />
    </Container>
  );
}
