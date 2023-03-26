import styled from 'styled-components';
import { InnerLinkButton } from '../../components/Buttons';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import SlidingLine from '../../components/SlidingLine';
import SlidingLogo from '../../components/SlidingLogo';

const PublishHome = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2 className="show-on-scroll">
          Our <span>News Publishing</span> Partnerships
        </h2>
        <p className="show-on-scroll">
          We create rewarding moments for millions of smart shoppers and
          newsreaders around the globe through shopping recommendations,
          reviews, and discounts.
        </p>
      </div>
      <SlidingLogo />
      <SlidingLine />
      <InnerLinkButton className="btn show-on-scroll">
        <Link to="publishers">
          <AiOutlineArrowRight />
          for publisher
        </Link>
      </InnerLinkButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--bg);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  .title {
    text-align: center;
    h2 {
      font-weight: 400;
      font-size: 45px;
      padding: 20px 0;
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 0.5s;
      span {
        font-weight: 700;
      }
    }
    p {
      margin: 0 auto;
      max-width: 750px;
      color: var(--p-hero);
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 0.7s;
    }
  }
  .btn {
    opacity: 0;
    transition: 0.8s ease-out;
    transition-delay: 0.5s;
  }
  .show-on-scroll.is-visible {
    opacity: 1;
  }
`;

export default PublishHome;
