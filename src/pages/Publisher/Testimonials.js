import styled from 'styled-components';
import { publisherCardList } from '../../data';

const Testimonials = () => {
  let position = 'next';
  return (
    <Wrapper>
      <div className="title">
        <h2>Testimonials.</h2>
      </div>
      <article>
        {publisherCardList.map((list) => {
          const { id, logo, info, title } = list;
          return (
            <div className={`single-card ${position}`} key={id}>
              <div className="img-con">
                <img src={logo} alt={info} />
              </div>
              <p>{info}</p>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  min-height: 100vh;
  .title {
    h2 {
      font-size: 50px;
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 100px;
    gap: 40px;
    .single-card {
      /* position: absolute;
      top: 0;
      left: 0; */
      width: 280px;
      background: var(--white);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 70px 30px;
      .img-con {
        position: relative;
        width: 75px;
        height: 30px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      p {
        width: 250px;
        padding: 10px;
      }
    }
    /* .single-card.next {
      left: -100%;
    } */
  }
`;

export default Testimonials;
