import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: var(--bg);
  z-index: 1;
`;

export default Contact;
