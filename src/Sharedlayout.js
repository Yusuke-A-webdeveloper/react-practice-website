import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styled from 'styled-components';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Wrapper className="footer">
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: 60vh;
`;

export default SharedLayout;
