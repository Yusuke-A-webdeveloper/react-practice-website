import styled from 'styled-components';
import { awardsCardList } from '../../data';

const Awards = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Awards</h2>
      </div>
      <article>
        {awardsCardList.map((list) => {
          const { id, title, logo, date } = list;
          return (
            <div className="card" key={id}>
              <div className="img-con">
                <img src={logo} alt={title} />
              </div>
              <footer>
                <h3>{title}</h3>
                <p>{date}</p>
              </footer>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  .title {
    h2 {
      font-size: 50px;
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 50px;
    .card {
      width: 300px;
      background: var(--white);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px;
      border-radius: 10px;
      .img-con {
        img {
          width: 100px;
          height: 100px;
        }
      }
      footer {
        text-align: center;
        margin-top: 30px;
        h3 {
          font-size: 18px;
          font-weight: 400;
        }
        p {
          font-size: 12px;
          color: var(--p-hero);
        }
      }
    }
  }
`;

export default Awards;
