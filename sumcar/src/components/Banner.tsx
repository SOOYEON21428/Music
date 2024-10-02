import React from 'react';
import styled from 'styled-components';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <h1>3초 간편 가입하면 렌터카 20% 할인 쿠폰 제공!</h1>
        <p>회원가입하고 렌터카 20% 할인 받아요</p>
      </BannerContent>
      <SearchBox>
        <label>여행 일정</label>
        <input
          type="text"
          placeholder="2024.10.03 (목) 09:00 ~ 2024.10.04 (금) 09:00"
        />
        <label>운전자 정보</label>
        <input type="text" placeholder="만 26세 이상, 2종 보통" />
        <button>검색하기</button>
      </SearchBox>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  background-color: #f8b4b4;
  padding: 50px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url('https://source.unsplash.com/1600x300/?car');
  background-size: cover;
  background-position: center;
`;

const BannerContent = styled.div`
  color: white;

  h1 {
    font-size: 36px;
    margin: 0;
  }

  p {
    font-size: 18px;
  }
`;

const SearchBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;

  label {
    font-size: 14px;
    color: #333;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    background-color: #6c63ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default Banner;