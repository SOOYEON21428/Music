import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>오르카스튜디오 주소지</p>
        <p>개인정보처리방침</p>
        <p>이용약관</p>
      </FooterContent>
      <FooterContent>
        <p>섬카 고객센터</p>
        <p>070-4183-0374</p>
        <p>help@sumcar.kr</p>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const FooterContent = styled.div`
  flex: 1;
  text-align: center;

  p {
    margin: 5px 0;
  }
`;

export default Footer;