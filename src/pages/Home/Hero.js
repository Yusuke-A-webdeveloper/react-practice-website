import styled, { keyframes } from 'styled-components';
import heroImg1 from '../../images/hero1.webp';
import heroImg2 from '../../images/hero2.jpg';
import heroImg3 from '../../images/hero3.webp';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useGlobalContext } from '../../context';

const Hero = () => {
  const { stickyNav } = useGlobalContext();

  return (
    <Wrapper>
      <div className={stickyNav ? 'stickyNav top header' : 'top header'}>
        <h2 className="first-header">We're</h2>
        <div className="img-con">
          <img src={heroImg1} alt="hero one" />
        </div>
        <h2 className="first-header">changing</h2>
      </div>
      <div className="middle header">
        <h2>the</h2>
        <div className="img-con">
          <img src={heroImg2} alt="hero two" />
        </div>
        <h2>way</h2>
      </div>
      <div className="bottom header">
        <h2>people</h2>
        <div className="img-con">
          <img src={heroImg3} alt="hero three" />
        </div>
        <h2>buy</h2>
      </div>
      <footer>
        <div className="text">
          <p>
            Global Savings Group is the world’s largest shopping community with
            Europe’s leading shopping rewards company. Helping billions of
            people make confident shopping decisions.
          </p>
        </div>
        <div className="down-arrow">
          <a href="#consumer">
            <AiOutlineArrowDown />
          </a>
        </div>
      </footer>
    </Wrapper>
  );
};

const slideImage = keyframes`
  0%,25% {width:0px}
  80%,100%{width:230px}
`;

const downArrowPop = keyframes`
  0%{transform:translateY(-3px)}
  20%{transform:translateY(3px)}
  30%{transform:translateY(-8px)}
  40%{transform:translateY(8px)}
  50%{transform:translateY(-3px)}
  60%{transform:translateY(3px)}
  65%,100%{transform:translateY(0px)}
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--bg);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 1;
  .stickyNav {
    margin-top: 180px;
  }
  .header {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    h2 {
      font-size: 100px;
    }
    .img-con {
      position: relative;
      width: 230px;
      height: 160px;
      overflow-x: hidden;
      animation: ${slideImage} 2.5s ease-out;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
      }
    }
    .first-header {
      font-weight: 350;
    }
  } // end of header
  footer {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    padding: 50px 30px 80px;
    p {
      max-width: 300px;
      color: var(--p-hero);
      margin-right: 100px;
    }
    .down-arrow {
      position: relative;
      width: 55px;
      height: 55px;
      border: 1px solid var(--p-hero);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        animation: ${downArrowPop} 2s ease-in-out;
      }
      a {
        font-size: 28px;
        color: var(--black);
      }
    }
  }
`;

export default Hero;
