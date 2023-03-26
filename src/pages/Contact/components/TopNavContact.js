import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdPlayArrow } from 'react-icons/md';

const PageHero = ({ title, title2, page }) => {
  return (
    <Wrapper>
      <div className="title">
        <h3>
          <Link to="/">home</Link>
          <div className="btn-con">
            <MdPlayArrow />
          </div>
          <Link to={`/${page}`}>
            <span className="link-title">{title}</span>
          </Link>
          <div className="btn-con">
            <MdPlayArrow />
          </div>
          <span>{title2}</span>
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100px;
  background: var(--bg);
  padding: 40px 20px;
  z-index: 1;
  h3 {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
    a {
      text-decoration: none;
      color: var(--black);
      transition: 0.3s ease-out;
      &:hover {
        color: var(--p-hero);
      }
    }
    .btn-con {
      svg {
        position: relative;
        top: 2px;
      }
    }
    span {
      color: var(--p-hero);
    }
    .link-title {
      color: var(--black);
    }
  }
`;

export default PageHero;
