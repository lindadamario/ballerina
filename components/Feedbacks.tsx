import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';
import Util from '../common/Util';

const Wrapper = styled.section`
  padding: 1em 2em;
  margin: auto auto 0 auto;
  min-height: 180px;
  width: 70%;
  align-self: flex-end;
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  ul {
    border-bottom-color: transparent;

    li {
      background-color: transparent;
      padding: 0 20px 10px 0;
      border-color: transparent;
      border-radius: 0;
      border-right: 2px solid #a0a0a0;
      color: #fff;
      font-size: 1.25rem;
      ${({ active }) =>
        active &&
        `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
    }

    li: last-child {
      border-right-color: transparent;
      padding-left: 20px;
    }
  }
`;

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeedbackTitle = styled.div`
  display: inline-flex;
  text-transform: uppercase;
  font-size: 1.12rem;
  p:first-child {
    padding-right: 20px;
  }
`;

const FeedbackText = styled.div`
  display: inline-flex;
  line-height: 22px;
  color: #a0a0a0;
  font-size: 1.12rem;
  font-weight: 300;
`;

const Feedbacks = () => {

  const [audienceFeedbacks, setAudienceFeedbacks] = useState([]);
  const [pressFeedbacks, setPressFeedbacks] = useState([]);

  useEffect(() => {
    Util.getPressFeedbacks().then((res) => {
      setPressFeedbacks(res?.items);
    });
  }, []);

  useEffect(() => {
    Util.getAudienceFeedbacks().then((res) => {
      setAudienceFeedbacks(res?.items);
    });
  }, []);

  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>Press</Tab>
          <Tab>Audience</Tab>
        </TabList>

        <TabPanel>
          {audienceFeedbacks &&
            audienceFeedbacks.map((item, i) => {
              return (
                <FeedbackContainer key={i}>
                  <FeedbackTitle>
                    <p>{item.fields.authorName}</p>
                    <p>{moment(item.fields.date).format('L')}</p>
                  </FeedbackTitle>
                  <FeedbackText>
                    {item.fields.feedbackText.content[0].content[0].value}
                  </FeedbackText>
                </FeedbackContainer>
              );
            })}
        </TabPanel>
        <TabPanel>
          {pressFeedbacks &&
            pressFeedbacks.map((item, i) => {
              return (
                <FeedbackContainer key={i}>
                  <FeedbackTitle>
                    <p>{item.fields.authorName}</p>
                    <p>{moment(item.fields.date).format('L')}</p>
                  </FeedbackTitle>
                  <FeedbackText>
                    {item.fields.feedbackText.content[0].content[0].value}
                  </FeedbackText>
                </FeedbackContainer>
              );
            })}
        </TabPanel>
      </Tabs>
    </Wrapper>
  );
};

export default Feedbacks;
