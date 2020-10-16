import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import logoImage from '../../assets/images/logo.svg';

import { Container, Content, Location } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImage} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Alvorada</strong>
          <span>Rio Grande do Sul</span>
        </Location>

        <Link to="/app">
          <FiArrowRight size={26} />
        </Link>
      </Content>
    </Container>
  );
}

export default Landing;
