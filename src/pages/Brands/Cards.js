import styled from 'styled-components';
import { cardList } from '../../data';

const Cards = () => {
  return (
    <Wrapper>
      <div className="card-container">
        {cardList.map((list) => {
          const { id, icon, info, title } = list;
          return (
            <div className="single-card" key={id}>
              <h4>{icon}</h4>
              <h3>{title}</h3>
              <p>{info}</p>
            </div>
          );
        })}
      </div>
      <footer>
        <h2>
          And <span>much more...</span>
        </h2>
        <p>
          We also provide conversion and engagement tools like ‘Digital
          Rewards’, ‘GSG In-store’, ‘In-app campaigns’, ‘Targeted Newsletters’,
          ‘Browser Extensions’ etc. These add to the consumers’ shopping
          experience, increase cart value, and help brands adjust their branding
          and promotions in real-time.
        </p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  margin-top: 100px;
  .card-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
  .single-card {
    width: 280px;
    background: var(--white);
    border-radius: 10px;
    padding: 30px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h4 {
      font-size: 30px;
    }
    h3 {
      font-size: 25px;
      font-weight: 400;
    }
  }
  footer {
    margin-top: 50px;
    h2 {
      font-size: 45px;
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }
    p {
      color: var(--p-hero);
      max-width: 900px;
      margin-top: 30px;
    }
  }
`;

export default Cards;
