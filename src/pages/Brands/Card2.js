import styled from 'styled-components';
import { cardList2 } from '../../data';

const Card2 = () => {
  return (
    <Wrapper>
      {cardList2.map((list) => {
        const { id, logo, info } = list;
        return (
          <div className="single-card" key={id}>
            <div className="img-con">
              <img src={logo} alt={info} />
            </div>
            <p>{info}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
  gap: 40px;
  .single-card {
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
      width: 250px;
      height: 50px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default Card2;
