import { Link } from 'react-router-dom';
import styled from 'styled-components';
import adidas from '../../logo/adidas.svg';
import microsoft from '../../logo/Microsoft.svg';
import nordvpn from '../../logo/NordVPN.svg';
import booking from '../../logo/Booking.com_.svg';
import hm from '../../logo/HM.svg';
import tui from '../../logo/TUI.svg';
import nike from '../../logo/Nike.svg';
import sixt from '../../logo/SIXT.svg';
import wayfair from '../../logo/wayfair.svg';
import { InnerLinkButton } from '../../components/Buttons';
import { AiOutlineArrowRight } from 'react-icons/ai';

const bgImg =
  'https://www.global-savings-group.com/wp-content/uploads/2022/06/image_for_retailers2-scaled.jpg';

const Partner = () => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={bgImg} alt="partner" />
      </div>
      <article>
        <h2 className="show-on-scroll">
          Our Partner
          <br />
          <span>Brands and Retailers</span>
        </h2>
        <p className="show-on-scroll">
          We successfully connect shoppers with more than 5,000 brands and
          retailers globally in a broad range of shopping categories.
        </p>
        <div className="logo-container">
          <div className="logo-con show-on-scroll first">
            <img src={adidas} alt="adidas" />
          </div>
          <div className="logo-con show-on-scroll second">
            <img src={microsoft} alt="microsoft" />
          </div>
          <div className="logo-con show-on-scroll third">
            <img src={nordvpn} alt="nordvpn" />
          </div>
          <div className="logo-con show-on-scroll fourth">
            <img src={booking} alt="booking" />
          </div>
          <div className="logo-con show-on-scroll fifth">
            <img src={hm} alt="hm" />
          </div>
          <div className="logo-con show-on-scroll sixth">
            <img src={tui} alt="tui" />
          </div>
          <div className="logo-con show-on-scroll seventh">
            <img src={nike} alt="nike" />
          </div>
          <div className="logo-con show-on-scroll eighth">
            <img src={sixt} alt="sixt" />
          </div>
          <div className="logo-con show-on-scroll nineth">
            <img src={wayfair} alt="wayfair" />
          </div>
        </div>
        <InnerLinkButton className="btn show-on-scroll">
          <Link to="brands">
            <AiOutlineArrowRight />
            for brands
          </Link>
        </InnerLinkButton>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  .img-con {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    gap: 70px;
    max-width: 550px;
    margin-left: 200px;
    h2 {
      font-size: 50px;
      font-weight: 300;
      line-height: 50px;
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 0.5s;
      span {
        font-weight: 700;
      }
    }
    p {
      color: var(--p-hero);
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 0.7s;
    }
    .logo-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      max-width: 350px;
    }
    .btn {
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 1.8s;
    }
  }
  .logo-con.show-on-scroll.first {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 0.9s;
  }
  .logo-con.show-on-scroll.second {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 1s;
  }
  .logo-con.show-on-scroll.third {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 1.1s;
  }
  .logo-con.show-on-scroll.fourth {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 1.2s;
  }
  .logo-con.show-on-scroll.fifth {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 1.3s;
  }
  .logo-con.show-on-scroll.sixth {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 1.4s;
  }
  .logo-con.show-on-scroll.seventh {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 1.5s;
  }
  .logo-con.show-on-scroll.eighth {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 1.6s;
  }
  .logo-con.show-on-scroll.nineth {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 1.7s;
  }
  .show-on-scroll.is-visible {
    opacity: 1;
  }
  .logo-con.show-on-scroll.is-visible {
    opacity: 1;
  }
`;

export default Partner;
