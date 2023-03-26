import styled from 'styled-components';
import PageHero from '../components/PageHero';

const Policy = () => {
  return (
    <main>
      <PageHero title="privacy policy" />
      <Wrapper>privacy policy</Wrapper>
    </main>
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
export default Policy;
