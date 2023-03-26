import styled from 'styled-components';
import aboutImg from '../../images/about.jpg';

const WhoWeAre = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>
          <span>Who</span> we are.
        </h2>
      </div>
      <article>
        <div className="text">
          <p>
            Founded in 2012 by Gerhard Trautmann, Andreas Fruth, and Adrian
            Renner with headquarters in Munich. Global Savings Group (GSG) is
            Europe’s largest shopping rewards company with an international
            footprint in more than 20 markets. We provide people with access to
            the best savings, cashback, deals, product inspiration, and reviews,
            offering them the opportunity to save money all while continuing to
            enjoy their usual shopping experience. Our trusted platform is free
            and easy-to-use, helping millions of consumers shop with confidence.
          </p>
        </div>
        <div className="img-con">
          <img src={aboutImg} alt="about" />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  .title {
    h2 {
      font-size: 50px;
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 50px;
    .text {
      width: 100%;
      p {
        color: var(--p-hero);
        max-width: 550px;
      }
    }
    .img-con {
      position: relative;
      width: 100%;
      img {
        border-radius: 10px;
      }
    }
  }
`;

export default WhoWeAre;
