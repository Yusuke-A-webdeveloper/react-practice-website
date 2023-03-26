import styled from 'styled-components';
import publisherImg from '../../images/publisher.png';

const HeroPublisher = () => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={publisherImg} alt="hero" />
      </div>
      <article>
        <h2>
          The top <span>news publishers</span> are strengthening their online
          presence with us.
        </h2>
        <p>
          GSG has been pioneering partnerships with the media that encourage the
          full integration of our commerce content services. Especially since
          shopping has become an integral part of people’s lives, there is a
          need for new stories in the press that inspire readers to make smart,
          fair, and enjoyable purchases. Stories that are helping publishers to
          earn extra revenue.
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 100px;
  .img-con {
    position: relative;
    left: -50px;
  }
  article {
    max-width: 400px;
    h2 {
      font-size: 45px;
      font-weight: 400;
      line-height: 50px;
      span {
        font-weight: 700;
      }
    }
    p {
      color: var(--p-hero);
      margin-top: 70px;
    }
  }
`;

export default HeroPublisher;
