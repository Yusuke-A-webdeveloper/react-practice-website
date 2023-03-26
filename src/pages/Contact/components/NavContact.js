import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContact = () => {
  return (
    <Wrapper>
      <li>
        <NavLink to="/contact/for-brands">brands</NavLink>
      </li>
      <li>
        <NavLink to="/contact/for-publishers">publishers</NavLink>
      </li>
      <li>
        <NavLink to="/contact/about-us">press</NavLink>
      </li>
      <li>
        <NavLink to="/contact/careers">careers</NavLink>
      </li>
      <li>
        <NavLink to="/contact" end>
          general inquires
        </NavLink>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--light-grey);
  margin-top: 40px;
  li {
    list-style: none;
  }
  a {
    color: var(--black);
    text-decoration: none;
    text-transform: capitalize;
    font-size: 25px;
    padding-bottom: 10px;
    font-weight: 400;
  }
  .active {
    border-bottom: 1px solid var(--black);
  }
`;

export default NavContact;
