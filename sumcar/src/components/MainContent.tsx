import React from 'react';
import styled from 'styled-components';

const MainContent: React.FC = () => {
  // Unsplash에서 랜덤 자동차 이미지 URL 배열
  const carImages = [
    'https://source.unsplash.com/300x200/?car',
    'https://source.unsplash.com/300x200/?vehicle',
    'https://source.unsplash.com/300x200/?auto',
    'https://source.unsplash.com/300x200/?automobile',
  ];

  return (
    <MainContainer>
      <SectionContainer>
        <Section>
          <h2>섬카는 왜 저렴할까요?</h2>
          <Card>
            <p>섬카 이용금액</p>
            <Chart>평균 12,300원 절약하고 있어요.</Chart>
          </Card>
          <Card>
            <p>왜 섬카가 가장 저렴할까요?</p>
            <Image src="https://source.unsplash.com/300x200/?car" alt="Example" />
          </Card>
          <Card>
            <p>고객에게 더 많은 혜택을 제공하고 있기 때문이에요.</p>
            <Image src="https://source.unsplash.com/300x200/?car" alt="Example" />
          </Card>
        </Section>
        <Section>
          <h2>어떤 차가 필요하세요?</h2>
          <CarGrid>
            {carImages.map((src, index) => (
              <CarCard key={index}>
                <Image src={src} alt={`Car ${index + 1}`} />
                <p>20% 할인된 가격</p>
              </CarCard>
            ))}
          </CarGrid>
        </Section>
      </SectionContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 40px 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  flex: 1;
  margin-bottom: 40px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Chart = styled.div`
  background-color: #e0e0e0;
  height: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const CarCard = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

export default MainContent;