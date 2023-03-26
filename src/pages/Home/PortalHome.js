import styled from 'styled-components';
import phoneVideo from '../../videos/consumer_portal.mp4';
import logoImg1 from '../../logo/logo1.png';
import logoImg2 from '../../logo/logo2.png';
import logoImg3 from '../../logo/logo3.png';
import { Link } from 'react-router-dom';
import { InnerLinkButton } from '../../components/Buttons';
import { AiOutlineArrowRight } from 'react-icons/ai';

const PortalHome = () => {
  return (
    <Wrapper id="consumer">
      <div className="video-con">
        <video muted autoPlay loop>
          <source src={phoneVideo} type="video/mp4" />
        </video>
      </div>
      <article>
        <h2 className="show-on-scroll">
          Our Consumer <br />
          <span>Portals</span>
        </h2>
        <p className="show-on-scroll">
          iGraal, Shoop, and Pouch represent Continental Europe’s largest
          shopping rewards communities. We are able to provide our members with
          the most comprehensive and exclusive rewards, consisting of cashback,
          points, deals, reviews, and discounts as well as tools.
        </p>
        <div className="logo-con">
          <div className="img-con show-on-scroll first">
            <img src={logoImg1} alt="logo" />
          </div>
          <div className="img-con show-on-scroll second">
            <img src={logoImg2} alt="logo" />
          </div>
          <div className="img-con show-on-scroll third">
            <img src={logoImg3} alt="logo" />
          </div>
        </div>
        <div className="link-btn show-on-scroll">
          <InnerLinkButton>
            <Link to="consumer">
              <AiOutlineArrowRight />
              learn more
            </Link>
          </InnerLinkButton>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .video-con {
    position: relative;
    width: 100%;
    height: 100vh;
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  article {
    width: 100%;
    padding: 0 100px;
    h2 {
      font-size: 50px;
      font-weight: 400;
      line-height: 50px;
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 0.4s;
      span {
        font-weight: 700;
      }
    }
    p {
      margin: 40px 0;
      max-width: 450px;
      color: var(--p-hero);
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 0.7s;
    }
    .logo-con {
      display: flex;
      gap: 80px;
      margin-bottom: 60px;
      .img-con {
        position: relative;
        height: 30px;
        width: 100px;
        opacity: 0;
        transition: 0.8s ease-out;
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
    .link-btn {
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 1.1s;
    }
  }
  .img-con.show-on-scroll.first {
    transition-delay: 0.5s;
  }
  .img-con.show-on-scroll.second {
    transition-delay: 0.7s;
  }
  .img-con.show-on-scroll.third {
    transition-delay: 0.9s;
  }
  .show-on-scroll.is-visible {
    opacity: 1;
  }
  .img-con.show-on-scroll.is-visible {
    opacity: 1;
  }
`;

export default PortalHome;
