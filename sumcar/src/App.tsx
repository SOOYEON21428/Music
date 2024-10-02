import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Banner from './components/Banner';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export default App;