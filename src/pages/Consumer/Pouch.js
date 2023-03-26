import styled from 'styled-components';
import { InsidePortalButton } from '../../components/Buttons';
import { AiOutlineArrowRight } from 'react-icons/ai';
import pouchImg from '../../images/pouch1.jpg';
import pouchVideo from '../../videos/pouch.mp4';
import pouchImg2 from '../../images/pouch2.jpg';

const Pouch = () => {
  return (
    <Wrapper id="pouch">
      <div className="top">
        <div className="img-con">
          <img src={pouchImg} alt="pouch" />
        </div>
        <article>
          <h2>
            <span>Pouch.</span>
            From popular browser extension to a rewarding shopping assistant.
          </h2>
          <div className="text">
            <p>
              The innovative browser extension that saved savvy shoppers both
              time and money looking for the best discounts started as the
              choice of all the dragons (top business leaders) on the popular UK
              series Dragons Den has become a real British success story thanks
              to its partnership with GSG.
            </p>
            <p>
              Today Pouch is more than a piece of smart technology more than a
              brand – our loyal members are connected together through their
              love of shopping and rewards. Served by an ever-growing portfolio
              of services across the consumer journey that now includes Pouch
              Points.
            </p>
          </div>
          <InsidePortalButton className="btn">
            <a
              href="https://joinpouch.com/en-gb/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineArrowRight />
              learn more
            </a>
          </InsidePortalButton>
        </article>
      </div>
      <div className="bottom">
        <div className="video-con">
          <video muted autoPlay loop>
            <source src={pouchVideo} type="video/mp4" />
          </video>
        </div>
        <article>
          <div className="single-card">
            <h3>
              It's new Pouch Points, allows users to earn{' '}
              <span>extra loyalty points online as well.</span>
            </h3>
          </div>
          <div className="single-card">
            <h3>
              Works with
              <span>over 3,000 stores.</span>
            </h3>
          </div>
          <div className="single-card">
            <h3>
              The UK’s original <br />
              <span>browser extension.</span>
            </h3>
          </div>
          <div className="single-card img-con">
            <img src={pouchImg2} alt="card" />
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 150px;
  .top {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    .img-con {
      width: 30%;
      position: relative;
      height: 300px;
      margin-right: 50px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    article {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 50px;
      h2 {
        font-size: 60px;
        font-weight: 300;
        line-height: 60px;
        max-width: 800px;
        span {
          font-weight: 700;
        }
      }
      p {
        color: var(--p-hero);
        max-width: 650px;
        margin-top: 30px;
        font-size: 20px;
      }
    }
  }
  .bottom {
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 80px;
    .video-con {
      position: relative;
      width: 50%;
      height: 380px;
      border-radius: 10px;
      margin-right: 20px;
      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    article {
      position: relative;
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      .single-card {
        position: relative;
        width: 300px;
        min-height: 320px;
        background: var(--white);
        border-radius: 10px;
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          font-size: 30px;
          font-weight: 400;
          span {
            font-weight: 700;
          }
        }
      }
      .single-card.img-con {
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

export default Pouch;
