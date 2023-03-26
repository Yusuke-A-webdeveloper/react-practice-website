import styled from 'styled-components';

const aboutImg =
  'https://www.global-savings-group.com/wp-content/uploads/2022/03/How-we-do-it.jpg';
const card1 =
  '	https://www.global-savings-group.com/wp-content/uploads/2022/01/support-publishers.jpg';
const card2 =
  'https://www.global-savings-group.com/wp-content/uploads/2022/01/empower-consumers.jpg';
const card3 =
  'https://www.global-savings-group.com/wp-content/uploads/2022/01/connect-brands.jpg"';

const HowWeDo = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>
          <span>How</span> we do it.
        </h2>
      </div>
      <article>
        <div className="left">
          <div className="text">
            <p>
              Our business is all about building connections across the field of
              commerce. Whether we are connecting services across the consumer
              decisions journey or helping brands find the right consumer for
              the products they sell through publishing. GSG is always there
              with positive and pioneering ideas that change the way people buy.
            </p>
          </div>
          <div className="img-con">
            <img src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="card-con">
          <div className="card">
            <h3>
              <span>We connect</span> brands.
            </h3>
            <p>directly to consumers and drive sales whilst adding value.</p>
          </div>
          {/* image */}
          <div className="card img-con">
            <img src={card1} alt="card" />
          </div>
          {/* end of image */}
          {/* image */}
          <div className="card img-con">
            <img src={card2} alt="card" />
          </div>
          {/* end of image */}
          <div className="card">
            <h3>
              <span>We support</span> publishers.
            </h3>
            <p>
              by offering commerce content solutions that are useful to their
              readers and increase their site's revenue.
            </p>
          </div>

          <div className="card">
            <h3>
              <span>We empower</span> consumers.
            </h3>
            <p>by making their whole shopping experience more rewarding.</p>
          </div>
          {/* image */}
          <div className="card img-con">
            <img src={card3} alt="card" />
          </div>
          {/* end of image */}
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
    min-height: 100vh;
    .left {
      height: 100vh;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text {
        p {
          color: var(--p-hero);
          max-width: 550px;
        }
      }
      .img-con {
        position: relative;
        width: 620px;
        height: 450px;
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
    }
    .card-con {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      .card {
        position: relative;
        width: 300px;
        height: 220px;
        background: var(--white);
        border-radius: 10px;
        padding: 40px 25px;
        h3 {
          font-size: 22px;
          font-weight: 400;
          span {
            font-weight: 700;
          }
        }
        p {
          margin-top: 30px;
          padding-right: 20px;
        }
      }
      .card.img-con {
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
    }
  }
`;

export default HowWeDo;
