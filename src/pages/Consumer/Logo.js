import styled from 'styled-components';
import logo1 from '../../logo/logo1.png';
import logo2 from '../../logo/logo2.png';
import logo3 from '../../logo/logo3.png';

const Logo = () => {
  return (
    <Wrapper>
      <div className="logo-con">
        <div className="img-con">
          <a href="#igraal">
            <img src={logo1} alt="logo" />
          </a>
        </div>
      </div>
      <div className="logo-con">
        <div className="img-con">
          <a href="#pouch">
            <img src={logo3} alt="logo" />
          </a>
        </div>
      </div>
      <div className="logo-con">
        <div className="img-con">
          <a href="#shoop">
            <img src={logo2} alt="logo" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 10px;
  margin: 80px 0 50px;
  .logo-con {
    position: relative;
    width: 33%;
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      height: 3px;
      background: #eeeeee;
    }

    .img-con {
      position: relative;
      width: 124px;
      height: 37px;
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
`;

export default Logo;
