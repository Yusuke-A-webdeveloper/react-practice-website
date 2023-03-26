import styled, { keyframes } from 'styled-components';
import { NewsHeadline } from '../../components/Buttons';
import { newsList } from '../../data';

const Latest = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>latest news</h2>
      </div>
      <article>
        {newsList.map((news) => {
          const { id, title, href, forClass } = news;
          return (
            <NewsHeadline className={`head-line ${forClass}`} key={id}>
              <a href={href}>{title}</a>
            </NewsHeadline>
          );
        })}
      </article>
    </Wrapper>
  );
};

const slideNews = keyframes`
0%{ transform: translateX(1200px)}
100%{ transform: translateX(-3330px)}
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 80px;
  background: linear-gradient(to right, var(--pure-black), #cbcbcb);
  color: var(--white);
  display: flex;
  align-items: center;
  padding: 20px 0;
  z-index: 1;
  .title {
    position: relative;
    width: 170px;
    padding: 20px;
    background: linear-gradient(to right, var(--pure-black), #191919);
    z-index: 2;
    h2 {
      width: 150px;
      text-transform: uppercase;
      font-size: 20px;
      border-right: 2px solid var(--white);
    }
  }
  article {
    position: relative;
    padding-left: 20px;
    display: flex;
    flex-wrap: nowrap;
    .head-line {
      position: relative;
      width: 900px;
      height: 80px;
      a {
        transform: translate(1200px);
        animation: ${slideNews} 40s linear infinite;
      }
    }
    .head-line.small {
      width: 500px;
    }
    .head-line.medium {
      width: 580px;
    }
    .head-line.large {
      width: 900px;
    }
    .head-line.extra {
      width: 1350px;
    }
  }
`;

export default Latest;
