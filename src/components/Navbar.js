import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { menuList } from '../data';
import { DefaultButton } from './Buttons';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { stickyNav } = useGlobalContext();

  return (
    <Wrapper className={stickyNav ? 'sticky' : null}>
      <div className="title">
        <h1>
          <Link to="/">logo</Link>
        </h1>
      </div>
      <ul>
        {menuList.map((list) => {
          const { id, title, href } = list;
          return (
            <li key={id}>
              <NavLink
                to={href}
                className={({ isActive }) => (isActive ? 'active' : null)}
              >
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <DefaultButton>
        <Link to="contact">Contact us</Link>
      </DefaultButton>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 30px 20px;
  background: var(--bg);
  transition: 0.3s ease-out;
  z-index: 10;
  .title {
    h1 {
      font-size: 40px;
      text-transform: uppercase;
      a {
        color: var(--black);
        text-decoration: none;
        letter-spacing: 1px;
      }
    }
  }
  ul {
    display: flex;
    gap: 30px;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: var(--black);
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 600;
        transition: 0.3s ease-out;
        &:hover {
          color: var(--menu-hover);
        }
      }
    }
  }
  .active {
    color: var(--active);
  }
`;

export default Navbar;
