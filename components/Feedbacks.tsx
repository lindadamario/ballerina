import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';
import Util from '../common/Util';

const white = '#fff';
const fontSize = '1.25rem';
const grey = '#a0a0a0';

const Wrapper = styled.section`
  padding: 1em 2em;
  margin: auto auto 0 auto;
  min-height: 180px;
  width: 70%;
  align-self: flex-end;
  color: ${white};
  background: rgba(191, 191, 191, 0.2);
  ul {
    border-bottom-color: transparent;
    li {
      background-color: transparent;
      border-color: transparent;
      border-radius: 0;
      padding: 0 20px 10px 0;
      border-right: 2px solid ${grey};
      color: ${white};
      font-size: ${fontSize};
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
  color: ${grey};
  font-size: 1.12rem;
  font-weight: 400;
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
