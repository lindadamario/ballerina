import React from 'react';
import styled from 'styled-components';
import Feedbacks from './Feedbacks';
const imageUrl = '../static/images/cover.jpg';

const white = '#fff';
const grey = '#a0a0a0';

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-image: url(${imageUrl});
  background-position: center top;
  background-size: 60% auto;
  background-position: right;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  border-left: 6px solid ${white};
  padding-left: 20px;
  margin-top: 10em;
  h1 {
    font-size: 3.75rem;
    margin: 0;
  }
  p {
    font-size: 1.375rem;
    color: ${grey};
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
