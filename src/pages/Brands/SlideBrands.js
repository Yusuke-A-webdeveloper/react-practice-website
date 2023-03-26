import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import slideImg from '../../images/brand-slide1.webp';
import slideImg2 from '../../images/brand-slide2.webp';
import slideImg3 from '../../images/brand-slide3.webp';
import slideImg4 from '../../images/brand-slide4.png';
import hiddenImg from '../../images/brand-hidden1.png';
import hiddenImg2 from '../../images/brand-hidden2.png';

const SlideBrands = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <Wrapper>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 400, left: -width }}
          className="inner-carousel"
          // whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div className="img-con hidden">
            <img src={hiddenImg} alt="brand" />
          </motion.div>
          <motion.div className="img-con hidden">
            <img src={hiddenImg2} alt="brand" />
          </motion.div>
          <motion.div className="img-con first">
            <a href="https://www.mydealz.de/gruppe/kreuzfahrten">
              <img src={slideImg} alt="brand" />
            </a>
          </motion.div>
          <motion.div className="img-con second">
            <a href="https://www.hotukdeals.com/tag/xbox-series-x">
              <img src={slideImg2} alt="brand" />
            </a>
          </motion.div>
          <motion.div className="img-con third">
            <a href="https://pepper.com/">
              <img src={slideImg3} alt="brand" />
            </a>
          </motion.div>
          <motion.div className="img-con fourth">
            <img src={slideImg4} alt="brand" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .inner-carousel {
    position: relative;
    left: -400px;
    width: 100%;
    height: 550px;
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    gap: 70px;
  }
  .img-con {
    /* pointer-events: none; */
  }
  .img-con.first {
    width: 500px;
    img {
      width: 300px;
      height: 400px;
    }
  }
  .img-con.first img,
  .img-con.second img,
  .img-con.third img {
    transition: 0.3s ease-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .img-con.second {
    width: 500px;
    img {
      width: 400px;
    }
  }
  .img-con.third {
    width: 200px;
    img {
      width: 150px;
      height: 250px;
    }
  }
  .img-con.fourth {
    width: 200px;
    img {
      width: 300px;
      height: 300px;
    }
  }
  .img-con.hidden {
    width: 200px;
    img {
      width: 170px;
      height: 300px;
    }
  }
`;

export default SlideBrands;
