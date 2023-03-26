import styled from 'styled-components';
import PageHero from '../components/PageHero';
import Header from './Consumer/Header';
import Igraal from './Consumer/Igraal';
import Logo from './Consumer/Logo';
import Pouch from './Consumer/Pouch';
import Shoop from './Consumer/Shoop';

const Consumer = () => {
  return (
    <main>
      <PageHero title="consumer portals" />
      <MainWrapper>
        <Header />
        <Logo />
        <Igraal />
        <Pouch />
        <Shoop />
      </MainWrapper>
    </main>
  );
};

const MainWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 20px;
  background: var(--bg);
  z-index: 1;
`;

export default Consumer;
