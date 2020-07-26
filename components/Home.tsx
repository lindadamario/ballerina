import React from 'react';
import styled from 'styled-components';
import Feedbacks from './Feedbacks';
const imageUrl = '../static/images/cover.jpg';

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(${imageUrl}) right top/60% auto no-repeat;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  border-left: 6px solid #fff;
  padding-left: 20px;
  margin-top: 10em;
  h1 {
    font-size: 3.75rem;
    margin: 0;
  }
  p {
    font-size: 1.25rem;
    color: #a0a0a0;
    margin: 10px 0px 0px 0px;
  }
`;

const Home = () => {
  return (
      <Wrapper>
          <Title>
            <h1>Chang Mao Hao</h1>
            <p>Professional ballerina</p>
          </Title>
        <Feedbacks />
      </Wrapper>
  );
};

export default Home;
