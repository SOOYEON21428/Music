import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="logo.png" alt="Logo" />
      <Nav>
        <NavItem href="/">고객센터</NavItem>
        <NavItem href="/about">이벤트</NavItem>
        <NavItem href="/contact">입점 브랜드</NavItem>
        <NavItem href="/nonjoin">비회원 주문 조회</NavItem>
        <NavItem href="/login">로그인</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;