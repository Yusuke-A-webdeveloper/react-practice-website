import styled from 'styled-components';
import NavContact from './components/NavContact';
import TopNavContact from './components/TopNavContact';
import TitleContact from './components/TitleContact';
import CardContact from './components/CardContact';
import { brandsContactList } from '../../data';
import FormContact from './components/FormContact';

const ForBrands = () => {
  return (
    <Wrapper>
      <TopNavContact
        title="for brands"
        title2="contacts page for brands"
        page="brands"
      />
      <TitleContact
        bolded="Our global team"
        header="is ready to advise you on ways to build your brand whilst making the sales."
      />
      <NavContact />
      <CardContact list={brandsContactList} />
      <FormContact
        lead={`An invitation to brands and retailers looking to build both brands and sales. GSG can provide you with solutions that convert, from discovery to purchase and beyond.`}
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

export default ForBrands;
