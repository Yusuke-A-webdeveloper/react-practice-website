import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Singlejob = () => {
  const { id } = useParams();
  return <Wrapper>{id}</Wrapper>;
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--bg);
  z-index: 1;
`;

export default Singlejob;
