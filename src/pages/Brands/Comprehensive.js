import styled from 'styled-components';
import brandsImg from '../../images/brands1.jpg';
import brandsImg2 from '../../images/brands2.jpg';
import brandsImg3 from '../../images/brands3.jpg';

const Comprehensive = () => {
  return (
    <Wrapper>
      <div className="line"></div>
      <article>
        <div className="left">
          <div className="top-big">
            <div className="img-con">
              <img src={brandsImg} alt="brand" />
            </div>
          </div>
          <div className="bottom-sm">
            <div className="img-con">
              <img src={brandsImg2} alt="brand" />
            </div>
            <div className="img-con">
              <img src={brandsImg3} alt="brand" />
            </div>
          </div>
        </div>
        <div className="right">
          <h2>
            Comprehensive service across the <span>consumer's journey.</span>
          </h2>
          <p>
            Our community of shoppers consisting of billions of user journeys,
            and millions of members with high purchase intent, combined with our
            vast range of innovative technology and solutions makes us every
            brand’s perfect partner. This reach and scale sets us apart from the
            competition
          </p>
          <p>
            As a result, we have built up the global knowledge and expertise to
            support both consumers and brands at every step of the purchase
            journey providing them with a wide range of innovative services and
            solutions. And thanks to our strong and lasting partnerships with
            the world’s top news publishing sites, we’re able to utilise their
            prime spaces to provide valuable advice, offers, and retail
            solutions to readers.
          </p>
          <p>
            In essence, our united platform provides a place where every shopper
            and brand can connect and be rewarded, but there is still more
            advantages…
          </p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  margin-top: 150px;
  .line {
    width: 100%;
    height: 2px;
    background: var(--p-hero);
  }
  article {
    position: relative;
    display: flex;
    width: 100%;
    margin-top: 100px;
    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .top-big {
        display: flex;
        flex-direction: column;
        .img-con {
          position: relative;
          width: 100%;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .bottom-sm {
        display: flex;
        gap: 40px;
        img {
          border-radius: 10px;
        }
      }
    }
    .right {
      width: 100%;
      padding: 0 30px 0 100px;
      h2 {
        font-size: 50px;
        font-weight: 400;
        line-height: 50px;
        margin-bottom: 70px;
        span {
          font-weight: 700;
        }
      }
      p {
        color: var(--p-hero);
        margin-bottom: 20px;
        max-width: 450px;
      }
    }
  }
`;

export default Comprehensive;
