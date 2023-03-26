import styled from 'styled-components';

const bgImg =
  '	https://www.global-savings-group.com/wp-content/uploads/2022/02/bg-our-reach-scaled.jpg';

const Reach = () => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={bgImg} alt="reach" />
      </div>
      <main>
        <div className="title">
          <h2 className="show-on-scroll">
            our <span>reach</span>
          </h2>
        </div>
        <article>
          <div className="left">
            <h2 className="show-on-scroll">20+ markets</h2>
            <h3 className="show-on-scroll">+2bn purchase journeys</h3>
            <h3 className="show-on-scroll">
              25.000.000+ <span>member</span>
            </h3>
            <h4 className="show-on-scroll">
              1.000+ <span>employees from</span> 65+ <span>nationalities</span>
            </h4>
            <p className="show-on-scroll">
              Numbers are based on the full calendar year of 2022.
            </p>
          </div>
          <div className="right">
            <h2 className="show-on-scroll">14 office locations</h2>
            <h4 className="show-on-scroll">
              Berlin, London, Madrid, Munich, Warsaw, Atlanta, Paris, Sao Paulo,
              Bangalore, Malaga, Amsterdam, Kuala Lumpur
            </h4>
          </div>
        </article>
      </main>
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
    width: 100%;
    height: 100vh;
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
  main {
    height: 50vh;
    padding: 30px 20px;
    color: var(--white);
  }
  .title {
    position: relative;
    h2 {
      font-size: 45px;
      font-weight: 400;
      text-transform: capitalize;
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 0.5s;
      span {
        font-weight: 700;
      }
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    .left {
      width: 100%;
      h2,
      h3,
      h4 {
        font-size: 45px;
        opacity: 0;
        transition: 0.8s ease-out;
      }
      h2 {
        transition-delay: 0.7s;
      }
      h3 {
        transition-delay: 0.9s;
      }
      h4 {
        transition-delay: 1.1s;
      }
      span {
        font-size: 20px;
      }
      p {
        margin-top: 20px;
        opacity: 0;
        transition: 0.8s ease-out;
        transition-delay: 1.3s;
      }
    }
    .right {
      width: 100%;
      padding: 0 50px 0 80px;
      h2 {
        font-size: 45px;
        opacity: 0;
        transition: 0.8s ease-out;
        transition-delay: 0.9s;
      }
      h4 {
        font-size: 24px;
        font-weight: 400;
        opacity: 0;
        transition: 0.8s ease-out;
        transition-delay: 1.1s;
      }
    }
  }
  .show-on-scroll.is-visible {
    opacity: 1;
  }
`;

export default Reach;
