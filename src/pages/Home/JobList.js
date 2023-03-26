import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { avaiableJobList } from '../../data';
import { IoIosArrowForward } from 'react-icons/io';

const JobList = () => {
  return (
    <Wrapper>
      {avaiableJobList.map((list) => {
        const { id, title, location, forClass } = list;
        return (
          <Link
            to={`careers/${id}`}
            key={id}
            className={`job show-on-scroll ${forClass}`}
          >
            <h3>{title}</h3>
            <p>{location}</p>
          </Link>
        );
      })}
      <Link to="careers" className="job last show-on-scroll">
        <div className="left">
          <h3>+45</h3>
          <p>more open position</p>
        </div>
        <div className="right">
          <IoIosArrowForward />
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  .job {
    text-decoration: none;
    width: 280px;
    background: var(--white);
    border-radius: 10px;
    padding: 30px;
    opacity: 0;
    transition: 0.8s ease-out;
  }
  h3 {
    text-transform: capitalize;
    font-size: 17px;
  }
  p {
    text-transform: capitalize;
    color: var(--p-hero);
    font-size: 15px;
    margin-top: 10px;
  }
  .job.last {
    background: var(--pure-black);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    opacity: 0;
    transition: 0.8s ease-out;
    h3 {
      font-size: 45px;
    }
    p {
      color: var(--white);
      margin-top: -5px;
      text-transform: lowercase;
    }
    svg {
      font-size: 35px;
    }
  }
  .job.show-on-scroll.one {
    transition-delay: 1s;
  }
  .job.show-on-scroll.two {
    transition-delay: 1.1s;
  }
  .job.show-on-scroll.three {
    transition-delay: 1.2s;
  }
  .job.show-on-scroll.four {
    transition-delay: 1.3s;
  }
  .job.show-on-scroll.five {
    transition-delay: 1.4s;
  }
  .job.show-on-scroll.six {
    transition-delay: 1.5s;
  }
  .job.show-on-scroll.seven {
    transition-delay: 1.6s;
  }
  .job.show-on-scroll.last {
    transition-delay: 1.7s;
  }
  .show-on-scroll.is-visible {
    opacity: 1;
  }
`;

export default JobList;
