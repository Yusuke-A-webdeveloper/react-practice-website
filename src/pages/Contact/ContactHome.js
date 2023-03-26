import styled from 'styled-components';
import NavContact from './components/NavContact';
import PageHero from '../../components/PageHero';
import TitleContact from './components/TitleContact';
import CardContact from './components/CardContact';
import { generalContactList } from '../../data';
import FormContact from './components/FormContact';

const index = () => {
  return (
    <Wrapper>
      <PageHero title="contacts" />
      <TitleContact
        bolded="Our global team"
        header="is ready to advise brands on smart ways to connect with our consumer communities."
      />
      <NavContact />
      <CardContact list={generalContactList} />
      <FormContact
        lead={`Together we can do great things. Our beliefs, innovation and sense of unity are empowering GSG and it’s partnering brands and retailers to be at the forefront of the evolution of e-commerce. From discovery to purchase and beyond  we are not just looking for the next big thing, we’re developing it too.`}
      />
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

export default index;
