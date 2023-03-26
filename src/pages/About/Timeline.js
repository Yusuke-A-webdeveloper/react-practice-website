import styled from 'styled-components';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { timelineList } from '../../data';

const Timeline = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>
          From yesterday <span>to tomorrow.</span>
        </h2>
        <aside>
          <div className="arrow left">
            <AiOutlineArrowLeft />
          </div>
          <div className="arrow right">
            <AiOutlineArrowRight />
          </div>
        </aside>
      </div>
      <article>
        {timelineList.map((list) => {
          const { id, date, info } = list;
          return (
            <div className="timeline" key={id}>
              <div className="date">
                <h2>{date}</h2>
              </div>
              <div className="card">
                <p>{info}</p>
              </div>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 45px;
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }
    aside {
      display: flex;
      gap: 20px;
      .arrow {
        position: relative;
        width: 45px;
        height: 45px;
        border: 1px solid var(--p-hero);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          font-size: 20px;
          color: var(--black);
        }
      }
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    margin-top: 50px;
    .timeline {
      width: 750px;
      min-height: 250px;
      display: flex;
      align-items: center;
      gap: 20px;
      .date {
        h2 {
          font-size: 150px;
          font-weight: 400;
        }
      }
      .card {
        background: var(--white);
        width: 300px;
        border-radius: 10px;
        padding: 40px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default Timeline;
