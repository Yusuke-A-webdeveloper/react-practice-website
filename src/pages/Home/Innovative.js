import styled from 'styled-components';
import { GSGbutton } from '../../components/Buttons';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import JobList from './JobList';

const bgImg =
  'https://www.global-savings-group.com/wp-content/uploads/2022/02/working-environment-home-img.jpg';

const Innovative = () => {
  return (
    <Wrapper>
      <div className="top">
        <article>
          <h2 className="show-on-scroll">
            An Innovative <br />
            <span>Working Environment</span>
          </h2>
          <p className="show-on-scroll">
            Innovation is always at the heart of GSG as we work hard to deliver
            a comprehensive range of consumer-centric solutions across the
            globe. In order to achieve our continued success we put a big
            emphasis on getting the best and most talented people to join our
            teams.
          </p>
          <GSGbutton className="btn show-on-scroll">
            <Link to="careers">
              {' '}
              <AiOutlineArrowRight />
              Join GSG
            </Link>
          </GSGbutton>
        </article>
        <div className="img-con">
          <img src={bgImg} alt="innovative" />
        </div>
      </div>
      <div className="bottom">
        <JobList />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background: var(--bg);
  padding: 0px 30px 50px;
  z-index: 1;
  .top {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    article {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 60px;
      h2 {
        font-size: 45px;
        line-height: 50px;
        font-weight: 300;
        opacity: 0;
        transition: 0.8s ease-out;
        transition-delay: 0.5s;
        span {
          font-weight: 700;
        }
      }
      p {
        max-width: 400px;
        color: var(--p-hero);
        opacity: 0;
        transition: 0.8s ease-out;
        transition-delay: 0.7s;
      }
    }
    .img-con {
      position: relative;
      width: 50%;
      height: 500px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .btn {
      opacity: 0;
      transition: 0.8s ease-out;
      transition-delay: 0.9s;
    }
  }
  .show-on-scroll.is-visible {
    opacity: 1;
  }
`;

export default Innovative;
