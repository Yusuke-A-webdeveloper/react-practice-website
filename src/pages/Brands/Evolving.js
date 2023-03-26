import styled from 'styled-components';
import slideImg from '../../images/brand-slide-section.png';
import slideImg2 from '../../images/brand-slide-section2.webp';
import slideImg3 from '../../images/brand-slide-section3.webp';

const Evolving = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>
          <span> We're constantly evolving,</span> building more opportunities
          in e-commerce
        </h2>
      </div>
      <article>
        <div className="text">
          <p>
            Our community of shoppers consists of millions of loyal members.
            These members appreciate, enjoy, and return for targeted offers and
            rewards provided by our consumer portals; iGraal, Pouch, and Shoop.
          </p>
          <p>
            They come to these portals and other shopping community led portals
            like mydealz, hotukdeals, to discover inspiration for their
            shopping, seeking valued advice on what and where to purchase. They
            enjoy the experience and regularly return for targeted offers and
            rewards.
          </p>
          <p>
            Every day as we know our members even better, we are able to provide
            them with improved and more relevant solutions which include
            suggestions for the right products and services, creating higher
            purchase satisfaction and increased love for the brands we partner
            with.
          </p>
          <p>
            Our relevance across the CDJ and deeper understanding of the
            consumer as an individual is helping us to become the shopper’s most
            trusted, reliable friend.
          </p>
        </div>
        <aside>
          <div className="image-container">
            <div className="img-con first">
              <img src={slideImg} alt="slide brand" />
            </div>
            <div className="img-con second">
              <img src={slideImg2} alt="slide brand" />
            </div>
            <div className="img-con third">
              <img src={slideImg3} alt="slide brand" />
            </div>
          </div>
          <div className="line-con">
            <div className="line one"></div>
            <div className="line two"></div>
            <div className="line three"></div>
          </div>
        </aside>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  .title {
    h2 {
      font-size: 80px;
      font-weight: 400;
      line-height: 70px;
      max-width: 1000px;
      span {
        font-weight: 700;
      }
    }
  }
  article {
    position: relative;
    width: 100%;
    margin-top: 80px;
    display: flex;
  }
  .text {
    width: 50%;
    p {
      color: var(--p-hero);
      margin-bottom: 20px;
      max-width: 450px;
    }
  }
  aside {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-left: 50px;
    .image-container {
      position: relative;
      width: 528px;
      height: 400px;
      overflow-x: hidden;
      .img-con {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }
      .img-con.second {
        left: 100%;
      }
      .img-con.third {
        left: 200%;
      }
    }
    .line-con {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;
      .line {
        position: relative;
        width: 80px;
        height: 4px;
        background: #e6e6e6;
        overflow-x: hidden;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 4px;
          background: var(--pure-black);
        }
      }
    }
  }
`;

export default Evolving;
