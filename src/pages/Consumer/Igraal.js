import styled from 'styled-components';
import { InsidePortalButton } from '../../components/Buttons';
import { AiOutlineArrowRight } from 'react-icons/ai';
import portalImg from '../../images/portal-card.jpg';
import portalVideo from '../../videos/portal-card.mp4';

const Igraal = () => {
  return (
    <Wrapper id="igraal">
      <div className="title">
        <h2>
          <span>iGraal.</span>The reward community that is taking Europe's
          loyalty sector to new heights.
        </h2>
      </div>
      <article>
        <div className="text">
          <p>
            iGraal has been rewarding its loyal members for over ten years.
            Today its reward community has millions of members in France,
            Germany and Spain. Together with GSG, we have over 12 million
            members.
          </p>
          <p>
            iGraal is the leading Cashback provider in Europe, but the team at
            iGraal never rests; they’re always there with ideas and services
            that help their shopping community to get more out of life as they
            connect them with the most relevant brands.
          </p>
          <InsidePortalButton className="btn">
            <a href="https://de.igraal.com/" target="_blank" rel="noreferrer">
              <AiOutlineArrowRight />
              learn more
            </a>
          </InsidePortalButton>
        </div>
        <div className="card-con">
          <div className="single-card">
            <h3>
              <span>Leader of cashback</span> in continental Europe.
            </h3>
          </div>
          <div className="single-card">
            <h3>
              Offers Cashback to millions of members in
              <span>France, Germany, and Spain.</span>
            </h3>
          </div>
        </div>
      </article>
      <footer>
        <div className="left">
          <div className="single-card">
            <h3>"Always nice to get cashback easily!”</h3>
            <aside>
              <p className="name">Patrick</p>
              <p className="second">iGraal member</p>
            </aside>
          </div>
          <div className="single-card img-con">
            <img src={portalImg} alt="card" />
          </div>
          <div className="single-card">
            <h4>120€ cashback is the yearly average that a member gets.</h4>
            <p className="name">*iGraal data, 2021 (for iGraal and Shoop)</p>
          </div>
          <div className="single-card">
            <h5>
              Other solutions and services including{' '}
              <span>
                website, mobile applications, inspirational blog, newsletter,
                and browser extensions.
              </span>
            </h5>
          </div>
        </div>
        <div className="right">
          <div className="video-con">
            <video muted autoPlay loop>
              <source src={portalVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    margin: 80px 0;
    h2 {
      font-size: 60px;
      font-weight: 300;
      line-height: 60px;
      span {
        font-weight: 700;
      }
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    .text {
      width: 100%;
      p {
        padding: 0 30px 20px 10px;
        color: var(--p-hero);
        font-size: 20px;
      }
      .btn {
        margin-top: 50px;
      }
    }
    .card-con {
      width: 100%;
      display: flex;
      gap: 40px;
      .single-card {
        width: 100%;
        background: var(--white);
        border-radius: 10px;
        padding: 40px 60px 40px 30px;
        h3 {
          font-size: 30px;
          font-weight: 400;
          span {
            font-weight: 700;
          }
        }
      }
    }
  }
  footer {
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 50px;
    .left {
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
          font-weight: 700;
        }
        .name {
          font-weight: 500;
          font-size: 18px;
        }
        .second {
          font-size: 18px;
          color: var(--p-hero);
        }
        h4 {
          font-size: 30px;
          font-weight: 400;
        }
        h5 {
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
    .right {
      position: relative;
      width: 50%;
      .video-con {
        position: relative;
        width: 90%;
        height: 380px;
        border-radius: 10px;
        margin-left: 20px;
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
    }
  }
`;

export default Igraal;
