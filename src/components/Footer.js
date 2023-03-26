import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuList, socialList } from '../data';

const Footer = () => {
  return (
    <Wrapper>
      <main>
        <div className="logo">
          <h2>logo</h2>
        </div>
        <ul className="menu-first menu">
          {menuList.map((list) => {
            const { id, title, href } = list;
            return (
              <li key={id}>
                <Link to={href}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="menu-second menu">
          <li>
            <Link to="blog">blog & press</Link>
          </li>
          <li>
            <Link to="privacy">privacy policy</Link>
          </li>
          <li>
            <Link to="cookie">cookie pocicy</Link>
          </li>
          <li>
            <Link to="imprint">imprint</Link>
          </li>
          <li>
            <Link to="contact">contact</Link>
          </li>
        </ul>
        <aside>
          <div className="title">
            <h4>follow us</h4>
          </div>
          <ul>
            {socialList.map((list) => {
              const { id, icon, href } = list;
              return (
                <li key={id}>
                  <a href={href}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </aside>
      </main>
      <div className="copyright">
        <p>Copy right {new Date().getFullYear()}. All Right Reserved</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* z-index: -10; */
  background: var(--pure-black);
  color: var(--white);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  main {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 200px;
    .logo {
      h2 {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 30px;
      }
    }
    .menu {
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        list-style: none;
        a {
          text-transform: capitalize;
          text-decoration: none;
          color: var(--white);
          font-size: 18px;
          transition: 0.3s ease-out;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    aside {
      text-align: center;
      .title {
        h4 {
          font-size: 20px;
          text-transform: capitalize;
        }
      }
      ul {
        display: flex;
        margin-top: 20px;
        gap: 20px;
        li {
          list-style: none;
          a {
            text-decoration: none;
            font-size: 18px;
            color: var(--white);
            transition: 0.3s ease-out;
            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  } // end of main
  .copyright {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 100px;
    p {
      font-size: 14px;
    }
  }
`;

export default Footer;
