import styled from 'styled-components';
import { publishLogoList } from '../data';
import { useGlobalContext } from '../context';

const SlidingLogo = () => {
  const { slideIndex } = useGlobalContext();

  return (
    <Wrapper>
      <main>
        {publishLogoList.map((list, index) => {
          const { id, logo } = list;
          let position = 'next';

          if (index === slideIndex) {
            position = 'first';
          }
          if (index === slideIndex + 1) {
            position = 'two';
          }
          if (index === slideIndex + 2) {
            position = 'three';
          }
          if (index === slideIndex + 3) {
            position = 'four';
          }
          if (index === slideIndex + 4) {
            position = 'five';
          }
          if (index === slideIndex + 5) {
            position = 'last';
          }

          return (
            <div className={`logo-con  ${position}`} key={id}>
              <img src={logo} alt={logo} />
            </div>
          );
        })}
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  main {
    margin: 20px 0;
    .logo-con {
      position: absolute;
      top: 0;
      width: 200px;
      height: 50px;
      transition: 0.3s ease-out;
      img {
        width: 200px;
        height: 50px;
        object-fit: cover;
      }
    }
    .logo-con.next {
      left: 100%;
      opacity: 0;
    }
    .logo-con.first {
      left: 5%;
      opacity: 1;
    }
    .logo-con.two {
      left: 20%;
      opacity: 1;
    }
    .logo-con.three {
      left: 35%;
      opacity: 1;
    }
    .logo-con.four {
      left: 50%;
      opacity: 1;
    }
    .logo-con.five {
      left: 65%;
      opacity: 1;
    }
    .logo-con.last {
      left: 80%;
      opacity: 1;
    }
    .logo-con.oneBefore {
      left: -50%;
      opacity: 0;
    }
  }
`;

export default SlidingLogo;
